let boton = document.querySelector("#boton");
let menu = document.querySelector("#menu");

// Inicialmente, el menú está oculto
menu.classList.add("oculto");

boton.addEventListener("click", abrirMenu);
document.querySelector("#close-btn").addEventListener("click", cerrarMenu);

function abrirMenu(event) {
    event.preventDefault();
    menu.classList.remove("oculto"); 
}

function cerrarMenu() {
    menu.classList.add("oculto");
    boton.classList.remove("oculto"); 
}
