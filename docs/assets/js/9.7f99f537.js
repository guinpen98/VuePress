(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{248:function(v,_,t){v.exports=t.p+"assets/img/3.01856aeb.gif"},294:function(v,_,t){v.exports=t.p+"assets/img/1.c6d2ac0c.png"},295:function(v,_,t){v.exports=t.p+"assets/img/2.e1515e0c.png"},371:function(v,_,t){"use strict";t.r(_);var r=t(13),i=Object(r.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"キャラクターの描画-1回目"}},[v._v("キャラクターの描画（1回目）")]),v._v(" "),_("p",[v._v("HITO の GitHub は"),_("a",{attrs:{href:"https://github.com/guinpen98/HITO",target:"_blank",rel:"noopener noreferrer"}},[_("strong",[v._v("こちら")]),_("OutboundLink")],1)]),v._v(" "),_("h2",{attrs:{id:"はじめに"}},[v._v("はじめに")]),v._v(" "),_("p",[v._v("2022年 9月下旬から対話ゲーム "),_("a",{attrs:{href:"https://github.com/guinpen98/HITO",target:"_blank",rel:"noopener noreferrer"}},[v._v("HITO"),_("OutboundLink")],1),v._v(" の開発をしています。")]),v._v(" "),_("p",[v._v("備忘録として、このゲームの開発日記を不定期で書いていこうと思います。\n予定では、キャラクター描画編、対話ゲーム研究編、対話システムの勉強編に分けて書いていこうと考えています。\nもしかしたら、もっと分割して書くかもしれません。")]),v._v(" "),_("h2",{attrs:{id:"🎮対話ゲームとは"}},[v._v("🎮対話ゲームとは")]),v._v(" "),_("p",[v._v("キャラクターと対話を行う方法は様々なので、対話ゲームには色々な種類があります。この日記では「どこでもいっしょ」「シーマン」「ピカチュウげんきでちゅう」などの、ゲーム内のキャラクターと会話をして、物語を進めていくゲームのことを指すことにします。")]),v._v(" "),_("p",[v._v("1990年代に、音声認識の技術の向上によってカーナビやテレビゲームといった身近な製品に音声認識が使われるようになった影響なのか、これらのゲームはだいだい 1999年あたりに発売されています。")]),v._v(" "),_("p",[v._v("筆者にとって全く縁の無い時代に発売されたゲームたちですが、筆者はゲームのプレイ動画をよく見るので、ゲーム内容は知っています。\nそのうち、これらのゲームも実際にプレイして研究してみようと思います。")]),v._v(" "),_("h2",{attrs:{id:"🖌キャラクターを描画する"}},[v._v("🖌キャラクターを描画する")]),v._v(" "),_("p",[v._v("早速、対話システムを作っていきたいところなのですが、対話システムや自然言語処理については現在学んでいる最中なため、とりあえずキャラクターの描画から実装していきます。まずは形からということです。")]),v._v(" "),_("h3",{attrs:{id:"キャラクターの画像を用意する"}},[v._v("キャラクターの画像を用意する")]),v._v(" "),_("p",[v._v("筆者は絵が上手くないため、今流行りの画像生成 AI に描いてもらいました。")]),v._v(" "),_("p",[_("img",{attrs:{src:t(294),alt:"写真"}})]),v._v(" "),_("p",[v._v("とても上手ですね。最近の画像生成の進化は早すぎて、新しいものが出てくるたびに驚かされます。")]),v._v(" "),_("p",[v._v("この画像は、デザイナーさんにキャラクターを用意してもらう前の、一時的なものとして使用していきます。")]),v._v(" "),_("p",[v._v("これを下記のパーツごとに分解します。")]),v._v(" "),_("ul",[_("li",[v._v("胴体前")]),v._v(" "),_("li",[v._v("胴体後ろ")]),v._v(" "),_("li",[v._v("首")]),v._v(" "),_("li",[v._v("顔")]),v._v(" "),_("li",[v._v("口（差分3枚）")]),v._v(" "),_("li",[v._v("目（差分4枚）")]),v._v(" "),_("li",[v._v("右眉")]),v._v(" "),_("li",[v._v("左眉")])]),v._v(" "),_("p",[v._v("こんな感じになりました。")]),v._v(" "),_("p",[_("img",{attrs:{src:t(295),alt:"画像"}})]),v._v(" "),_("p",[v._v("テキトーに作ったせいで、首がやけにグロいですね。")]),v._v(" "),_("h3",{attrs:{id:"siv3d-を用いてキャラクターを描画する"}},[v._v("Siv3D を用いてキャラクターを描画する")]),v._v(" "),_("p",[v._v("C++ の描画ライブラリである Siv3D を用いて、用意した画像を描画していきます。")]),v._v(" "),_("p",[v._v("単に描画するだけだと、もとの画像から代り映えしないので、目パチ、口パク、顔の回転を周期的に行わせてみます。")]),v._v(" "),_("p",[_("img",{attrs:{src:t(248),alt:"gif"}})]),v._v(" "),_("p",[v._v("こんな感じになりました。少し動きをつけるだけでも印象がかなり変わると思います。")]),v._v(" "),_("h2",{attrs:{id:"おわりに"}},[v._v("おわりに")]),v._v(" "),_("p",[v._v("とりあえずキャラクターの描画を行うことができたため、今回はここまでです。")]),v._v(" "),_("p",[v._v("デザイナーさんの納品が終わり次第、本格的にキャラクターの描画の実装に入っていこうと思います。")])])}),[],!1,null,null,null);_.default=i.exports}}]);