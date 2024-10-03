let incremetn = 0 ;
let btn_izq = document.querySelector(".btn_btn_carrucel_izq");
let btn_der = document.querySelector(".btn_btn_carrucel_der");
let card = document.querySelector(".card")

btn_izq.addEventListener("click", escrolDer);
btn_izq.addEventListener("click", escrolIzq);

function escrolIzq(event){
    event.preventDefault();
    card.style.animationName="animacion_card_izq"
    card.style.transform = "translate(150px)";
}

function escrolDer(event){
    event.preventDefault();
    card.style.animationName="animacion_card_der"
    card.style.transform = "translate(-150px)";
}