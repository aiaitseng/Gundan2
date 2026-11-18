// 陣營定義清單
const FACTIONS = [
  { id: "ALL", name: "全部陣營" },
  { id: "EFSF", name: "地球聯邦軍 / 隆德貝爾" },
  { id: "AEUG", name: "幽谷 (A.E.U.G.)" },
  { id: "TITANS", name: "迪坦斯 (Titans)" },
  { id: "ZEON", name: "吉翁殘黨 / 新吉翁體系" },
  { id: "ZAFT", name: "札夫特 (Z.A.F.T.)" },
  { id: "EA", name: "地球聯合軍 (OMNI)" },
  { id: "ORB", name: "歐普 / 克萊因派" },
  { id: "CB", name: "天人 (Celestial Being)" },
  { id: "AC", name: "殖民地 / OZ・白色獠牙" },
  { id: "PD", name: "鐵華團 / 末日號角" },
  { id: "AS", name: "地球寮 / 貝納里特集團" }
];

// 各陣營鋼彈完整規格與武力資料庫
const GUNDAM_DATABASE = [
  {
    id: "rx-78-2",
    code: "RX-78-2",
    name: "初代鋼彈（Gundam）",
    factionId: "EFSF",
    factionName: "地球聯邦軍 (EFSF)",
    era: "U.C.",
    pilot: "阿姆羅・雷",
    manufacturer: "地球聯邦軍 V作戰團隊",
    tier: "A",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1a/GUNDAM%40ODAIBA_-_Flickr_-_sun_summer.jpg",
    photoNote: "實體照片：東京台場 1:1 RX-78-2 鋼彈實體立像（Wikimedia Commons）",
    specs: {
      height: "18.0 m",
      weight: "本體 43.4 t / 全備 60.0 t",
      powerPlant: "米諾夫斯基超小型核融合爐（1,380 kW）",
      thrusters: "總推力 55,500 kg",
      armor: "月神鈦合金（Luna Titanium）",
      sensors: "有效半徑 5,700 m",
      specialSystem: "核心戰機系統（Core Block）、學習型電腦、磁氣覆膜（後期）"
    },
    stats: { firepower: 76, mobility: 78, armor: 82, sensor: 70, endurance: 75, system: 74 },
    weapons: [
      { name: "60mm 頭部火神砲 ×2", type: "實彈牽制", desc: "用於近距離防空、攔截飛彈與牽制敵方MS。" },
      { name: "光束步槍（BOWA・XBR-M-79-07G）", type: "光束射擊", desc: "劃時代的MS攜行光束兵器，具備匹敵戰艦主砲的單發貫穿力。" },
      { name: "光束軍刀 ×2", type: "光束格鬥", desc: "收納於背包的高出力等離子光束劍，可輕易切斷薩克裝甲。" },
      { name: "超絕火箭砲（Hyper Bazooka）", type: "重型實彈", desc: "380mm 口徑實彈砲，對重裝甲目標與宇宙要塞極為有效。" },
      { name: "鋼彈流星錘 / 防護盾", type: "格鬥・防禦", desc: "月神鈦合金製大型盾牌可抵擋多數實彈與部分光束衝擊。" }
    ],
    analysis: "一年戰爭期間徹底改寫機動戰士戰術基準的傳奇機體。憑藉壓倒性的月神鈦合金裝甲與光束步槍的火力優勢，在低重力與宇宙空間具備極高單機突破力；後期導入磁氣覆膜強化關節反應速度，使其得以跟上新人類阿姆羅的反射神經。"
  },
  {
    id: "rx-78f00",
    code: "RX-78F00",
    name: "橫濱可動鋼彈（Gundam F00）",
    factionId: "EFSF",
    factionName: "地球聯邦軍（橫濱實驗機）",
    era: "U.C.",
    pilot: "實物大技術驗證機",
    manufacturer: "GUNDAM FACTORY YOKOHAMA",
    tier: "A",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/ac/GUNDAM_FACTORY_YOKOHAMA_2023.jpg",
    photoNote: "實體照片：日本橫濱山下埠頭 1:1 可動鋼彈 RX-78F00 實體機（Wikimedia Commons）",
    specs: {
      height: "18.0 m",
      weight: "實物大機構重量 25.0 t（設定基準 58.0 t）",
      powerPlant: "高密度能源驗證機組（設定為高出力融合爐）",
      thrusters: "高機動分散式姿勢控制噴嘴群",
      armor: "高強度碳纖維複合外裝甲（設定月神鈦）",
      sensors: "次世代廣域光學攝影複合感測器",
      specialSystem: "24自由度全身可動關節架構、高裝甲分散式設計"
    },
    stats: { firepower: 78, mobility: 84, armor: 80, sensor: 82, endurance: 78, system: 80 },
    weapons: [
      { name: "試作型高精準光束步槍", type: "光束射擊", desc: "強化能源收束穩定度，降低連射時的槍管熱衰減。" },
      { name: "高出力光束軍刀 ×2", type: "光束格鬥", desc: "針對近距離高頻率交戰最佳化的能源輸出模組。" },
      { name: "強化複合型護盾", type: "防禦裝備", desc: "重新設計裝甲分塊結構，提升對偏斜彈著的耐受力。" }
    ],
    analysis: "以「真實實現 18 公尺級人型機動兵器可動性」為核心概念重新詮釋的 RX-78 系列機體。全身細緻的裝甲分件與高自由度關節大大減低了近戰動作慣性死角，屬於兼具經典平衡性與現代機械工學的高機動實驗機。"
  },
  {
    id: "rx-93",
    code: "RX-93",
    name: "ν鋼彈（Nu Gundam）",
    factionId: "EFSF",
    factionName: "隆德貝爾隊 / 地球聯邦軍",
    era: "U.C.",
    pilot: "阿姆羅・雷",
    manufacturer: "亞納海姆電子公司（AE）",
    tier: "S",
    image: "https://images.unsplash.com/photo-1785837448453-39d450a8bcd8?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    photoNote: "實體照片：藍白高精細塗裝 Gunpla 實體模型攝影（Unsplash）",
    specs: {
      height: "頭頂高 22.0 m / 全高 23.0 m",
      weight: "本體 27.9 t / 全備 63.0 t",
      powerPlant: "米諾夫斯基超小型核融合爐（2,980 kW）",
      thrusters: "總推力 97,800 kg",
      armor: "鋼彈尼姆合金（Gundarium Alloy）",
      sensors: "有效半徑 21,300 m",
      specialSystem: "精神感應框架（Psycho-Frame）、翼狀感應砲展開防護罩"
    },
    stats: { firepower: 92, mobility: 91, armor: 84, sensor: 96, endurance: 88, system: 95 },
    weapons: [
      { name: "翼狀感應砲（Fin Funnel）×6", type: "浮游感應", desc: "內藏獨立核融電池的長距離全方位光束砲，亦可組成四角錐形光束防護罩（I力場效應）。" },
      { name: "專用光束步槍", type: "光束射擊", desc: "可切換高出力狙擊模式與高連射光束機關槍模式。" },
      { name: "新超絕火箭砲", type: "重型實彈", desc: "可掛載於背包並透過線路遠端遙控發射的戰術奇襲兵器。" },
      { name: "大型光束軍刀 / 預備光束軍刀", type: "光束格鬥", desc: "右臂可產生單手雙向高能光束刃，近戰壓制力極強。" }
    ],
    analysis: "U.C.0093 第二次新吉翁抗爭中的聯邦王牌旗艦機。阿姆羅親自參與設計，捨棄過度複雜的變形機構而追求極致信賴度與維修性。翼狀感應砲不僅具備攻防一體的全領域戰力，精神感應框架更引發了推回阿克西斯的物理奇蹟。"
  },
  {
    id: "rx-0",
    code: "RX-0",
    name: "獨角獸鋼彈（Unicorn Gundam）",
    factionId: "EFSF",
    factionName: "地球聯邦軍 / 畢斯特財團",
    era: "U.C.",
    pilot: "巴納吉・林克斯",
    manufacturer: "亞納海姆電子公司（AE）",
    tier: "S+",
    image: "https://images.unsplash.com/photo-1783258957377-bca4a0dec64a?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    photoNote: "實體照片：台場 DiverCity 1:1 獨角獸鋼彈毀滅模式實體立像（Unsplash）",
    specs: {
      height: "19.7 m（獨角獸模式）/ 21.7 m（毀滅模式）",
      weight: "本體 23.7 t / 全備 42.7 t",
      powerPlant: "米諾夫斯基超小型核融合爐（3,480 kW＋精神感應框架增益）",
      thrusters: "總推力 142,600 kg",
      armor: "鋼彈尼姆合金＋全精神感應框架",
      sensors: "有效半徑 22,000 m",
      specialSystem: "NT-D（Newtype Destroyer）系統、精神感應場（Psycho-Field）"
    },
    stats: { firepower: 95, mobility: 97, armor: 88, sensor: 99, endurance: 86, system: 100 },
    weapons: [
      { name: "光束麥格農（Beam Magnum）", type: "高能光束", desc: "單發消耗一整個E-Pac彈匣，威力相當於一般光束步槍四倍，擦過即可摧毀MS。" },
      { name: "光束拐棍（Beam Tonfa）×2 + 軍刀 ×2", type: "光束格鬥", desc: "前臂可翻出軍刀直接作戰，亦可拔出展開4把高出力光束刃。" },
      { name: "武裝戰甲 DE / 精神感應盾牌", type: "防禦・感應", desc: "展開I力場偏轉光束攻擊，全裝甲形態下可獨立飛行攔截敵火。" },
      { name: "超級火神砲 ×2 / 超絕火箭砲", type: "實彈支援", desc: "毀滅模式解放全身框架後可搭配重武裝進行高速砲擊戰。" }
    ],
    analysis: "「UC 計畫」的核心機體，全身骨架採用精神感應框架打造。發動 NT-D 進入毀滅模式後，不僅能強行奪取敵方感應兵器控制權，當駕駛員意識共振達到極限（覺醒綠色結晶體狀態）時，甚至能產生逆轉機械時間與阻擋衛星雷射的超常領域現象。"
  },
  {
    id: "msz-006",
    code: "MSZ-006",
    name: "Z鋼彈（Zeta Gundam）",
    factionId: "AEUG",
    factionName: "幽谷 (A.E.U.G.)",
    era: "U.C.",
    pilot: "卡繆・比丹",
    manufacturer: "亞納海姆電子公司（Z計畫）",
    tier: "S",
    image: "https://images.unsplash.com/photo-1781933450440-a14043259796?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    photoNote: "實體照片：持光束軍刀戰鬥姿態實體模型攝影（Unsplash）",
    specs: {
      height: "19.85 m",
      weight: "本體 28.7 t / 全備 62.3 t",
      powerPlant: "米諾夫斯基超小型核融合爐（2,020 kW）",
      thrusters: "總推力 112,600 kg",
      armor: "鋼彈尼姆γ合金",
      sensors: "有效半徑 14,000 m",
      specialSystem: "穿波機（Wave Rider）大氣圈突入變形機構、生物感測器（Bio-Sensor）"
    },
    stats: { firepower: 88, mobility: 93, armor: 79, sensor: 87, endurance: 84, system: 91 },
    weapons: [
      { name: "專用光束步槍（可作長光束軍刀）", type: "光束雙用", desc: "槍口可形成高出力長光束軍刀，突擊與狙擊兼備。" },
      { name: "超絕米加粒子砲（Hyper Mega Launcher）", type: "重型光束", desc: "高出力長距離光束巨砲，可單發重創艦艇裝甲。" },
      { name: "榴彈發射器 ×2（前臂內藏）", type: "實彈武器", desc: "近中距離快速補槍與彈幕壓制用武裝。" },
      { name: "腕部光束槍 / 光束軍刀 ×2", type: "副武裝", desc: "變形為 Wave Rider 形態時前部具備固定光束機砲。" }
    ],
    analysis: "格里普斯戰役中幽谷的象徴性旗艦。最大特徵為可單機突入大氣圈且保有高超空戰機動性的 Wave Rider 變形機構；內建的「生物感測器」在卡繆強烈精神波動下多次引發光束刃巨大化與機體防護力場等超越設計上限的奇蹟戰果。"
  },
  {
    id: "mrx-009",
    code: "MRX-009",
    name: "精神感應鋼彈（Psycho Gundam）",
    factionId: "TITANS",
    factionName: "迪坦斯 (Titans)",
    era: "U.C.",
    pilot: "鳳・村雨",
    manufacturer: "村雨研究所",
    tier: "S",
    image: "https://images.unsplash.com/photo-1578908638278-2b372050d676?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    photoNote: "實體照片：多機陳列與重型機體模型展示攝影（Unsplash）",
    specs: {
      height: "40.0 m",
      weight: "本體 214.1 t / 全備 388.6 t",
      powerPlant: "米諾夫斯基超小型核融合爐（33,600 kW）",
      thrusters: "米諾夫斯基飄浮系統＋火箭推力 234,000 kg",
      armor: "鋼彈尼姆合金（厚重多層裝甲）",
      sensors: "有效半徑 12,100 m",
      specialSystem: "賽可謬系統（Psycommu）、米諾夫斯基飛行器、全機I力場屏障"
    },
    stats: { firepower: 96, mobility: 62, armor: 98, sensor: 83, endurance: 89, system: 88 },
    weapons: [
      { name: "腹部擴散米加粒子砲 ×3", type: "高能光束", desc: "同時朝廣域掃射三道艦砲級光束，對都市與部隊具毀滅性打擊力。" },
      { name: "手指內藏光束砲 ×10", type: "全方位射擊", desc: "十根手指皆具備獨立光束砲口，能進行多角度散射壓制。" },
      { name: "頭部小型米加粒子砲 ×2", type: "近防光束", desc: "防止敵機接近頭部的輔助高能射擊武裝。" },
      { name: "移動要塞（MA）形態撞擊", type: "重裝突擊", desc: "變形為MA後開啟I力場正面突破一切光束防線。" }
    ],
    analysis: "迪坦斯專為強化人設計的 40 公尺級超巨型可變機動堡壘（MA/MS）。高達 33,600 kW 的極端核融合出力使其得以同時維持全身 I 力場與高能光束彈幕。雖近戰敏捷度不如一般 MS，但具備單機毀滅整座城市或要塞的壓倒性戰略火力。"
  },
  {
    id: "rx-78gp02a",
    code: "RX-78GP02A",
    name: "鋼彈試作2號機・酸漿果（Physalis）",
    factionId: "ZEON",
    factionName: "迪拉茲艦隊 / 吉翁殘黨",
    era: "U.C.",
    pilot: "阿納貝爾・卡多",
    manufacturer: "亞納海姆電子公司（被吉翁奪取）",
    tier: "S",
    image: "https://images.unsplash.com/photo-1664460133610-732360896926?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    photoNote: "實體照片：紅白高機動裝甲細節實體模型攝影（Unsplash）",
    specs: {
      height: "18.5 m",
      weight: "本體 54.5 t / 全備 83.0 t",
      powerPlant: "米諾夫斯基超小型核融合爐（1,860 kW）",
      thrusters: "肩部大型推進夾倉總推力 155,200 kg",
      armor: "強化鋼彈尼姆合金（耐核爆輻射處理）",
      sensors: "有效半徑 8,200 m",
      specialSystem: "多層冷卻散熱盾牌、核彈頭收納機構"
    },
    stats: { firepower: 99, mobility: 81, armor: 94, sensor: 74, endurance: 77, system: 78 },
    weapons: [
      { name: "核彈頭火箭砲（Atomic Bazooka）", type: "戰略核武", desc: "可發射 Mk-82 戰術核彈頭，在所羅門觀艦式一擊蒸發聯邦艦隊三分之二戰力。" },
      { name: "大型耐核熱散熱盾牌", type: "特殊防禦", desc: "內藏液態氮冷卻裝置，不僅防禦光束，更能扛住核爆高熱衝擊波。" },
      { name: "高出力光束軍刀 ×2", type: "光束格鬥", desc: "即便在核彈發射完畢後，仍能憑藉厚重裝甲與高出力軍刀與GP01Fb互角交鋒。" },
      { name: "60mm 頭部火神砲 ×2", type: "實彈牽制", desc: "用於近身格鬥時壓制敵機視線與感測器。" }
    ],
    analysis: "U.C.0083「星塵作戰」中由吉翁王牌卡多奪取並投入實戰的重型戰略鋼彈。雖然主武裝核子火箭砲屬於單發戰略兵器，但其肩部大型推進夾倉賦予了與厚重體型不相稱的爆發加速力，使該機在戰術突襲與近身纏鬥中皆極具威脅。"
  },
  {
    id: "zgmf-x10a",
    code: "ZGMF-X10A",
    name: "自由鋼彈（Freedom Gundam）",
    factionId: "ZAFT",
    factionName: "札夫特 (Z.A.F.T.)",
    era: "C.E.",
    pilot: "煌・大和",
    manufacturer: "ZAFT 統合設計局",
    tier: "S",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/16/Freedom_Gundam_statue_in_Shanghai.jpg",
    photoNote: "實體照片：中國上海金橋 LaLaport 1:1 自由鋼彈實體立像（Wikimedia Commons）",
    specs: {
      height: "18.03 m",
      weight: "71.5 t",
      powerPlant: "超小型核分裂反應爐（8,826 kW）＋反中子干擾器",
      thrusters: "高機動空中展開式十翼推進系統",
      armor: "相轉移裝甲（PS Armor）",
      sensors: "多重目標鎖定複合感測器",
      specialSystem: "反中子干擾器（NJC）、HiMAT 高機動空戰模式、多重鎖定系統"
    },
    stats: { firepower: 94, mobility: 94, armor: 85, sensor: 93, endurance: 98, system: 90 },
    weapons: [
      { name: "「鯨式（Balaena）」電漿收束光束砲 ×2", type: "背部重砲", desc: "架於雙肩上方的高威能電漿砲，為「五彩大砲（Full Burst）」核心火力。" },
      { name: "「旗魚（Xiphias）」磁軌砲 ×2", type: "腰部實彈", desc: "高速電磁彈射砲，可繞過敵方抗光束塗層進行高速穿甲狙擊。" },
      { name: "「天狼座（Lupus）」光束步槍", type: "光束射擊", desc: "直接連結核動力無限能源供電，射速與穿透力均屬頂尖。" },
      { name: "「蜥蜴（Lacerta）」光束軍刀 ×2", type: "光束格鬥", desc: "可雙劍合體為雙頭長刀（戟形態）進行高速斬擊。" }
    ],
    analysis: "C.E. 紀元首批次搭載「反中子干擾器」的核動力鋼彈，徹底擺脫電池續航限制。配合調整者的空間認知能力與多重鎖定系統，自由鋼彈能在一瞬間同時鎖定並解除數十個敵方目標的武裝，具備單機扭轉局部戰場局勢的絕對宰制力。"
  },
  {
    id: "zgmf-x42s",
    code: "ZGMF-X42S",
    name: "命運鋼彈（Destiny Gundam）",
    factionId: "ZAFT",
    factionName: "札夫特 (Z.A.F.T.)",
    era: "C.E.",
    pilot: "真・飛鳥",
    manufacturer: "ZAFT 統合設計局",
    tier: "S+",
    image: "https://images.unsplash.com/photo-1683530521386-804d3db091d2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
    photoNote: "實體照片：實物大鋼彈展翅實體立像（Unsplash）",
    specs: {
      height: "18.08 m",
      weight: "79.44 t",
      powerPlant: "高出力核電複合（Hyper-Deuterion Engine）",
      thrusters: "光輝傳遞者（Voiture Lumiere）光之翼推進系統",
      armor: "可變相轉移裝甲（VPS Armor）",
      sensors: "強化型長距離動態索敵系統",
      specialSystem: "光之翼幻象殘影（Mirage Colloid）、高出力全能型單機武裝架構"
    },
    stats: { firepower: 94, mobility: 97, armor: 89, sensor: 88, endurance: 96, system: 94 },
    weapons: [
      { name: "「亞隆戴特（Arondight）」大型對艦刀", type: "實體＋光束", desc: "結合實體刃與光束刀刃的超巨型大劍，一擊即可斬斷戰艦與毀滅鋼彈。" },
      { name: "高能量長射程光束砲", type: "背部巨砲", desc: "免換裝即可展開的戰艦級高能光束主砲。" },
      { name: "「掌中槍（Palma Fiocina）」掌部光束砲 ×2", type: "近戰零距離", desc: "近身抓取敵機瞬間引爆的高壓電漿射擊，極具致命性。" },
      { name: "「爍刃二式」光束迴旋鏢 ×2", type: "投擲・格鬥", desc: "可作為中距離投擲刃亦可直接當光束軍刀使用。" }
    ],
    analysis: "將脈衝鋼彈的三種裝備（威力、巨劍、轟擊）優點全數整合於單一機體的終極全能決戰機。「光之翼」結合幻象粒子產生的超高爆發加速與視覺殘影，使命運鋼彈在近中遠全距離都擁有極端兇猛的單兵突破力。"
  },
  {
    id: "gat-x105",
    code: "GAT-X105",
    name: "攻擊鋼彈（Strike Gundam）",
    factionId: "EA",
    factionName: "地球聯合軍（OMNI / 大天使號）",
    era: "C.E.",
    pilot: "煌・大和 / 穆・拉・佛拉達",
    manufacturer: "摩根雷提社（奧布技術協力）",
    tier: "A+",
    image: "https://images.unsplash.com/photo-1612400200754-bb6f8154e1fc?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8",
    photoNote: "實體照片：Entry Grade 經典三色鋼彈 Gunpla 實體模型（Unsplash）",
    specs: {
      height: "17.72 m",
      weight: "標準 64.8 t / 翔翼型 85.1 t",
      powerPlant: "高能量電容電池",
      thrusters: "隨攻裝背包變化（翔翼型具大氣圈內飛行能力）",
      armor: "相轉移裝甲（PS Armor）",
      sensors: "標準聯合軍 G 系列複合感測器",
      specialSystem: "攻擊者背包換裝系統（Striker Pack System）"
    },
    stats: { firepower: 83, mobility: 85, armor: 84, sensor: 78, endurance: 70, system: 86 },
    weapons: [
      { name: "翔翼 / 重劍 / 巨砲攻裝（Striker Pack）", type: "模組化換裝", desc: "可針對宇宙高機動、近戰破甲（斬艦刀）、遠距離砲擊即時更換背包。" },
      { name: "57mm 高能量光束步槍", type: "光束射擊", desc: "高泛用性攜行光束兵器，C.E.早期突破實彈防禦的關鍵火力。" },
      { name: "「破甲者（Armor Schneider）」對裝甲戰鬥刀 ×2", type: "實體近戰", desc: "無須耗電的折疊震動合金匕首，在PS裝甲耗盡前仍具致命殺傷力。" },
      { name: "75mm「豪豬陣」自動防空火神砲 ×2", type: "實彈牽制", desc: "全自動防禦追蹤迎擊飛彈與近身目標。" }
    ],
    analysis: "地球聯合軍五架初期 GAT-X 系列中最具戰術靈活性的泛用機。雖受限於初期電池容量而在持久戰略顯吃緊，但藉由換裝系統與相轉移裝甲的實彈無效化優勢，在前期成功頂住 ZAFT 軍團圍剿，奠定了後世換裝系統的設計藍圖。"
  },
  {
    id: "zgmf-x20a",
    code: "ZGMF-X20A",
    name: "攻擊自由鋼彈（Strike Freedom）",
    factionId: "ORB",
    factionName: "歐普 / 克萊因派（終端機）",
    era: "C.E.",
    pilot: "煌・大和",
    manufacturer: "終端機秘密工廠（Terminal）",
    tier: "S+",
    image: "https://images.unsplash.com/photo-1625235471526-67781e38eb57?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    photoNote: "實體照片：實物大自由系列鋼彈立像夕景（Unsplash）",
    specs: {
      height: "18.88 m",
      weight: "80.09 t",
      powerPlant: "超重氫核融合引擎（Hyper-Deuterion）",
      thrusters: "超級龍騎兵光輝翼推進系統",
      armor: "可變相轉移裝甲（VPS）＋黃金PS內部骨架",
      sensors: "極限多重鎖定量子通訊感測網",
      specialSystem: "超級龍騎兵系統（Super DRAGOON ×8）、黃金PS骨架高機動排熱"
    },
    stats: { firepower: 98, mobility: 98, armor: 86, sensor: 97, endurance: 99, system: 97 },
    weapons: [
      { name: "「超級龍騎兵」機動兵裝翼 ×8", type: "全方位浮游砲", desc: "於宇宙空間可釋放八枚獨立光束浮游砲進行立體包夾掃射。" },
      { name: "高能量光束步槍 ×2（可連結為長距狙擊砲）", type: "光束雙槍", desc: "雙手持槍可覆蓋寬廣射角，連結後具備超遠程狙擊艦橋的威力。" },
      { name: "「遊隼式」複相光束砲（腹部）", type: "高能重砲", desc: "近中距離瞬間殲滅大量敵機的腹腔直射大口徑光束砲。" },
      { name: "「旗魚3式」磁軌砲 ×2 /「超蜥蜴」光束軍刀 ×2", type: "實彈・近戰", desc: "兼具高初速實彈貫穿與雙刀高速連斬能力。" }
    ],
    analysis: "將自由鋼彈的多目標殲滅理念推向極致的終極機體。內部骨架全數採用金色相轉移裝甲以承載極限運動負荷並從縫隙散發過剩能量。擁有「在數十架敵機與戰艦群圍攻下毫髮無傷並瞬間全數削弱武裝」的頂尖戰場統治力。"
  },
  {
    id: "gn-001",
    code: "GN-001",
    name: "能天使鋼彈（Gundam Exia）",
    factionId: "CB",
    factionName: "天人武裝組織 (Celestial Being)",
    era: "A.D.",
    pilot: "剎那・F・清英",
    manufacturer: "天人組織（Krung Thep）",
    tier: "S",
    image: "https://images.pexels.com/photos/12748979/pexels-photo-12748979.jpeg?cs=tinysrgb&dpr=1&w=500",
    photoNote: "實體照片：GN-001 能天使鋼彈 Gunpla 實體模型近攝（Pexels）",
    specs: {
      height: "18.3 m",
      weight: "57.2 t",
      powerPlant: "原廠太陽爐（GN Drive）半永久能源",
      thrusters: "GN 粒子全方向無重力推進控制",
      armor: "E-碳纖維裝甲（E-Carbon）",
      sensors: "光學＋高濃度 GN 粒子感測器（具備隱匿通訊干擾）",
      specialSystem: "Trans-Am 系統（三倍紅色高出力模式）、七劍近戰架構"
    },
    stats: { firepower: 82, mobility: 95, armor: 84, sensor: 85, endurance: 99, system: 92 },
    weapons: [
      { name: "GN 劍（GN Sword）", type: "實體劍・步槍", desc: "專為貫穿 GN 力場而設的實體大劍，折疊後可作為高出力光束步槍射擊。" },
      { name: "GN 長劍 / GN 短劍", type: "雙持實體刀", desc: "針對不同距離與裝甲接縫進行高速連擊的破甲雙刀。" },
      { name: "GN 光束軍刀 ×2 / GN 光束匕首 ×2", type: "光束格鬥・投擲", desc: "合稱「七劍系統」，可對遠近敵機施展連續立體斬擊。" },
      { name: "GN 盾牌（GN Shield）", type: "防禦裝備", desc: "E-碳纖維配合GN粒子塗層，能抵擋實彈與光束衝擊。" }
    ],
    analysis: "天人第三世代鋼彈中專精「近戰格鬥與反鋼彈任務」的突擊先鋒。依托原廠太陽爐近乎無限的推進力與空中懸浮機動力，搭配能突破 GN 力場的實體「七劍」配置，啟動 Trans-Am 後的瞬間突襲速度令所有常規戰機與 MS 無法捕捉。"
  },
  {
    id: "xxxg-00w0",
    code: "XXXG-00W0",
    name: "飛翼鋼彈零式 EW（Wing Gundam Zero EW）",
    factionId: "AC",
    factionName: "殖民地流星作戰 / 預防者",
    era: "A.C.",
    pilot: "希洛・唯",
    manufacturer: "五博士共同設計原案",
    tier: "S+",
    image: "https://images.unsplash.com/photo-1787613499671-59612054e92a?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    photoNote: "實體照片：實物大鋼彈立像仰視攝影（Unsplash）",
    specs: {
      height: "16.7 m",
      weight: "8.0 t",
      powerPlant: "超小型核融合爐（3,732 kW）",
      thrusters: "四片羽翼型高出力向量推進器（70,150 kg＋大氣突入護盾）",
      armor: "鋼彈尼姆合金（Gundanium Alloy）",
      sensors: "零式系統神經腦波同步預判",
      specialSystem: "ZERO SYSTEM（戰術未來預測腦控系統）、大氣圈單機突入翼盾"
    },
    stats: { firepower: 99, mobility: 94, armor: 92, sensor: 96, endurance: 88, system: 95 },
    weapons: [
      { name: "雙管破壞來福槍（Twin Buster Rifle）", type: "戰略級光束", desc: "兩挺光束步槍合體後單發即可摧毀整座宇宙殖民地或厚重地下要塞防線。" },
      { name: "光束軍刀 ×2", type: "光束格鬥", desc: "具備極高切割力，曾於決戰中與次代鋼彈互砍不分勝負。" },
      { name: "胸部機關加農砲 ×2 / 翼盾防禦", type: "實彈・突防", desc: "四片羽翼兼具極限姿態控制與大氣層突入隔熱盾功能。" }
    ],
    analysis: "A.C. 紀元所有鋼彈的共同原型「零式」之天使翼形態。僅 8 噸的超輕量鋼彈尼姆合金機體卻搭載了破壞整個殖民地的雙管破壞來福槍，加上 ZERO 系統將未來無數種戰局直接灌入駕駛員大腦，使之成為結合極端毀滅火力與先讀預判能力的頂點機體。"
  },
  {
    id: "oz-13ms",
    code: "OZ-13MS",
    name: "次代鋼彈（Gundam Epyon）",
    factionId: "AC",
    factionName: "OZ / 白色獠牙（White Fang）",
    era: "A.C.",
    pilot: "傑克斯・馬吉斯（米利亞爾特）",
    manufacturer: "特列斯・克休里納達",
    tier: "S",
    image: "https://images.unsplash.com/photo-1776153524553-d1cfa41f1446?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    photoNote: "實體照片：紅白金角裝飾系 Gunpla 實體模型攝影（Unsplash）",
    specs: {
      height: "17.4 m",
      weight: "8.5 t",
      powerPlant: "超小型核融合爐（4,120 kW）",
      thrusters: "雙羽翼＋腳部大推力系統（變形雙頭龍 MA 形態）",
      armor: "鋼彈尼姆合金",
      sensors: "零式系統（Epyon System）",
      specialSystem: "Epyon 戰術預測系統、騎士精神純近戰武裝理念"
    },
    stats: { firepower: 85, mobility: 96, armor: 91, sensor: 95, endurance: 87, system: 94 },
    weapons: [
      { name: "高出力光束劍（連接反應爐供電）", type: "超巨型光束刃", desc: "直接由機體發電機供電，最大出力下劍身可延伸至劈開宇宙要塞「天秤座」的長度。" },
      { name: "電熱鞭（Heat Rod）", type: "實戰電磁鞭", desc: "收納於盾牌的超高溫可屈伸長鞭，能遠距纏繞並燒斷敵機裝甲。" },
      { name: "雙頭龍 MA 爪擊", type: "高機動突襲", desc: "變形為雙頭飛龍形態進行超高音速宇宙突襲。" }
    ],
    analysis: "特列斯親手打造、完全捨棄任何遠距離槍砲武裝的純決鬥型鋼彈。憑藉高達 4,120 kW 的融合爐直供單把光束劍，使其近距離一擊甚至擁有破壞戰艦與巨型要塞的物理切斷力，是唯獨能與飛翼零式正面抗衡的極端近戰王者。"
  },
  {
    id: "asw-g-08",
    code: "ASW-G-08",
    name: "獵魔鋼彈・天狼型帝王（Barbatos Lupus Rex）",
    factionId: "PD",
    factionName: "鐵華團 (Tekkadan)",
    era: "P.D.",
    pilot: "三日月・奧古斯",
    manufacturer: "厄祭戰時期 72 架鋼彈骨架之一（歲星改修）",
    tier: "S",
    image: "https://images.unsplash.com/photo-1694408349899-5edfce344390?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    photoNote: "實體照片：持劍戰姿 ASW-G-08 獵魔鋼彈 Gunpla 實體模型（Unsplash）",
    specs: {
      height: "19.0 m",
      weight: "32.1 t",
      powerPlant: "雙重亞哈反應爐（Twin Ahab Reactors）",
      thrusters: "高出力重力制御推進器",
      armor: "奈米積層裝甲（Nano-Laminate Armor，極致耐光束）",
      sensors: "神經直連視覺與動態空間反射",
      specialSystem: "阿賴耶識系統（解除安全限制器狀態）"
    },
    stats: { firepower: 86, mobility: 96, armor: 90, sensor: 91, endurance: 94, system: 93 },
    weapons: [
      { name: "超大型鎚矛（Ultra Large Mace）", type: "重型動能破甲", desc: "超越機體全長的巨型質量武器，柄尾內藏打樁機，一擊徹底壓碎重型 MS 駕駛艙。" },
      { name: "尾鞭刃（Tail Blade）", type: "腦波神經鞭", desc: "移植自大型無人兵器 MA「哈斯蒙」的背部鋼索利刃，完全依靠三日月的神經反射自主追擊敵機。" },
      { name: "帝王銳爪（Rex Nails）＋前臂 200mm 機砲", type: "肉搏・實彈", desc: "稀少金屬打造的巨型獸爪與內藏式火砲，撕裂敵機裝甲毫無停頓。" }
    ],
    analysis: "徹底為「獸化近身獵殺」特化的 P.D. 紀元終極格鬥機。亞哈反應爐產生的重力防護與奈米積層裝甲使傳統光束幾乎無效；一旦解除阿賴耶識安全限制，駕駛員直接將自身肉體感覺同步至機體四肢與尾鞭，成為令末日號角大軍聞風喪膽的戰場惡魔。"
  },
  {
    id: "xvx-016",
    code: "XVX-016",
    name: "風靈鋼彈（Gundam Aerial）",
    factionId: "AS",
    factionName: "地球寮 / 新世開發公社",
    era: "A.S.",
    pilot: "蘇萊塔・墨丘利",
    manufacturer: "新世開發公社（貝納里特集團系）",
    tier: "S",
    image: "https://images.unsplash.com/photo-1555550252-359d816316a7?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    photoNote: "實體照片：實物大高細節白色鋼彈立像攝影（Unsplash）",
    specs: {
      height: "18.0 m",
      weight: "43.9 t",
      powerPlant: "高密度電容推進複合能源",
      thrusters: "分散式背部飛行推進器",
      armor: "複合式外殼單元（內藏帕梅特發光迴路）",
      sensors: "GUND 格式帕梅特感測網路",
      specialSystem: "GUND-ARM 系統、帕梅特刻痕（Permet Score 6～8+）、GUND-BIT 11枚子機"
    },
    stats: { firepower: 91, mobility: 90, armor: 85, sensor: 97, endurance: 84, system: 98 },
    weapons: [
      { name: "埃斯庫特盾 / 11枚 GUND-BIT 感應子機", type: "攻防一體浮游砲", desc: "平時合體為大型護盾防禦，散開後可獨立進行全方位光束齊射或連結裝甲成為 Bit-on Form。" },
      { name: "光束步槍（可結合子機變為長管加農砲）", type: "光束射擊", desc: "掛載 GUND-BIT 後成為「Bit Stave Rifle」，大幅拉高光束貫穿威力與射程。" },
      { name: "光束軍刀 ×2", type: "光束格鬥", desc: "決鬥與實戰用基礎近戰光束兵器，具備可調輸出模式。" }
    ],
    analysis: "打破「GUND-ARM 會透過資料風暴燒毀駕駛員」禁忌的次世代神祕機體。透過帕梅特刻痕深度提升，風靈鋼彈甚至能創造廣域「資料風暴空間」，強行駭入並癱瘓周圍所有敵方 MS 與自動武裝的通訊控制權，展現出截然不同維度的電子戰與浮游子機宰制力。"
  }
];
