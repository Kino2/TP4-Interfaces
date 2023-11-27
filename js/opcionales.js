//Opcional 2
const hamburguesa = document.querySelector('.hamburguesa');
hamburguesa.addEventListener('click', () => {
    hamburguesa.classList.toggle('cruz');
});

//Opcional 4
const cielo = document.getElementById('cielo');
const pasto = document.getElementById('pasto');
const paisaje = document.getElementById('paisaje');
const vengador1 = document.getElementById('vengador1');
const vengador2 = document.getElementById('vengador2');
const vengador3 = document.getElementById('vengador3');

document.addEventListener("mousemove", parallaxVengadores);

    function parallaxVengadores(e){
        //determino el centro de la pantalla
        let _w = window.innerWidth/2;
        let _h = window.innerHeight/2;

        //determino posicion del mouse
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;

        //calculo diferencia de la posicion del mouse respecto del centro de la ventana
        let desplazamientoX = _mouseX - _w;
        let desplazamientoY = _mouseY - _h;


        //calculo deslpazamiento de cada capa en proporcion al desplazamiento calculado anteriormente
        cielo.setAttribute('style', 'transform: translate3d( ' + desplazamientoX * 0.01 + 'px, ' + desplazamientoY * 0.01 + 'px, 0px)');
        pasto.setAttribute('style', 'transform: translate3d( ' + desplazamientoX * 0.01 + 'px, ' + desplazamientoY * 0.01 + 'px, 0px)');
        paisaje.setAttribute('style', 'transform: translate3d( ' + desplazamientoX * 0.01 + 'px, ' + desplazamientoY * 0.01 + 'px, 0px)');
        vengador1.setAttribute('style', 'transform: translate3d( ' + desplazamientoX * 0.04 + 'px, ' + desplazamientoY * 0.04 + 'px, 0px)');
        vengador2.setAttribute('style', 'transform: translate3d( ' + desplazamientoX * 0.05 + 'px, ' + desplazamientoY * 0.05 + 'px, 0px)');
        vengador3.setAttribute('style', 'transform: translate3d( ' + desplazamientoX * 0.06 + 'px, ' + desplazamientoY * 0.06 + 'px, 0px)');

    }


//Opcional 5
const fondo = document.getElementById('secBlanco3')
const spidey2 = document.querySelector('.spidey2');
const gwen2 = document.querySelector('.gwen2');
const miles2 = document.querySelector('.miles2');

gwen2.addEventListener('mouseover', function () {
    fondo.src = "images/svg/FondoGwen.png";
    gwen2.style.transform = 'scale(1.2)';
    gwen2.style.filter = 'blur(0)';
    spidey2.style.transform = 'scale(0.7)';
    spidey2.style.filter = 'blur(5px)';
    miles2.style.transform = 'scale(0.7)';
    miles2.style.filter = 'blur(5px)';
});
spidey2.addEventListener('mouseover', function () {
    fondo.src = "images/svg/FondoSpidey.png";
    spidey2.style.transform = 'scale(1.2)';
    spidey2.style.filter = 'blur(0)';
    gwen2.style.transform = 'scale(0.7)';
    gwen2.style.filter = 'blur(5px)';
    miles2.style.transform = 'scale(0.7)';
    miles2.style.filter = 'blur(5px)';
});
miles2.addEventListener('mouseover', function () {
    fondo.src = "images/svg/FondoMiles.png";
    miles2.style.transform = 'scale(1.2)';
    miles2.style.filter = 'blur(0)';
    spidey2.style.transform = 'scale(0.7)';
    spidey2.style.filter = 'blur(5px)';
    gwen2.style.transform = 'scale(0.7)';
    gwen2.style.filter = 'blur(5px)';

});
function resetFondoYTamanios() {
    fondo.src = "images/svg/SecBlanco3.svg"; // La ruta original
    gwen2.style.transform = 'scale(1)';
    gwen2.style.filter = 'none';
    spidey2.style.transform = 'scale(1)';
    spidey2.style.filter = 'none';
    miles2.style.transform = 'scale(1)';
    miles2.style.filter = 'none';
}

// Restaurar al estado predeterminado cuando se retira el mouse
gwen2.addEventListener('mouseout', resetFondoYTamanios);
spidey2.addEventListener('mouseout', resetFondoYTamanios);
miles2.addEventListener('mouseout', resetFondoYTamanios);
