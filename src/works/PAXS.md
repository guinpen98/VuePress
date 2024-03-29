---
sidebar: false
---

# PAX SAPIENTICA
---

### 目次
[[toc]]

## リンク
- [GitHub](https://github.com/AsPJT/PAX_SAPIENTICA)
- [Google Play](https://play.google.com/store/apps/details?id=com.aspjt.mahoroba)
- [Speaker Deck](https://speakerdeck.com/guinpen98/pax-sapientica)

## 概要
|ジャンル|制作人数|制作期間|開発環境|
|:---:|:---:|:---:|:---:|
|歴史シミュレーション|2人|2023年2月〜|C++|
[![PAXS](../.vuepress/public/imgs/home/Vue-PAXS-20230527.png)](https://github.com/AsPJT/PAX_SAPIENTICA)
[![AndroidSudio](../.vuepress/public/imgs/works/PAXS/PAX_SAPIENTICA2023-09-23.20.54.32.png)](https://github.com/AsPJT/PAX_SAPIENTICA)

## 制作チーム
||役割|担当|
|---|---|---|
|🐧 私|プログラマ|シミュレーション|
|🌍 AsPJT|企画, デザイナー, プログラマ|データ管理|

## 使用ライブラリ
- OpenCV
- Siv3D
- SFML

## プラットフォーム
クロスプラットフォーム(Windows, macOS, Linux, Android)

## 制作動機
無料のエージェントベースシミュレーション（ABS）ツールが少なく、地理情報システムの機能を搭載しているツールはほとんど無かったため作成中。

## 作品解説
この作品は、歴史シミュレーションソフトウェアである。地図の描画と暦の表示の機能があり、時間情報と空間情報を組み合わせたシミュレーションが可能。

## 工夫した点
- GitHub Actions を用いて、Linux でのビルドテストを自動化した

## 苦労した点
- 開発環境が異なるため、macOS での開発を行っていた私と、Windows での開発を行っていた AsPJT との間で、コードの互換性を保つのに苦労した
- 共同制作者がコードを手続型プログラミングで書いていたため、コードの保守性を高めるためにクラスの設計を行い、オブジェクト指向プログラミングに書き換えた
