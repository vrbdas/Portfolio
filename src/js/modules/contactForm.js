async function postData(url, data) { // Настраивает и посылает запрос на сервер
  const result = await fetch(url, { // await дождется результата функции fetch
    method: 'POST', // POST это отправка, GET получение
    body: data, // Тело запроса, если запрос GET, то не нужно
  });
  return await result; // Ответ от сервера в виде PROMISE
}

function contactForm() {
  const form = document.querySelector('.contacts__form');
  const btn = document.querySelector('.contacts__btn');
  const title = document.querySelector('.contacts__text-2');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // предотвращает перезагрузку страницы
    btn.setAttribute('disabled', ''); // блокирует кнопку, пока не пришел ответ

    const formData = new FormData(form); // Данные из формы, во всех input должны быть аттрибуты name=""

    postData('../form-processing.php', formData) // Настраивает и посылает запрос на сервер
      .then(() => { // Обработка успешного promise
        showThanks('Спасибо! Я свяжусь с вами как можно скорее.');
      })
      .catch(() => { // Обработка reject (ошибки)
        showThanks('Что-то пошло не так...');
      })
      .finally(() => { // Выполнится в любом случае
        form.reset(); // Очистка формы
        btn.removeAttribute('disabled', '');
      });

    function showThanks(text) { // Выводит сообщение об отправке
      form.style.display = 'none';
      title.textContent = `${text}`;
    }
  });
}

export default contactForm;

document.querySelector('.contacts__form').setAttribute('display', 'none');