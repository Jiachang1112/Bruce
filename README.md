
# 個人網站 Starter

這是一個現成可用、可直接部署到 GitHub Pages 的個人網站。

## 如何使用
1. 下載這個壓縮檔並解壓縮。
2. 打開 `assets/js/site.config.json`，填上你的名字、Email，以及你給我的 Facebook 連結（我已先放入）。
3. 將相片放到 `assets/img/`，把 `index.html` 的相簿圖片路徑改掉即可。
4. 若要嵌入 Facebook 貼文：必須是**公開**貼文或粉專貼文，並依照 Facebook 的「社群外掛」產生嵌入碼後貼到 `#updates` 區塊。

## 發佈到 GitHub Pages
1. 新建 GitHub 倉庫（例如 `my-site`）。
2. 把所有檔案推上去（見下方 PowerShell 指令）。
3. 到 GitHub 的 Repository Settings → Pages → Source 選擇 `main` 分支的 `/ (root)`。
4. 等待 1-2 分鐘，頁面會在 `https://你的帳號.github.io/倉庫名/` 上線。

## PowerShell 一鍵上傳（在專案資料夾中執行）
```powershell
git init
git add .
git commit -m "初版個人網站"
git branch -M main
git remote add origin https://github.com/<你的帳號>/<你的倉庫>.git
git push -u origin main
```

## 自訂網域
- 在你的網域 DNS 建立一筆 CNAME 指向：`你的帳號.github.io`
- 在 repo 根目錄建立一個 `CNAME` 檔，內容只有你的網域，例如 `jiachang.com`
- 等待 DNS 生效。

## 調色 / 樣式
- 主要色在 `assets/css/style.css` 的 `:root` 變數，可改為你喜歡的藍色或其他配色。
- 也內建暗/亮主題切換按鈕。

祝你建站順利！
