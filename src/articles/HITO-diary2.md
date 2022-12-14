---
sidebar: false
date: 2022-10-16
description: 'HITO日記2'
tags:
 - 日記
---

# 対話ゲームについて

HITO のGitHubは[**こちら**]([https://github.com/guinpen98/HITO](https://github.com/guinpen98/HITO))

## はじめに

対話ゲーム [HITO](https://github.com/guinpen98/HITO) の開発日記の 2 回目です。

今回は HITO の開発をするにあたって、対話ゲームについてまとめてみました。

対話ゲームには、ボードゲームや TRPG などが含まれるようですが、すべての対話ゲームを調べるのは少し目的とそれてしまうので、言語を通じてキャラクターと対話するものに絞ってまとめました。

---

## ELIZA

ゲームではないのですが、1966 年に開発された「ELIZA」は対話エジェントの原点と言われています。

ユーザの入力した言葉に対して、事前に用意された回答候補のリストと合わせて、応答を返すという単純なパターンマッチ技法を使っています。

---

## ワンダープロジェクトJ 機械の少年ピーノ

### 概要

ワンダープロジェクトJ 機械の少年ピーノは、1994 年に発売されたスーパーファミコン用育成シミュレーションゲームで、AIを教育し，技術や能力を覚えさせていくというゲームです。

### ゲームの特徴

プレイヤーは妖精のような姿のロボット・ティンカーを操作し、ギジンと呼ばれる人間型の機械人形であるピーノに指示をして、行動をさせます。指示したアイテムやオブジェクトに対してピーノがとった行動を、褒めたり叱ったりして評価します。指示の内容によって、ピーノの性格は変化していきます。

### 学習方式
#### コレコレ方
対象アイテムへ誘導し、自分の意志で行動させ、「ホメ」「シカリ」によって内部のパラメータを変化させる方法。
#### イベント方
イベントに参加させることで、ジョゼットの内部パラメータを変化させる方法。
#### アイテム方
バッテリーなどのアイテムによって、キャラクターの内部パラメータを変化させる方法。

---

## ワンダープロジェクトJ2 コルロの森のジョゼット

### 概要

ワンダープロジェクトJ 機械の少年ピーノの続編であるワンダープロジェクトJ2 コルロの森のジョゼットは、1994 年に NINTENDO 64 で発売されました。基本の流れは前作と同じようです。

### ゲームの特徴

AIの学習方式は前作に「推理」と「思考シナリオ」が追加されているようです。

### 学習方式
#### 推理方
これまで習得してきた理解情報を組み合わせて推論し、新しい能力を見出させる方法。

#### 思考シナリオ方
推理方によって発生した思考シナリオに対して「ホメ」「シカリ」によって内部パラメータを変化させる方法。

### 記憶
学習によって得た知識は，「理解情報ボックス」で収納されます。理解情報とは，イベントを達成するための行動，名前，概念などを指します。理解情報ボックスは、表形式で、対象となるアイテムについてのアクションや性質を学習します。

---

## シーマン

### 概要

1999 年にドリームキャストで発売された「シーマン〜禁断のペット〜」は、人の顔を持ち、人語を話す魚のシーマンを水槽の中で飼育する育成シミュレーションゲームです。

### ゲームの特徴

コントローラにマイクデバイスを装着するか、シーマイクコントローラを使うことでシーマンと話すことができます。

似たようなゲームに「ピカチュウげんきでちゅう」などが挙げられます。

### メロディ言語

同じ言語でも発音によって意味が変わる「メロディ言語」という考え方があり、自然な会話を行うために、文字だけではなく音も重視していたようです。

---

## FINAL FANTASY X

2016 年に発売された FINAL FANTASY XV は、メタ AI とキャラクター AI ，スパーシャル AI が連携した AI モデルを採用しています。色々なシステムがありますが「Face-to-Face 対話システム」「移動会話」について取り上げようと思います。

### Face-to-Face 対話システム

「Face-to-Face 対話システム」は，適切な位置と距離、方向で話すというものです。AI はプレイヤー周辺で話せる位置を計算し、その位置に向かうパスを検索して、適切な距離と方向で話すようです。

### 移動会話

「移動会話」はキャラクターが，プレイヤーの進行方向を推定し，同じ方向に走りながら会話するというものです。ただ位置取りをするだけでなく，身体のポジショニングでも主人公をサポートしていることをプレイヤーに伝えています。

このように、会話をする際の動きを自然にすることが、自然な対話につながるようです。

## おわりに
次の記事では、対話ゲームの中で、気になったものを実際にプレイして、その内容について書きたいと考えています。

---

## 関連記事
[キャラクターの描画（1回目）](./HITO-diary1.html)