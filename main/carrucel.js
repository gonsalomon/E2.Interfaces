let pos = 0;
let increment = 0 ;
let btn_izq = document.querySelector("#botonCarrouselIzq");
let btn_der = document.querySelector("#botonCarrouselDer");
let btn_der_flecha= document.querySelector("#fechaDer");
let btn_izq_flecha= document.querySelector("#fechaIzq");
let btn_izq2 = document.querySelector("#botonCarrouselIzq2");
let btn_der2 = document.querySelector("#botonCarrouselDer2");
let btn_der_flecha2= document.querySelector("#fechaDer2");
let btn_izq_flecha2= document.querySelector("#fechaIzq2");
let btn_izq3 = document.querySelector("#botonCarrouselIzq3");
let btn_der3 = document.querySelector("#botonCarrouselDer3");
let btn_der_flecha3= document.querySelector("#fechaDer3");
let btn_izq_flecha3= document.querySelector("#fechaIzq3");
let cards = document.querySelectorAll(".card");

btn_der.addEventListener("click", escrolDer);
btn_izq.addEventListener("click", escrolIzq);
btn_der_flecha.addEventListener("click",escrolDer);
btn_izq_flecha.addEventListener("click",escrolIzq);
btn_der2.addEventListener("click", escrolDer);
btn_izq2.addEventListener("click", escrolIzq);
btn_der_flecha2.addEventListener("click",escrolDer);
btn_izq_flecha2.addEventListener("click",escrolIzq);
btn_der3.addEventListener("click", escrolDer);
btn_izq3.addEventListener("click", escrolIzq);
btn_der_flecha3.addEventListener("click",escrolDer);
btn_izq_flecha3.addEventListener("click",escrolIzq);

function escrolIzq(event){
    event.preventDefault();
    if(pos > 0){ 
        increment+= 150 
        pos--
    } 
    cards.forEach((card) => {
        card.style.animationName = "animacionCardIzq"; 
        card.style.transform = "translate(" + increment +"px)";
    });   
}

function escrolDer(event){
    event.preventDefault();
    if(pos <= cards.length-1){
        increment -= 150
        pos ++
    }
    cards.forEach((card) => {
        card.style.animationName = "animacionCardDer";
        card.style.transform = "translate("+ increment +"px)";
    });
}
/* Segundo carrusel */
