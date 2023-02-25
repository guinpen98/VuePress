(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{321:function(a,t,s){a.exports=s.p+"assets/img/1.3a1f6fed.png"},322:function(a,t,s){a.exports=s.p+"assets/img/2.cc4da96a.png"},323:function(a,t,s){a.exports=s.p+"assets/img/3.8d1bca65.png"},324:function(a,t,s){a.exports=s.p+"assets/img/4.a1274012.png"},371:function(a,t,s){"use strict";s.r(t);var r=s(13),e=Object(r.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"vs-code-でplantuml-を使う"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vs-code-でplantuml-を使う"}},[a._v("#")]),a._v(" VS Code でPlantUML を使う")]),a._v(" "),t("h3",{attrs:{id:"目次"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#目次"}},[a._v("#")]),a._v(" 目次")]),a._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#はじめに"}},[a._v("はじめに")])]),t("li",[t("a",{attrs:{href:"#homebrew-をインストール"}},[a._v("Homebrew をインストール")])]),t("li",[t("a",{attrs:{href:"#java-をインストール"}},[a._v("Java をインストール")])]),t("li",[t("a",{attrs:{href:"#graphviz-をインストール"}},[a._v("Graphviz をインストール")])]),t("li",[t("a",{attrs:{href:"#plantuml-をインストール"}},[a._v("PlantUML をインストール")])]),t("li",[t("a",{attrs:{href:"#vs-code-のプラグインをインストール"}},[a._v("VS Code のプラグインをインストール")])]),t("li",[t("a",{attrs:{href:"#使ってみる"}},[a._v("使ってみる")])]),t("li",[t("a",{attrs:{href:"#画像で保存する"}},[a._v("画像で保存する")])]),t("li",[t("a",{attrs:{href:"#リンク"}},[a._v("リンク")])])])]),t("p"),a._v(" "),t("h2",{attrs:{id:"はじめに"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#はじめに"}},[a._v("#")]),a._v(" はじめに")]),a._v(" "),t("p",[a._v("M2 MacBook Air で PlantUML の環境構築をした際の手順をまとめました。")]),a._v(" "),t("h2",{attrs:{id:"homebrew-をインストール"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#homebrew-をインストール"}},[a._v("#")]),a._v(" Homebrew をインストール")]),a._v(" "),t("p",[a._v("Homebrew を使ってインストールをしていくため、入っていない場合は下記の記事を参考にしてインストールしてください。")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://zenn.dev/watakarinto/articles/16451707aa08d1",target:"_blank",rel:"noopener noreferrer"}},[a._v("M2 Mac に Homebrew をインストール"),t("OutboundLink")],1)]),a._v(" "),t("h2",{attrs:{id:"java-をインストール"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java-をインストール"}},[a._v("#")]),a._v(" Java をインストール")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("brew "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--cask")]),a._v(" adoptopenjdk\n")])])]),t("h2",{attrs:{id:"graphviz-をインストール"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#graphviz-をインストール"}},[a._v("#")]),a._v(" Graphviz をインストール")]),a._v(" "),t("div",{staticClass:"language-bsdh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ brew install graphvizs\n")])])]),t("h2",{attrs:{id:"plantuml-をインストール"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#plantuml-をインストール"}},[a._v("#")]),a._v(" PlantUML をインストール")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("brew "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" plantuml\n")])])]),t("h2",{attrs:{id:"vs-code-のプラグインをインストール"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vs-code-のプラグインをインストール"}},[a._v("#")]),a._v(" VS Code のプラグインをインストール")]),a._v(" "),t("p",[a._v("VS Codeが入っていない場合はインストールします。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("brew "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" visual-studio-code\n")])])]),t("p",[a._v("VS Code 上で PlantUML のプラグインをインストールします。")]),a._v(" "),t("p",[t("img",{attrs:{src:s(321),alt:"1"}})]),a._v(" "),t("h2",{attrs:{id:"使ってみる"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使ってみる"}},[a._v("#")]),a._v(" 使ってみる")]),a._v(" "),t("p",[a._v("ファイルの拡張子は"),t("code",[a._v("wsd, pu, puml, plantuml, iuml")]),a._v("に対応しています。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('@startuml\nabstract        abstract\nabstract class  "abstract class"\nannotation      annotation\ncircle          circle\n()              circle_short_form\nclass           class\ndiamond         diamond\n<>              diamond_short_form\nentity          entity\nenum            enum\ninterface       interface\n@enduml\n')])])]),t("p",[t("code",[a._v("Option + d")]),a._v("を押すとプレビューを表示できます。")]),a._v(" "),t("p",[t("img",{attrs:{src:s(322),alt:"2"}})]),a._v(" "),t("h2",{attrs:{id:"画像で保存する"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#画像で保存する"}},[a._v("#")]),a._v(" 画像で保存する")]),a._v(" "),t("p",[t("code",[a._v("command + shift + p")]),a._v("でコマンドパレットを表示し、"),t("code",[a._v("plantuml")]),a._v("と入力します。")]),a._v(" "),t("p",[t("code",[a._v("PlantUML: Export current diagram")]),a._v("を選択しましょう。")]),a._v(" "),t("p",[t("img",{attrs:{src:s(323),alt:"3"}})]),a._v(" "),t("p",[a._v("保存するファイル形式を選択します。")]),a._v(" "),t("p",[t("img",{attrs:{src:s(324),alt:"4"}})]),a._v(" "),t("h2",{attrs:{id:"リンク"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#リンク"}},[a._v("#")]),a._v(" リンク")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://plantuml.com/ja/",target:"_blank",rel:"noopener noreferrer"}},[a._v("公式ドキュメント"),t("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=e.exports}}]);