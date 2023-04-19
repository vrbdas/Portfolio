function menu() {
  const hamburger = document.querySelector('.hamburger');
  const menuBlock = document.querySelector('.menu');
  const menuLink = document.querySelectorAll('.menu__link');
  const menuOverlay = document.querySelector('.menu__overlay');
  const promoArrow = document.querySelector('.promo__arrow');
  const arrowUp = document.querySelector('.arrow-up');
  const promoBtnsBlock = document.querySelector('.promo__btns');
  const promoSection = document.querySelector('.promo');
  const ancors = [ // якори секций для перехода по ссылкам из меню
    document.querySelector('#about-me'),
    document.querySelector('#resume'),
    document.querySelector('#tools'),
    document.querySelector('#portfolio'),
    document.querySelector('#contacts')
  ];

  hamburger.addEventListener('click', function() { // открывает меню при нажатии на гамбургер
    menuBlock.classList.add('active');
    document.body.style.overflow = 'hidden'; // Предотвращает прокрутку страницы, когда открыто меню
    promoArrow.style.display = 'none'; // скрывает стрелку вниз
  });

  menuOverlay.addEventListener('click', () => { // закрывает меню при нажатии на оверлей
    menuBlock.classList.remove('active');
    document.body.style.overflow = ''; // Возвращает прокрутку страницы
    if (document.documentElement.scrollTop === 0) { // если страница не прокручена
      promoArrow.style.display = 'block'; // показывает стрелку вниз
    }
  });

  menuBlock.addEventListener('click', (e) => {
    if (e.target.closest('.menu__close') && menuBlock.contains(e.target.closest('.menu__close'))) { // закрывает меню при нажатии на крестик
      menuBlock.classList.remove('active');
      document.body.style.overflow = ''; // Возвращает прокрутку страницы
      if (document.documentElement.scrollTop === 0) { // если страница не прокручена
        promoArrow.style.display = 'block'; // показывает стрелку вниз
      }
    }

    if (e.target.closest('.menu__link') && menuBlock.contains(e.target.closest('.menu__link'))) { // клик на ссылки из меню
      menuBlock.classList.remove('active'); // закрывает меню
      document.body.style.overflow = ''; // Возвращает прокрутку страницы
      if (document.documentElement.scrollTop === 0) { // если страница не прокручена
        promoArrow.style.display = 'block'; // показывает стрелку вниз
      }
      menuLink.forEach((item, i) => { // определяет номер ссылки
        if (e.target === item) {
          ancors[i].scrollIntoView(); // перелистывает до якоря с таким же номером
        }
      });
    }
  });

  promoArrow.addEventListener('click', () => { // перелистывает на след. секцию при клике на стрелку вниз
    ancors[0].scrollIntoView();
  });

  arrowUp.addEventListener('click', () => { // при клике на стрелку вверх возвращает в начало страницы
    document.documentElement.scrollTop = 0;
  });

  window.addEventListener('scroll', () => { // скрывает стрелку при прокрутке вниз с секции promo
    if (document.documentElement.scrollTop !== 0) { // document.documentElement.scrollTop это прокрутка до видимого экрана
      promoArrow.style.display = 'none'; // скрывает стрелку вниз
    } else if (document.documentElement.scrollTop === 0) {
      promoArrow.style.display = 'block'; // показывает стрелку вниз
    }
    if (document.documentElement.scrollTop < getComputedStyle(promoSection).height.match(/[-0-9.]+/)[0]) {
      // прокрутка до видимого экрана сравнивается с вычисленной высотой секции promo, рег.выр. отбрасывает 'px', [0] т.к. match возвращает массив
      arrowUp.style.display = 'none';
    } else if (document.documentElement.scrollTop >= getComputedStyle(promoSection).height.match(/[-0-9.]+/)[0]) {
      arrowUp.style.display = 'block';
    }
  });

  promoBtnsBlock.addEventListener('click', (e) => { // клик на кнопки на первом экране, переход на якори
    if (e.target && e.target.matches('#promoBtnFirst')) {
      ancors[3].scrollIntoView();
    }
    if (e.target && e.target.matches('#promoBtnSecond')) {
      ancors[0].scrollIntoView();
    }
  });






}

export default menu;