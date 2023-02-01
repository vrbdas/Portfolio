const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', function () {
	menu.classList.add('active');
});

closeElem.addEventListener('click', function () {
	menu.classList.remove('active');
});