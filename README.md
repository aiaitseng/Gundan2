#上傳至 GitHub Pages 的操作步驟
#建立檔案：在電腦或 GitHub 網頁版 Repository 內建立上述 4 個檔案：index.html、styles.css、data.js、app.js（務必確認檔名大小寫一致）。
#開啟 GitHub Pages：
#進入您的 GitHub Repository → 點選上方 Settings → 左側選單 Pages。
#在 Build and deployment 的 Source 選擇 Deploy from a branch。
#Branch 選擇 main（資料夾選 / (root)）後點 Save。
#完成上線：等待約 1～2 分鐘後重新整理頁面，即可透過 https://<您的帳號>.github.io/<儲存庫名稱>/ 瀏覽完整網頁。
#擴充全部機體或替換自拍 Gunpla 實體照的方法
#新增更多鋼彈：只需在 data.js 的 GUNDAM_DATABASE 陣列中複製任一物件區塊並修改數值即可，頁面的統計數字、陣營數量與雷達圖都會自動更新。
#使用自己拍的模型實體照：在 GitHub 建立 images/ 資料夾並上傳照片（例如 sazabi.jpg、zaku2.jpg），再把 data.js 對應機體的 image 改成 './images/sazabi.jpg' 即可完美顯示。
