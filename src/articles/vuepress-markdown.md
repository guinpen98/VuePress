---
sidebar: false
date: 2022-12-08
description: 'VuePressのチートシート'
tags:
 - 記録
---
# VuePress のチートシート
### 目次
[[toc]]

## はじめに
自分用にテキトーに作ったため順番がバラバラです。

## 行
### 改行
```
foo

bar
```
```
<p>foo</p>
<p>bar</p>
```
<p>foo</p>
<p>bar</p>

### 行間をあける
```
foo
<br>
bar
```
foo
<br>
bar

### 水平線
```
---
```
<br>

↓

---
<br>

## 文字修飾
### 強調
```
**foo**
```
```
<strong>foo</strong>
```
**foo**

### イタリック
```
*foo*
```
```
<em>foo</em>
```
*foo*

### 強調 + イタリック
```
***foo***
```
```
<em><strong>foo</strong></em>
```
***foo***

### 打消し
```
~~foo~~
```
```
<s>foo</s>
```
~~foo~~

---
## 見出し
```
# h1
### h3
```
```
<h1 id="h1">h1</h1>
<h3 id="h3">h3</h3>
```
# h1
### h3

---
## リスト
### 箇条書き
```
- foo
    - bar
```
```
<ul>
  <li>
    foo
    <ul>
      <li>
        bar
      </li>
    </ul>
  </li>
</ul>
```
- foo
    - bar

### 番号付きの箇条書き
```
1. foo
1. bar
1. baz
```
```
<ol>
  <li>
    foo
  </li>
  <li>
    bar
  </li>
  <li>
    baz
  </li>
</ol>
```
1. foo
1. bar
1. baz

### 定義リスト
```
<dl>
  <dt>名前</dt>
  <dd>〇〇</dd>
  <dt>職業</dt>
  <dd>学生</dd>
</dl>
```
<dl>
  <dt>名前</dt>
  <dd>〇〇</dd>
  <dt>職業</dt>
  <dd>学生</dd>
</dl>

---
## 引用
```
> foo
```
```
<blockquote>
  <p>foo</p>
</blockquote>
```
> foo

### 引用の入れ子
```
> foo
>> bar
```
```
<blockquote>
  <p>foo</p>
  <blockquote>
    <p>bar</p>
  </blockquote>
</blockquote>
```
> foo
>> bar

---
## リンク
```
[Portfolio](https://guinpen98.github.io/VuePress/)
```
[Portfolio](https://guinpen98.github.io/VuePress/)

---
## 画像
```
![画像](filepath/foo.png)
```
```
<img src="filepath/foo.png" alt="画像">
```
![画像](../.vuepress/public/imgs/articles/vuepress-markdown/foo.png)

---
## テーブル

```
|1|2|
|---|---|
|foo|bar|
```
```
<table>
  <thead>
    <tr>
      <th>1</th>
      <th>2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>foo</td>
      <td>bar</td>
    </tr>
  </tbody>
</table>
```
|1|2|
|---|---|
|foo|bar|

---
## コード
### インライン
```
`foo`
```
```
<code>foo</code>
```
`foo`

### ブロック
```
```　
foo
```　
```
```
<pre class="language-text">
  <code>
    foo
  </code>
</pre>
```
```
foo
```

### コードのハイライト
```
``` {2}　
int main(){
    std::cout << "Hello";
}
```　
```
``` {2}
int main(){
    std::cout << "Hello";
}
```
### ファイル形式の表示
```
```cpp　
int main(){
    std::cout << "Hello";
}
```　
```
```cpp
int main(){
    std::cout << "Hello";
}
```
[言語一覧](https://prismjs.com/#languages-list)

---
## 目次
```
[[toc]]
```
[[toc]]

---
## 絵文字
```
:smile:
```
:smile:

[絵文字リスト](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json)

---
## カスタムコンテナ
```
::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: details
This is a details block
:::
```
::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: details
This is a details block
:::

### コードグループとコードブロック
```
<code-group>
<code-block title="Windows">
```bash
dir
```　
</code-block>

<code-block title="Mac">
```bash
ls
```　
</code-block>
</code-group>
```
<code-group>
<code-block title="Windows">
```bash
dir
```
</code-block>

<code-block title="Mac">
```bash
ls
```
</code-block>
</code-group>

---
## Badgeコンポーネント
```
Badge <Badge text="beta" type="warning" vertical="middle"/>

Badge <Badge text="エラー" type="error"/>
```
Badge <Badge text="warning" type="warning" vertical="middle"/>

Badge <Badge text="error" type="error"/>

- text : 文字
- type : tip, warning, error, デフォルトはtip
- vertical : top, middle, デフォルトはtop

---
## アコーディオン
```
<details><summary>foo</summary>
bar
</details>
```
<details><summary>foo</summary>
bar
</details>

<br>

---
## Twitter 埋め込み

```
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">New patch release v1.8.1 just dropped!<a href="https://t.co/lHeIclEoFo">https://t.co/lHeIclEoFo</a></p>&mdash; VuePress (@vuepressjs) <a href="https://twitter.com/vuepressjs/status/1359871849493114882?ref_src=twsrc%5Etfw">February 11, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
```

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">New patch release v1.8.1 just dropped!<a href="https://t.co/lHeIclEoFo">https://t.co/lHeIclEoFo</a></p>&mdash; VuePress (@vuepressjs) <a href="https://twitter.com/vuepressjs/status/1359871849493114882?ref_src=twsrc%5Etfw">February 11, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

---
## Youtube 埋め込み
```
<iframe width="560" height="315" src="https://www.youtube.com/embed/lIv1ItUzktc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
```
<iframe width="560" height="315" src="https://www.youtube.com/embed/lIv1ItUzktc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>