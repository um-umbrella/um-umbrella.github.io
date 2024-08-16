'use strict';

//,{ name: '', url: '', etc: '' }

//◆作った
const worksLists = [{ name: '習作', url: 'works/unknownPeople.html', etc: 'たいへんだった' }];

//◆メモ
const memo = [
  'パッケージを使うには（Node.jpが必要？）',
  'Node.jpって結局何？',
  'デスクトップ（GUI）アプリは作れる？ElectronやNW.js（Node.jpとも関わり）らしいが…',
  'ブラウザいっぱいの宇宙作りたい',
  'p5.jsなどを専用エディタ以外で使うには？jsファイルみたいに読み込むのかな。',
  'この辺をやるよりも、CSSの基礎を先にしたほうがいい気がする。',
  'キー入力でADWSを取得したら割と動くものが作れるのか…？'
];
//◆メモ
const data = [
  {
    name: 'MDN',
    url: 'https://developer.mozilla.org/ja/docs/Web',
    etc: '和訳ままゆえ難解だが、最も情報が集まっている（ように見える）。'
  },
  { name: 'CSS Stock', url: 'https://pote-chil.com/css-stock/ja', etc: 'CSSコピペの宝庫。いつか使うかも。' },
  {
    name: 'CSSプロパティ早見表｜文系大学生のためのHTML／CSS入門',
    url: 'https://zenn.dev/ojk/books/intro-to-html-css/viewer/css-properties',
    etc: '基本的なCSSまとめ'
  }
];

//◆やった
const do_its = [
  {
    name: '文系学生のための○○',
    url: 'https://zenn.dev/ojk?tab=books',
    etc: 'JS、p5.js、HTML/CSS。基礎から順を追う学習。内容自体は初心者向けだが、見た内では最も新しい情報が自然と入れられている。最初に触るのにいい。'
  },
  {
    name: 'VScodeでGithub（の超基本）',
    url: 'https://zenn.dev/ojk/books/github-vscode',
    etc: 'このサイトを公開するために「Githubでウェブサイトを公開する」まで読んだ。後は読んでない。'
  }
];

//◆やってない
const dont_its = [
  {
    name: '現代の JavaScript チュートリアル',
    url: 'https://ja.javascript.info/',
    etc: 'JS学習サイト。よさそう。むずそう。'
  },
  { name: 'html2canvas', url: 'https://html2canvas.hertzen.com/', etc: 'スクショ撮るやつ。いつかやりたい' },
  {
    name: 'CODEPREP',
    url: 'https://codeprep.jp/',
    etc: 'プログラミング学習サイト。こういう系の中で一番「勉強」はしやすい。やってない。'
  },
  { name: 'chot.design', url: 'https://chot.design/', etc: 'デザイン学習サイト。いつか見ようと思って全然見てない。' },
  {
    name: '最低限の知識で簡単なWebアプリを作る（生JavaScript vs React&TypeScript、やりたいこと別サンプル集）',
    url: 'https://qiita.com/birdwatcher/items/db81e4ef637d29d7d193',
    etc: '広めにいろいろ乗ってる。コード、TypeScriopt……一回読むとよさそう。'
  },
  ,
  {
    name: 'JavaScript Primer',
    url: 'https://jsprimer.net/intro/preparation/',
    etc: '情報量。しっかり度はMDNに近い。流しで読んでみるのがよさそう'
  },
  {
    name: '【Electron】HTML/CSS/JavaScript でデスクトップアプリを作った【インストールから exe 化まで】',
    url: 'https://qiita.com/ndj/items/a07b433aa3f6f6e8742f',
    etc: 'タイトル通り。ふ～～ん。分かりやすい。'
  },
  {
    name: 'ようこそ！Electron入門',
    url: 'https://qiita.com/umamichi/items/6ce4f46c1458e89c4cfc',
    etc: '上と関連して。分かりやすそう。ただ記事自体がかなり古いし、Electron自体セキュリティの問題に発展するらしい。初心者には怖い。'
  },
  {
    name: 'あなたのWebサイトをたった5分でiOS/Androidアプリにする方法',
    url: 'https://zenn.dev/rdlabo/articles/4a241cacc7e364be8066',
    etc: '分かりやすそう。何をするにもNode.jpは必要らしい。あとandroidなんとか。'
  },
  { name: 'Zenn', url: 'https://zenn.dev/', etc: 'エンジニアのための情報共有コミュニティ。いい記事がいくつかあった。' },
  {
    name: '令和のHTML/CSS/JavaScriptの書き方50選',
    url: 'https://zenn.dev/necscat/articles/bc9bba54babaf5',
    etc: '便利一覧。情報が新しくてよい。'
  },
  { name: '', url: 'https://zenn.dev/dadada/articles/8faf8e1e20c0a5', etc: '理解しやすそう。' },
  {
    name: '',
    url: 'https://qiita.com/ydzum1123/items/afcb31236502997dc19d',
    etc: '外部JSの呼び出しができる？その先がどうかは分からないが'
  }
];

//関数の形で四回分呼ぶ
listCreate(['works', worksLists]);
memoList();
listCreate(['data', data]);
listCreate(['do_it', do_its]);
listCreate(['dont_it', dont_its]);

//配列表示（使い回しはできない…）
function memoList() {
  const list = document.getElementById('memo');
  const ol = document.createElement('ol');
  for (const txt of memo) {
    const li = document.createElement('li');
    li.textContent = txt;

    list.appendChild(ol);
    ol.appendChild(li);
  }
}

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
