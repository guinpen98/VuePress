---
sidebar: false
date: 2023-02-25
description: 'VS Code でPlantUML を使う'
tags:
 - 記録
---
# VS Code で PlantUML を使う
### 目次
[[toc]]

## はじめに
M2 MacBook Air で PlantUML の環境構築をした際の手順をまとめました。

## Homebrew をインストール
Homebrew を使ってインストールをしていくため、入っていない場合は下記の記事を参考にしてインストールしてください。

[M2 Mac に Homebrew をインストール](https://zenn.dev/watakarinto/articles/16451707aa08d1)

## Java をインストール
```bash
brew install --cask adoptopenjdk
```

## Graphviz をインストール
```bsdh
$ brew install graphvizs
```

## PlantUML をインストール
```bash
brew install plantuml
```

## VS Code のプラグインをインストール
VS Codeが入っていない場合はインストールします。
```bash
brew install visual-studio-code
```

VS Code 上で PlantUML のプラグインをインストールします。

![1](../.vuepress/public/imgs/articles/plant-uml-mac/1.png)

## 使ってみる
ファイルの拡張子は`wsd, pu, puml, plantuml, iuml`に対応しています。

```plantuml
@startuml
abstract        abstract
abstract class  "abstract class"
annotation      annotation
circle          circle
()              circle_short_form
class           class
diamond         diamond
<>              diamond_short_form
entity          entity
enum            enum
interface       interface
@enduml
```

`Option + d`を押すとプレビューを表示できます。

![2](../.vuepress/public/imgs/articles/plant-uml-mac/2.png)

プレビュー上で赤い!マークが表示されて `Warning: the fonts "Times" and "Times" are not available for the Java logical font "Serif", which may have unexpected appearance or behavior. Re-enable the "Times" font to remove this warning.` という警告文が出てきたら、VS Code の設定に下記を追加します。
```json
"plantuml.server": "http://www.plantuml.com/plantuml",
"plantuml.render": "PlantUMLServer",
"plantuml.jarArgs": ["-Djava.awt.headless=true", "-Dplantuml.include.path=/Library/Fonts/"]
```
`plantuml.jarArgs`の`plantuml.include.path`パラメータは、フォントファイルがインストールされているディレクトリに合わせて変更してください。

## 画像で保存する
`command + shift + p`でコマンドパレットを表示し、`plantuml`と入力します。

`PlantUML: Export current diagram`を選択しましょう。

![3](../.vuepress/public/imgs/articles/plant-uml-mac/3.png)

保存するファイル形式を選択します。

![4](../.vuepress/public/imgs/articles/plant-uml-mac/4.png)

## リンク
[公式ドキュメント](https://plantuml.com/ja/)

