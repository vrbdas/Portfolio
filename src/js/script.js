//menu

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

const counters = document.querySelectorAll('.progress__counter');
const lines = document.querySelectorAll('.progress__bar_fill');

counters.forEach((item, i) => {
	lines[i].style.width = item.innerHTML;
});

//policy

const policyLink = document.querySelector('#policyLink');
const policy = document.querySelector('.policy');
const policyClose = document.querySelector('.policy__close');

policyLink.addEventListener('click', function () {
	policy.classList.add('active');
});

policyClose.addEventListener('click', function () {
	policy.classList.remove('active');
});