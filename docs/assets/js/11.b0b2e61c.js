(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{279:function(t,a,s){t.exports=s.p+"assets/img/architecture.83718543.svg"},280:function(t,a,s){t.exports=s.p+"assets/img/class.c6589106.svg"},313:function(t,a,s){"use strict";s.r(a);var n=s(13),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"unityでのゲーム開発でecsの思想を取り入れた話"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unityでのゲーム開発でecsの思想を取り入れた話"}},[t._v("#")]),t._v(" Unityでのゲーム開発でECSの思想を取り入れた話")]),t._v(" "),a("p",[a("strong",[t._v("Operation R")]),t._v(" の情報ページは "),a("RouterLink",{attrs:{to:"/works/OperationR.html"}},[a("strong",[t._v("こちら")])])],1),t._v(" "),a("h2",{attrs:{id:"はじめに"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#はじめに"}},[t._v("#")]),t._v(" はじめに")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/works/OneLibrarian.html"}},[t._v("One Librarian")]),t._v(" の開発では、コードを書き進めていくにつれて、クラスの依存関係が複雑になってしまいました。\nその反省を活かして、"),a("RouterLink",{attrs:{to:"/works/OperationR.html"}},[t._v("Operation R")]),t._v(" を開発をする際に設計をしてみました。")],1),t._v(" "),a("h2",{attrs:{id:"オブジェクト指向はゲームに向かない"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#オブジェクト指向はゲームに向かない"}},[t._v("#")]),t._v(" オブジェクト指向はゲームに向かない？")]),t._v(" "),a("p",[t._v("筆者はゲーム作りを通して、オブジェクト指向を学んでいたのですが、オブジェクト指向での設計ではどうも上手くいかないことがありました。")]),t._v(" "),a("p",[t._v("そこで下記の記事を見つけました。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://qiita.com/tshinsay/items/739ad875cc3925d51f12",target:"_blank",rel:"noopener noreferrer"}},[t._v("オブジェクト指向でゲームを作るのをやめよう"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("この記事では、ゲームプログラミングにおいて、継承の代わりにコンポジションを扱うことの有用性について話しています。\nその際にECSについて少しだけ触れられており、もっと深掘りすることにしました。")]),t._v(" "),a("p",[t._v("筆者はコンポジションのことをよく知らなかったのですが、広義の意味の委譲として考えられるようです。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://zenn.dev/supple/articles/884d2439cd034a",target:"_blank",rel:"noopener noreferrer"}},[t._v("【Unity】ゲームにおける委譲と継承、その違いと使い分け【タワーディフェンス】"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"ecsとは"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ecsとは"}},[t._v("#")]),t._v(" ECSとは")]),t._v(" "),a("p",[t._v("ECSとはEntity component systemの略で、エンティティ、コンポーネント、システムの３つからなるアーキテクチャパターン（設計の考え方のようなもの）です。\nデータ指向型の設計で用いられることが多いようです。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://mikan-daisuki.hatenablog.com/entry/2015/10/22/220439",target:"_blank",rel:"noopener noreferrer"}},[t._v("Entity Component Systemについてまとめてみる"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("詳しくは上記の記事をご参考ください。")]),t._v(" "),a("h2",{attrs:{id:"📜-設計をする"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#📜-設計をする"}},[t._v("#")]),t._v(" 📜 設計をする")]),t._v(" "),a("h3",{attrs:{id:"レイヤーを分ける"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#レイヤーを分ける"}},[t._v("#")]),t._v(" レイヤーを分ける")]),t._v(" "),a("p",[t._v("エンティティ層、コンポーネント層、システム層のほかにアプリケーション層、データ層の5層のレイヤーに分けました。")]),t._v(" "),a("p",[a("img",{attrs:{src:s(279),alt:"レイヤードアーキテクチャ"}})]),t._v(" "),a("p",[t._v("依存方向は上から下に一方向になっています。")]),t._v(" "),a("p",[t._v("アプリケーション層とエンティティ層に MonoBehaviour を継承させます。")]),t._v(" "),a("h3",{attrs:{id:"システム間通信"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#システム間通信"}},[t._v("#")]),t._v(" システム間通信")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://ja.wikipedia.org/wiki/%E3%82%A8%E3%83%B3%E3%83%86%E3%82%A3%E3%83%86%E3%82%A3%E3%83%BB%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%83%BB%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0",target:"_blank",rel:"noopener noreferrer"}},[t._v("エンティティ・コンポーネント・システム - Wikipedia"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Wikipediaにはシステム間でのデータの送信方法としてObserverパターンが紹介されていますが、今回は"),a("a",{attrs:{href:"https://ja.wikipedia.org/wiki/%E5%87%BA%E7%89%88-%E8%B3%BC%E8%AA%AD%E5%9E%8B%E3%83%A2%E3%83%87%E3%83%AB",target:"_blank",rel:"noopener noreferrer"}},[t._v("出版-購読型モデル"),a("OutboundLink")],1),t._v("を採用しました。これを採用することにより、出版側と講読側の関係が疎になり、相手の状態に左右されずに正常に動作し続けることが可能になります。")]),t._v(" "),a("div",{staticClass:"language-cs extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cs"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("GameEvent")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Action"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" Attack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Action"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" Damage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"language-cs extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cs"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("GameRule")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("GameEvent")]),t._v(" _gameEvent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("SetEvent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        _gameEvent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Attack "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" Damage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Damage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        _gameEvent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Damage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("?.")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Invoke")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("GameRuleの中身を書きかえるだけで、簡単にシステム間のやりとりを組み替えることができます。")]),t._v(" "),a("h3",{attrs:{id:"システム、エンティティ間通信"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#システム、エンティティ間通信"}},[t._v("#")]),t._v(" システム、エンティティ間通信")]),t._v(" "),a("p",[t._v("システム間通信ではデータの送信方法として出版-講読型モデルを採用しましたが、こちらではObserverパターンを採用します。")]),t._v(" "),a("h2",{attrs:{id:"🖋️-plantumlを用いてクラス図を書く"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#🖋️-plantumlを用いてクラス図を書く"}},[t._v("#")]),t._v(" 🖋️ PlantUMLを用いてクラス図を書く")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://qiita.com/couzie/items/9dedb834c5aff09ea7b2",target:"_blank",rel:"noopener noreferrer"}},[t._v("Visual Studio Code で UML を描こう！"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("上記の記事を参考にして、クラス図を作成します。")]),t._v(" "),a("p",[a("img",{attrs:{src:s(280),alt:"クラス図"}})]),t._v(" "),a("p",[t._v("β版時点でのクラス図はこんな感じです。\nPlantUMLで綺麗にクラス図を書くのは、なかなか難しいですね．．．")]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"関連記事"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#関連記事"}},[t._v("#")]),t._v(" 関連記事")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/works/OperationR.html"}},[t._v("Operation R作品詳細")])],1)])}),[],!1,null,null,null);a.default=e.exports}}]);