'use strict';

//,{ name: '', url: '', etc: '' }

//作った
const selfMadeLists = [
  { name: '習作', url: 'works/unknownPeople.html', etc: 'たいへんだった' },
  { name: 'a', url: 'a', etc: 'a' }
];
//メモ
const memos = [
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
//やった
const do_its = [
  {
    name: '文系学生のための○○',
    url: 'https://zenn.dev/ojk?tab=books',
    etc: 'JS、p5.js、HTML/CSS。基礎から順を追うのでもっとも助かった。CSSのほうは多分最後までやってない'
  }
];
//やってない
const dont_its = [
  {
    name: 'VScodeでGithub（の超基本）',
    url: 'https://zenn.dev/ojk/books/github-vscode',
    etc: 'このサイトをGithubで作ろうと思っているから読まないといけない'
  },
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
  { name: 'chot.design', url: 'https://chot.design/', etc: 'デザイン学習サイト。いつか見ようと思って全然見てない。' }
];

//関数の形で四回分呼ぶ
listCreate(['selfMade', selfMadeLists]);
listCreate(['memo', memos]);
listCreate(['do_it', do_its]);
listCreate(['dont_it', dont_its]);

//作った
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
