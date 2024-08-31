'use strict';
//{ name: '', url: '', etc: '' },

//◆履歴
const update = [
    '8/30　当倉庫を作り直し。',
    '8/29～30　キャラ生成とカラパレを作った。html2canvasも実装した！',
    '8/29　HTMLテンプレート配布サイトが完成。公開は30日。',
    '8/24　忘れていたソロジャサイトを公開した。雨の日テンプレもいい感じなので、次のテンプレートを作り始めている。',
    '8/22　サイトはまあ形になった。同様にこの倉庫もきれいにした。CSS割と楽しいかも。',
    '8/20　完成。連絡先用にメールフォームも作ったついでに、ソロジャーナル関連サイトを作り始める。',
    '8/18　ソロジャーナルプレイ支援ツールを作り始める。',
    '8/13　習作LMTPS作った。同日、ここをHTML/CSS/JavaScript勉強の暫定倉庫として作った。',
    '8/10　勉強開始……',
];

//◆作った
const workLists = [
    {
        name: "Let's make this person smile",
        url: '../works/unknown_people/index.html',
        etc: '習作。にっこりするまでクリックするゲーム。',
        thum: 'img/thum.jpg',
    },
    {
        name: 'ソロジャーナルプレイ支援ツール',
        url: '../works/journal_support/',
        etc: 'ソロジャーナル向けの補助ツール。ダイス・トランプを引く、ログを書き込んだり.txtとして保存したりする、など。',
        thum: 'img/w02.png',
    },
    {
        name: 'メールフォーム',
        url: '../mail.html',
        etc: 'メールフォーム。ソロジャ支援ツールで必要になったついで。',
        thum: 'img/thum.jpg',
    },
    {
        name: 'ソロジャーナル制作物',
        url: '../journal_portal/',
        etc: 'ソロジャ関連の制作物（シナリオ・ツール）のまとめサイト。',
        thum: 'img/w04.png',
    },
    {
        name: 'HTMLテンプレート配布',
        url: '../template/',
        etc: 'HTML/CSSテンプレート配布サイト。',
        thum: 'img/w05.png',
    },
    {
        name: 'ランダムヒト',
        url: '../works/random_character/',
        etc: 'キャラクター設定のランダム生成ツール。項目は三つ（＋二色）。スクショ保存機能付き。',
        thum: 'img/w06.png',
    },
    {
        name: 'two colors',
        url: '../works/two_colors/',
        etc: 'クリックまたはキー押下ごとに色をランダム生成する。スクショ保存機能付き。',
        thum: 'img/w07.png',
    },
];

const studyList = [
    {
        name: '文系学生のための○○入門',
        url: 'https://zenn.dev/ojk?tab=books',
        etc: 'html/cssとJSの教科書',
    },
    { name: 'Zenn', url: 'https://zenn.dev/', etc: 'エンジニアのための情報共有コミュニティ' },
];

const cssLink = [
    { name: 'html2canvas', url: 'https://html2canvas.hertzen.com/', etc: 'ブラウザを画像として取得するスクリプト' },
    { name: 'BUILD', url: 'https://buildstd.com/journal/', etc: '軽い記事とリンク集' },
    { name: 'wireframe.cc', url: 'https://wireframe.cc/', etc: 'オンラインワイヤフレームツール' },
    { name: 'Pa-Tu', url: 'https://pa-tu.work/', etc: 'CSSパーツ、Tips、ジェネレータ集' },
    { name: 'DOODAD.dev', url: 'https://doodad.dev/pattern-generator/', etc: 'シームレスデザインジェネレータ' },
];

const gameLink = [
    { name: 'Godot Docs', url: 'https://docs.godotengine.org/ja/4.x/index.html', etc: '公式チュートリアル' },
    { name: '2dgames.jp', url: 'https://2dgames.jp/', etc: 'チュートリアルや解説（4向け）' },
    { name: 'Peanuts Code', url: 'https://www.peanuts-code.com/ja/tutorials/', etc: 'チュートリアル（3向け）' },
];

////////////////////////////////////////////////////////////////////
//呼び出し
arrayList(['', update]);
objImgList(['製作履歴', workLists]);

objList(['リンク', studyList]);
objList(['css/jsリンク', cssLink]);
objList(['godotリンク', gameLink]);

//配列を表示
function arrayList(e) {
    const div = document.createElement('div');
    document.querySelector('main').appendChild(div);
    if (e[0].length > 0) {
        const h2 = document.createElement('h2');
        h2.textContent = e[0];
        div.appendChild(h2);
    }

    const ol = document.createElement('ol');
    ol.id = 'update';
    for (const txt of e[1]) {
        const li = document.createElement('li');
        li.textContent = txt;

        div.appendChild(ol);
        ol.appendChild(li);
    }
}

//配列→オブジェクト（画像付き）を表示
function objImgList(e) {
    const section = document.createElement('section');
    const h2 = document.createElement('h2');
    h2.textContent = e[0];
    document.querySelector('main').appendChild(section);
    section.appendChild(h2);

    for (const prop of e[1]) {
        const div = document.createElement('div');
        div.className = 'grid';
        section.appendChild(div);

        const h3 = document.createElement('h3');
        div.appendChild(h3);

        //listを生成する
        const a = document.createElement('a');
        const img = document.createElement('img');
        const p = document.createElement('p');

        //オブジェクトの内容をリスト内容に入れる
        a.textContent = prop.name;
        a.href = prop.url;
        a.target = '_blank';
        img.src = prop.thum;
        img.className = 'trim';

        h3.appendChild(a);
        div.appendChild(img);

        p.textContent = prop.etc;
        div.appendChild(p);
    }
}

//配列→オブジェクトを表示
function objList(e) {
    const div = document.createElement('section');
    const h2 = document.createElement('h2');
    h2.textContent = e[0];
    document.querySelector('main').appendChild(div);
    div.appendChild(h2);

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

        div.appendChild(dl);

        dl.appendChild(dt);
        dt.appendChild(a);
        dt.parentElement.appendChild(dd);
    }
}
