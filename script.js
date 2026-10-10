const botonesVerMas = document.querySelectorAll('.btn-ver-mas');

function alternarInformacion(event) {
    const boton = event.target;
    const infoExtra = boton.previousElementSibling;
    infoExtra.classList.toggle('oculto');
    if (infoExtra.classList.contains('oculto')){
        boton.textContent = '[Ver más]';
    } else {
        boton.textContent = '[Ver menos]';
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

const toggleBtnNav = document.getElementById("theme-toggle-nav");
const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")){
        toggleBtn.innerHTML = '<img src="images/light_mode.svg" style="width: 100%; height: 100%;" alt="Modo Claro">';
    } else {
        toggleBtn.innerHTML = '<img src="images/dark_mode.svg" style="width: 100%; height: 100%;" alt="Modo Oscuro">';
    }
});

toggleBtnNav.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")){
        toggleBtnNav.innerHTML = '<img src="images/light_mode.svg" style="width: 100%; height: 100%;" alt="Modo Claro">';
    } else {
        toggleBtnNav.innerHTML = '<img src="images/dark_mode.svg" style="width: 100%; height: 100%;" alt="Modo Oscuro">';
    }
});

//Entrega 3 ejercicio 2 (boton vovler arriba)

const btn = document.getElementById("volverArriba");
const btnNav = document.getElementById("theme-toggle");


window.addEventListener("scroll",function(){
    if (window.scrollY > 300){
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
});


btn.addEventListener("click",function(){
    window.scrollTo({
        top:0,
        behavior: "smooth"
    });
});


//Entrega 3 ejercicio 3 (Carrousel)
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const carrouselContainer = document.getElementById('carrousel');

let currentSlide = 0;
let autoSlideInterval;

//Funcion para mostrar un slide especifico
function showSlide(index) {
    if (slides.length === 0) return;

    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    //Quitar la clase active de todos los slides
    slides.forEach(slide => slide.classList.remove('active'));

    //Activar el slide
    slides[currentSlide].classList.add('active');
}

// Avanzar al siguiente slide
function nextSlide() {
    showSlide(currentSlide + 1);
}
//Avanzar al anterior
function prevSlide() {
    showSlide(currentSlide - 1);
}

// Event Listeners para botones de navegarción
if (nextBtn) nextBtn.addEventListener('click',nextSlide);
if (prevBtn) prevBtn.addEventListener('click',prevSlide);