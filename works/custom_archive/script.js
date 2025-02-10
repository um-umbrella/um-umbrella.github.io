'use strict';

let cards = [];
let editIndex = null;

// ページロード時に呼び出し
window.onload = function () {
    loadStorage();
};

/////////////////////////////////////////////////
//各リストのシステム

// 情報リストの追加ボタン
document.getElementById('facility').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        addFacility();
    }
});

//情報リストの追加処理
function addFacility(name = '') {
    const facilityInput = document.getElementById('facility');
    const facilityName = name || facilityInput.value;
    if (!facilityName.trim()) return;

    const li = document.createElement('li');
    li.innerText = facilityName;

    //削除ボタン
    const delBtn = document.createElement('button');
    delBtn.innerText = '❌';
    delBtn.className = 'delete-btn';
    delBtn.onclick = () => li.remove();
    li.appendChild(delBtn);

    document.getElementById('facilityList').appendChild(li);
    facilityInput.value = '';
}

// タグ選択の追加ボタン
document.getElementById('material').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        addMaterial();
    }
});

// タグ選択のリスト処理
function addMaterial(name = '') {
    const materialInput = document.getElementById('material');
    const materialName = name || materialInput.value;
    if (!materialName.trim()) return;

    const li = document.createElement('li');
    li.innerText = materialName;

    // 削除ボタン
    const delBtn = document.createElement('button');
    delBtn.innerText = '❌';
    delBtn.className = 'delete-btn';
    delBtn.onclick = () => li.remove();
    li.appendChild(delBtn);

    document.getElementById('materialList').appendChild(li);
    materialInput.value = '';
}

//////////////////////////////////////

// 内容の保存
function saveData() {
    const location = document.getElementById('location').value;

    //情報リスト
    const facilities = Array.from(document.querySelectorAll('#facilityList li')).map((li) =>
        li.innerText.replace('❌', '').trim()
    );

    // タグ選択
    const materials = Array.from(document.querySelectorAll('#materialList li')).map((li) =>
        li.innerText.replace('❌', '').trim()
    );

    if (!location.trim()) {
        alert('地名を入力してください！');
        return;
    }

    const data = { location, facilities, materials };

    if (editIndex !== null) {
        cards[editIndex] = data;
        editIndex = null;
    } else {
        cards.push(data);
    }

    saveToStorage();
    displayCards();
    clearInput();
}

// カード生成
function createCard(data, index) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<h4>${data.location}</h4>`;

    // タグ選択を追加
    const ul = document.createElement('ul');
    ul.className = 'ulColorList';
    card.appendChild(ul);
    data.materials.forEach((m) => {
        const mSpan = document.createElement('span');
        mSpan.innerText = m;
        mSpan.style.backgroundColor = getTraitColor(m);
        ul.appendChild(mSpan);
    });

    // 情報リストを追加
    card.innerHTML += `<ul class="ulList">${data.facilities.map((f) => `<li>${f}</li>`).join('')}</ul>`;

    const btnFrame = document.createElement('div');
    btnFrame.className = 'btn-frame';
    card.appendChild(btnFrame);

    // 編集ボタン
    const editBtn = document.createElement('button');
    editBtn.innerText = '編集';
    editBtn.className = 'edit-btn';
    editBtn.onclick = () => editData(index);
    btnFrame.appendChild(editBtn);

    // 削除ボタン
    const delBtn = document.createElement('button');
    delBtn.innerText = '削除';
    delBtn.className = 'delete-btn';
    delBtn.onclick = () => deleteData(index);
    btnFrame.appendChild(delBtn);

    return card;
}

/////////////////////////////////////
//データ保存

// ローカルストレージに保存
function saveToStorage() {
    localStorage.setItem('saveData', JSON.stringify(cards));
}

// ストレージから読み込む
function loadStorage() {
    /*
    const cookies = document.cookie.split(';').reduce((acc, cookie) => {
        const [key, value] = cookie.trim().split('=');
        acc[key] = decodeURIComponent(value);
        return acc;
    }, {});

    if (cookies.inputCardsData) {
        cards = JSON.parse(cookies.inputCardsData);
        displayCards();
    }
        */

    //ローカルストレージから読み込み？
    let savedData = localStorage.getItem('saveData');
    if (savedData) {
        cards = JSON.parse(savedData); // 取得データをオブジェクトに変換
        displayCards(); // 画面に反映
    }
}

// 保存されたカードを表示する
function displayCards() {
    const cardContainer = document.getElementById('cardContainer');
    if (cardContainer) {
        cardContainer.innerHTML = '';
        cards.forEach((data, index) => {
            cardContainer.appendChild(createCard(data, index));
        });
    }
}

// タグに関連する色を取得、または生成
function getTraitColor(m) {
    let traitColors = loadTraitColorsFromCookies();
    if (traitColors[m]) {
        return traitColors[m];
    } else {
        const color = getRandomDarkColor();
        traitColors[m] = color;
        saveTraitColorsToCookies(traitColors);
        return color;
    }
}

// クッキーからタグのカラーコードを読み込む
function loadTraitColorsFromCookies() {
    const cookies = document.cookie.split(';').reduce((acc, cookie) => {
        const [key, value] = cookie.trim().split('=');
        if (key === 'tagColors') acc = JSON.parse(decodeURIComponent(value));
        return acc;
    }, {});
    return cookies;
}

// タグのカラーコードをクッキーに保存する
function saveTraitColorsToCookies(c) {
    document.cookie =
        'tagColors=' + encodeURIComponent(JSON.stringify(c)) + ';max-age=' + 60 * 60 * 24 * 365 + ';path=/';
}

// 入力フォームをクリア
function clearInput() {
    document.getElementById('location').value = '';
    document.getElementById('materialList').innerHTML = '';
    document.getElementById('facilityList').innerHTML = '';
}

///////////////////////////////////////////////////
//カード

// カードを編集する
function editData(index) {
    const data = cards[index];
    document.getElementById('location').value = data.location;

    const facilityList = document.getElementById('facilityList');
    facilityList.innerHTML = '';
    data.facilities.forEach(addFacility);

    const materialList = document.getElementById('materialList');
    materialList.innerHTML = '';
    data.materials.forEach(addMaterial);

    editIndex = index;
}

// カードを削除する
function deleteData(index) {
    cards.splice(index, 1);
    saveToStorage();
    displayCards();
}

// 背景色をランダム生成
function getRandomDarkColor() {
    const r = Math.floor(Math.random() * 175);
    const g = Math.floor(Math.random() * 175);
    const b = Math.floor(Math.random() * 175);
    return `rgb(${r}, ${g}, ${b})`;
}

// データを削除
function clearData() {
    localStorage.removeItem('saveData'); // ローカルストレージのキー
    document.cookie = 'tagColors=; max-age=0; path=/; domain=' + location.hostname + ';';

    cards = []; // ローカル変数のカードデータ
    displayCards();
}

///////////////////////////////////////////////////
//ローカルセーブ

document.getElementById('fileOutput').addEventListener('click', saveCookiesToFile);

// 現在の内容をファイルに保存
function saveCookiesToFile() {
    const dataStr = JSON.stringify(cards, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'saveData.json';
    link.click();
}

document.getElementById('fileInput').addEventListener('change', uploadCookiesFromFile);

// セーブデータをアップロードして読み込む
function uploadCookiesFromFile(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        try {
            clearData(); //クッキーを削除してみる

            const parsedData = JSON.parse(e.target.result);
            localStorage.setItem('saveData', JSON.stringify(parsedData)); // JSON.parse でオブジェクト化
            cards = parsedData;
            displayCards();
        } catch (error) {
            alert('無効なデータ形式です');
        }
    };
    reader.readAsText(file);
}
