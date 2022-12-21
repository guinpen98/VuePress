---
sidebar: false
date: 2022-12-22
description: 'Common Lispを触る'
tags:
 - 記録
---
# Common Lisp を触る
### 目次
[[toc]]

## はじめに
この記事は Common Lisp で勉強した内容の備忘録です。
大学の言語系の人工知能の講義の資料にあったコードが Lisp で書かれていて、それをきっかけに Lisp に興味を持ち、勉強してみることにしました。
Lisp には方言と呼ばれる、処理系が複数存在して、その中でも現在で広く使われている方言である Common Lisp を触っていきます。
この記事を書くにあたって、主に Land of Lisp を読んで勉強しました。
環境はWindowsです。

## 環境構築
### Roswell をインストール
Land of Lisp では CLISP をインストールしているのですが、筆者は Roswell から処理系をインストールしました。
<br>
CLISP インストーラのダウンロードは[こちら](https://clisp.sourceforge.io/)

Roswell は Common Lisp 環境のセットアップユーティリティです。
Lisp 処理系やライブラリのインストールのほかに、プログラムをコンパイルし、バイナルファイルにパッケージングすることもできるようです。

[Installation - roswell wiki](https://github.com/roswell/roswell/wiki/Installation#windows) にインストール方法が載っています。

![1](../.vuepress/public/imgs/articles/Lisp/1.png)

最新のリリースノートから、自分の環境にあったものをダウンロードし、Pathを通しました。

### セットアップ
以下のコマンドを叩いてセットアップします。、
```
ros setup
```
他の `ros` コマンドを叩いても、処理系が不足している場合は、セットアップを行ってくれるようです。

Roswell のセットアップでは Steel Bank Common Lisp（SBCL）がインストールされます。

## Lisp を起動する
コマンドで `ros run` を打つと、デフォルトの処理系が起動します。
```
ros run
*
```
SBCL では「*」がプロンプトとなります。
起動すると自動的に read-eval-print ループ（REPL）に入ります。

>REPL (Read-Eval-Print Loop) とは、入力・評価・出力のループのこと。インタプリタにおいて、ユーザーとインタプリタが対話的にコード片を実行できるもの。

と Wikipedia に書いてありました。
REPL のことをインタプリタだと勘違いしていたのですが、インタプリタが一連のループを行うことを指すようです。

ここでは、Lisp コードを直にタイプすることができます。
試しに足し算を行ってみます。
```lisp
ros run
* (+ 1 2)
3
*
```
Lisp は 1+2 を (+ 1 2)のように関数を前に書く**前置記法** （prefix notation）です。
私たちが使い慣れている、1+2 のような、引数と引数の間に演算子を置く記法は、**中置記法**（infix notation）です。

終了するには以下のようにタイプします。
```
* (quit)
```

## Roswell からスクリプトを実行する
main 関数を作ると、Roswell からスクリプトを実行することができます。

Hello world! を表示するスクリプト「hello.lisp」を書きます。
```lisp
(defun main ()
  (write-line "Hello world!"))
```
これを実行します。
```
ros hello.lisp
Hello world!
```
Hello world! が表示されました。
