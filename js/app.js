window.addEventListener('scroll', function () {
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
window.addEventListener('scroll', function () {
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

//Punto 7
const logo = document.getElementById('titulo');
const layer2 = document.getElementById('layer2');
const layer3 = document.getElementById('layer3');
const layer4 = document.getElementById('layer4');
const gwen = document.getElementById('gwen');
const spidey = document.getElementById('spidey');
const miles = document.getElementById('miles');
const tela = document.getElementById('tela');
const tela2 = document.getElementById('tela2');
const layers = [logo, layer2, layer3, layer4, gwen, spidey, miles, tela, tela2];
const cargarElem = () => {
    layers.forEach((c, index) => {
        c.style.transition = `opacity 0.5s ease ${index * 0.2}s`; // Ajusta la duración y el retraso de la transición
        c.style.opacity = '1';
    });
};
// Llama a la función después de 1 segundo
setTimeout(cargarElem, 500);


const layerss = document.querySelectorAll('.layerInicial');

window.addEventListener('scroll', () => {
    layerss.forEach(layer => {
        const speed = layer.getAttribute('data-speed');
        layer.style.transform = `translateY(-${window.scrollY * speed}px)`;
    });
});



//Punto 9
document.addEventListener("scroll", () => {
    if (window.scrollY > 1350) { //Si la altura en Y es mayor a 1350, realizo la animacion en las cards
        document.querySelector("#card1").classList.add("animacionCard");
        document.querySelector("#card2").classList.add("animacionCard");
        document.querySelector("#card3").classList.add("animacionCard");
    }
});

