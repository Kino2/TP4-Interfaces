//Opcional 2
const hamburguesa = document.querySelector('.hamburguesa');
hamburguesa.addEventListener('click', () => {
    hamburguesa.classList.toggle('cruz');
});

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
