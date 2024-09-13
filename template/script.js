'use strict';

//{ name: '', file: '' }
const temp = [
    { name: '01 シンプル', file: '01simple' },
    { name: '02 付箋', file: '02husen' },
    { name: '03 海と空', file: '03seaandsky' },
    { name: '04 ラズベリー', file: '04raspberry' },
    { name: '05 道', file: '05load' },
];

const materialLink = [{ name: 'jay mantri', file: 'https://jaymantri.com/' }];

const searchLink = [
    { name: 'COMPASS LINK', file: 'https://compslink.jp' },
    { name: 'いえつく', file: 'https://ietsuku.i-ra.site/' },
    { name: 'LONY', file: 'https://lony.jp/' },
];

const studyLink = [{ name: '文系大学生のための○○入門', file: 'https://zenn.dev/ojk?tab=books' }];

//--------------------------------------------------------------------
tempListWrite();
linkListWrite(materialLink);
linkListWrite(searchLink);
linkListWrite(studyLink);

//テンプレート一覧
function tempListWrite() {
    const tempList = document.getElementById('temp-list');
    for (const obj of temp) {
        //画像を入れる場所の個体
        const tempEle = document.createElement('div');
        tempEle.className = 'temp-ele';
        tempList.appendChild(tempEle);

        //h3を追加
        const h3 = document.createElement('h3');
        h3.textContent = obj.name;

        //ボタン入れるとこ
        const buttonArea = document.createElement('div');
        buttonArea.className = 'button-area';

        let img;
        let aA;
        let aB;
        let buttonA;
        let buttonB;
        if (obj.file.length > 0) {
            //画像を生成
            img = document.createElement('img');
            img.src = `img/${obj.file}.png`;

            //リンク用意がある場合
            //ボタン１を生成
            buttonA = document.createElement('button');
            aA = document.createElement('a');
            buttonA.textContent = `Demo`;
            aA.href = `catalog/${obj.file}/index.html`;
            aA.target = '_blank';

            //ボタン２を生成
            buttonB = document.createElement('button');
            aB = document.createElement('a');
            buttonB.textContent = `Zip`;
            aB.href = `catalog/${obj.file}.zip`;
        } else {
            //リンク用意がない場合

            //画像を生成
            img = document.createElement('img');
            img.src = `img/00thum.png`;

            //ボタン１を生成
            buttonA = document.createElement('button');
            aA = document.createElement('a');
            buttonA.textContent = `準備中`;

            //ボタン２を生成
            buttonB = document.createElement('button');
            aB = document.createElement('a');
            buttonB.textContent = `準備中`;
        }

        //h3、ボタン入れるとこ、ボタン、ボタン
        tempEle.appendChild(h3);
        tempEle.appendChild(img);
        tempEle.appendChild(buttonArea);

        buttonArea.appendChild(aA);
        aA.appendChild(buttonA);
        buttonArea.appendChild(aB);
        aB.appendChild(buttonB);
    }
}

//リンク
function linkListWrite(e) {
    const linkList = document.getElementById('s-4');
    const div = document.createElement('div');
    const p = document.createElement('p');
    linkList.appendChild(div);
    div.appendChild(p);
    let i = -1;
    for (const obj of e) {
        i++;
        //a URLと名前
        const a = document.createElement('a');
        a.textContent = obj.name;
        a.href = obj.file;
        a.target = '_blank';
        p.appendChild(a);

        if (i < e.length - 1) {
            //span 間の装飾
            const span = document.createElement('span');
            span.textContent = ' ｜ ';
            p.appendChild(span);
        }
    }
}
