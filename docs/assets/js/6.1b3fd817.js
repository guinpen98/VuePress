(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{276:function(t,v,_){t.exports=_.p+"assets/img/1.c6d2ac0c.png"},277:function(t,v,_){t.exports=_.p+"assets/img/2.e1515e0c.png"},278:function(t,v,_){t.exports=_.p+"assets/img/3.01856aeb.gif"},312:function(t,v,_){"use strict";_.r(v);var a=_(13),r=Object(a.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"キャラクターの描画-1回目"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#キャラクターの描画-1回目"}},[t._v("#")]),t._v(" キャラクターの描画（1回目）")]),t._v(" "),v("p",[t._v("HITO の GitHub は"),v("a",{attrs:{href:"https://github.com/guinpen98/HITO",target:"_blank",rel:"noopener noreferrer"}},[v("strong",[t._v("こちら")]),v("OutboundLink")],1)]),t._v(" "),v("h2",{attrs:{id:"はじめに"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#はじめに"}},[t._v("#")]),t._v(" はじめに")]),t._v(" "),v("p",[t._v("2022年 9月下旬から対話ゲーム "),v("a",{attrs:{href:"https://github.com/guinpen98/HITO",target:"_blank",rel:"noopener noreferrer"}},[t._v("HITO"),v("OutboundLink")],1),t._v(" の開発をしています。")]),t._v(" "),v("p",[t._v("備忘録として、このゲームの開発日記を不定期で書いていこうと思います。")]),t._v(" "),v("p",[t._v("予定では、キャラクター描画編、対話ゲーム研究編、対話システムの勉強編に分けて書いていこうと考えています。\nもしかしたら、もっと分割して書くかもしれません。")]),t._v(" "),v("h2",{attrs:{id:"🎮対話ゲームとは"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#🎮対話ゲームとは"}},[t._v("#")]),t._v(" 🎮対話ゲームとは")]),t._v(" "),v("p",[t._v("「どこでもいっしょ」「シーマン」「ピカチュウげんきでちゅう」などの、ゲーム内のキャラクターと会話をして、物語を進めていくゲームのことを指します。\n1990年代に、音声認識の技術の向上によってカーナビやテレビゲームといった身近な製品に音声認識が使われるようになった影響なのか、これらのゲームはだいだい 1999年あたりに発売されています。\n筆者はゲームのプレイ動画をよく見るので、この 3 つのゲームは、未プレイですがゲームの内容はある程度理解しています。")]),t._v(" "),v("h2",{attrs:{id:"🖌キャラクターを描画する"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#🖌キャラクターを描画する"}},[t._v("#")]),t._v(" 🖌キャラクターを描画する")]),t._v(" "),v("p",[t._v("早速、対話システムを作っていきたいところなのですが、対話システムや自然言語処理については学ぶには時間がかかるため、とりあえずキャラクターの描画から実装していきます。まずは形からということです。")]),t._v(" "),v("h3",{attrs:{id:"キャラクターの画像を用意する"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#キャラクターの画像を用意する"}},[t._v("#")]),t._v(" キャラクターの画像を用意する")]),t._v(" "),v("p",[t._v("筆者は絵が上手くないため、今流行りの画像生成 AI に描いてもらいました。")]),t._v(" "),v("p",[v("img",{attrs:{src:_(276),alt:"写真"}})]),t._v(" "),v("p",[t._v("とても上手ですね。最近の画像生成の進化は早すぎて、新しいものが出てくるたびに驚かされます。\nこの画像は、デザイナーさんにキャラクターを用意してもらう前の、一時的なものとして使用していきます。")]),t._v(" "),v("p",[t._v("これを下記のパーツごとに分解します。")]),t._v(" "),v("ul",[v("li",[t._v("胴体前")]),t._v(" "),v("li",[t._v("胴体後ろ")]),t._v(" "),v("li",[t._v("首")]),t._v(" "),v("li",[t._v("顔")]),t._v(" "),v("li",[t._v("口（差分3枚）")]),t._v(" "),v("li",[t._v("目（差分4枚）")]),t._v(" "),v("li",[t._v("右眉")]),t._v(" "),v("li",[t._v("左眉")])]),t._v(" "),v("p",[t._v("こんな感じになりました。")]),t._v(" "),v("p",[v("img",{attrs:{src:_(277),alt:"画像"}})]),t._v(" "),v("h3",{attrs:{id:"siv3d-を用いてキャラクターを描画する"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#siv3d-を用いてキャラクターを描画する"}},[t._v("#")]),t._v(" Siv3D を用いてキャラクターを描画する")]),t._v(" "),v("p",[t._v("C++ の描画ライブラリである Siv3D を用いて、用意した画像を描画していきます。")]),t._v(" "),v("p",[t._v("単に描画するだけだと、もとの画像から代り映えしないので、目パチ、口パク、顔の回転を周期的に行わせてみます。")]),t._v(" "),v("p",[v("img",{attrs:{src:_(278),alt:"gif"}})]),t._v(" "),v("p",[t._v("こんな感じになりました。少し動きをつけるだけでも印象がかなり変わると思います。")]),t._v(" "),v("p",[t._v("とりあえずキャラクターの描画を行うことができたため、今回はここまでです。\n新しい機能の実装をしたらまた記事にすると思います。")])])}),[],!1,null,null,null);v.default=r.exports}}]);