---
sidebar: false
---

# Photoshopのドロップレットを用いて、複数枚の画像を自動で切り取る

## ドロップレット用アクションを作成
### 新規アクションの作成
メニューの[ウィンドウ]→[アクション]をクリックしてアクションパネルを開きます。

![1](../.vuepress/public/imgs/articles/droplet/1.png)

新規アクションの作成をします。

![2](../.vuepress/public/imgs/articles/droplet/2.png)

アクション名は「自動切り抜き」にしました。

![3](../.vuepress/public/imgs/articles/droplet/3.png)

---

### アクションの記録
[記録]ボタンを押して、アクションの記録をしていきます。

![4](../.vuepress/public/imgs/articles/droplet/4.png)

メニューの[ファイル]→[開く]をクリックして、切り取りたい画像を開きます。

![5](../.vuepress/public/imgs/articles/droplet/5.png)

切り抜きツールを使って、画像を切り抜きます

![6](../.vuepress/public/imgs/articles/droplet/6.png)

Ctrl+Sで保存をし、ファイルを閉じます

![7](../.vuepress/public/imgs/articles/droplet/7.png)

再度、アクションパネルを開きます。
[再生/記録を中止]ボタンをクリックして、アクションの記録を終了します。

![8](../.vuepress/public/imgs/articles/droplet/8.png)

記録したアクションはこんな感じになります。

![9](../.vuepress/public/imgs/articles/droplet/9.png)

## ドロップレットを作成
メニューの[ファイル]→[自動処理]→[ドロップレットの作成]をクリックして、ドロップレット作成のダイアログボックスを表示します。

![10](../.vuepress/public/imgs/articles/droplet/10.png)

1. ドロップレットの保存先を選択します
1. 実行したいアクションを選択します
1. 「開くコマンドは無視」にチェックを入れます
1. 実行後は「なし」を選択します
1. 「OK」ボタンをクリックします

![11](../.vuepress/public/imgs/articles/droplet/11.png)

保存先にデスクトップを選択すると、このようにデスクトップにドロップレットが作成されます。

![12](../.vuepress/public/imgs/articles/droplet/12.png)

## 実際に使ってみる
切り抜きたい画像を選択して、作成したドロップレットにドラック&ドロップします。

![13](../.vuepress/public/imgs/articles/droplet/13.png)

画像が切り取られました。

完成です。