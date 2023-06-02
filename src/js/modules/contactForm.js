function contactForm() {
  const form = document.querySelector('.contacts__form');
  const btn = document.querySelector('.contacts__btn');
  const title = document.querySelector('.contacts__text-2');
  const contactsTop = document.querySelector('.contacts__top');
  const formInputs = document.querySelectorAll('form input');

  formInputs.forEach((inputElem) => { // проверять при все input
    const errorElem = inputElem.nextElementSibling; // следующий соседний с input элемент это span с ошибкой
    inputElem.addEventListener('focus', () => {
      errorElem.textContent = ''; // сбросить содержимое сообщения
      errorElem.className = 'error'; // сбросить визуальное состояние сообщения
      inputElem.style.borderColor = 'unset'; // сброс красной рамки
    });
    inputElem.addEventListener('blur', () => {
      validCheck(inputElem, errorElem);
    });
  });

  bindPostData(form);

  function validCheck(inputElem, errorElem) {
    if (!inputElem.validity.valid) {
      showError(inputElem, errorElem); // показать сообщение с ошибкой
      inputElem.style.borderColor = 'red';
      return false;
    }
    return true;
  }

  function showError(inputElem, errorElem) { // показать сообщение с ошибкой
    if (inputElem.validity.valueMissing) { // текст сообщения в зависимости от ошибки
      errorElem.textContent = 'Заполните поле';
    } else if (inputElem.validity.tooShort) {
      errorElem.textContent = `Имя слишком короткое`;
    } else if (inputElem.validity.patternMismatch && inputElem.matches('[type="email"]')) {
      // для phone можно создать такое же условие для type="phone" с другим сообщением
      errorElem.textContent = 'Неверный формат email';
    }
    errorElem.className = 'error_active';
  }

  function bindPostData(form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault(); // предотвращает перезагрузку страницы

      const eventInputs = event.target.querySelectorAll('input'); // все input в форме, которую пытаются отправить
      eventInputs.forEach((input) => validCheck(input)); // для каждого input проверяет на ошибки и выводит сообщения об ошибке
      for (const input of eventInputs) {
        if (!validCheck(input)) { // прерывает дальнейшее выполнение функции, если хотя бы в одном поле ошибка
          return;
        }
      }

      btn.setAttribute('disabled', ''); // блокирует кнопку, пока не пришел ответ

      const formData = new FormData(form); // Данные из формы, во всех input должны быть аттрибуты name=""

      postData('../form-processing.php', formData) // Настраивает и посылает запрос на сервер
        .then((result) => { // Обработка успешного promise
          showThanks(result);
        })
        .catch(() => { // Обработка reject (ошибки)
          form.style.display = 'none';
          title.textContent = `Ошибка соединения с сервером почты`;
        })
        .finally(() => { // Выполнится в любом случае
          form.reset(); // Очистка формы
          btn.removeAttribute('disabled', '');
        });
    });
  }

  async function postData(url, data) { // Настраивает и посылает запрос на сервер
    const result = await fetch(url, { // await дождется результата функции fetch
      method: 'POST', // POST это отправка, GET получение
      body: data, // Тело запроса, если запрос GET, то не нужно
    });
    return await result.json(); // Ответ от сервера в виде PROMISE
  }

  function showThanks(result) { // Выводит сообщение об отправке
    if (result.code == 1) { // код записал в массив в php файле
      title.textContent = `Спасибо! Я свяжусь с вами как можно скорее`;
      form.style.display = 'none';
    } else {
      title.textContent = `Неправильно заполнена форма`;
      form.style.display = 'none';
      const errMessageBlock = document.createElement('div');
      contactsTop.append(errMessageBlock);
      errMessageBlock.classList.add('contacts__error');
      errMessageBlock.innerHTML = `
      <p>${result.nameErr}</p>
      <p>${result.emailErr}</p>
      `;
    }
  }
}

export default contactForm;