// Función para el Menú Responsive
function responsiveMenu() {
    var nav = document.getElementById("nav");
    nav.classList.toggle("responsive");
}

// Función para marcar el link seleccionado y cerrar menú
function seleccionar(link) {
    var opciones = document.querySelectorAll('#links a');
    opciones.forEach(opcion => {
        opcion.classList.remove('seleccionando');
    });
    link.classList.add('seleccionando');
    
    var nav = document.getElementById("nav");
    nav.classList.remove("responsive");
}

// Animaciones con ScrollReveal
document.addEventListener('DOMContentLoaded', function() {
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '60px',
        duration: 1000,
        delay: 200,
        reset: false
    });

    sr.reveal('.servicio', { interval: 200 });
    sr.reveal('.titulo-seccion', {});
    sr.reveal('.info-galeria', { delay: 400 });
    sr.reveal('.img-mapa', { scale: 0.5, duration: 1200 });
});

// Mensaje de éxito formulario
const form = document.querySelector('#contacto form');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('¡Mensaje enviado al universo de Kuantico Almacen! Te responderemos pronto.');
        form.reset();
    });
}