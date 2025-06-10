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
        } else {
            localStorage.removeItem(src);
            heartButton.classList.remove("liked");
        }
        if (checkboxLiked.checked) {
            filtrujPolubione();
        }
    };
    // Gotową kopię szablonu dodaj na końcu elementu main,
    main.appendChild(klonowanie);

    //reagować na kliknięcie guzkia
    const checkboxLiked = document.querySelector(".checkobox-liked input");

    //filtrowanie elementów na stronie, pokazywanie tylko tych, które zostały polubione
    function filtrujPolubione() {
        const pokazTylkoPolubione = checkboxLiked.checked;

        for (const kontener of document.querySelectorAll(".meow-container")) {
            const przyciskLike = kontener.querySelector("button.like");
            //sprawdzanie czy przycisk ma klasę "liked"
            const jestPolubione = przyciskLike.classList.contains("liked");

            if (pokazTylkoPolubione && !jestPolubione) {
                kontener.setAttribute("hidden", "true");
            } else {
                kontener.removeAttribute("hidden");
            }
        }
    }
    checkboxLiked.onchange = filtrujPolubione;

}

const wyszukiwarka = document.getElementById("wyszukiwarka");

wyszukiwarka.onkeyup = function () {
    const wpisanyTekst = wyszukiwarka.value.toLowerCase();
    for(const klonowanie of document.querySelectorAll(".meow-container")){
        const ul = klonowanie.querySelector("ul");
        const tags = ul.textContent;
        //sprawdzanie czy wpisany tekst występuje w tagach
        const matching = tags.includes(wpisanyTekst)
        if (matching) {
            klonowanie.removeAttribute("hidden");
        } else {
            klonowanie.setAttribute("hidden", "true");
        }
    }
};

//wysyłanie żądania
fetch("https://icanhazdadjoke.com/", {
    headers: { Accept: "application/json" }
})
    //konwertowanie odpowiedzi serwera
    .then(res => res.json())
    .then(data => {
        document.getElementById("dad-joke").textContent = data.joke;
    });





// main.addEventListener("click", (event) => {
//     const obrazek = event.target.closest(".meow-container img");
//     if (obrazek) {
//         const istniejacaNakladka = document.querySelector(".overlay");
//         if (istniejacaNakladka) {
//             istniejacaNakladka.remove();
//         }
//
//         const nowaNakladka = document.createElement("div");
//         nowaNakladka.classList.add("overlay");
//
//         document.body.appendChild(nowaNakladka);
//         const kontenerZdjecia = obrazek.closest(".meow-container");
//         kontenerZdjecia.classList.add("expanded");
//
//         nowaNakladka.addEventListener("click", () => {
//             nowaNakladka.remove();
//             kontenerZdjecia.classList.remove("expanded");
//         });
//         event.stopPropagation();
//     }
//     const przyciskSerduszko = event.target.closest(".meow-container button.like");
//     if (przyciskSerduszko) {
//         const kontener = przyciskSerduszko.closest(".meow-container");
//         if (!przyciskSerduszko.classList.contains("liked") && kontener.classList.contains("expanded")) {
//             kontener.classList.remove("expanded");
//             const nakladka = document.querySelector(".overlay");
//             if (nakladka) {
//                 nakladka.remove();
//             }
//         }
//     }
// });








wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/0a49f36909a6e1f8c97afed45b114187.jpg",["śmieszny", "kotek", "pogarda"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/01a3b586a83c62348470ef0d4abc0099.jpg", ["powaga", "białoczarny", "alkohol"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/122861644_401054050923057_6110775820027702721_n.jpg", ["śmieszny", "szok", "biały"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/2cec71161268a2ef69288b5a4a210587.jpg", ["smutny", "białopomarańczowy", "kocyk"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/2ea44aec3f63329c83845289c74f8dd1.jpg", ["smutny", "biały", "dużeoczy"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/3F399592-FDCB-4719-8ED2-7CBEDF547597.jpg", ["śmieszny", "pomarańczowy", "cool"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/4MUoN2xthjcO20BEblubVuWxtZVGuOkoGtAncrP6Uuw.png", ["śmieszny", "brązowy", "soczek"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/monti2.jpg", ["powaga", "szary", "selfie"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/5de0c460e1b16cb85ccff997fe956e05.jpg", ["smutny", "biały", "frytki"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/6dfa91f89f0a26c8eda96462be547e83.jpg", ["powaga", "biały", "niewyraźny"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/07b14663b12c593d8ab06586e92b73ca.jpg", ["kotek", "szok", "niewyraźny"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/27f3dc96-54bf-4c3c-b020-38fabeac2325.jpg", ["spokój", "pomarańczowy", "piąteczka"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/74ea19a0d93e2ec19649e8dce6733ed8.jpg", ["smutny", "białoszary", "dużeoczy"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/99c8c60c91dca84f9e73cb18272db878.jpg", ["smutny", "nóż", "dużeoczy"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/426C522700000578-4704194-Tipsy_pictured_was_in_big_trouble_after_drinking_from_a_pool_of_-a-6_1500307885361.jpg", ["powaga", "czarny", "pogarda"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/7076e874c528340893d80bad5a89c73a.jpg", ["szok", "biały", "niewyraźny"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/634425b824e21eea70a3880a15631f7d.jpg", ["smutny", "brązowy", "dużeoczy"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/1368833_10200423012314002_1704943499_n.jpg", ["smutny", "prysznic", "dużeoczy"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/FB_IMG_1551564264638.jpg", ["powaga", "brązowy", "kocyk"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/118764064_370470367303470_4118026958884390720_n.jpg", ["śmieszny", "białoczarny", "broda"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/118777569_614602912587550_959831113733509148_n.jpg", ["powaga", "białoczarny", "pogarda"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/120013548_334406327783989_6017662544510074648_n.jpg", ["powaga", "białoczarny", "akwarelista"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/120201375_243853847045101_1300904951718388873_n.jpg", ["śmieszny", "czarnobiały", "wąs"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/FB_IMG_1582330730485.jpg", ["śmieszny", "pomarańczowy", "picie"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/120316111_1032397160524676_7471639857620439133_n.jpg", ["śmieszny", "szarobiały", "wąs"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/123197149_2767028533571021_310623711451576449_n.jpg", ["smutny", "brązowy", "urodziny"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/123328606_983689062116935_5127799912002016490_n.png", ["śmieszny", "brązowy", "pieniądzę"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/123348198_364874934768607_2603335574136120945_n.png", ["śmieszny", "czarny", "niewyraźny"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/123504773_746167919579546_6355205566321772113_n.jpg", ["śmieszny", "jedzenie", "broń"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/123652749_382159133030862_803158687876291278_n.png", ["śmieszny", "niewyraźny", "dywan"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/123685434_885821928830659_8926430257460755162_n.png", ["śmieszny", "bochen", "dywan"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/123956759_846868916082395_2544626275468558494_n.png", ["śmieszny", "brązowy", "maska"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/FB_IMG_1551564270325.jpg", ["sen", "brązowy", "kocyk"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/received_240980486571014.jpeg", ["smutek", "dużeoczy", "biały"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/125165473_299607167802905_3960612411518330421_n.jpg", ["śmieszny", "pomarańczowobiały", "drugiplan"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/127092219_463990494579957_5134763331854726290_n.png", ["śmieszny", "pogarda", "drugiplan"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/127765735_707196533509343_8258088636504235480_n.jpg", ["śmieszny", "mechanik", "powaga"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/143812172_2805175123063213_100074788877671807_n.png", ["śmieszny", "coalcenter", "złość"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/3071017202_850134f879.jpg", ["śmieszny", "butelka", "alkohol"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/A-black-cat-hissing-claws-out-about-to-attack.jpg", ["śmieszny", "czarny", "kotek"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/aN0KD5b_460s.jpg", ["śmieszny", "kabelodprądu", "dużeoczy"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/bhdmjdei24831.jpg", ["śmieszny", "biały", "kotek"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/monti3.jpg", ["powaga", "szary", "balkon"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/big-eyed-cat-begging-portrait-berkehaus-photography.jpg", ["śmieszny", "czarnobiały", "dużeoczy"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/blurred-surprised-cat-meme-5b734a45210ef3b6657bcbe2831715fa.jpg", ["śmieszny", "biały", "niewyraźny"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/c26b6b54-8c9d-4c6e-9036-a73611445b12.jpg", ["śmieszny", "białoczarny", "stanowczy"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/ca452e4f12bb94974de2d39e8a60687f.jpg", ["smutny", "dużeoczy", "jedzenie"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/cat-640x488.jpg", ["powaga", "dużeoczy", "pomarańczowy"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/received_2016943201887732.jpeg", ["smutek", "brązowobiały", "szok"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/cat-1196374.jpg", ["powaga", "picie", "spokój"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/cat-1234950.jpg", ["śmieszny", "walka", "dwakoty"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/cat-drinking-water-in-sink.jpg", ["śmieszny", "picie", "zlew"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/coughing-cat-meme-lede.jpg", ["śmieszny", "język", "zez"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/drinking_blog_1600x.jpg", ["powaga", "język", "pogarda"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/ula2.jpg", ["powaga", "białoszary", "naboczku"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/f7ca34d9456841ebd04271682a1b9ab7.jpg", ["smutny", "niewyraźny", "dużeoczy"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/f10c0e92ee043dba2114d4010d7fb662.jpg", ["śmieszny", "niewyraźny", "rzęsy"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/FB_IMG_1477906320506.jpg", ["śmieszny", "białoczarny", "akwarelista"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/FB_IMG_1501805544431.jpg", ["śmieszny", "powaga", "rozlewający"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/FB_IMG_1501822901671.jpg", ["śmieszny", "białobrązowy", "nóż"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/FB_IMG_1520234211897.jpg", ["śmieszny", "białobrązowy", "zez"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/FB_IMG_1521756044181.jpg", ["śmieszny", "mama", "szok"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/FB_IMG_1521756552025.jpg", ["śmieszny", "czarny", "zęby"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/FB_IMG_1521757036074.jpg", ["śmieszny", "pomarańczowy", "język"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/FB_IMG_1526035408735.jpg", ["śmieszny", "brązowobiały", "środkowypalec"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/FB_IMG_1533518205949.jpg", ["śmieszny", "kotek", "łapa"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/FB_IMG_1540305836818.jpg", ["śmieszny", "niewyraźny", "biały"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/FB_IMG_1540632800902.jpg", ["śmieszny", "pomarańczowy", "łapa"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/FB_IMG_1541000056899.jpg", ["złość", "biały", "czpaka"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/FB_IMG_1541000061310.jpg", ["złość", "biały", "czpaka"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/FB_IMG_1541615624168.jpg", ["szok", "lodówka", "szarobiały"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/FB_IMG_1541745858804.jpg", ["śmieszny", "pomarańczowy", "tyłek"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/FB_IMG_1542298392980.jpg", ["śmieszny", "pomarańczowy", "szok"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/FB_IMG_1550373918088.jpg", ["smutny", "pomarańczowobiały", "jedzenie"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/FB_IMG_1551564261458.jpg", ["powaga", "brązowy", "kocyk"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/FB_IMG_1554412668231.jpg", ["śmieszny", "kolorowy", "złość"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/FB_IMG_1556111494600.jpg", ["powaga", "peruka", "pogarda"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/FB_IMG_1561124264270.jpg", ["sen", "biały", "dwakoty"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/FB_IMG_1561361996205.jpg", ["sen", "dużeoczy", "misiu"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/FB_IMG_1578480591311.jpg", ["powaga", "łysy", "łapy"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/monti4.jpg", ["szok", "szary", "balkon"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/FB_IMG_1582017449251.jpg", ["śmieszny", "białoszary", "klapek"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/FB_IMG_1582330717267.jpg", ["śmieszny", "pomarańczowy", "picie"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/FB_IMG_1592334403471.jpg", ["śmieszny", "atak", "białoczarny"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/FB_IMG_1592334720868.jpg", ["powaga", "czarny", "pilnik"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/FB_IMG_1592834303637.jpg", ["sen", "czarnobiały", "kamień"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/FB_IMG_1594936313202.jpg", ["powaga", "kapelusz", "picie"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/FB_IMG_1595503311248.jpg", ["złość", "pomarańczowy", "kolia"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/FB_IMG_1600269234181.jpg", ["szok", "brązowy", "liść"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/FB_IMG_1602107945348.jpg", ["powaga", "dwakoty", "łapa"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/FB_IMG_1603886149256.jpg", ["pogarda", "biały", "język"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/FB_IMG_1603886152245.jpg", ["relaks", "język", "narkotyk"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/FB_IMG_1603886157262.jpg", ["złość", "język", "czarnobiały"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/fzxmXu9.jpg", ["relaks", "pomarańczowobiały", "epapieros"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/I+drink+with+friends+most+if+the+time+_c9b2f310634ac653579171d51795835a.jpg", ["powaga", "pomarańczowy", "picie"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/If+you+mean+the+sad+cat+meme+its+just+the+_975159c48dbc4d1727031ed439bbaa3d.png", ["smutek", "pomarańczowobiały", "dużeoczy"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/images.jpg", ["śmieszny", "karykatura", "jocker"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/images (1).jpg", ["sen", "picie", "papieros"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/images (2).jpg", ["smutek", "pomarańczowobiały", "mikrofon"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/images (3).jpg", ["złość", "kotek", "łapy"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/IMG_20180720_132213.jpg", ["powaga", "pomarańczowy", "okulary"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/IMG_20180730_121222.jpg", ["powaga", "brązowy", "szklanka"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/IMG_20180730_121515.jpg", ["szok", "białopomarańczowy", "rekin"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/IMG_20180730_121516.jpg", ["szok", "białoczarny", "ryba"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/IMG_20180730_121520.jpg", ["złość", "brązowobiały", "lupa"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/IMG_20180917_190352.jpg", ["powaga", "brązowy", "love"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/IMG_20180917_192433.jpg", ["uroczy", "biały", "love"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/melted12_4e189508-0c43-406c-a76a-d6f05053163f.jpg", ["sen", "białobrązowy", "lustro"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/monti.jpg", ["powaga", "szary", "zmywarka"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/nadh-41_17b72.jpg", ["smutek", "biały", "frytka"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/original.jpg", ["smutek", "szok", "pies"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/paint-your-pet-as-the-cryig-cat-meme.jpg", ["smutek", "dużeoczy", "białopomarańczowy"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/photo_2021-12-16_18-17-56.jpg", ["smutek", "dużeoczy", "kapelusz"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/Reaction+image+dump_8d0aa6_6867334.jpg", ["smutek", "dużeoczy", "biały"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/received_254058158648346.jpeg", ["smutek", "dużeoczy", "szok"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/received_284132795646084.jpeg", ["powaga", "biały", "okej"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/received_601603577112365.jpeg", ["szok", "czarny", "klapek"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/received_792073861361203.jpeg", ["śmieszny", "złość", "psps"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/received_1900984626662039.jpeg", ["powaga", "pomarańczowobiały", "okulary"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/received_2016943148554404.jpeg", ["szok", "brązowobiały", "niewyraźny"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/received_2032584696989040.jpeg", ["śmieszny", "powaga", "ręcznik"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/received_2035046530076190.jpeg", ["śmieszny", "szok", "pomarańczowy"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/received_2085643218349854.jpeg", ["śmieszny", "szok", "biały"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/received_2111431925770983.jpeg", ["śmieszny", "powaga", "okulary"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/received_2120310868216422.jpeg", ["śmieszny", "białopomarańczowy", "love"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/received_2122499604664215.jpeg", ["śmieszny", "powaga", "szklanka"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/received_2534467706573821.jpeg", ["śmieszny", "powaga", "niewyraźny"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/tatyana-rubleva-EGLt8RpNqcE-unsplash.jpg", ["śmieszny", "powaga", "naboczku"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/Top-29-Crying-Cat-Memes-24.jpg", ["smutek", "dużeoczy", "hellokitty"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/ula.jpg", ["powaga", "białoszary", "balkon"]);
wstawianieNowegoTemplate("zdjecia/zdjecia-kotow/ZskrFwK.jpg", ["smutek", "dużeoczy", "niewyraźny"]);