import modal from './modules/modal';
import navigation from './modules/navigation';
import animation from './modules/animation';

window.addEventListener('DOMContentLoaded', () => {
  modal('.menu', '.hamburger', ['.menu__close', '.menu__link', '.menu__overlay'], '.promo__arrow'); // меню
  modal('.policy', '.contacts__policy', ['.policy__close', '.policy__overlay']); // модальное окно с политикой
  navigation();
  animation();
});

