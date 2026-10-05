const botonesVerMas = document.querySelectorAll('.btn-ver-mas');

function alternarInformacion(event) {
    const boton = event.target;
    const infoExtra = boton.previousElementSibling;
    infoExtra.classList.toggle('oculto');
    if (infoExtra.classList.contains('oculto')){
        boton.textContent = '[ Ver más ]';
    } else {
        boton.textContent = '[ Ver menos ]';
    }
}

botonesVerMas.forEach(function(boton){
    boton.addEventListener('click', alternarInformacion);
});

const boton = document.getElementById('botonCambiar');
const titulo = document.getElementById('titulo');
let contador = 0;
boton.addEventListener('click', function() {
    contador++;
    if (contador === 1) {
        titulo.textContent = "Bienvenidos";
    } else if (contador === 2) {
        titulo.textContent = "Patrimonio de la Humanidad";
    } else if (contador === 3) {
        titulo.textContent = "Que disfruten";
    }
});

const descrip = document.getElementsByClassName("descripcion");
const botonDisminuir = document.getElementById("disminuir");
const botonNormal = document.getElementById("normal");
const botonAumentar = document.getElementById("aumentar");

let tamañoFuente = 16; //define el tamaño de fuente inicial o como??
                       //o como sabe el tamaño de fuente??

disminuir.addEventListener("click", function() {
    if (tamañoFuente > 10) {
        tamañoFuente = tamañoFuente - 2;
        descrip[0].style.fontSize = tamañoFuente + "px";
    }
});
normal.addEventListener("click", function() {
    tamañoFuente = 16;
    descrip[0].style.fontSize = tamañoFuente + "px";
});
aumentar.addEventListener("click", function() {
    if (tamañoFuente < 30) {
        tamañoFuente = tamañoFuente + 2;
        descrip[0].style.fontSize = tamañoFuente + "px";
    }
});


//Entrega 3 parte 3

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event){
    
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const fecnac = document.getElementById("fecnac").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();
    const resultado = document.getElementById("resultado");
    const infoedad = document.getElementById("infoedad");
    const fecactual = new Date();
    event.preventDefault();
    

    if (nombre==="" || email==="" || fecnac==="" || mensaje===""){
        resultado.textContent="¡Completa todos los campos!";
    } else {
        let años = fecactual.getFullYear() - new Date(fecnac).getFullYear();
        if(fecactual.getMonth() < new Date(fecnac).getMonth()){ //falta validar si es el mismo mes y el dia es menor
            años--;
        }
        infoedad.textContent="Tu edad es: " + años + " años";
        resultado.textContent="Enviado correctamente";
        formulario.reset();
    }    
});

//Entrega 4 parte 4 (Modo oscuro)

const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")){
        toggleBtn.textContent = "Cambiar a Modo Claro";}
    else{
        toggleBtn.textContent = "Cambiar a Modo Oscuro";}
});