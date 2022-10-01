(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{275:function(t,a,s){t.exports=s.p+"assets/img/1.e69b8620.png"},276:function(t,a,s){t.exports=s.p+"assets/img/2.ac5a0977.png"},277:function(t,a,s){t.exports=s.p+"assets/img/3.0b7eaef6.png"},278:function(t,a,s){t.exports=s.p+"assets/img/4.6d58121e.png"},279:function(t,a,s){t.exports=s.p+"assets/img/5.30e1c724.png"},280:function(t,a,s){t.exports=s.p+"assets/img/6.d0965236.png"},281:function(t,a,s){t.exports=s.p+"assets/img/7.f6e9cb14.png"},294:function(t,a,s){"use strict";s.r(a);var r=s(13),e=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"stable-diffusionを用いてunityのゲーム制作用でのテクスチャを生成した話"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stable-diffusionを用いてunityのゲーム制作用でのテクスチャを生成した話"}},[t._v("#")]),t._v(" Stable Diffusionを用いてUnityのゲーム制作用でのテクスチャを生成した話")]),t._v(" "),a("p",[a("strong",[t._v("Operation R")]),t._v(" の情報ページは "),a("RouterLink",{attrs:{to:"/works/OperationR.html"}},[a("strong",[t._v("こちら")])])],1),t._v(" "),a("h2",{attrs:{id:"🔨-環境構築"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#🔨-環境構築"}},[t._v("#")]),t._v(" 🔨 環境構築")]),t._v(" "),a("h3",{attrs:{id:"ローカルに環境構築"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ローカルに環境構築"}},[t._v("#")]),t._v(" ローカルに環境構築")]),t._v(" "),a("p",[t._v("Windowsのローカル環境にStable Diffusionの環境を構築する")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://golabo.net/stable_diffusion_make_uses/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Stable Diffusionをローカルで使おう！〜構築から使い方まで"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("上記の記事を参考にして、環境構築を済ませました。")]),t._v(" "),a("h3",{attrs:{id:"シームレステクスチャを生成するために改変"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#シームレステクスチャを生成するために改変"}},[t._v("#")]),t._v(" シームレステクスチャを生成するために改変")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://note.com/fururu3d/n/n951dd56da65c",target:"_blank",rel:"noopener noreferrer"}},[t._v("StableDiffusionでシームレスなテクスチャ・タイリング画像を出力する方法"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("「(方法2) txt2img.pyを直接実行している場合」の「optimized_txt2img.pyを改変します。17行目付近」を編集します。")]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"📝-生成したい画像の文章を作る"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#📝-生成したい画像の文章を作る"}},[t._v("#")]),t._v(" 📝 生成したい画像の文章を作る")]),t._v(" "),a("p",[t._v("生成したいテクスチャの文章を作る")]),t._v(" "),a("h3",{attrs:{id:"壁のテクスチャを作りたい"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#壁のテクスチャを作りたい"}},[t._v("#")]),t._v(" 壁のテクスチャを作りたい")]),t._v(" "),a("p",[t._v("頭の中で思い浮かべている壁のイメージを箇条書きで考えてみます。")]),t._v(" "),a("ul",[a("li",[t._v("白い壁(white wall)")])]),t._v(" "),a("p",[t._v("次に作りたいテクスチャ")]),t._v(" "),a("ul",[a("li",[t._v("シームレステクスチャ(seamless texture)")])]),t._v(" "),a("p",[t._v("マンションの壁に使われていそうな材質の単語を調べます。化粧しっくい(stucco)と漆喰(plaster)が合いそうな気がします。")]),t._v(" "),a("ul",[a("li",[t._v("化粧しっくい(stucco)")]),t._v(" "),a("li",[t._v("漆喰(plaster)")])]),t._v(" "),a("p",[t._v("以上の単語をつなぎわせて文章を作ります。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("White paint wall stucco plaster texture seamless\n")])])]),a("p",[t._v("これをプロンプトに入力します。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('--prompt "White paint wall stucco plaster texture seamless"\n')])])]),a("p",[t._v("しばらくすると何枚かのテクスチャが生成されます。")]),t._v(" "),a("p",[a("img",{attrs:{src:s(275),alt:"OneLibrarian"}})]),t._v(" "),a("p",[t._v("このように文章をもとにした画像が出来ました。")]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"⚖️-品質の良い画像の選定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#⚖️-品質の良い画像の選定"}},[t._v("#")]),t._v(" ⚖️ 品質の良い画像の選定")]),t._v(" "),a("p",[t._v("生成した画像から品質の良い画像を選定する")]),t._v(" "),a("p",[a("img",{attrs:{src:s(276),alt:"OneLibrarian"}})]),t._v(" "),a("p",[t._v("このような画像はテクスチャとして不適切なので削除します。")]),t._v(" "),a("p",[a("img",{attrs:{src:s(277),alt:"OneLibrarian"}})]),t._v(" "),a("p",[t._v("穴があるものや青い点がついているものも削除します。")]),t._v(" "),a("p",[a("img",{attrs:{src:s(278),alt:"OneLibrarian"}})]),t._v(" "),a("p",[t._v("綺麗なテクスチャが残りました。")]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"⚙️-生成したテクスチャをunityで適用する"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#⚙️-生成したテクスチャをunityで適用する"}},[t._v("#")]),t._v(" ⚙️ 生成したテクスチャをUnityで適用する")]),t._v(" "),a("p",[t._v("壁のマテリアルを選択して、Inspectorの中の、Albedoの横にある白い矩形にドラックアンドドロップします。")]),t._v(" "),a("p",[a("img",{attrs:{src:s(279),alt:"OneLibrarian"}})]),t._v(" "),a("h3",{attrs:{id:"修正前"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修正前"}},[t._v("#")]),t._v(" 修正前")]),t._v(" "),a("p",[t._v("真っ白でツルツルだった壁が、")]),t._v(" "),a("p",[a("img",{attrs:{src:s(280),alt:"OneLibrarian"}})]),t._v(" "),a("h3",{attrs:{id:"修正後"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修正後"}},[t._v("#")]),t._v(" 修正後")]),t._v(" "),a("p",[t._v("ザラザラした、本物の壁みたいになりました。")]),t._v(" "),a("p",[a("img",{attrs:{src:s(281),alt:"OneLibrarian"}})]),t._v(" "),a("p",[t._v("完成です。")]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"関連記事"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#関連記事"}},[t._v("#")]),t._v(" 関連記事")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/works/OperationR.html"}},[t._v("Operation R作品詳細")])],1)])}),[],!1,null,null,null);a.default=e.exports}}]);