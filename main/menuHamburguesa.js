let boton = document.querySelector("#boton");
let menu = document.querySelector("#menu");
let closeBtn = document.querySelector("#close-btn");

boton.addEventListener("click", abrirMenu);
closeBtn.addEventListener("click", cerrarMenu);

function abrirMenu(event) {
    event.preventDefault();
    menu.classList.remove("oculto");  
    boton.style.display = "none";     
}

function cerrarMenu() {
    menu.classList.add("oculto");     
    boton.style.display = "flex";     // Muestra nuevamente el botón de hamburguesa aplicando flex
}
