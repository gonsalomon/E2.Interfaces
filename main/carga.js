let valores = [0, 10, 20, 25, 30, 40, 55, 60, 77, 80, 90, 100];
let i = 0;
let intervalo = setInterval(() => {
    let numDom = document.querySelector("#carga");
    
    numDom.innerHTML = valores[i] + "%"; 
    
    i++; 
    
    if (i >= valores.length) { 
        clearInterval(intervalo);
    }
}, 500); 
