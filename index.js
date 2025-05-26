const main = document.getElementById("main");

function wstawianieNowegoTemplate(src, tags) {
  
    // Znajdź szablon o id meow...
    const template = document.getElementById("meow-container-template");

    // Zrób kopię wszystkiego co znajduję sie w szablonie (parametr true)
    const klonowanie = template.content.cloneNode(true);

    const ul = klonowanie.querySelector("ul");

    ul.replaceChildren();



    // Wewnątrz kopi znajdź element typu <img>
    const zdjecie = klonowanie.querySelector("img");

    // Wstaw zmienną `src` jako zawartość tekstową temu obrazkowi
    zdjecie.setAttribute("src", src);

    const a = klonowanie.querySelector("a");
    a.setAttribute("href", src);


    for(const tag of tags){
        const li = document.createElement("li");
        li.textContent = tag
        ul.appendChild(li);
    }
    const heartButton = klonowanie.querySelector("button");

    if (localStorage.getItem(src)) {
        heartButton.classList.add("liked");
    }
    heartButton.onclick = function () {
        const heart = window.localStorage.getItem(src);
        if (heart == null) {
            localStorage.setItem(src, "heart");
            heartButton.classList.add("liked");
            console.log("Dodano do ulubionych");
        } else {
            localStorage.removeItem(src);
            heartButton.classList.remove("liked");
            console.log("Usunięto z ulubionych");
        }
    };
    

    // Gotową kopię szablonu dodaj na końcu elementu main, 
    main.appendChild(klonowanie);
    //reagować na kliknięcie guzkia
}

const wyszukiwarka = document.getElementById("wyszukiwarka");
wyszukiwarka.onkeyup = function () {
    const wpisanyTekst = wyszukiwarka.value;
    for(const klonowanie of document.querySelectorAll(".meow-container")){
        const ul = klonowanie.querySelector("ul");
        const tags = ul.textContent;
        const matching = tags.includes(wpisanyTekst)
        if (matching) {
            klonowanie.removeAttribute("hidden");
        } else {
            klonowanie.setAttribute("hidden", "true");
        }
        console.log(matching, klonowanie);
    }
};

// Zrób i wstaw 1 klon
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/0a49f36909a6e1f8c97afed45b114187.jpg",["śmieszny", "kotek", "pogarda"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/01a3b586a83c62348470ef0d4abc0099.jpg", ["powaga", "białoczarny", "alkohol"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/122861644_401054050923057_6110775820027702721_n.jpg", ["śmieszny", "szok", "biały"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/2cec71161268a2ef69288b5a4a210587.jpg", ["smutny", "białopomarańczowy", "kocyk"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/2ea44aec3f63329c83845289c74f8dd1.jpg", ["smutny", "biały", "dużeoczy"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/3F399592-FDCB-4719-8ED2-7CBEDF547597.jpg", ["śmieszny", "pomarańczowy", "cool"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/4MUoN2xthjcO20BEblubVuWxtZVGuOkoGtAncrP6Uuw.png", ["śmieszny", "brązowy", "soczek"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/monti2.jpg", ["powaga", "szary", "selfie"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/5de0c460e1b16cb85ccff997fe956e05.jpg", ["smutny", "biały", "frytki"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/6dfa91f89f0a26c8eda96462be547e83.jpg", ["powaga", "biały", "niewyraźny"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/07b14663b12c593d8ab06586e92b73ca.jpg", ["kotek", "szok", "niewyraźny"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/27f3dc96-54bf-4c3c-b020-38fabeac2325.jpg", ["spokój", "pomarańczowy", "piąteczka"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/74ea19a0d93e2ec19649e8dce6733ed8.jpg", ["smutny", "białoszary", "dużeoczy"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/99c8c60c91dca84f9e73cb18272db878.jpg", ["smutny", "nóż", "dużeoczy"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/426C522700000578-4704194-Tipsy_pictured_was_in_big_trouble_after_drinking_from_a_pool_of_-a-6_1500307885361.jpg", ["powaga", "czarny", "pogarda"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/7076e874c528340893d80bad5a89c73a.jpg", ["szok", "biały", "niewyraźny"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/634425b824e21eea70a3880a15631f7d.jpg", ["smutny", "brązowy", "dużeoczy"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/1368833_10200423012314002_1704943499_n.jpg", ["smutny", "prysznic", "dużeoczy"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/FB_IMG_1551564264638.jpg", ["powaga", "brązowy", "kocyk"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/118764064_370470367303470_4118026958884390720_n.jpg", ["śmieszny", "białoczarny", "broda"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/118777569_614602912587550_959831113733509148_n.jpg", ["powaga", "białoczarny", "pogarda"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/120013548_334406327783989_6017662544510074648_n.jpg", ["powaga", "białoczarny", "akwarelista"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/120201375_243853847045101_1300904951718388873_n.jpg", ["śmieszny", "czarnobiały", "wąs"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/FB_IMG_1582330730485.jpg", ["śmieszny", "pomarańczowy", "picie"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/120316111_1032397160524676_7471639857620439133_n.jpg", ["śmieszny", "szarobiały", "wąs"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/123197149_2767028533571021_310623711451576449_n.jpg", ["smutny", "brązowy", "urodziny"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/123328606_983689062116935_5127799912002016490_n.png", ["śmieszny", "brązowy", "pieniądzę"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/123348198_364874934768607_2603335574136120945_n.png", ["śmieszny", "czarny", "niewyraźny"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/123504773_746167919579546_6355205566321772113_n.jpg", ["śmieszny", "jedzenie", "broń"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/123652749_382159133030862_803158687876291278_n.png", ["śmieszny", "niewyraźny", "dywan"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/123685434_885821928830659_8926430257460755162_n.png", ["śmieszny", "bochen", "dywan"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/123956759_846868916082395_2544626275468558494_n.png", ["śmieszny", "brązowy", "maska"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/FB_IMG_1551564270325.jpg", ["sen", "brązowy", "kocyk"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/received_240980486571014.jpeg", ["smutek", "dużeoczy", "biały"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/125165473_299607167802905_3960612411518330421_n.jpg", ["śmieszny", "pomarańczowobiały", "drugiplan"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/127092219_463990494579957_5134763331854726290_n.png", ["śmieszny", "pogarda", "drugiplan"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/127765735_707196533509343_8258088636504235480_n.jpg", ["śmieszny", "mechanik", "powaga"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/143812172_2805175123063213_100074788877671807_n.png", ["śmieszny", "coalcenter", "złość"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/3071017202_850134f879.jpg", ["śmieszny", "butelka", "alkohol"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/A-black-cat-hissing-claws-out-about-to-attack.jpg", ["śmieszny", "czarny", "kotek"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/aN0KD5b_460s.jpg", ["śmieszny", "kabelodprądu", "dużeoczy"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/bhdmjdei24831.jpg", ["śmieszny", "biały", "kotek"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/monti3.jpg", ["powaga", "szary", "balkon"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/big-eyed-cat-begging-portrait-berkehaus-photography.jpg", ["śmieszny", "czarnobiały", "dużeoczy"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/blurred-surprised-cat-meme-5b734a45210ef3b6657bcbe2831715fa.jpg", ["śmieszny", "biały", "niewyraźny"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/c26b6b54-8c9d-4c6e-9036-a73611445b12.jpg", ["śmieszny", "białoczarny", "stanowczy"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/ca452e4f12bb94974de2d39e8a60687f.jpg", ["smutny", "dużeoczy", "jedzenie"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/cat-640x488.jpg", ["powaga", "dużeoczy", "pomarańczowy"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/received_2016943201887732.jpeg", ["smutek", "brązowobiały", "szok"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/cat-1196374.jpg", ["powaga", "picie", "spokój"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/cat-1234950.jpg", ["śmieszny", "walka", "dwakoty"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/cat-drinking-water-in-sink.jpg", ["śmieszny", "picie", "zlew"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/coughing-cat-meme-lede.jpg", ["śmieszny", "język", "zez"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/drinking_blog_1600x.jpg", ["powaga", "język", "pogarda"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/ula2.jpg", ["powaga", "białoszary", "naboczku"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/f7ca34d9456841ebd04271682a1b9ab7.jpg", ["smutny", "niewyraźny", "dużeoczy"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/f10c0e92ee043dba2114d4010d7fb662.jpg", ["śmieszny", "niewyraźny", "rzęsy"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/FB_IMG_1477906320506.jpg", ["śmieszny", "białoczarny", "akwarelista"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/FB_IMG_1501805544431.jpg", ["śmieszny", "powaga", "rozlewający"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/FB_IMG_1501822901671.jpg", ["śmieszny", "białobrązowy", "nóż"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/FB_IMG_1520234211897.jpg", ["śmieszny", "białobrązowy", "zez"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/FB_IMG_1521756044181.jpg", ["śmieszny", "mama", "szok"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/FB_IMG_1521756552025.jpg", ["śmieszny", "czarny", "zęby"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/FB_IMG_1521757036074.jpg", ["śmieszny", "pomarańczowy", "język"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/FB_IMG_1526035408735.jpg", ["śmieszny", "brązowobiały", "środkowypalec"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/FB_IMG_1533518205949.jpg", ["śmieszny", "kotek", "łapa"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/FB_IMG_1540305836818.jpg", ["śmieszny", "niewyraźny", "biały"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/FB_IMG_1540632800902.jpg", ["śmieszny", "pomarańczowy", "łapa"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/FB_IMG_1541000056899.jpg", ["złość", "biały", "czpaka"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/FB_IMG_1541000061310.jpg", ["złość", "biały", "czpaka"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/FB_IMG_1541615624168.jpg", ["szok", "lodówka", "szarobiały"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/FB_IMG_1541745858804.jpg", ["śmieszny", "pomarańczowy", "tyłek"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/FB_IMG_1542298392980.jpg", ["śmieszny", "pomarańczowy", "szok"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/FB_IMG_1550373918088.jpg", ["smutny", "pomarańczowobiały", "jedzenie"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/FB_IMG_1551564261458.jpg", ["powaga", "brązowy", "kocyk"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/FB_IMG_1554412668231.jpg", ["śmieszny", "kolorowy", "złość"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/FB_IMG_1556111494600.jpg", ["powaga", "peruka", "pogarda"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/FB_IMG_1561124264270.jpg", ["sen", "biały", "dwakoty"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/FB_IMG_1561361996205.jpg", ["sen", "dużeoczy", "misiu"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/FB_IMG_1578480591311.jpg", ["powaga", "łysy", "łapy"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/monti4.jpg", ["szok", "szary", "balkon"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/FB_IMG_1582017449251.jpg", ["śmieszny", "białoszary", "klapek"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/FB_IMG_1582330717267.jpg", ["śmieszny", "pomarańczowy", "picie"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/FB_IMG_1592334403471.jpg", ["śmieszny", "atak", "białoczarny"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/FB_IMG_1592334720868.jpg", ["powaga", "czarny", "pilnik"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/FB_IMG_1592834303637.jpg", ["sen", "czarnobiały", "kamień"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/FB_IMG_1594936313202.jpg", ["powaga", "kapelusz", "picie"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/FB_IMG_1595503311248.jpg", ["złość", "pomarańczowy", "kolia"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/FB_IMG_1600269234181.jpg", ["szok", "brązowy", "liść"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/FB_IMG_1602107945348.jpg", ["powaga", "dwakoty", "łapa"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/FB_IMG_1603886149256.jpg", ["pogarda", "biały", "język"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/FB_IMG_1603886152245.jpg", ["relaks", "język", "narkotyk"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/FB_IMG_1603886157262.jpg", ["złość", "język", "czarnobiały"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/fzxmXu9.jpg", ["relaks", "pomarańczowobiały", "epapieros"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/I+drink+with+friends+most+if+the+time+_c9b2f310634ac653579171d51795835a.jpg", ["powaga", "pomarańczowy", "picie"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/If+you+mean+the+sad+cat+meme+its+just+the+_975159c48dbc4d1727031ed439bbaa3d.png", ["smutek", "pomarańczowobiały", "dużeoczy"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/images.jpg", ["śmieszny", "karykatura", "jocker"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/images (1).jpg", ["sen", "picie", "papieros"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/images (2).jpg", ["smutek", "pomarańczowobiały", "mikrofon"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/images (3).jpg", ["złość", "kotek", "łapy"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/IMG_20180720_132213.jpg", ["powaga", "pomarańczowy", "okulary"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/IMG_20180730_121222.jpg", ["powaga", "brązowy", "szklanka"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/IMG_20180730_121515.jpg", ["szok", "białopomarańczowy", "rekin"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/IMG_20180730_121516.jpg", ["szok", "białoczarny", "ryba"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/IMG_20180730_121520.jpg", ["złość", "brązowobiały", "lupa"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/IMG_20180917_190352.jpg", ["powaga", "brązowy", "love"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/IMG_20180917_192433.jpg", ["uroczy", "biały", "love"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/melted12_4e189508-0c43-406c-a76a-d6f05053163f.jpg", ["sen", "białobrązowy", "lustro"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/monti.jpg", ["powaga", "szary", "zmywarka"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/nadh-41_17b72.jpg", ["smutek", "biały", "frytka"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/original.jpg", ["smutek", "szok", "pies"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/paint-your-pet-as-the-cryig-cat-meme.jpg", ["smutek", "dużeoczy", "białopomarańczowy"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/photo_2021-12-16_18-17-56.jpg", ["smutek", "dużeoczy", "kapelusz"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/Reaction+image+dump_8d0aa6_6867334.jpg", ["smutek", "dużeoczy", "biały"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/received_254058158648346.jpeg", ["smutek", "dużeoczy", "szok"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/received_284132795646084.jpeg", ["powaga", "biały", "okej"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/received_601603577112365.jpeg", ["szok", "czarny", "klapek"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/received_792073861361203.jpeg", ["śmieszny", "złość", "psps"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/received_1900984626662039.jpeg", ["powaga", "pomarańczowobiały", "okulary"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/received_2016943148554404.jpeg", ["szok", "brązowobiały", "niewyraźny"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/received_2032584696989040.jpeg", ["śmieszny", "powaga", "ręcznik"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/received_2035046530076190.jpeg", ["śmieszny", "szok", "pomarańczowy"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/received_2085643218349854.jpeg", ["śmieszny", "szok", "biały"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/received_2111431925770983.jpeg", ["śmieszny", "powaga", "okulary"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/received_2120310868216422.jpeg", ["śmieszny", "białopomarańczowy", "love"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/received_2122499604664215.jpeg", ["śmieszny", "powaga", "szklanka"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/received_2534467706573821.jpeg", ["śmieszny", "powaga", "niewyraźny"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/tatyana-rubleva-EGLt8RpNqcE-unsplash.jpg", ["śmieszny", "powaga", "naboczku"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/Top-29-Crying-Cat-Memes-24.jpg", ["smutek", "dużeoczy", "hellokitty"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/ula.jpg", ["powaga", "białoszary", "balkon"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/ZskrFwK.jpg", ["smutek", "dużeoczy", "niewyraźny"]);
