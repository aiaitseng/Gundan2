// 狀態管理
let currentFaction = "ALL";
let currentEra = "ALL";
let searchQuery = "";
let compareIds = [];

// DOM 元素參考
const msGrid = document.getElementById("msGrid");
const factionTabs = document.getElementById("factionTabs");
const searchInput = document.getElementById("searchInput");
const eraSelect = document.getElementById("eraSelect");
const totalCountEl = document.getElementById("totalCount");
const factionCountEl = document.getElementById("factionCount");
const visibleCountEl = document.getElementById("visibleCount");
const compareCountEl = document.getElementById("compareCount");
const openCompareBtn = document.getElementById("openCompareBtn");
const detailModal = document.getElementById("detailModal");
const detailContent = document.getElementById("detailContent");
const compareModal = document.getElementById("compareModal");
const compareContent = document.getElementById("compareContent");

// 安全文字轉義，避免渲染 HTML 異常
function escapeHTML(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// 初始化頁首統計與陣營頁籤
function init() {
  totalCountEl.textContent = GUNDAM_DATABASE.length;
  factionCountEl.textContent = FACTIONS.length - 1;
  renderFactionTabs();
  renderCards();

  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value.trim().toLowerCase();
    renderCards();
  });

  eraSelect.addEventListener("change", (e) => {
    currentEra = e.target.value;
    renderCards();
  });

  openCompareBtn.addEventListener("click", openCompareModal);

  document.addEventListener("click", (e) => {
    const closeTarget = e.target.getAttribute("data-close");
    if (closeTarget === "detail") closeModal(detailModal);
    if (closeTarget === "compare") closeModal(compareModal);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal(detailModal);
      closeModal(compareModal);
    }
  });
}

function renderFactionTabs() {
  factionTabs.innerHTML = FACTIONS.map((f) => {
    const count =
      f.id === "ALL"
        ? GUNDAM_DATABASE.length
        : GUNDAM_DATABASE.filter((g) => g.factionId === f.id).length;
    return `
      <button
        class="faction-tab ${f.id === currentFaction ? "active" : ""}"
        data-faction="${f.id}"
      >
        ${escapeHTML(f.name)} (${count})
      </button>
    `;
  }).join("");

  factionTabs.querySelectorAll(".faction-tab").forEach((btn) => {
    btn.addEventListener("click", () => {
      currentFaction = btn.dataset.faction;
      renderFactionTabs();
      renderCards();
    });
  });
}

function getFilteredGundams() {
  return GUNDAM_DATABASE.filter((g) => {
    const matchFaction = currentFaction === "ALL" || g.factionId === currentFaction;
    const matchEra = currentEra === "ALL" || g.era === currentEra;
    const haystack = [
      g.code,
      g.name,
      g.factionName,
      g.pilot,
      g.specs.specialSystem,
      ...g.weapons.map((w) => w.name)
    ]
      .join(" ")
      .toLowerCase();
    const matchSearch = !searchQuery || haystack.includes(searchQuery);
    return matchFaction && matchEra && matchSearch;
  });
}

function renderCards() {
  const list = getFilteredGundams();
  visibleCountEl.textContent = list.length;

  if (list.length === 0) {
    msGrid.innerHTML = `<div class="empty-state">找不到符合條件的鋼彈機體，請嘗試調整陣營或搜尋關鍵字。</div>`;
    return;
  }

  msGrid.innerHTML = list
    .map((g) => {
      const isSelected = compareIds.includes(g.id);
      return `
        <article class="ms-card">
          <div class="card-media">
            <img
              src="${escapeHTML(g.image)}"
              alt="${escapeHTML(g.name)} 實體照片"
              loading="lazy"
            />
            <div class="card-badges">
              <span class="badge badge-faction">${escapeHTML(g.factionName)}</span>
              <span class="badge badge-tier">戰力 ${escapeHTML(g.tier)}</span>
            </div>
          </div>
          <div class="card-body">
            <div class="card-code">${escapeHTML(g.code)} ｜ ${escapeHTML(g.era)}</div>
            <h2 class="card-title">${escapeHTML(g.name)}</h2>
            <div class="card-meta">駕駛員：${escapeHTML(g.pilot)}</div>

            <div class="mini-stats">
              <div class="mini-bar-row">
                <span>火力</span>
                <div class="mini-track"><div class="mini-fill" style="width:${g.stats.firepower}%"></div></div>
                <span>${g.stats.firepower}</span>
              </div>
              <div class="mini-bar-row">
                <span>機動</span>
                <div class="mini-track"><div class="mini-fill" style="width:${g.stats.mobility}%"></div></div>
                <span>${g.stats.mobility}</span>
              </div>
              <div class="mini-bar-row">
                <span>裝甲</span>
                <div class="mini-track"><div class="mini-fill" style="width:${g.stats.armor}%"></div></div>
                <span>${g.stats.armor}</span>
              </div>
            </div>

            <div class="card-actions">
              <button class="btn-primary" data-detail="${g.id}">規格與武力分析</button>
              <button class="btn-outline ${isSelected ? "selected" : ""}" data-compare="${g.id}">
                ${isSelected ? "✓ 已選" : "+ 對比"}
              </button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  msGrid.querySelectorAll("[data-detail]").forEach((btn) => {
    btn.addEventListener("click", () => openDetailModal(btn.dataset.detail));
  });

  msGrid.querySelectorAll("[data-compare]").forEach((btn) => {
    btn.addEventListener("click", () => toggleCompare(btn.dataset.compare));
  });
}

// 繪製六維戰力 SVG 雷達圖（支援單機與雙機疊加）
function buildRadarSVG(primaryStats, secondaryStats = null) {
  const size = 240;
  const cx = size / 2;
  const cy = size / 2;
  const radius = 82;
  const labels = [
    { key: "firepower", text: "火力" },
    { key: "mobility", text: "機動" },
    { key: "system", text: "系統" },
    { key: "sensor", text: "索敵" },
    { key: "endurance", text: "續航" },
    { key: "armor", text: "裝甲" }
  ];

  const getPoint = (index, valueRatio) => {
    const angle = (Math.PI * 2 * index) / labels.length - Math.PI / 2;
    return [
      (cx + radius * valueRatio * Math.cos(angle)).toFixed(1),
      (cy + radius * valueRatio * Math.sin(angle)).toFixed(1)
    ];
  };

  // 背景網格多邊形
  const gridLevels = [0.25, 0.5, 0.75, 1];
  const gridPolygons = gridLevels
    .map((lvl) => {
      const pts = labels.map((_, i) => getPoint(i, lvl).join(",")).join(" ");
      return `<polygon points="${pts}" fill="none" stroke="rgba(148,163,184,0.22)" stroke-width="1"/>`;
    })
    .join("");

  // 軸線與標籤
  const axesAndLabels = labels
    .map((lbl, i) => {
      const [x2, y2] = getPoint(i, 1);
      const [lx, ly] = getPoint(i, 1.2);
      return `
        <line x1="${cx}" y1="${cy}" x2="${x2}" y2="${y2}" stroke="rgba(148,163,184,0.2)" stroke-width="1"/>
        <text x="${lx}" y="${ly}" fill="#cbd5e1" font-size="11" text-anchor="middle" dominant-baseline="middle">${lbl.text}</text>
      `;
    })
    .join("");

  const makePolygon = (stats, fillColor, strokeColor) => {
    const pts = labels
      .map((lbl, i) => getPoint(i, (stats[lbl.key] || 0) / 100).join(","))
      .join(" ");
    return `<polygon points="${pts}" fill="${fillColor}" stroke="${strokeColor}" stroke-width="2"/>`;
  };

  const primaryPoly = makePolygon(primaryStats, "rgba(56, 189, 248, 0.28)", "#38bdf8");
  const secondaryPoly = secondaryStats
    ? makePolygon(secondaryStats, "rgba(244, 63, 94, 0.24)", "#f43f5e")
    : "";

  return `
    <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" aria-label="六維戰力雷達圖">
      ${gridPolygons}
      ${axesAndLabels}
      ${primaryPoly}
      ${secondaryPoly}
    </svg>
  `;
}

function openDetailModal(id) {
  const g = GUNDAM_DATABASE.find((item) => item.id === id);
  if (!g) return;

  const avgScore = Math.round(
    Object.values(g.stats).reduce((sum, n) => sum + n, 0) / 6
  );

  detailContent.innerHTML = `
    <div>
      <div class="detail-photo-box">
        <img src="${escapeHTML(g.image)}" alt="${escapeHTML(g.name)} 實體照" />
        <div class="photo-caption">${escapeHTML(g.photoNote)}</div>
      </div>

      <h3 class="section-heading">機體詳細技術規格</h3>
      <table class="spec-table">
        <tr><th>型號／名稱</th><td>${escapeHTML(g.code)} ${escapeHTML(g.name)}</td></tr>
        <tr><th>所屬陣營</th><td>${escapeHTML(g.factionName)}（${escapeHTML(g.era)}）</td></tr>
        <tr><th>主要駕駛員</th><td>${escapeHTML(g.pilot)}</td></tr>
        <tr><th>開發製造</th><td>${escapeHTML(g.manufacturer)}</td></tr>
        <tr><th>機體全高</th><td>${escapeHTML(g.specs.height)}</td></tr>
        <tr><th>機體重量</th><td>${escapeHTML(g.specs.weight)}</td></tr>
        <tr><th>動力源／出力</th><td>${escapeHTML(g.specs.powerPlant)}</td></tr>
        <tr><th>推進推力</th><td>${escapeHTML(g.specs.thrusters)}</td></tr>
        <tr><th>裝甲材質</th><td>${escapeHTML(g.specs.armor)}</td></tr>
        <tr><th>感測器範圍</th><td>${escapeHTML(g.specs.sensors)}</td></tr>
        <tr><th>核心特殊系統</th><td>${escapeHTML(g.specs.specialSystem)}</td></tr>
      </table>
    </div>

    <div>
      <h3 class="section-heading">六維武力戰力評估（綜合評級：${escapeHTML(g.tier)}｜均分 ${avgScore}）</h3>
      <div class="radar-wrap">
        ${buildRadarSVG(g.stats)}
        <div class="stat-breakdown">
          <div class="stat-line"><span>火力輸出</span><strong>${g.stats.firepower} / 100</strong></div>
          <div class="stat-line"><span>機體機動</span><strong>${g.stats.mobility} / 100</strong></div>
          <div class="stat-line"><span>裝甲防禦</span><strong>${g.stats.armor} / 100</strong></div>
          <div class="stat-line"><span>索敵感測</span><strong>${g.stats.sensor} / 100</strong></div>
          <div class="stat-line"><span>能源續航</span><strong>${g.stats.endurance} / 100</strong></div>
          <div class="stat-line"><span>系統上限</span><strong>${g.stats.system} / 100</strong></div>
        </div>
      </div>

      <h3 class="section-heading">主要武裝配置清單</h3>
      <ul class="weapon-list">
        ${g.weapons
          .map(
            (w) => `
          <li class="weapon-item">
            <div class="weapon-head">
              <span class="weapon-name">${escapeHTML(w.name)}</span>
              <span class="weapon-type">${escapeHTML(w.type)}</span>
            </div>
            <p class="weapon-desc">${escapeHTML(w.desc)}</p>
          </li>
        `
          )
          .join("")}
      </ul>

      <h3 class="section-heading">戰術定位與實戰武力分析</h3>
      <div class="analysis-box">${escapeHTML(g.analysis)}</div>
    </div>
  `;

  openModal(detailModal);
}

function toggleCompare(id) {
  if (compareIds.includes(id)) {
    compareIds = compareIds.filter((item) => item !== id);
  } else {
    if (compareIds.length >= 2) {
      compareIds.shift();
    }
    compareIds.push(id);
  }
  compareCountEl.textContent = compareIds.length;
  openCompareBtn.disabled = compareIds.length < 2;
  renderCards();
}

function openCompareModal() {
  if (compareIds.length < 2) return;
  const [g1, g2] = compareIds.map((id) => GUNDAM_DATABASE.find((g) => g.id === id));
  if (!g1 || !g2) return;

  const statLabels = [
    ["firepower", "火力"],
    ["mobility", "機動"],
    ["armor", "裝甲"],
    ["sensor", "索敵"],
    ["endurance", "續航"],
    ["system", "系統"]
  ];

  compareContent.innerHTML = `
    <div class="compare-card" style="border-color:#38bdf8;">
      <img src="${escapeHTML(g1.image)}" alt="${escapeHTML(g1.name)}" />
      <div class="card-code" style="color:#38bdf8;">藍方｜${escapeHTML(g1.code)}</div>
      <h3>${escapeHTML(g1.name)}</h3>
      <p class="card-meta">${escapeHTML(g1.factionName)}｜${escapeHTML(g1.pilot)}</p>
      <p style="font-size:0.83rem;margin-top:0.5rem;">${escapeHTML(g1.analysis)}</p>
    </div>

    <div class="compare-card" style="text-align:center;">
      ${buildRadarSVG(g1.stats, g2.stats)}
      <p style="font-size:0.78rem;margin:0.4rem 0 0.8rem;">
        <span style="color:#38bdf8;">■ ${escapeHTML(g1.code)}</span> vs
        <span style="color:#f43f5e;">■ ${escapeHTML(g2.code)}</span>
      </p>
      <div class="stat-breakdown">
        ${statLabels
          .map(
            ([key, label]) => `
          <div class="stat-line">
            <strong style="color:#38bdf8;">${g1.stats[key]}</strong>
            <span>${label}</span>
            <strong style="color:#f43f5e;">${g2.stats[key]}</strong>
          </div>
        `
          )
          .join("")}
      </div>
    </div>

    <div class="compare-card" style="border-color:#f43f5e;">
      <img src="${escapeHTML(g2.image)}" alt="${escapeHTML(g2.name)}" />
      <div class="card-code" style="color:#f43f5e;">紅方｜${escapeHTML(g2.code)}</div>
      <h3>${escapeHTML(g2.name)}</h3>
      <p class="card-meta">${escapeHTML(g2.factionName)}｜${escapeHTML(g2.pilot)}</p>
      <p style="font-size:0.83rem;margin-top:0.5rem;">${escapeHTML(g2.analysis)}</p>
    </div>
  `;

  openModal(compareModal);
}

function openModal(modalEl) {
  modalEl.classList.add("open");
  modalEl.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal(modalEl) {
  modalEl.classList.remove("open");
  modalEl.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

init();
