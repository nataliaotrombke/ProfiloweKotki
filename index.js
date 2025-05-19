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
    
    // przeczytać czy to zostało juz pobulione jeżeli tak to dodaj tą klasę
    
    // Gotową kopię szablonu dodaj na końcu elementu main, 
    main.appendChild(klonowanie);
    //reagować na kliknięcie guzkia
    
    //postawić klucz unikalny dla każdego obrazka src
}

// Zrób i wstaw 1 klon
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/0a49f36909a6e1f8c97afed45b114187.jpg",["słowo", "inne", "cos"]);
// Zrób i wstaw 2 klon
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/01a3b586a83c62348470ef0d4abc0099.jpg", ["4", "5", "6"]);
// Zrób i wstaw 3 klon
wstawianieNowegoTemplate("zdjęcia/zdjęcia kotów/122861644_401054050923057_6110775820027702721_n.jpg", ["7", "8", "9"]);
