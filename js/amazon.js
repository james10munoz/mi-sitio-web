// Obtener referencias a las imágenes y al contenedor principal
const mainImage = document.querySelector('.ama1');
const images = document.querySelectorAll('.box-images img');

// Función para mostrar la imagen seleccionada en el contenedor principal
function showImage(event) {
    const selectedImageSrc = event.target.src;
    mainImage.src = selectedImageSrc;
}

// Asignar el evento clic a cada imagen de la galería
images.forEach(image => {
    image.addEventListener('click', showImage);
});

// Obtener referencia al icono de cierre
const closeIcon = document.querySelector('.fa-xmark');
const modal = document.querySelector('.box-modal');
const produc = document.querySelector('.produc');

// Función para ocultar el modal al hacer clic en el icono de cierre
function closeModal() {
    modal.style.visibility = 'hidden';
}
function openModal() {
    modal.style.visibility = 'visible';
}

// Asignar el evento clic al icono de cierre
closeIcon.addEventListener('click', closeModal);
produc.addEventListener('click', openModal);
