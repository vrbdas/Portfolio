//promo menu

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', function () {
	menu.classList.add('active');
});

closeElem.addEventListener('click', function () {
	menu.classList.remove('active');
});

//progress bar

function progress() {
	const input = document.querySelector('.progress__counter');
	const output = document.querySelector('.progress__bar_fill');

	input.addEventListener('change', function () {
		let e = input.value;
		output.style.width = e;
	});
}
progress()

