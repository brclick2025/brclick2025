// Seleciona o elemento menu-burger
const menuBurger = document.querySelector('.menu-burger');

// Adiciona um evento de clique no elemento menuBurger
menuBurger.addEventListener('click', function () {

    // Seleciona o elemento menu-mobile
    const menuMobile = document.querySelector('.menu-mobile');

    // Adiciona a classe active ao elemento menuMobile
    menuMobile.classList.add('active');

});

// Seleciona o elemento com a classe menu-close
const menuClose = document.querySelector('.menu-close');

// Adiciona um evento de clique no elemento menuClose
menuClose.addEventListener('click', function () {

    // Seleciona o elemento menu-mobile
    const menuMobile = document.querySelector('.menu-mobile');

    // Remove a classe active do elemento menuMobile
    menuMobile.classList.remove('active');

});

// Seleciona o botão do formulário
const formButton = document.querySelector('.form-button');

// Executa as linhas abaixo apenas se o formButton existir
if (formButton) {

    // Adiciona um evento de clique ao botão
    formButton.addEventListener('click', function () {

        alert('Mensagem enviada!');

    });

}

const link = document.querySelector('header h4#name');

link.addEventListener('click', function () {

    window.location = '/index.html';

});