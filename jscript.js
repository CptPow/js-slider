import oggetto from "./oggetto.js";
const imgSlider = document.querySelector(".img-slider");
const imgPrincipale = document.querySelector(".img-principale");
const btnUp = document.querySelector("#up");
const btnDown = document.querySelector("#down");
let array = 0;
let creoImg = document.createElement("img");
let background = document.createElement("img");
let backImage = document.querySelector("#back");
const titolo = document.querySelector(".titolo");
const subtitolo = document.querySelector(".subtitolo");
//mostra immagine e title
let mostraImmagine = (i)=> {
    let immagine = oggetto[i].image;
    creoImg.src = immagine;
    imgPrincipale.appendChild(creoImg); 
    let title = oggetto[i].title;
    titolo.innerHTML = title;
    let titlesub = oggetto[i].location;
    subtitolo.innerHTML = titlesub;
}


//mostra immagine background
let mostraImmagineBack = (i)=> {
    let immagineBack = oggetto[i].image;
    background.src = immagineBack;
    backImage.appendChild(background);
}
   //foreach
   oggetto.forEach(element => {
    let imgElem = document.createElement("img");
    imgElem.src = element.image;
    imgSlider.appendChild(imgElem);
});


//preload
window.addEventListener("DOMContentLoaded", mostraImmagine(array), mostraImmagineBack(array));
//btnUp
btnUp.addEventListener("click", function(){
    array--;
    if (array < 0) {
        array = oggetto.length -1;
    }
    mostraImmagine(array);
    mostraImmagineBack(array);
    
});
//btnDown
btnDown.addEventListener("click", function(){
    array++;
    if (array > oggetto.length -1) {
        array = 0;
    }
    mostraImmagine(array);
    mostraImmagineBack(array);
    
});