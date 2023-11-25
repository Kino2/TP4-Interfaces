
const personajes = document.querySelector('.personajes');
const imgs = personajes.querySelectorAll('img');

// Manejar el evento mouseover para cada imagen
imgs.forEach(img => {
    img.addEventListener('mouseover', function () {
        // Remover la clase 'highlight' de todas las imágenes
        imgs.forEach(img => img.classList.remove('highlight'));

        // Agregar la clase 'highlight' a la imagen sobre la que se pasa el ratón
        this.classList.add('highlight');

        // Ajustar el tamaño y el desenfoque de las otras imágenes
        imgs.forEach(otherImg => {
            if (otherImg !== this) {
                otherImg.style.transform = 'scale(0.8)'; // Reducir el tamaño
                otherImg.style.filter = 'blur(4px)'; // Aplicar un desenfoque
            } else {
                this.style.transform = 'scale(1.2)'; // Aumentar el tamaño de la imagen actual
                this.style.filter = 'blur(0)'; // Quitar el desenfoque de la imagen actual
            }
        });
    });

    // Restaurar las imágenes a su estado original al sacar el ratón
    img.addEventListener('mouseleave', function () {
        imgs.forEach(img => {
            img.classList.remove('highlight');
            img.style.transform = 'scale(1)';
            img.style.filter = 'blur(0)';
        });
    });
});
