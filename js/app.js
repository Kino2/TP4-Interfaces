window.addEventListener('scroll', function() {
    var titulo = document.getElementById('titulo');
    var navbar = document.querySelector('.navbar');
    var scrollPosition = window.scrollY;
    var navbarHeight = navbar.offsetHeight;

    // Si el scroll supera la altura de la navbar, ajusta el tamaño y posición del título
    if (scrollPosition > navbarHeight) {
        titulo.style.width = '200px'; // Cambia el ancho a 200px (o el tamaño que desees)
        titulo.style.right = '50%'; // Centra horizontalmente
        titulo.style.transform = 'translateX(50%) translateY(-50%)'; // Centra verticalmente
    } else {
        titulo.style.width = '520px'; // Vuelve al ancho original
        titulo.style.right = '31%'; // Vuelve a la posición original
        titulo.style.transform = 'none'; // Elimina la transformación
    }
});

//Punto 6 
window.addEventListener('scroll', function() {
    var duendeVerde = document.getElementById('duende');
    var initialPosition = 600; // Posición inicial del duende
    var targetPosition = 768; // Posición a la que quieres que el duende llegue al hacer scroll
    var scrollSpeed = 0.3; // Puedes ajustar esta velocidad

    // Calcula la distancia que se ha desplazado desde la posición inicial
    var distance = window.scrollY - initialPosition;

    // Calcula la distancia máxima permitida para el desplazamiento
    var maxDistance = targetPosition - initialPosition;

    // Calcula la nueva posición del duende verde en función del scroll
    var newPosition = Math.min(distance * scrollSpeed + initialPosition, targetPosition);

    // Limita la posición para que no se pase de la posición final
    newPosition = Math.max(newPosition, initialPosition);

    // Aplica la nueva posición al duende verde utilizando la propiedad top
    duendeVerde.style.top = newPosition + 'px';
});


//Punto 9
document.addEventListener("scroll", () => {
    if (window.scrollY > 1350)  { //Si la altura en Y es mayor a 1350, realizo la animacion en las cards
      document.querySelector("#card1").classList.add("animacionCard");
      document.querySelector("#card2").classList.add("animacionCard");
      document.querySelector("#card3").classList.add("animacionCard");
    }
  });




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
