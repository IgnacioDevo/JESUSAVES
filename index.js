// script.js
function cambiarImagen(producto) {
    const imagen = producto.querySelector('img');
    imagen.src = './assets/2.png'; // Cambiar la ruta según tus archivos
}

function restaurarImagen(producto) {
    const imagen = producto.querySelector('img');
    imagen.src = './assets/1.png'; // Cambiar la ruta según tus archivos
}
