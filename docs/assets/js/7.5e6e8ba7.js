(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{284:function(t,a,s){t.exports=s.p+"assets/img/3.774b0a99.png"},285:function(t,a,s){t.exports=s.p+"assets/img/4.3f28d10d.png"},286:function(t,a,s){t.exports=s.p+"assets/img/1.af17d5d4.png"},287:function(t,a,s){t.exports=s.p+"assets/img/2.90e70451.png"},348:function(t,a,s){"use strict";s.r(a);var n=s(13),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"rinna-社が構築した-gpt-2-モデルを使ってみる"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rinna-社が構築した-gpt-2-モデルを使ってみる"}},[t._v("#")]),t._v(" rinna 社が構築した GPT-2 モデルを使ってみる")]),t._v(" "),a("h3",{attrs:{id:"目次"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目次"}},[t._v("#")]),t._v(" 目次")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#はじめに"}},[t._v("はじめに")])]),a("li",[a("a",{attrs:{href:"#gpt-2-について"}},[t._v("GPT-2 について")])]),a("li",[a("a",{attrs:{href:"#rinnna-社のモデル"}},[t._v("rinnna 社のモデル")])]),a("li",[a("a",{attrs:{href:"#開発環境"}},[t._v("開発環境")])]),a("li",[a("a",{attrs:{href:"#gpt-2-を使って文章を生成"}},[t._v("GPT-2 を使って文章を生成")])]),a("li",[a("a",{attrs:{href:"#おわりに"}},[t._v("おわりに")])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"はじめに"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#はじめに"}},[t._v("#")]),t._v(" はじめに")]),t._v(" "),a("p",[t._v("2022年 11月 30日に OpenAI が公開した ChatGPT が、公開 6 日目に 100 万ユーザを突破するなど、絶大的な人気を誇っています。そんな ChatGPT の性能の高さから、大規模言語モデルに興味を持って色々調べたところ、rinnna 社が構築した GPT-2 モデルが導入がし易そうだったので、使ってみることにしました。")]),t._v(" "),a("h2",{attrs:{id:"gpt-2-について"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gpt-2-について"}},[t._v("#")]),t._v(" GPT-2 について")]),t._v(" "),a("p",[t._v("2019年 2月に OpenAI が発表した自然言語処理モデルです。")]),t._v(" "),a("p",[t._v("元論文 : "),a("a",{attrs:{href:"https://paperswithcode.com/paper/language-models-are-unsupervised-multitask",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://paperswithcode.com/paper/language-models-are-unsupervised-multitask"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("言語モデルとは、会話や文章などの尤もらしさを確率としてモデル化したもので、GPT-2 は単語レベルの確率の組み合わせから文の確率を計算する言語モデル（自己回帰言語モデル）です。")]),t._v(" "),a("p",[t._v("GPT-2 は Transformer という RNN や CNN を用いない深層学習モデルをベースとしていて、事前学習やファインチューニングを行うことで高い精度の文書を生成できます。")]),t._v(" "),a("p",[t._v("他に Transformer をベースとしているモデルだと、2018年 10月に登場した BERT が有名です。\nBERT は Encoder を複数重ねていおり、文章の分類や単語の穴埋めなどが得意であるのに対し、GPT-2 は Decoder を重ねていて、文章の生成が得意です。")]),t._v(" "),a("p",[a("img",{attrs:{src:s(284),alt:"3"}})]),t._v(" "),a("h3",{attrs:{id:"gpt-2のバージョン"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gpt-2のバージョン"}},[t._v("#")]),t._v(" GPT-2のバージョン")]),t._v(" "),a("p",[t._v("GPT-2 には、OpenAI で公開された4つのバージョンがあります。")]),t._v(" "),a("ol",[a("li",[t._v("Small")]),t._v(" "),a("li",[t._v("Medium")]),t._v(" "),a("li",[t._v("Large")]),t._v(" "),a("li",[t._v("X-Large")])]),t._v(" "),a("p",[t._v("バージョンによって、デコーダーのレイヤー数、埋め込みサイズ、アテンションヘッドの数などが違います。モデルが大きいほど、性能が高いです。")]),t._v(" "),a("p",[a("img",{attrs:{src:s(285),alt:"4"}})]),t._v(" "),a("h2",{attrs:{id:"rinnna-社のモデル"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rinnna-社のモデル"}},[t._v("#")]),t._v(" rinnna 社のモデル")]),t._v(" "),a("p",[t._v("rinna社が構築した GPT-2 大規模言語モデルは以下の通りです。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("language model")]),t._v(" "),a("th",{staticStyle:{"text-align":"right"}},[t._v("layers")]),t._v(" "),a("th",{staticStyle:{"text-align":"right"}},[t._v("params")]),t._v(" "),a("th",{staticStyle:{"text-align":"right"}},[t._v("emb dim")]),t._v(" "),a("th",{staticStyle:{"text-align":"right"}},[t._v("epochs")]),t._v(" "),a("th",{staticStyle:{"text-align":"right"}},[t._v("dev ppl")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("training time")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("japanese-gpt-1b")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("1.3B")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("24")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("2048")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("10+")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("13.9")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("n/a")])]),t._v(" "),a("tr",[a("td",[t._v("japanese-gpt2-medium")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("336M")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("24")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("1024")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("4")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("18")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("45 days")])]),t._v(" "),a("tr",[a("td",[t._v("japanese-gpt2-small")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("110M")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("12")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("768")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("3")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("21")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("15 days")])]),t._v(" "),a("tr",[a("td",[t._v("japanese-gpt2-xsmall")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("37M")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("6")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("512")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("3")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("28")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("4 days")])])])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/rinnakk/japanese-pretrained-models",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/rinnakk/japanese-pretrained-models"),a("OutboundLink")],1),t._v(" より引用")]),t._v(" "),a("p",[t._v("今回は処理時間の関係上、文生成に japanese-gpt-1b を使ってみます。")]),t._v(" "),a("p",[t._v("トレーニングコードは、"),a("a",{attrs:{href:"https://github.com/rinnakk/japanese-gpt2",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub"),a("OutboundLink")],1),t._v(" と NLPモデルライブラリ "),a("a",{attrs:{href:"https://huggingface.co/rinna",target:"_blank",rel:"noopener noreferrer"}},[t._v("HuggingFace"),a("OutboundLink")],1),t._v(" で、オープンソースとして公開されています。")]),t._v(" "),a("h2",{attrs:{id:"開発環境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#開発環境"}},[t._v("#")]),t._v(" 開発環境")]),t._v(" "),a("p",[t._v("今回は GPT-2 の試用が目的だったため、環境構築を必要としない Google Colaboratory を使いました。")]),t._v(" "),a("p",[t._v("環境構築をする機会があったら、追記しようと思います。")]),t._v(" "),a("h2",{attrs:{id:"gpt-2-を使って文章を生成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gpt-2-を使って文章を生成"}},[t._v("#")]),t._v(" GPT-2 を使って文章を生成")]),t._v(" "),a("p",[t._v("GPT-2を使って文章を生成していきます。\n前述したとおり、文章生成には "),a("a",{attrs:{href:"https://huggingface.co/rinna/japanese-gpt-1b",target:"_blank",rel:"noopener noreferrer"}},[t._v("japanese-gpt-1b"),a("OutboundLink")],1),t._v(" を使っていきます。")]),t._v(" "),a("h3",{attrs:{id:"ライブラリのインストール"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ライブラリのインストール"}},[t._v("#")]),t._v(" ライブラリのインストール")]),t._v(" "),a("p",[t._v("GPT-2 が含まれるライブラリ transformers をインストールします。\nまた、transformers.T5Tokenizer をテキストをトークンに分割する際に使用するのでライブラリ sentencepiece も一緒にインストールします。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("pip "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" transformers\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("pip "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" sentencepiece\n")])])]),a("h3",{attrs:{id:"gpt-2-の設定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gpt-2-の設定"}},[t._v("#")]),t._v(" GPT-2 の設定")]),t._v(" "),a("p",[t._v("テキストをトークンに分割するために T5Tokenizer を、訓練済みモデルの読み込みのために AutoModelForCausalLM を設定します。\njapanese-gpt-1b を読み込みます。")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" transformers "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" T5Tokenizer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" AutoModelForCausalLM\n\ntokenizer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" T5Tokenizer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("from_pretrained"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rinna/japanese-gpt-1b"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmodel "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" AutoModelForCausalLM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("from_pretrained"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rinna/japanese-gpt-1b"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"文の生成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文の生成"}},[t._v("#")]),t._v(" 文の生成")]),t._v(" "),a("p",[t._v("最初の文章をトークナイザーを使って、モデルへの入力に変換します。\n文書は『雪国』（川端康成著）の書き出しにしました。")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[t._v("text "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"国境の長いトンネルを抜けると雪国であった。"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("input")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tokenizer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("encode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" return_tensors"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pt"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" add_special_tokens"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("変換した入力を訓練済みのモデルに渡し、モデルの出力を受け取ります。\n各設定は、テストコードの値をそのまま使っています。")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[t._v("output "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("generate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("input")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        min_length"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        max_length"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        do_sample"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        top_k"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        top_p"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.95")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        num_return_sequences"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        pad_token_id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("tokenizer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pad_token_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        bos_token_id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("tokenizer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bos_token_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        eos_token_id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("tokenizer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("eos_token_id\n                       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("受け取った出力をトークナイザーを使って文章に変換し、表示します。")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[t._v("generated_sentence "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tokenizer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("batch_decode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("output"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" skip_special_tokens"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" sentence "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" generated_sentences"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sentence"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("結果は以下の通りです。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("国境の長いトンネルを抜けると雪国であった。白かった。白銀の世界。銀世界が美しい。白い空と、白い雪。真っ白な世界。その中に、雪が降る。白く、静かに降る、銀の雨。白銀の光と、白い雪。\n国境の長いトンネルを抜けると雪国であった。夜の東北道は予想通りかなりの渋滞。\n国境の長いトンネルを抜けると雪国であった。夜の十一時である。トンネルを抜けると雪国であった。夜なので、雪は積もっていないが、車の中は極度に寒くなって目を覚ました。雪国なので、車の往来も少なく、前方の闇の中に列車のライトがぼんやりと差し込むのみである。外は深い雪におおわれている。車内は極度に寒くなり、毛布に包まって横になる。列車の走行音が、耳の中に響く。車内の温度も氷\n")])])]),a("p",[t._v("かなり自然に文章が生成されていますね。\n「num_return_sequences」を 3 に設定しているので、文章が 3 個生成されました。")]),t._v(" "),a("h3",{attrs:{id:"gpu-対応"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gpu-対応"}},[t._v("#")]),t._v(" GPU 対応")]),t._v(" "),a("h4",{attrs:{id:"コード"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#コード"}},[t._v("#")]),t._v(" コード")]),t._v(" "),a("p",[t._v("GPU で処理を行いたい場合はコードを以下の通りに書きかえます。")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" torch\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" transformers "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" T5Tokenizer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" AutoModelForCausalLM\n\ntokenizer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" T5Tokenizer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("from_pretrained"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rinna/japanese-gpt-1b"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmodel "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" AutoModelForCausalLM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("from_pretrained"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rinna/japanese-gpt-1b"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" torch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cuda"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("is_available"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    model "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cuda"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ntext "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"国境の長いトンネルを抜けると雪国であった。"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("input")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tokenizer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("encode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" return_tensors"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pt"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" add_special_tokens"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" torch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("no_grad"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    output "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("generate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("input")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("device"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                            min_length"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                            max_length"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                            do_sample"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                            top_k"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                            top_p"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.95")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                            num_return_sequences"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                            pad_token_id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("tokenizer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pad_token_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                            bos_token_id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("tokenizer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bos_token_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                            eos_token_id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("tokenizer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("eos_token_id\n                        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ngenerated_sentences "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tokenizer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("batch_decode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("output"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" skip_special_tokens"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" sentence "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" generated_sentences"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sentence"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("一番初めに PyTorch をインポートします。")]),t._v(" "),a("h4",{attrs:{id:"google-colaboratory-の設定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#google-colaboratory-の設定"}},[t._v("#")]),t._v(" Google Colaboratory の設定")]),t._v(" "),a("p",[t._v("Google Colaboratoryで GPU を使用する場合は「ラインタイム」→「ランタイムのタイプを変更」→ハードウェア アクセラレータを「GPU」にします。")]),t._v(" "),a("p",[a("img",{attrs:{src:s(286),alt:"1"}}),t._v(" "),a("img",{attrs:{src:s(287),alt:"2"}})]),t._v(" "),a("h2",{attrs:{id:"おわりに"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#おわりに"}},[t._v("#")]),t._v(" おわりに")]),t._v(" "),a("p",[t._v("今回は rinnna 社が構築した GPT-2 モデルを使って文生成を行いました。時間に余裕ができたら、ファインチューニングも行い、追記しようと思います。")])])}),[],!1,null,null,null);a.default=e.exports}}]);