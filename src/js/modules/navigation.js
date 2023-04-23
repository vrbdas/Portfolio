function menu() {
  // const hamburger = document.querySelector('.hamburger');
  // const menuBlock = document.querySelector('.menu');
  const menuLink = document.querySelectorAll('.menu__link');
  const promoArrow = document.querySelector('.promo__arrow');
  const arrowUp = document.querySelector('.arrow-up');
  const promoBtnsBlock = document.querySelector('.promo__btns');
  const promoSection = document.querySelector('.promo');
  const ancors = [ // якори секций для перехода по ссылкам из меню
    document.querySelector('#about-me'),
    document.querySelector('#resume'),
    document.querySelector('#tools'),
    document.querySelector('#portfolio'),
    document.querySelector('#contacts'),
  ];

  // блок с модальным окном, блок при клике на который открывается окно, [блоки внутри окна, при клике на которые закрывается окно]
  modal('.menu', '.hamburger', ['.menu__close', '.menu__link', '.menu__overlay']);

  function modal(modalBlockSelector, modalOpenSelector, modalCloseSelector) {
    const modalBlock = document.querySelector(modalBlockSelector);
    const modalOpen = document.querySelector(modalOpenSelector);

    modalOpen.addEventListener('click', function() { // открывает меню при нажатии на гамбургер
      modalBlock.classList.add('active');
      document.body.style.overflow = 'hidden'; // Предотвращает прокрутку страницы, когда открыто меню
      promoArrow.style.display = 'none'; // скрывает стрелку вниз
    });

    modalBlock.addEventListener('click', (event) => {
      modalCloseSelector.forEach((item) => {
        if (event.target.closest(item) && modalBlock.contains(event.target.closest(item))) { // при нажатии на modalCloseSelector
          modalBlock.classList.remove('active'); // закрывает меню
          document.body.style.overflow = ''; // Возвращает прокрутку страницы
          if (document.documentElement.scrollTop === 0) { // если страница не прокручена
            promoArrow.style.display = 'block'; // показывает стрелку вниз
          }
        }
      });
    });
  }

  menuLink.forEach((item, i) => { // клик на ссылки из меню. i определяет номер ссылки
    item.addEventListener('click', () => {
      ancors[i].scrollIntoView(); // перелистывает до якоря с таким же номером
    });
  });

  // hamburger.addEventListener('click', function() { // открывает меню при нажатии на гамбургер
  //   menuBlock.classList.add('active');
  //   document.body.style.overflow = 'hidden'; // Предотвращает прокрутку страницы, когда открыто меню
  //   promoArrow.style.display = 'none'; // скрывает стрелку вниз
  // });

  // menuBlock.addEventListener('click', (e) => {
  //   if (e.target.closest('.menu__close') && menuBlock.contains(e.target.closest('.menu__close'))) { // закрывает меню при нажатии на крестик
  //     menuBlock.classList.remove('active');
  //     document.body.style.overflow = ''; // Возвращает прокрутку страницы
  //     if (document.documentElement.scrollTop === 0) { // если страница не прокручена
  //       promoArrow.style.display = 'block'; // показывает стрелку вниз
  //     }
  //   }

  //   if (e.target.matches('.menu__overlay')) { // закрывает меню при нажатии на оверлей
  //     menuBlock.classList.remove('active');
  //     document.body.style.overflow = ''; // Возвращает прокрутку страницы
  //     if (document.documentElement.scrollTop === 0) { // если страница не прокручена
  //       promoArrow.style.display = 'block'; // показывает стрелку вниз
  //     }
  //   }

  //   if (e.target.closest('.menu__link') && menuBlock.contains(e.target.closest('.menu__link'))) { // клик на ссылки из меню
  //     menuBlock.classList.remove('active'); // закрывает меню
  //     document.body.style.overflow = ''; // Возвращает прокрутку страницы
  //     if (document.documentElement.scrollTop === 0) { // если страница не прокручена
  //       promoArrow.style.display = 'block'; // показывает стрелку вниз
  //     }
  //     menuLink.forEach((item, i) => { // определяет номер ссылки
  //       if (e.target === item) {
  //         ancors[i].scrollIntoView(); // перелистывает до якоря с таким же номером
  //       }
  //     });
  //   }
  // });

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

  const policyLink = document.querySelector('#policyLink');
  const policyBlock = document.querySelector('.policy');

  policyLink.addEventListener('click', function() { // открывает окно с политикой
    policyBlock.classList.add('active');
    document.body.style.overflow = 'hidden'; // Предотвращает прокрутку страницы, когда открыто окно
  });

  policyBlock.addEventListener('click', (event) => {
    if (event.target && event.target.matches('.policy__overlay')) { // клик на область вокруг блока
      policyBlock.classList.remove('active');
      document.body.style.overflow = ''; // Возвращает прокрутку страницы
    }
    if (event.target && event.target.closest('.policy__close') && policyBlock.contains(event.target)) { // клик на крестик
      policyBlock.classList.remove('active');
      document.body.style.overflow = ''; // Возвращает прокрутку страницы
    }
  });

  // document.addEventListener('keydown', (event) => { // Закрывает окно при нажатии Esc
  //   if (event.code === 'Escape' && modalBlock.classList.contains('show')) {
  //     modalHide(modalBlockSelector);
  //   }
  // });




}

export default menu;