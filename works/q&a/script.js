'use strict';

//選択中のプロンプト
let pronptMode = 0;

const MAJOR_ARCANAS = [
    { name: '愚者', power: '自由・夢想・型破り', abuse: '極端・苛立ち・落ちこぼれ' },
    {
        name: '魔術師',
        power: '意志・才能・創造',
        abuse: '混迷・スランプ・裏切り',
    },

    {
        name: '女教皇',
        power: '感性・神秘・聡明',
        abuse: '悲観・孤立・疑心暗鬼',
    },
    {
        name: '女帝',
        power: '豊穣・情熱・謙虚',
        abuse: '挫折・嫉妬・虚言',
    },
    {
        name: '皇帝',
        power: '統治・堅固・責任感',
        abuse: '未熟・傲慢・意志薄弱',
    },
    {
        name: '教皇',
        power: '人徳・尊敬・社会性',
        abuse: '束縛・不信・虚栄',
    },
    {
        name: '恋人',
        power: '愛美・自信・情熱',
        abuse: '空虚・無干渉・不道徳',
    },
    {
        name: '戦車',
        power: '勝利・征服',
        abuse: '暴走・独断・傍若無人',
    },
    {
        name: '力',
        power: '強大・強固・不撓不屈',
        abuse: '甘え・卑下・人任せ',
    },
    {
        name: '隠者',
        power: '深慮・難解・高尚な助言',
        abuse: '閉鎖・陰湿',
    },
    {
        name: '運命の輪',
        power: '転機・変化・向上',
        abuse: '悪化・別れ・降格',
    },
    {
        name: '正義',
        power: '公平・正当・均衡',
        abuse: '偏向・不均等・一方通行',
    },
    {
        name: '吊るされた男',
        power: '忍耐・努力・試練',
        abuse: '徒労・投げやり・やせ我慢',
    },
    {
        name: '死神',
        power: '停止・離散・終局',
        abuse: '再生・転生・新展開',
    },
    {
        name: '節制',
        power: '謙虚・倹約・管理',
        abuse: '浪費・消耗・不規則',
    },
    {
        name: '悪魔',
        power: '暴力・束縛・悪循環',
        abuse: '回復・反省・転生',
    },
    {
        name: '塔',
        power: '破滅・悲劇・崩壊',
        abuse: '緊迫・誤解・必要悪・不幸',
    },
    {
        name: '星',
        power: '希望・閃き・吉兆',
        abuse: '絶望・無気力・高望み',
    },
    {
        name: '月',
        power: '幻惑・欺瞞・潜在的な危険',
        abuse: '好転・優れた直感',
    },
    {
        name: '太陽',
        power: '成功・祝福・約束された将来',
        abuse: '不調・落胆・衰退・無為な時間',
    },
    {
        name: '審判',
        power: '復活・改善・更新',
        abuse: '悔恨・再起不能・悪い知らせ',
    },
    {
        name: '世界',
        power: '完成・永久不滅・約束された成功',
        abuse: '衰退・低迷・調和の崩壊',
    },
];

const MINOR_ARCANAS_SUITS = [
    { num: 0, suit: '棒', illu: 'wand' },
    { num: 1, suit: '聖杯', illu: 'cup' },
    { num: 2, suit: '剣', illu: 'sword' },
    { num: 3, suit: '硬貨', illu: 'coin' },
];

const MINOR_ARCANAS_CARDS = [
    {
        num: '1・Ace',
        wand: '創造力・出発点',
        cup: '喜び・満足',
        sword: '力の勝利・愛憎の大きな力',
        coin: '完全な満足・金',
    },
    {
        num: '2',
        wand: '財産・荘厳さ・領主',
        cup: '愛・友情・一致',
        sword: '均衡・条件付きの調和・',
        coin: '陽気さ・文書の報せ',
    },
    {
        num: '3',
        wand: '確立された力・交易・ビジネス上の協力',
        cup: '豊か・幸福・成就・治癒',
        sword: '撤退・断絶・悲しみ',
        coin: '技芸・取引・熟練工',
    },
    {
        num: '4',
        wand: '仕事の完成・休息・平和',
        cup: '倦怠・飽食・混ぜ合わされた快楽',
        sword: '退却・隠遁・墓・棺',
        coin: '所有の保証・所有物への執着・贈り物',
    },
    {
        num: '5',
        wand: '熱心な競争・スポーツ',
        cup: '損失・期待ほどではない遺産',
        sword: '堕落・廃止・損失',
        coin: '物質的なトラブル',
    },
    {
        num: '6',
        wand: '勝利者・大ニュースの到着',
        cup: '過去を振り返る・幸福・楽しみ',
        sword: '仕事をやりこなす・仲介者・得策',
        coin: '成功・贈り物',
    },
    {
        num: '7',
        wand: '勇気・ディスカッション・交渉',
        cup: '幻想・一時的なある程度の成功',
        sword: '企画・計画',
        coin: '金銭・ビジネス・交易',
    },
    {
        num: '8',
        wand: '活動性・素早さ',
        cup: '成功の放棄・謙遜',
        sword: '拘束された力・非難・悪い知らせ',
        coin: '職人気質・準備',
    },
    {
        num: '9',
        wand: '抑圧下での強さ',
        cup: '物質的安寧・満足',
        sword: '失望・幻滅',
        coin: '物質的な豊かさ・達成',
    },
    {
        num: '10',
        wand: '抑圧・多すぎる財産',
        cup: '満足・人間愛と友情の完全さ',
        sword: '荒廃・苦痛',
        coin: '利益・財産・家族',
    },
    {
        num: '小姓',
        wand: '若い男性・忠実・外交使節・郵便',
        cup: '勉強熱心な若者・熟考',
        sword: '監視・警戒・スパイ・試験',
        coin: '精励勤勉・学生',
    },
    {
        num: '騎士',
        wand: '出発・親しみやすい若者',
        cup: '到着・発展・提案・鼓舞',
        sword: '勇ましさ・激怒',
        coin: '有用・財産・責任・廉直',
    },
    {
        num: '女王',
        wand: '田舎の女性・親しみやすく貞淑・尊敬できる',
        cup: '善良で公正な女性・幸福・叡智',
        sword: '貞淑で悲しみ多き女性・未亡人・喪失',
        coin: '富・寛大・安全',
    },
    {
        num: '王',
        wand: '田舎の男性・正直・良心的',
        cup: '公正な男性・創造的知性',
        sword: '裁判官・正義・権威・命令',
        coin: '実際的な知性・ビジネス・成功',
    },
];

const PRONPT_SUITS = [
    '英雄、勇猛、波乱万丈な',
    '明るい、安心、微笑み、',
    '幻想的、ロマンチック、曖昧な',
    '破滅的、死について、不条理な',
    '創造的、表現、内省的な',
    '収集、技術的な',
    '運動的、活発的な',
    '交流、外交、社交的な',
    '積極性、行動、挑戦的な',
    '理論、分析、慎重、計画的な',
    '感情的、直感的、共感',
    '信念、誇り、自己中心的な',
    '社会性、調和、協力的な',
    '内向的、反省、瞑想、直感',
    '外向的、社交的、対話',
    '柔軟、先進的、流動性な',
    '保守的、堅実、安心',
    '混沌、自由、不規則な',
    '知識、探求心、好奇心旺盛',
    '規律、義務、責任、秩序',
    '闘志、害意、競争心',
];

const PRONPT_NUMBERS = [
    '農業、作物、山林',
    '漁業、水産物、海浜',
    '料理、飲食物',
    '道、日常風景',
    '獣、生物、想像上の存在',
    '町、都、国',
    '遊戯、興行、非日常',
    '文化、文明',
    '病、事故、問題',
    '戦闘、武術、武具',
    '研究、学術、文字',
    '芸術、表現、工芸品',
    '占術、呪術、星読み',
    '謎、探求、未知',
    '孤独、防衛、不信',
    '高貴、立場、重圧',
    '放浪、自由、風来',
    '呪縛、執着、傷',
    '伝説、歴史的、過去',
    '前科、更生、復讐',
    '使命、役割、従事、誓い',
    '喪失、恐怖、被害者',
    '研究、研鑽、知の財産',
    '名声、名誉、引退',
    '革命、理想、創造、裏切り',
    '血の縁、家族、共同体',
];

////////////////////////////////////////////////////////////////////////・

const INPUT_TEXTAREA = document.getElementById('input');
const INPUT_BUTTON = document.getElementById('input_submit');
const OUTPUT_AREA = document.getElementById('output');
const TOGGLE = document.getElementsByName('random_pattern');

INPUT_TEXTAREA.addEventListener('keydown', keydown);
INPUT_BUTTON.addEventListener('click', writeSubmit);

// 共通 ////////////////////////////////・

//ログ送り
function write(txt) {
    //追加と生成
    const NEW_DT = document.createElement('dt');
    const NEW_DD = document.createElement('dd');
    NEW_DT.innerText = txt[0];
    NEW_DD.innerText = txt[1];

    if (TOGGLE.item(3).checked) {
        //装飾用クラスを追加
        NEW_DT.classList.add('not_title_text');
    }

    if (txt[0].length > 0) {
        //タイトルの中身が空でない場合、タイトルを追加
        addNewElements(NEW_DT);
    }

    if (!TOGGLE.item(3).checked) {
        //ランダムがなしでない場合、追加
        addNewElements(NEW_DD);
    }

    //フォーカスを移動
    OUTPUT_AREA.scrollTop = OUTPUT_AREA.scrollHeight;
    input.focus();
}

function addNewElements(e) {
    OUTPUT_AREA.appendChild(e);
}

//決定による書き込み
function writeSubmit() {
    const e = INPUT_TEXTAREA.value;
    if (e.length > 0) {
        writeMenu(e);
        input.value = '';
    } else {
        //連打も可にする
        writeMenu(e);
        input.value = '';
    }
}

//エンター押下の処理
function keydown(e) {
    if (e.key === 'Enter') {
        writeMenu(input.value);
        input.value = '';
        input.focus();
        e.preventDefault();
    }
}

//書き込みメニュー
function writeMenu(t) {
    console.log('書き込みメニュー');
    let text = t;
    let random = randomMenu();

    write([text, random]);
}

// ランダムの付与 ////////////////////////////////////////

//ランダムな結果を生成
function randomMenu() {
    console.log('　　ランダムな結果を生成');
    let r;
    if (TOGGLE.item(0).checked) {
        //選択が０：ランダム
        if (Math.floor(Math.random() * 100 < 50)) {
            console.log('ランダム：50未満');
            r = randomArcanas();
        } else {
            console.log('ランダム：50以上');
            r = randomCard();
        }
    } else if (TOGGLE.item(1).checked) {
        //選択が１：タロット
        r = randomArcanas();
    } else if (TOGGLE.item(2).checked) {
        //選択が２：トランプ
        r = randomCard();
    } else {
        //その他（なし）]
        r = '';
    }

    return r;
}

//タロット呼び出しメニュー
function randomArcanas() {
    console.log('　　　タロット呼び出し');
    let per = Math.floor(Math.random() * 100);
    if (per < 30) {
        // 大の場合
        return arcanasMajor();
    } else {
        // 小の場合
        return arcanasMinor();
    }
}

//大アルカナ選出
function arcanasMajor() {
    console.log('　　　　大アルカナを選出');

    //名前＋裏or表
    const result = selectOneOfArray(MAJOR_ARCANAS);

    //裏表の決定
    const random = Math.floor(Math.random() * 2);
    let index = '';
    let word = '';
    if (random === 0) {
        //表
        word = '正位置';
        index = result.power;
    } else {
        //裏
        word = '逆位置';
        index = result.abuse;
    }

    return `【${word}の＜${result.name}＞】${index}`;
}

//小アルカナ選出
function arcanasMinor() {
    console.log('　　　　小アルカナを選出');

    //ナンバー
    const RANDOM_SUIT_NUMBER = Math.floor(Math.random() * 4);
    let number = MINOR_ARCANAS_SUITS[RANDOM_SUIT_NUMBER]; //スートのオブジェクト
    let suit = number.suit;

    //スート
    let randomIndexNumber = Math.floor(Math.random() * MINOR_ARCANAS_CARDS.length);
    let card = MINOR_ARCANAS_CARDS[randomIndexNumber];
    randomIndexNumber++;

    let text;
    if (suit === 'wand') {
        text = card.wand;
    } else if (suit === 'cup') {
        text = card.cup;
    } else if (suit === 'sword') {
        text = card.sword;
    } else {
        text = card.coin;
    }

    return `【${suit}の${randomIndexNumber}】${text}`;
}

//トランプ呼び出しメニュー
function randomCard() {
    console.log('　　　トランプ呼び出し');

    let firstText = selectOneOfArray(PRONPT_SUITS);
    let finalText = selectOneOfArray(PRONPT_NUMBERS);

    return `${firstText} ＋ ${finalText}`;
}

//配列から一つをランダム選択
function selectOneOfArray(arr) {
    console.log('（配列から一つを選択');

    const num = Math.floor(Math.random() * arr.length);
    return arr[num];
}

// トグルメニュー //////////////////////////////////////////////////・
//トグル切り替え

//const TOGGLE = document.getElementsByName('random_pattern');
//TOGGLE.addEventListener('click', toggleSwitch);

function toggleSwitch() {
    console.log(TOGGLE.value);
    let options = TOGGLE.options;

    if (options[0].checked === true) {
        //すべて
        pronptMode = 0;
    } else if (options[1].checked === true) {
        //タロット
        pronptMode = 1;
    } else if (options[2].checked === true) {
        //トランプ
        pronptMode = 2;
    } else {
        //なし
        pronptMode = 3;
    }
}
