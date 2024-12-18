const btn_hamburguer = document.querySelector('.btn-hamburger');

function toogleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.querySelector('.nav-link');
    nav.classList.toggle('active');
}
function toogleMenu2(event) {
    if (event.type === 'touchstart') event.preventDefault();
    btn_hamburguer.classList.toggle('active');
}

btn_hamburguer.addEventListener('click', toogleMenu);
btn_hamburguer.addEventListener('click', toogleMenu2);
btn_hamburguer.addEventListener('touchstart', toogleMenu);
btn_hamburguer.addEventListener('touchstart', toogleMenu2);

// Section numbers
let contadoresIniciados = {
    'first-number': false,
    'second-number': false,
    'third-number': false,
    'fourth-number': false,
};

function iniciarContador(numeroId, valorFinal, incremento) {
    if (contadoresIniciados[numeroId]) return;

    contadoresIniciados[numeroId] = true;

    const contadorElemento = document
        .getElementById(numeroId)
        .querySelector('h1');
    let contador = 0;

    function atualizarContador() {
        const tempoEspera = 15 + (contador / valorFinal) * 60;
        contadorElemento.textContent = contador + "+";

        contador += incremento;

        if (contador <= valorFinal) {
            setTimeout(atualizarContador, tempoEspera);
        }
    }
    atualizarContador();
}

window.addEventListener('scroll', function () {
    const contadores = [
        { id: 'first-number', valorFinal: 1200, incremento: 40 },
        { id: 'second-number', valorFinal: 20, incremento: 1 },
        { id: 'third-number', valorFinal: 10, incremento: 1 },
        { id: 'fourth-number', valorFinal: 3, incremento: 1 },
    ];

    contadores.forEach((contador) => {
        const elemento = document.getElementById(contador.id);
        const posicaoElemento = elemento.getBoundingClientRect();

        if (
            posicaoElemento.top < window.innerHeight &&
            posicaoElemento.bottom >= 0
        ) {
            iniciarContador(
                contador.id,
                contador.valorFinal,
                contador.incremento
            );
        }
    });
});

// Efeito scrollreveal
window.revel = ScrollReveal({
    reset: true,
})

revel.reveal('.efeito-scrollReveal', {
    origin: 'left',
    distance: '90px',
    duration: 1000,
    delay: 200
})
revel.reveal('.efeito-scrollReveal1', {
    origin: 'bottom',
    distance: '150px',
    duration: 1000,
    delay: 400
})
revel.reveal('.efeito-scrollReveal2', {
    origin: 'bottom',
    distance: '150px',
    duration: 1500,
    delay: 400
})
revel.reveal('.efeito-scrollReveal3', {
    origin: 'bottom',
    distance: '150px',
    duration: 2000,
    delay: 400
})