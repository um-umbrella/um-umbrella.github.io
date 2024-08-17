'use strict';

//,{ name: '', url: '', etc: '' }

//◆作った
const worksLists = [{ name: '習作', url: 'works/unknownPeople.html', etc: 'クリックで反応を返す。たいへんだった……' }];

//◆メモ
const memo = [
  'html2canvasリベンジ。Nodeと共に導入した。`element`をレンダリングするには次のように呼び出す：`html2canvas(element[, options]);`Promiseの勉強が必要らしい。自分にはまだ早い気がする。',
  '増えたテキストがフォーカス付きでだんだん下に伸びていくとか。ボタン画面と２カラムに分けたらゲームっぽくなる？',
  'ElectronやNW.js（Node.jpとも関わり）でJSでデスクトップ（GUI）アプリ制作もできる。パッケージを使うにもNode.jpが必要。',
  'ブラウザいっぱいの宇宙作りたい',
  'p5.jsなどを専用エディタ以外で使うには？jsファイルみたいに読み込むのかな。→どうやらそうらしい',
  'JSの先をやるよりCSSの基礎を先にしたほうがいい気がする。',
  'キー入力でADWSを取得したら割と動くものが作れるのか…？',
  '└position:relative;で（ゲーム向けではないが）それっぽい動きはできるかも。'
];
//◆メモ
const data = [
  {
    name: 'MDN',
    url: 'https://developer.mozilla.org/ja/docs/Web',
    etc: '最も情報が集まっている（ように見える）。たまに未翻訳で泣くが、読めないことはない。初見の学習よりは、ある程度分かってから見たほうがいい。'
  },
  {
    name: 'Zenn',
    url: 'https://zenn.dev/',
    etc: 'エンジニアのための情報共有コミュニティ。いい記事がいくつかあった。当然ながら初心者向けではなさそう。読みやすいやつもある。'
  },
  { name: 'CSS Stock', url: 'https://pote-chil.com/css-stock/ja', etc: 'CSSコピペの宝庫。解体すれば勉強にもなる。' },
  {
    name: 'CSSプロパティ早見表',
    url: 'https://zenn.dev/ojk/books/intro-to-html-css/viewer/css-properties',
    etc: '『文系大学生のためのHTML／CSS入門』より。基本的なCSSまとめ。'
  },
  {
    name: 'JavaScript Primer',
    url: 'https://jsprimer.net/intro/preparation/',
    etc: '情報量。しっかり度はMDNに近い。流しで読んでみるのがよさそうだが、初心者向けではない。'
  }
];

//◆やった
const do_its = [
  {
    name: '文系学生のための○○',
    url: 'https://zenn.dev/ojk?tab=books',
    etc: 'JS、p5.js、HTML/CSS。基礎から順を追う学習。内容自体は初心者向けだが、新しい情報が自然と入れられている。教科書にいい。'
  },
  {
    name: 'VScodeでGithub（の超基本）',
    url: 'https://zenn.dev/ojk/books/github-vscode',
    etc: '「Githubでウェブサイトを公開する」まで読んだ。後は読まなくていっか……。'
  },
  {
    name: 'CODEPREP',
    url: 'https://codeprep.jp/',
    etc: 'プログラミング学習サイト。完成形を見られるもののJSは内容が古い。鵜呑みにしないほうがよさそう。'
  },
  {
    name: '本当の初心者のためのNode.js超入門　~環境構築編~',
    url: 'https://qiita.com/qulylean/items/0ad521885a04a5ebd202',
    etc: 'Nodeのインストールで見た。新しいしNode・npmの使用法もある。でも更新は途切れている。'
  },
  {
    name: 'Visual Studio CodeとNode.jsの導入について',
    url: 'https://qiita.com/GRGSIBERIA/items/b8cd4a2b3635d1bb0391',
    etc: 'nodeの導入時に参考にした。これ以上読むことはない。'
  }
];

//◆やってない
const dont_its = [
  {
    name: '現代の JavaScript チュートリアル',
    url: 'https://ja.javascript.info/',
    etc: 'JS学習サイト。よさそう。むずそう。'
  },
  { name: 'html2canvas', url: 'https://html2canvas.hertzen.com/', etc: 'スクショ撮るやつ。いつかやりたい。' },
  {
    name: '最低限の知識で簡単なWebアプリを作る',
    url: 'https://qiita.com/birdwatcher/items/db81e4ef637d29d7d193',
    etc: '生JavaScript vs React&TypeScript、やりたいこと別サンプル集。広めにいろいろ載ってる。コード、TypeScriopt。一回読むとよさそう。'
  },
  {
    name: 'HTML/CSS/JavaScript でデスクトップアプリを作った',
    url: 'https://qiita.com/ndj/items/a07b433aa3f6f6e8742f',
    etc: 'Electronのインストールからexe化まで。タイトル通り。ふ～～ん。分かりやすいかも。自分用の何かは作れそう。'
  },
  {
    name: 'ようこそ！Electron入門',
    url: 'https://qiita.com/umamichi/items/6ce4f46c1458e89c4cfc',
    etc: '上と関連して。分かりやすいが記事自体が古い。Electron自体セキュリティの問題もあるらしい。初心者には怖い。'
  },
  {
    name: 'あなたのWebサイトをたった5分でiOS/Androidアプリにする方法',
    url: 'https://zenn.dev/rdlabo/articles/4a241cacc7e364be8066',
    etc: '分かりやすそう。何をするにもNode.jpは必要らしい。あとandroidなんとか。'
  },
  {
    name: '令和のHTML/CSS/JavaScriptの書き方50選',
    url: 'https://zenn.dev/necscat/articles/bc9bba54babaf5',
    etc: '便利一覧。情報が新しくてよい。'
  },
  {
    name: '【全30項目】コーディング時のルールや思想',
    url: 'https://zenn.dev/dadada/articles/8faf8e1e20c0a5',
    etc: 'HTML/CSS/Sass/JSなど。理解しやすそう。'
  },
  {
    name: 'javascriptから別のjavascriptの処理を呼出し実行する',
    url: 'https://qiita.com/ydzum1123/items/afcb31236502997dc19d',
    etc: '外部JSの呼び出しができる？その先がどうかは分からないが'
  },
  {
    name: '純粋な JavaScript を使ったブロック崩しゲーム',
    url: 'https://developer.mozilla.org/ja/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript',
    etc: '信頼のMWD。チュートリアル。'
  }
];

const no_touch = [
  {
    name: 'chot.design',
    url: 'https://chot.design/',
    etc: 'デザイン学習サイト。最終更新が古い。リンク切れまであるので見なくていいかも。'
  }
];

//関数の形で四回分呼ぶ
listCreate(['works', worksLists]);
memoList(['memo', memo]);
listCreate(['data', data]);
listCreate(['do_it', do_its]);
listCreate(['dont_it', dont_its]);
listCreate(['no_touch', no_touch]);

//配列を表示
function memoList(e) {
  const list = document.getElementById(e[0]);
  const ol = document.createElement('ol');
  for (const txt of e[1]) {
    const li = document.createElement('li');
    li.textContent = txt;

    list.appendChild(ol);
    ol.appendChild(li);
  }
}

//リンク・リスト
//都度dllを生成しているのは減らしていいかも
function listCreate(e) {
  const nowList = document.getElementById(e[0]);
  const dl = document.createElement('dl');
  for (const prop of e[1]) {
    //listを生成する
    const dt = document.createElement('dt');
    const a = document.createElement('a');
    const dd = document.createElement('dd');

    //オブジェクトの内容をリスト内容に入れる
    a.textContent = prop.name;
    a.href = prop['url'];
    dd.textContent = prop['etc'];

    //dtとddは独立していないといけない
    nowList.appendChild(dl);

    //    nowList.appendChild(dl);
    dl.appendChild(dt);
    dt.appendChild(a);
    dt.parentElement.appendChild(dd);
  }
}

/* バックアップ

//リンク・リスト
function listCreate(e) {
  const nowList = document.getElementById(e[0]);
  for (const prop of e[1]) {
    //listを生成する
    const dl = document.createElement('dl');
    const dt = document.createElement('dt');
    const a = document.createElement('a');
    const dd = document.createElement('dd');

    //オブジェクトの内容をリスト内容に入れる
    a.textContent = prop.name;
    a.href = prop['url'];
    dd.textContent = prop['etc'];

    //dtとddは独立していないといけない
    nowList.appendChild(dl);
    dl.appendChild(dt);
    dt.appendChild(a);
    dt.parentElement.appendChild(dd);
  }
}


 */
