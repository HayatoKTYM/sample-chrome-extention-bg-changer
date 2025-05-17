# Background Color Changer

シンプルなワンクリックでページの背景色を変更するChrome拡張機能。

## フォルダ構成

```bash
sample-chrome-extention-bg-changer/
├── manifest.json
├── icons/
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
├── popup.html
├── popup.js
└── content.js
```

## 各ファイルの役割と関係性

* manifest.json
  * 拡張機能全体の設定ファイル。
  * action.default_popup で popup.html を指定し、アイコンクリック時にポップアップを表示。
  * host_permissions と permissions でスクリプト実行権限を宣言。
  * content_scripts でマッチするページに content.js を自動注入。

* icons/
  * ブラウザツールバーに表示するアイコン画像。

* popup.html
  * ユーザーがアイコンクリック時に見るUI。
  * カラーボタンとリセットボタンを定義。
  * 最下部で popup.js を読み込み。

* popup.js
  * ポップアップ上のボタンクリックを検知し、選択された色やリセットアクションを chrome.tabs.sendMessage で content.js に送信。

* content.js
  * マッチしたページに注入され、chrome.runtime.onMessage でメッセージを受信。
  * 初回メッセージ受信時にページの元の背景色を originalColor に保存。
  * action: 'changeColor' の場合は指定色に変更。
  * action: 'reset' の場合は保存した originalColor に戻す。

## インストール手順

```bash
1. Chrome を開き、アドレスバーに chrome://extensions を入力。
2. 右上の「デベロッパーモード」を ON にする。
3. 「パッケージ化されていない拡張機能を読み込む」をクリック。
4. 本リポジトリのルートフォルダを選択。
5. ツールバーにアイコンが表示されれば完了。
```
