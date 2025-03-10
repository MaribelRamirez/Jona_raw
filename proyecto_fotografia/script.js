document.addEventListener("DOMContentLoaded", function () {
    // Asegurar que al cargar la página, se muestre solo la pantalla inicial
    document.getElementById("hero-section").style.display = "flex";
    document.getElementById("paquetes-section").style.display = "none";
    document.getElementById("carrusel-container").style.display = "none";
});

function iniciarPaquetes() {
    // Oculta la sección de video y muestra la sección de paquetes
    document.getElementById("hero-section").style.display = "none";
    document.getElementById("paquetes-section").style.display = "block";
}

// Datos de las imágenes para el carrusel
const paquetes = {
    bodas: [
        { src: "imagenes/boda1.jpg"},
        { src: "imagenes/boda2.jpg"},
        { src: "imagenes/boda3.jpg"},
        { src: "imagenes/boda4.jpg"},
        { src: "imagenes/boda5.jpg"},
        { src: "imagenes/boda6.jpg"},
        { src: "imagenes/boda7.jpg"},
        { src: "imagenes/boda8.jpg"},
        { src: "imagenes/boda9.jpg"},
        { src: "imagenes/boda10.jpg"},
    ],
    producto: [
        { src: "imagenes/producto1.jpg"},
        { src: "imagenes/producto2.jpg"},
        { src: "imagenes/producto3.jpg" },
        { src: "imagenes/producto4.jpg"},
        { src: "imagenes/producto5.jpg"},
        { src: "imagenes/producto6.jpg"},
        { src: "imagenes/producto7.jpg"},
        { src: "imagenes/producto8.jpg"},
        { src: "imagenes/producto9.jpg"},
        { src: "imagenes/producto10.jpg"}
    ],
    retratos: [
        { src: "imagenes/retrato1.jpg"},
        { src: "imagenes/retrato2.jpg"},
        { src: "imagenes/retrato3.jpg"},
        { src: "imagenes/retrato4.jpg"},
        { src: "imagenes/retrato5.jpg"},
        { src: "imagenes/retrato6.jpg"},
        { src: "imagenes/retrato7.jpg"},
        { src: "imagenes/retrato8.jpg"},
        { src: "imagenes/retrato9.jpg"},
        { src: "imagenes/retrato10.jpg"}
    ],
    sociales: [
        { src: "imagenes/social1.jpg"},
        { src: "imagenes/social2.jpg"},
        { src: "imagenes/social3.jpg"},
        { src: "imagenes/social4.jpg"},
        { src: "imagenes/social5.jpg"},
        { src: "imagenes/social6.jpg"},
        { src: "imagenes/social7.jpg"},
        { src: "imagenes/social8.jpg"},
        { src: "imagenes/social9.jpg"},
        { src: "imagenes/social10.jpg"}
    ]
};

let currentPackage = [];
let currentIndex = 0;

function mostrarCarrusel(tipo) {
    currentPackage = paquetes[tipo];
    currentIndex = 0;
    actualizarCarrusel();
    document.getElementById("carrusel-container").style.display = "flex";
}

function cerrarCarrusel() {
    document.getElementById("carrusel-container").style.display = "none";
}

function cambiarImagen(direccion) {
    currentIndex += direccion;
    if (currentIndex < 0) currentIndex = currentPackage.length - 1;
    if (currentIndex >= currentPackage.length) currentIndex = 0;
    actualizarCarrusel();
}

function actualizarCarrusel() {
    document.getElementById("imagen-carrusel").src = currentPackage[currentIndex].src;
    document.getElementById("descripcion").innerText = currentPackage[currentIndex].desc;
}
