//Punto 4
document.addEventListener("scroll", () => {
    console.log(window.scrollY);
    function clean() {
        document.querySelectorAll(".demoImg").forEach((s) => {
            s.classList.remove("active");
        });
        document.querySelectorAll(".info").forEach((s) => {
            s.classList.remove("active");
        });
    }
    if (window.scrollY < 4000) {
        clean();
        document.querySelector("#demoImg1").classList.add("active");
        document.querySelector("#info1").classList.add("active");
    }
    if (window.scrollY > 4000 && window.screenY < 4500) {
        clean();
        document.querySelector("#demoImg2").classList.add("active");
        document.querySelector("#info2").classList.add("active");
    }
    if (window.scrollY > 4500 && window.screenY < 5000) {
        clean();
        document.querySelector("#demoImg3").classList.add("active");
        document.querySelector("#info3").classList.add("active");
    }
    if (window.scrollY > 5000) {
        clean();
        document.querySelector("#demoImg4").classList.add("active");
        document.querySelector("#info4").classList.add("active");
    }
});
//Punto 5
const navbar = document.querySelector(".navbar");
const logoGrande = document.querySelector("#titulo");
const logoChico = document.querySelector(".navbarMedio");
document.addEventListener("scroll", () => {
    if (window.scrollY < 103) {
        logoChico.style.opacity = 0;
    }
    if (window.scrollY > 103) {
        logoChico.style.opacity = window.scrollY / 400;
    }
    logoGrande.style.opacity = 1 - window.scrollY / 120;
    const scaleValue = Math.max(1 - window.scrollY / 200, 0.0);
    logoGrande.style.scale = scaleValue;
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
        c.classList.add('animacion-entrada');
    });
    setTimeout(() => { logo.style.transition = `` }, 1000);
};
// Llama a la función después de 1 segundo
setTimeout(cargarElem, 5000);


const layersSpidey = [logo, gwen, spidey, miles, tela, tela2];
const layersEdificios = [layer2, layer3, layer4];

window.addEventListener('scroll', () => {
    layersSpidey.forEach((s) => {
        const speed = s.getAttribute('data-speed');
        s.style.transform = `translateY(-${window.scrollY * speed}px)`;
    });
});

window.addEventListener('scroll', () => {
    layersEdificios.forEach((e) => {
        const speed = e.getAttribute('data-speed');
        e.style.transform = `translateY(${window.scrollY * speed}px)`;
    });
});



//Punto 9
const card1 = document.querySelector("#card1");
const card2 = document.querySelector("#card2");
const card3 = document.querySelector("#card3");
document.addEventListener("scroll", () => {
    if (window.scrollY > 1350) { //Si la altura en Y es mayor a 1350, realizo la animacion en las cards
        card1.classList.add("animacionCard");
        card2.classList.add("animacionCard");
        card3.classList.add("animacionCard");
    }
});


//Punto 11
// const rutas = document.querySelector(".rutas");
// const c1 = document.querySelector("#ruta1");
// const c2 = document.querySelector("#ruta2");
// const c3 = document.querySelector("#ruta3");
// window.addEventListener("scroll", function () {
//     const pos = rutas.getBoundingClientRect(); //devuelve la posicion
//     const desplazamiento = window.scrollY;
//     if (pos.top < window.innerHeight && pos.bottom > 0) {
//       c1.style.transform = `translateY(${269}%) rotate(-13.078deg)`;
//       c2.style.transform = `translateY(${286}%) rotate(-26.474deg)`;
//       c3.style.transform = `translateY(${309.5}%) rotate(-36.016deg)`;
//     }
//   });
const c1 = document.querySelector("#ruta1");
const c2 = document.querySelector("#ruta2");
const c3 = document.querySelector("#ruta3");
window.addEventListener("scroll", function () {
    const pos = c1.getBoundingClientRect(); //devuelve la posicion
    const desplazamiento = window.scrollY;
    if (pos.top < window.innerHeight && pos.bottom > 0) {
        c1.style.transform = `translateY(${(desplazamiento - pos.top) * 0.027
            }px) rotate(-13.078deg)`;
        c2.style.transform = `translateY(${(desplazamiento - pos.top) * 0.027
            }px) rotate(-26.474deg)`;
        c3.style.transform = `translateY(${(desplazamiento - pos.top) * 0.007
            }px) rotate(-36.016deg)`;
    }
});


document.querySelector('.imagenSonido').addEventListener('click', function() {
    reproducirSonido('../images/videoplayback.weba');
  });
  
  function reproducirSonido(rutaSonido) {
    var audio = document.getElementById('audio');
    audio.src = rutaSonido;
    audio.play();
  }
