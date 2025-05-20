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
wyszukiwarka.onkeydown = function () {
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
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/118764064_370470367303470_4118026958884390720_n.jpg", ["śmieszny", "białoczarny", "broda"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/118777569_614602912587550_959831113733509148_n.jpg", ["powaga", "białoczarny", "pogarda"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/120013548_334406327783989_6017662544510074648_n.jpg", ["powaga", "białoczarny", "karykatura"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/120201375_243853847045101_1300904951718388873_n.jpg", ["śmieszny", "czarnobiały", "wąs"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/120316111_1032397160524676_7471639857620439133_n.jpg", ["śmieszny", "szarobiały", "wąs"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/123197149_2767028533571021_310623711451576449_n.jpg", ["smutny", "brązowy", "urodziny"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/123328606_983689062116935_5127799912002016490_n.png", ["śmieszny", "brązowy", "pieniądzę"]);
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/123348198_364874934768607_2603335574136120945_n.png", ["śmieszny", "czarny", "niewyraźny"]);
