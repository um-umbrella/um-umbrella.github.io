'use strict';
//,{name:"",url:"",explain:""}

const tooo = [
    'やりたいメモ',
    '建築ソロジャを完成させたい',
    '支援ツール、ログ順を切り替えできてもいいかも',
    '各シナリオの英語版を作ってみたい。数字だけのシナリオは作りやすいのではないか',
];

//リンク    //,{name:"",linkUrl:"",}
const link = [
    { name: 'TALTO', linkUrl: 'https://talto.cc/users/ZuKfm1L43lXz96Dn8K7rvP3MgJf2' },
    { name: 'ソロジャーナルの森', linkUrl: 'https://soloj.hodo49.com/' },
    { name: 'itch.io', linkUrl: 'https://umumbrella.itch.io/' },
    { name: 'Booth', linkUrl: 'https://umumbrella.booth.pm/' },
];

//更新履歴
const update = [
    '8/30　ツール『ランダムヒト』公開',
    '8/22　このページを作った',
    '8/20　ツール『ソロジャーナルプレイ支援ツール』公開',
    '8/9　『便りに乗せて』公開',
    '8/7　『勇躍きたれ』加筆・修正',
    '8/4　『朽廃のささやき』公開',
    '7/31　『勇躍きたれ』公開',
];

//注意事項
const terms = [
    'ソロジャーナルとは、シナリオやダイスの出目に沿って記録していく遊びです。ソロ向けですが、誰かと普通のTRPGのように遊ぶのも面白いかもしれません。',
    '世界観の指定はありませんので、現代や中世ファンタジーなど、お好きな世界観で遊んでください。意にそぐわない解釈の改変、判定に寄らず好みで結果を選択する、などもしていだたいて構いません。',
    'プレイログの公開は媒体を問わずご自由にどうぞ。見て分かる場所にシナリオ情報を添えてください。',
    '本シナリオは実在の人物や団体とは一切関係ありません。',
    '本シナリオの転載、二次配布、自作発言は禁止です。',
];

//制作物の一覧・ 内容の説明・ダウンロードリンク
//    {explain: { 0: '説明', 1: '' },url: { 0: '', 1: '' },urlName: { 0: 'TALTO', 1: 'itch.io' },},
const scenario = [
    {
        //勇躍きたれ
        explain: {
            0: '闘技場で過ごす数日間を記すソロジャーナルシナリオです。「ゆうやく～」と読みます。',
            2: '初めて作ったので要素の引き算ができませんでした。真面目にやると、ひたすら対戦相手のキャラメイクをすることになります。',
            1: 'バトルが主軸ですが、勝敗は運です。負けロールを楽しむ心があるとよいでしょう。また、重苦しい作風ではないものの、一部ダイスのクリティカルでNPC／ファンブルでPCが死にます。',
        },
        url: { 0: 'https://talto.cc/projects/_jNR5bkGRvckQ6kTGBn7o', 1: 'https://umumbrella.itch.io/yuyakukitare' },
        urlName: { 0: 'TALTO', 1: 'itch.io' },
    },
    {
        explain: {
            0: '建築物の調査内容を記すソロジャーナルシナリオです。「きゅうはいの～」と読みます。',
            1: 'フレーバーですが間取りの概念があるので、テキスト以外に絵が描けるような用意があると楽しいかもしれません。',
            2: 'マップ作成のジェネレーター代わりにするとか、そういう感じのこともご自由にどうぞ。',
        },
        url: { 0: 'https://talto.cc/projects/Gqf7rLQHdAzQ7Fn-kIJ1j', 1: 'https://umumbrella.itch.io/kyuhainosasayaki' },
        urlName: { 0: 'TALTO', 1: 'itch.io' },
    },
    {
        explain: {
            0: '手紙を書けない誰かの代筆をするソロジャーナルシナリオです。',
            1: '「手紙」モチーフなので、記録を便箋に書いたり、封筒を選んだり、封蝋で閉じたりと、実際の手紙のように記録してみるのも面白いかもしれません。',
            2: '切手の画像を作れるテンプレートを同封しようかな～と思っています。未定です。',
        },
        url: { 0: 'https://talto.cc/projects/EE38t57pHyhCxPNVv51Xw', 1: 'https://umumbrella.itch.io/letterwrite' },
        urlName: { 0: 'TALTO', 1: 'itch.io' },
    },
    {
        explain: {
            0: 'ある研究に狂った研究者の最後の数日を記すソロジャーナルシナリオです。',
            1: '「人倫にもとる手記」「因果応報で滅ぶ研究者」を見たくて作りました。そういう気分を高めて遊ぶといいかもしれません。',
            2: '制作中です。',
        },
        url: {},
        urlName: { 0: 'TALTO', 1: 'itch.io' },
    },
];

//-------------------------------------------------------------

//初期イベ呼び出しコーナー
linkWrite();
updateWrite(); //更新履歴
termWrite(); //注意事項
scenarioRightClam();

//------------------------------------------------------------

//#menuOpenをいじる
const menuOpen = document.getElementById('menuOpen');
menuOpen.addEventListener('click', menuOpenOperate);
const menu = document.getElementById('menu');

function menuCloseOperate() {
    //閉じるとき
    console.log(menuOpen.textContent);
    //表示
    menuOpen.style.display = 'block';
    //自分を非表示
    menu.style.display = 'none';
}

function menuOpenOperate() {
    //あけるとき
    const menuClose = document.getElementById('menuClose');
    menu.style.display = 'block';
    menuClose.addEventListener('click', menuCloseOperate);
    menuOpen.style.display = 'none';
}

//関連リンクを生成
function linkWrite() {
    const pLink = document.getElementById('p-link');
    const p = document.createElement('p');
    pLink.appendChild(p);
    let i = 0;
    for (const obj of link) {
        const span = document.createElement('span');
        const a = document.createElement('a');

        a.href = obj.linkUrl;
        a.textContent = obj.name;
        a.target = '_blank';
        p.appendChild(a);

        if (i < link.length - 1) {
            span.textContent = ' ｜ ';
            p.appendChild(span);
        }
        i++;
    }
}

//更新履歴を生成（配列）
function updateWrite(e) {
    const updateLog = document.getElementById('update');
    const ul = document.createElement('ul');

    updateLog.appendChild(ul);

    for (const log of update) {
        const li = document.createElement('ul');
        li.textContent = `${log}`;
        ul.appendChild(li);
    }
}

//注意事項を生成
function termWrite() {
    const ul = document.getElementById('termList');
    for (const p of terms) {
        const li = document.createElement('li');
        li.textContent = p;
        ul.appendChild(li);
    }
}

//シナリオ一覧に内容を追加
function scenarioRightClam() {
    const infoRight = document.getElementsByClassName('infoRight');
    //    const infoTable = document.getElementsByClassName('infoTable');
    let i = -1;
    for (const info of scenario) {
        //explain, url, urlName
        i++;
        const table = infoRight[i]; //複数クラスの一つを指定

        for (const key in info) {
            if (key === 'explain') {
                //explain
                for (const prop in info[key]) {
                    const p = document.createElement('p');
                    p.textContent = info[key][prop];
                    table.appendChild(p);
                }
            } else if (key === 'url') {
                //url
                //divParent>a
                const divParent = document.createElement('div');
                divParent.className = 'divParent';
                //                infoTable[i].appendChild(divParent);
                infoRight[i].appendChild(divParent);

                for (const prop in info[key]) {
                    //a生成
                    const a = document.createElement('a');
                    const button = document.createElement('button');
                    a.href = info[key][prop];
                    a.target = '_blank';
                    button.href = info[key][prop];
                    button.textContent = info['urlName'][prop];

                    divParent.appendChild(a);
                    a.appendChild(button);
                }
            }
        }
    }
}
