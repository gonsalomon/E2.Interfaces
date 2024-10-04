let pos = 0;
let increment = 0 ;
let btn_izq = document.querySelector(".btn_carrucel_izq");
let btn_der = document.querySelector(".btn_carrucel_der");
let cards = document.querySelectorAll(".card")

btn_der.addEventListener("click", escrolDer);
btn_izq.addEventListener("click", escrolIzq);


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