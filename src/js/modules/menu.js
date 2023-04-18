function menu() {
  const hamburger = document.querySelector('.hamburger');
  const menuBlock = document.querySelector('.menu');
  const menuLink = document.querySelectorAll('.menu__link');
  const menuOverlay = document.querySelector('.menu__overlay');
  const arrow = document.querySelector('.arrow');
  const ancors = [ // якори секций для перехода по ссылкам из меню
    document.querySelector('#about-me'),
    document.querySelector('#resume'),
    document.querySelector('#tools'),
    document.querySelector('#portfolio'),
    document.querySelector('#contacts')
  ];

  hamburger.addEventListener('click', function() { // открывает меню при нажатии на гамбургер
    menuBlock.classList.add('active');
  });

  menuOverlay.addEventListener('click', () => { // закрывает меню при нажатии на оверлей
    menuBlock.classList.remove('active');
  });

  menuBlock.addEventListener('click', (e) => {
    if (e.target.closest('.menu__close') && menuBlock.contains(e.target.closest('.menu__close'))) { // закрывает меню при нажатии на крестик
      menuBlock.classList.remove('active');
    }

    if (e.target.closest('.menu__link') && menuBlock.contains(e.target.closest('.menu__link'))) { // клик на ссылки из меню
      menuBlock.classList.remove('active'); // закрывает меню
      menuLink.forEach((item, i) => { // определяет номер ссылки
        if (e.target === item) {
          ancors[i].scrollIntoView(); // перелистывает до якоря с таким же номером
        }
      });
    }
  });

  arrow.addEventListener('click', () => { // перелистывает на след. секцию при клике на стрелку
    ancors[0].scrollIntoView();
  });









}

export default menu;