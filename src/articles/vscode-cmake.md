---
sidebar: false
date: 2022-12-05
description: 'VSCodeでC++のビルド環境を整える'
tags:
 - 記録
---
# VS Code で C++ のビルド環境を整える
### 目次
[[toc]]


## はじめに
この記事では、VS Code 上で CMake のビルドを行うための環境構築とビルド手順について説明します。 

## CMake の環境構築
### CMake をインストールする
#### Windows の場合
[CMake公式サイト](https://cmake.org/download/)にアクセスして

![1](../.vuepress/public/imgs/articles/vscode-build/1.png)

最新のWindows版バイナリ（.msi） をダウンロードします。

![2](../.vuepress/public/imgs/articles/vscode-build/2.png)

次に、ダウンロードした .msi ファイルを実行して CMake をインストールしていきます。

![3](../.vuepress/public/imgs/articles/vscode-build/3.png)

ライセンス条項を読んだら、「I accept the terms in the License Agreement」をチェックします。

![4](../.vuepress/public/imgs/articles/vscode-build/4.png)

「Add CMake to the system PATH for all users」をチェックします。

![5](../.vuepress/public/imgs/articles/vscode-build/5.png)

インストールディレクトリは既定のままにしました。

![6](../.vuepress/public/imgs/articles/vscode-build/6.png)

インストールしていきます。

![7](../.vuepress/public/imgs/articles/vscode-build/7.png)
![8](../.vuepress/public/imgs/articles/vscode-build/8.png)

インストールが完了したら、「Finish」を選択して閉じます。

![9](../.vuepress/public/imgs/articles/vscode-build/9.png)

#### Mac の場合
homebrew を使ってインストールできます。

`$ brew install cmake`

### VS Code に CMake Tools をインストール
[CMake Tools](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cmake-tools) をインストールします。

![10](../.vuepress/public/imgs/articles/vscode-build/10.png)

Install をクリックすると VS Code にとびます。

![11](../.vuepress/public/imgs/articles/vscode-build/11.png)

このような表示になっていたら OK です。

## Windows のみ行うこと
### Ninjaをダウンロードする
Ninja の [GitHub](https://github.com/ninja-build/ninja/releases) にアクセスして

![12](../.vuepress/public/imgs/articles/vscode-build/12.png)

ninja-win.zip をダウンロードします。

### ninja.exe のパスを通す

検索ボックスで「システム環境変数の編集」を検索して、開きます。

![13](../.vuepress/public/imgs/articles/vscode-build/13.png)

環境変数を選択します。

![14](../.vuepress/public/imgs/articles/vscode-build/14.png)

システム環境変数のPathを選択して、編集をクリックして

![15](../.vuepress/public/imgs/articles/vscode-build/15.png)

「新規」を選択します。

![16](../.vuepress/public/imgs/articles/vscode-build/16.png)

ここにninja.exeファイルのあるアドレスを入力します。

## VS Code での操作
今回使用するテストコードは [GitHub](https://github.com/guinpen98/CMake_Test) においてあります。

ディレクトリ構成はこんな感じです
```
CMake_Test/
         ├ test.h
         ├ test_main.cpp
         └ CMakeLists.txt
```
CMakeLists.txtはこのようにシンプルな内容になっています。
```cmake
cmake_minimum_required(VERSION 3.1)
project(cmake_test CXX)
add_executable(cmake_test test_main.cpp)
```
### キットの選択
VS Code のステータスバー（画面の下の青いバー）からキットの選択をしていきます。

![17](../.vuepress/public/imgs/articles/vscode-build/17.png)

「No Kit Selected」をクリックして

![18](../.vuepress/public/imgs/articles/vscode-build/18.png)

自分の使用しているコンパイラを選択します。

![19](../.vuepress/public/imgs/articles/vscode-build/19.png)

このように自分の選択したキットが表示されたら完了です。

### プロジェクトの構成
VS Code のアクティビティーバーから CMake を選択して

![20](../.vuepress/public/imgs/articles/vscode-build/20.png)

すべてのプロジェクトの構成をクリックします。

### ビルド
すべてのプロジェクトをビルドをクリックすると一括でビルドできますが

![21](../.vuepress/public/imgs/articles/vscode-build/21.png)

各ターゲットに照準を合わせると、別々にビルドすることも可能です。

![22](../.vuepress/public/imgs/articles/vscode-build/22.png)

### デバッグ
ターゲットを右クリックして、デバッグを選択します。

![23](../.vuepress/public/imgs/articles/vscode-build/23.png)

無事にデバッグできました。

![24](../.vuepress/public/imgs/articles/vscode-build/24.png)