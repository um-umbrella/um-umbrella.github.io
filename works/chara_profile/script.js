'use strict';

const colorPalette = [0, 1, 2, 3, 4, 5, 'a', 'b', 'c', 'd', 'e', 'f'];
//接続詞
const conjunction = [
    '、',
    '、',
    'な',
    'の',
    'や',
    'や、',
    'と',
    '、おそらく',
    'と関係する',
    'で始まる',
    'に似た',
    'と同じ',
    'から得られる',
    '、物によっては',
    'と組み合わせた',
    'のための',
];

///////////////////////////////////////////////////
//配列から一つを選択
function ArrayChoice(e) {
    return e[Math.floor(Math.random() * e.length)];
}

//////////////////////////////////////////////////
//白紙化
const deleteBtn = document.getElementById('delete-btn');
deleteBtn.addEventListener('click', AllDelete);

function AllDelete() {
    //入力欄を白紙化する
    inputH2.value = 'キャラクター名';
    inputHair.value = '';
    inputEye.value = '';
    inputGender.value = '';

    document.getElementById('prof-comment').textContent = '一文';
    document.getElementById('input-comment').value = '';

    document.getElementById('hair-detail').textContent = '髪';
    document.getElementById('input-hair-q').value = '';
    document.getElementById('input-hair-c').value = '#cccccc';

    document.getElementById('eye-detail').textContent = '目';
    document.getElementById('input-eye-q').value = '';
    document.getElementById('input-eye-c').value = '#cccccc';

    document.getElementById('gender').textContent = '性別';
    document.getElementById('input-gender-q').value = '';
    document.getElementById('input-gender-c').value = '#cccccc';

    for (let i = 0; i < 3; i++) {
        let eleTarget;
        if (i == 0) {
            eleTarget = document.getElementById('hair-color');
        } else if (i == 1) {
            eleTarget = document.getElementById('eye-color');
        } else {
            eleTarget = document.getElementById('gender-title');
        }

        eleTarget.style.backgroundColor = '#eee';

        eleTarget.textContent = '？';
    }

    const div = document.getElementsByClassName('dl-div');
    const num = div.length;
    for (let i = 0; i < num; i++) {
        dlDelete();
    }

    let theme = document.getElementById('theme');
    theme.options[0].selected = true;

    const screenArea = document.getElementById('screenshot-area');
    screenArea.classList.remove(...screenArea.classList);
    screenArea.classList.toggle(theme.options[0].value);

    ReflectInput();
}

/////////////////////////////////////////////////
//ランダム設定

const randomBtn = document.getElementById('random-btn');
randomBtn.addEventListener('click', Random);

function Random() {
    AllDelete();

    //入力欄にランダムに設定する
    inputH2.value = NameMake();
    inputGender.value = ArrayChoice(CsvArrayLoad(2));

    //髪・目の色・身体的特徴
    for (let i = 0; i < 2; i++) {
        const randomColorCode = RandomColorCode();
        let eleTarget;
        if (i == 0) {
            eleTarget = document.getElementById('hair-color');
            inputHair.value = randomColorCode;
            document.getElementById('input-hair-c').value = randomColorCode;
        } else {
            eleTarget = document.getElementById('eye-color');
            inputEye.value = randomColorCode;
            document.getElementById('input-eye-c').value = randomColorCode;
        }
        eleTarget.style.backgroundColor = randomColorCode;
        eleTarget.textContent = randomColorCode;
    }

    //人となりなど hair, eye,person,gender
    let personArray = PersonalSelect();

    document.getElementById('hair-detail').textContent = personArray.hair;
    document.getElementById('input-hair-q').value = personArray.hair;

    document.getElementById('eye-detail').textContent = personArray.eye;
    document.getElementById('input-eye-q').value = personArray.eye;

    document.getElementById('prof-comment').textContent = personArray.person;
    document.getElementById('input-comment').value = personArray.person;

    document.getElementById('gender-title').textContent = '身体的特徴';
    document.getElementById('input-gender').value = '身体的特徴';
    document.getElementById('input-gender-c').value = '#cccccc';

    document.getElementById('gender').textContent = personArray.gender;
    document.getElementById('input-gender-q').value = personArray.gender;

    HistoryDlAdd();

    const pr = Math.floor(Math.random() * 5 + 3);
    for (let i = 0; i < pr; i++) {
        DtRandomAdd();
    }

    randomIcon();
    ThemeSelectRandom();
    ReflectInput();
}

///////////////////////
//それぞれの入力を反映する

function ReflectInput() {
    AddText(inputH2.id, inputH2.value);
}

//////////////////////////////////////////////////
//入力の変更を反映する

const inputH2 = document.getElementById('input-h2');
const inputComment = document.getElementById('input-comment');
const inputHairQuality = document.getElementById('input-hair-q');
const inputEyeQuality = document.getElementById('input-eye-q');
const inputGenderQuality = document.getElementById('input-gender-q');

inputH2.addEventListener('change', AddTextFirst);
inputComment.addEventListener('change', AddTextFirst);
inputHairQuality.addEventListener('change', AddTextFirst);
inputEyeQuality.addEventListener('change', AddTextFirst);
inputGenderQuality.addEventListener('change', AddTextFirst);

//名前、性別

function AddTextFirst(e) {
    /*イベントリスナーで指定する*/
    const eId = e.target.id;
    const eValue = e.target.value;
    AddText(eId, eValue);
}

function AddText(targetId, targetValue) {
    /* ランダム時などに対象を直接指定する*/
    let receiveId;
    if (targetId === 'input-h2') {
        receiveId = 'prof-h2';
    } else if (targetId === 'input-comment') {
        receiveId = 'prof-comment';
    } else if (targetId === 'input-hair-q') {
        receiveId = 'hair-detail';
    } else if (targetId === 'input-eye-q') {
        receiveId = 'eye-detail';
    } else if (targetId === 'input-gender-q') {
        receiveId = 'gender';
    } else {
        console.error(`${targetId}が不正！`);
    }
    const prof = document.getElementById(receiveId);
    prof.textContent = targetValue;
}

//////////////////////////////
//髪、目
const inputHair = document.getElementById('input-hair');
const inputHairColor = document.getElementById('input-hair-c');
const inputEye = document.getElementById('input-eye');
const inputEyeColor = document.getElementById('input-eye-c');
const inputGender = document.getElementById('input-gender');
const inputGenderColor = document.getElementById('input-gender-c');

inputHair.addEventListener('change', { name: '髪', input: '', handleEvent: LookColor });
inputHairColor.addEventListener('change', { name: '髪', handleEvent: LookColor });
inputEye.addEventListener('change', { name: '目', handleEvent: LookColor });
inputEyeColor.addEventListener('change', { name: '目', handleEvent: LookColor });
inputGender.addEventListener('change', { name: '身体', handleEvent: LookColor });
inputGenderColor.addEventListener('change', { name: '身体', handleEvent: LookColor });

function LookColor(e) {
    let eleTarget;
    if (this.name === '髪') {
        eleTarget = document.getElementById('hair-color');
    } else if (this.name === '目') {
        eleTarget = document.getElementById('eye-color');
    } else if (this.name === '身体') {
        eleTarget = document.getElementById('gender-title');
    }

    let colorCode;
    if (e.target.value.includes('#')) {
        colorCode = e.target.value;
        eleTarget.style.backgroundColor = colorCode;
    } else {
        colorCode = e.target.value;
        eleTarget.style.backgroundColor = '#eee';
    }
    eleTarget.textContent = colorCode;
}

///////////////////////////////////////////////////////////
//dt、dd追加
const inputDlBtn = document.getElementById('input-dl-btn');

inputDlBtn.addEventListener('click', function (e) {
    const inputDt = document.getElementById('input-dt');
    const inputDd = document.getElementById('input-dd');
    const profDl = document.getElementById('prof-dl');
    const div = document.createElement('div');
    const dt = document.createElement('dt');
    const dd = document.createElement('dd');

    if (inputDd.value == '') {
        return;
    }

    div.className = 'dl-div';
    dt.textContent = inputDt.value;
    dd.textContent = inputDd.value;

    profDl.appendChild(div);
    div.appendChild(dt);
    div.appendChild(dd);
});

///////////////////////////
//dt/ddのラストを消す

const deleteDlBtn = document.getElementById('delete-dl-btn');
deleteDlBtn.addEventListener('click', dlDelete);

function dlDelete() {
    const div = document.getElementsByClassName('dl-div');
    div[div.length - 1].remove();
}

/////////////////////////
//dt/ddをランダムに設定、反映
const randomDlBtn = document.getElementById('random-dl-btn');
randomDlBtn.addEventListener('click', DtRandomAdd);

function DtRandomAdd() {
    const profDl = document.getElementById('prof-dl');

    const content = OutputRandomQuestion();
    const div = document.createElement('div');
    const dt = document.createElement('dt');
    const dd = document.createElement('dd');

    div.className = 'dl-div';
    dt.textContent = content.title;
    dd.textContent = content.text[0];
    for (let i = 1; i < 3; i++) {
        if (Math.floor(Math.random() * 100 < 25)) {
            dd.textContent += ArrayChoice(conjunction) + content.text[i];
        }
    }

    profDl.appendChild(div);
    div.appendChild(dt);
    div.appendChild(dd);
}

/////////////////////
//来歴追加

function HistoryDlAdd() {
    const content = OutputRandomQuestion();
    const old = Math.floor(Math.random() * 12 + 2);
    const text = `${old}歳の年に${content.text[0]}と関わり、その後${content.text[1]}を知る。やがて、${content.text[2]}が${content.title}になる。`;

    const profDl = document.getElementById('prof-dl');
    const div = document.createElement('div');
    div.className = 'dl-div';
    const dt = document.createElement('dt');
    const dd = document.createElement('dd');
    dt.textContent = '来歴';
    dd.textContent = text;

    profDl.appendChild(div);
    div.appendChild(dt);
    div.appendChild(dd);
}

//////////////////////////////////////////////////////////////
//選択アイコンに切り替え
const icon = document.getElementById('icon');
const iconSelect = document.getElementById('icon-select');
iconSelect.addEventListener('change', IconSelect);

function IconSelect() {
    icon.classList.remove(...icon.classList);
    icon.classList.toggle(this.value);
}

//////////////////////
//選択アイコンをランダムに選択、設定
const iconIdArray = CsvArrayLoad(9); //ID
const iconNameArray = CsvArrayLoad(10); //アイコン名

function randomIcon() {
    const iconId = ArrayChoice(iconIdArray);
    const index = iconIdArray.indexOf(iconId);

    iconSelect.options[index].selected = true;

    icon.classList.remove(...icon.classList);
    icon.classList.toggle(iconId);
}

//////////////////////////////
//ロード時、アイコンをオプションに追加
iconLoad();

function iconLoad() {
    for (let i = 0; i < iconIdArray.length; i++) {
        const option = document.createElement('option');
        iconSelect.appendChild(option);
        option.value = iconIdArray[i];
        option.textContent = iconNameArray[i];
    }
}

/////////////////////////////
//テーマ切り替え
const theme = document.getElementById('theme');
theme.addEventListener('change', ThemeSelect);

function ThemeSelect() {
    const screenArea = document.getElementById('screenshot-area');
    screenArea.classList.remove(...screenArea.classList);
    screenArea.classList.toggle(this.value);
}

///////////////////////////
//テーマをランダムに出力

function ThemeSelectRandom() {
    let theme = document.getElementById('theme');
    let elm = theme.options;
    let array = [];
    [...elm].forEach((option) => {
        array.push(option.value);
    });

    const text = ArrayChoice(array);
    //入力欄を選択
    theme.options[array.indexOf(text)].selected = true;

    const screenArea = document.getElementById('screenshot-area');
    screenArea.classList.remove(...screenArea.classList);
    screenArea.classList.toggle(text);
}

//////////////////////////////////////////////////////////////
//生成系//////////////////////////////////////////////////////

//色を生成

function RandomColorCode() {
    let cnt = '#';
    for (let i = 0; i < 6; i++) {
        cnt += ArrayChoice(colorPalette);
    }
    return cnt;
}

////////////////////////////////
//名前生成

function NameMake(e) {
    let name = ['', ''];
    for (let c = 0; c < 2; c++) {
        let num;
        if (isNaN(e)) {
            num = Math.floor(Math.random() * 3 + 2);
        } else {
            num = e;
        }

        for (let i = 0; i < num; i++) {
            if (Math.floor(Math.random() * 100) < 20) {
                name[c] += wordMultiChoice(1, 1);
            } else {
                name[c] += wordMultiChoice(1, 0);
            }
        }
    }

    if (
        name[0].length + name[1].length > 4 ||
        Math.floor(Math.random() * 100) < 50 ||
        (name[0].length > 2 && name[1].length > 2)
    ) {
        name[0] += '・';
    }
    return name[0] + name[1];
}

/////////////////////////////
//髪・目・性格をランダムで選出

function PersonalSelect() {
    //2性別 3髪質　4髪型　5目付き　6目の形　7雰囲気　8性格

    const hairQualityArray = CsvArrayLoad(3);
    const hairQuality = ArrayChoice(hairQualityArray);
    const hairStyleArray = CsvArrayLoad(4);
    const hairStyle = ArrayChoice(hairStyleArray);

    const eyeQualityArray = CsvArrayLoad(5);
    const eyeQuality = ArrayChoice(eyeQualityArray);
    const eyeStyleArray = CsvArrayLoad(6);
    const eyeStyle = ArrayChoice(eyeStyleArray);

    const genderStyleArray = CsvArrayLoad(2);
    const genderStyle = ArrayChoice(genderStyleArray);

    const lookStyleArray = CsvArrayLoad(7);
    const lookStyle = ArrayChoice(lookStyleArray);
    const talkStyleArray = CsvArrayLoad(8);
    const talkStyle = ArrayChoice(talkStyleArray);

    const array = {
        hair: hairQuality + hairStyle,
        eye: eyeQuality + eyeStyle,
        person: lookStyle + talkStyle,
        gender: genderStyle,
    };

    return array;
}

/////////////////////////
//csvのｎ番目から複数回文字を選択

function wordMultiChoice(num, index) {
    const array = CsvArrayLoad(index);

    let word = '';
    for (let i = 0; i < num; i++) {
        let r = ArrayChoice(array);
        if (!(i == 0 && (r === 'ー' || r === 'ッ' || r === 'ン'))) {
            word += r;
        }
    }
    return word;
}

/////////////////////////
//項目をランダム選出

function OutputRandomQuestion() {
    const min = 12;
    const max = 23;

    const title = ArrayChoice(CsvArrayLoad(11));
    let text = [];
    for (let i = 0; i < 3; i++) {
        text.push(ArrayChoice(CsvArrayLoad(Math.floor(Math.random() * (max - min) + min))));
    }

    console.log(`${title}：${text}`);
    return { title: title, text: text };
}

//////////////////////////////////////////////////////////////
//csvを読み込み
function CsvArrayLoad(e) {
    const csvArray = CsvArrayCall('data.csv')[e];
    csvArray.pop(); //改行文字を消す
    return csvArray;
}

//////////////////
//scvを呼び出し
function CsvArrayCall(filePath) {
    //引数：csvファイルの相対or絶対パス
    var csvData = new Array();
    var data = new XMLHttpRequest();
    data.open('GET', filePath, false); //true:非同期,false:同期
    data.send(null);

    var LF = String.fromCharCode(10); //改行ｺｰﾄﾞ
    var lines = data.responseText.split(LF);
    for (var i = 0; i < lines.length; ++i) {
        var cells = lines[i].split(',');
        if (cells.length != 1) {
            csvData.push(cells);
        }
    }
    return csvData;
}

///////////////////////////////////////////////////
//html2canvas

const button = document.getElementById('cap-btn');
button.addEventListener('click', ScreenGo);

function ScreenGo() {
    const h2 = document.getElementById('prof-h2').textContent;

    html2canvas(document.getElementById('screenshot-area'), {}).then(function (canvas) {
        const date = new Date();
        let dayPlus = '';
        if (date.getMonth() < 10) {
            dayPlus = 0;
        }
        const filename = `${h2}_${date.getFullYear()}${dayPlus}${
            date.getMonth() + 1
        }${date.getDate()}${date.getHours()}${date.getMinutes()}${date.getSeconds()}`;

        const imageData = canvas.toDataURL('image/png');
        const element = document.createElement('a');
        element.setAttribute('href', imageData);
        element.setAttribute('download', `${filename}.png`);
        element.click();
    });
}

///////////////////////////////////////////////////
//入力・アイコン
//できませんでした…
/*
const icon = document.getElementById('icon');
icon.addEventListener('change', function (e) {
    const fileUrl = e.target.files[0];
    const fileData = URL.createObjectURL(fileUrl);

    console.log(fileData);

    const img = document.getElementsByClassName('lc-icon');
    img.src = fileData;
});
*/

//////////////////////////////////////////////////////
//情報ウィンドウ関連

const infoBtn = document.getElementsByClassName('ri-information-line');
infoBtn[0].addEventListener('click', InfoVisibleToggle);
const closeBtn = document.getElementById('window-close');
closeBtn.addEventListener('click', InfoVisibleToggle);

function InfoVisibleToggle() {
    const info = document.getElementById('info');
    info.classList.toggle('display-none');
}
