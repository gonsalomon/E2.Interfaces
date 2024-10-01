let boton = document.querySelector("#boton");
let espacio = document.querySelector("#espacio");
let menu = document.querySelector("#menu");
let closeBtn = document.querySelector("#close-btn");

boton.addEventListener("click", abrirMenu);
closeBtn.addEventListener("click", cerrarMenu);

function abrirMenu(event) {
    event.preventDefault();
    menu.classList.remove("oculto");  
    boton.style.display = "none"; 
    espacio.style.display = "flex"
}

function cerrarMenu() {
    menu.classList.add("oculto");     
    boton.style.display = "flex";     // Muestra nuevamente el botón de hamburguesa aplicando flex
    espacio.style.display = "none";
}
