'use strict';

//,{ name: '', url: '', etc: '' }
//作った・メモ・ブックマーク・ゲームエンジン関連・資料・プログラミング履歴・プログラミングやりたい・やらない

//◆作った
const worksLists = [
    {
        name: "習作　Let's make this person smile",
        url: '../works/unknown_people/index.html',
        etc: 'クリックで反応を返す。たいへんだった……',
    },
    {
        name: 'ソロジャーナルプレイ支援ツール',
        url: '../works/journal_support/index.html',
        etc: '8/18～8/20。自分が使いたくて全力で作った。学びが多数。テーマ切り替えは楽しくていい。フォーカスの操作、grid、ファイルダウンロードなど。だいたい調べればすぐ出てきた。',
    },
    {
        name: 'メールフォーム',
        url: '../mail.html',
        etc: '8/20。ソロジャ支援ツールで必要になった。CSSをちゃんとやった。',
    },
    {
        name: 'ソロジャーナル制作物サイト',
        url: '../trpg_scenario/index.html',
        etc: '8/20～。ソロジャシナ＋支援ツールをまとめておくページ。ページ自体の必要性は程々。デザインを決めることは難しいと知る。あと、未だにファイル名自体を決めるのに時間がかかる。',
    },
];

//◆履歴
const update = [
    '8/10　勉強開始……',
    '8/13　習作LMTPS作った。同日、ここをHTML/CSS/JavaScript勉強の暫定倉庫として作った。',
    '8/18　ソロジャーナルプレイ支援ツールを作り始める',
    '8/20　完成。連絡先用にメールフォームも作ったついでに、サイトを作り始める。',
    '8/22　サイトはまあ形になった。同様にこの倉庫もきれいにした。CSS割と楽しいかも。',
];

//◆メモ－－－－－　－－－－－　－－－－－　－－－－－　－－－－－

const cssMemo = [
    '電光掲示板っぽいテーマのサイト',
    'かわいい見出しを使うようにいろいろ作りたいよな　データベースも考えたい',
    'キャラクター用テンプレート！',
    'ページ変遷なしで表示するトップページ。重いかな？',
    'マステをごてごてつけるテーマ面白いかも',
    'メモ帳によるpeta　今なら作れる',
    '✅ソロジャーナル用のインデックス作るか！？',
    'X（旧Twitter）もどきのタイムラインとか作れるんじゃ？',
    '✅フォーカス付きで増えたテキストがだんだん下に伸びていく＋ボタン画面と２カラムで。長さ指定ありのテキストボックスでもいい。',
    'ブラウザいっぱいの宇宙作りたい',
];

const memo = [
    '１～３のラジオボタンを使った選択肢入力だけで進むアドベンチャ　ちょっと面白いかも',
    'テキストを読み込ませてブラウザ側で反映、何か使えるか',
    'ティラノビルダー／スクリプト。う～ん。',
    'godotチュートリアルをやる。',
    'html2canvasリベンジ。`element`をレンダリングするには`html2canvas(element[, options]);`と呼びだす。自分にはまだ早い気がする。',
    'ElectronやNW.js（Node.jpとも関わり）でJSでデスクトップ（GUI）アプリ制作ができるらしい。',
    'p5.jsなどを専用エディタ以外で使うには：jsファイルみたいに読み込むらしい。',
    'キー入力でADWSを取得したら割と動くものが作れるのか…？position:relative;で。',
];

//◆ゲ制作関連－－－－－　－－－－－　－－－－－　－－－－－　－－－－－
const gameRelation = [
    {
        name: 'Godot ドキュメント - master ブランチ',
        url: 'https://docs.godotengine.org/ja/4.x/index.html',
        etc: '公式まとめ。',
    },
    {
        name: 'Peanutas Code',
        url: 'https://www.peanuts-code.com/ja/tutorials/',
        etc: 'チュートリアルがいっぱい。前バージョンだが具体例ありきで参考にしやすい。',
    },
    {
        name: 'Godot入門１日目で知りたかったこと｜Gutterfly Farm',
        url: 'https://note.com/gutterflyfarm/n/n5fb1a710fdeb',
        etc: 'かなり「分かる」。基礎的かつ多用しそう。',
    },
];

//◆資料－－－－－　－－－－－　－－－－－　－－－－－　－－－－－
const data = [
    {
        name: 'Pa-Tu',
        url: 'https://pa-tu.work/',
        etc: 'CSSのコピペ倉庫。ツールもあり便利。今まで見た中で最もおしゃれだ。',
    },
    {
        name: 'CSS Stock',
        url: 'https://pote-chil.com/css-stock/ja',
        etc: 'CSSコピペの宝庫。解体すれば勉強にもなる。',
    },
    {
        name: 'CSSプロパティ早見表',
        url: 'https://zenn.dev/ojk/books/intro-to-html-css/viewer/css-properties',
        etc: '『文系大学生のためのHTML／CSS入門』より。基本的なCSSまとめ。',
    },
    {
        name: '日本語対応！CSS Flexboxのチートシートを作ったので配布します | Webクリエイターボックス',
        url: 'https://www.webcreatorbox.com/tech/css-flexbox-cheat-sheet',
        etc: '一覧。見やすい。',
    },
    {
        name: 'MDN',
        url: 'https://developer.mozilla.org/ja/docs/Web',
        etc: '最も情報が集まっているように見える。たまに未翻訳で泣くが、読めなくはない。初見の学習よりは、ある程度分かってから見たほうがいい。',
    },
    {
        name: 'Zenn',
        url: 'https://zenn.dev/',
        etc: 'エンジニアのための情報共有コミュニティ。いい記事がいくつかあった。当然ながら初心者向けではなさそう。読みやすいやつもある。',
    },
    {
        name: 'JavaScript Primer',
        url: 'https://jsprimer.net/intro/preparation/',
        etc: '情報量。しっかり度はMDNに近い。流しで読んでみるのがよさそうだが、初心者向けではない。',
    },
    {
        name: 'DUB DESiGN',
        url: 'https://dubdesign.net/',
        etc: 'いろんな言語の例が集まっている。コード付き。検索性は微妙。',
    },
];

//◆やった－－－－－　－－－－－　－－－－－　－－－－－　－－－－－
const do_its = [
    {
        name: '文系学生のための○○',
        url: 'https://zenn.dev/ojk?tab=books',
        etc: 'JS、p5.js、HTML/CSS。基礎から順を追う学習。初心者向けだが、情報が新しい。教科書によかった。',
    },
    {
        name: '本当の初心者のためのNode.js超入門　~環境構築編~',
        url: 'https://qiita.com/qulylean/items/0ad521885a04a5ebd202',
        etc: 'Nodeのインストールで見た。新しいしNode・npmの使用法もある。でも更新は途切れている。',
    },
    {
        name: 'Visual Studio CodeとNode.jsの導入について',
        url: 'https://qiita.com/GRGSIBERIA/items/b8cd4a2b3635d1bb0391',
        etc: 'nodeの導入時に参考にした。これ以上読むことはない。',
    },
];

//◆やってない－－－－－　－－－－－　－－－－－　－－－－－　－－－－－
const dont_its = [
    {
        name: 'html2canvas',
        url: 'https://html2canvas.hertzen.com/',
        etc: 'スクショ撮るやつ。いつかやりたい。',
    },
    {
        name: '現代の JavaScript チュートリアル',
        url: 'https://ja.javascript.info/',
        etc: 'JS学習サイト。よさそう。むずそう。',
    },
    {
        name: '最低限の知識で簡単なWebアプリを作る',
        url: 'https://qiita.com/birdwatcher/items/db81e4ef637d29d7d193',
        etc: '生JavaScript、React&TypeScriptのやりたいこと別サンプル集。広めにいろいろ載ってる。',
    },
    {
        name: 'HTML/CSS/JavaScript でデスクトップアプリを作った',
        url: 'https://qiita.com/ndj/items/a07b433aa3f6f6e8742f',
        etc: 'Electronのインストールからexe化まで。タイトル通り。ふ～～ん。分かりやすいかも。自分用の何かは作れそう。',
    },
    {
        name: 'ようこそ！Electron入門',
        url: 'https://qiita.com/umamichi/items/6ce4f46c1458e89c4cfc',
        etc: '上と関連して。分かりやすいが記事自体が古い。Electron自体セキュリティの問題もあるらしい。初心者には怖い。',
    },
    {
        name: 'あなたのWebサイトをたった5分でiOS/Androidアプリにする方法',
        url: 'https://zenn.dev/rdlabo/articles/4a241cacc7e364be8066',
        etc: '分かりやすそう。何をするにもNode.jpは必要らしい。あとandroidなんとか。',
    },
    {
        name: '令和のHTML/CSS/JavaScriptの書き方50選',
        url: 'https://zenn.dev/necscat/articles/bc9bba54babaf5',
        etc: '便利一覧。情報が新しくてよい。',
    },
    {
        name: '【全30項目】コーディング時のルールや思想',
        url: 'https://zenn.dev/dadada/articles/8faf8e1e20c0a5',
        etc: 'HTML/CSS/Sass/JSなど。理解しやすそう。',
    },
    {
        name: 'javascriptから別のjavascriptの処理を呼出し実行する',
        url: 'https://qiita.com/ydzum1123/items/afcb31236502997dc19d',
        etc: '外部JSの呼び出しができる？その先がどうかは分からない。',
    },
    {
        name: '純粋な JavaScript を使ったブロック崩しゲーム',
        url: 'https://developer.mozilla.org/ja/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript',
        etc: '信頼のMWD。チュートリアル。いつかやりたい。',
    },
];

//◆やらない－－－－－　－－－－－　－－－－－　－－－－－　－－－－－
const no_touch = [
    {
        name: 'chot.design',
        url: 'https://chot.design/',
        etc: 'デザイン学習サイト。最終更新が古い。リンク切れまであるので見なくていいかも。',
    },
    {
        name: 'VScodeでGithub（の超基本）',
        url: 'https://zenn.dev/ojk/books/github-vscode',
        etc: '「Githubでウェブサイトを公開する」まで読んだ。後は読まなくていっか……。',
    },
    {
        name: 'CODEPREP',
        url: 'https://codeprep.jp/',
        etc: 'プログラミング学習サイト。サービス終了済み。完成形が見られるものの内容が古い。',
    },
];

//-------------------------------------------------------

//最初にdivを作って、h2~3と共に全部入れる
const main = document.querySelector('main');

//関数の形で四回分呼ぶ
memoList(['更新履歴', update]);
listCreate(['制作物', worksLists]);
memoList(['HTMLmemo', cssMemo]);
memoList(['ETCmemo', memo]);
listCreate(['ゲ制関連', gameRelation]);
listCreate(['資料', data]);
listCreate(['do_it', do_its]);
listCreate(['dont_it', dont_its]);
listCreate(['やらない', no_touch]);

//配列を表示
function memoList(e) {
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    h2.textContent = e[0];
    main.appendChild(div);
    div.appendChild(h2);

    const ol = document.createElement('ol');
    for (const txt of e[1]) {
        const li = document.createElement('li');
        li.textContent = txt;

        div.appendChild(ol);
        ol.appendChild(li);
    }
}

//リンク・リスト
function listCreate(e) {
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    h2.textContent = e[0];
    main.appendChild(div);
    div.appendChild(h2);

    //    const nowList = document.getElementById(e[0]);
    const dl = document.createElement('dl');
    for (const prop of e[1]) {
        //listを生成する
        const dt = document.createElement('dt');
        const a = document.createElement('a');
        const dd = document.createElement('dd');

        //オブジェクトの内容をリスト内容に入れる
        a.textContent = prop.name;
        a.href = prop['url'];
        a.target = '_blank';
        dd.textContent = prop['etc'];

        //dtとddは独立していないといけない

        div.appendChild(dl);

        dl.appendChild(dt);
        dt.appendChild(a);
        dt.parentElement.appendChild(dd);
    }
}
