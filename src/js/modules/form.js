function form() {
  const form = document.querySelector('.contacts__form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const formData = new FormData(form); // Данные из формы, во всех input обязательно должны быть аттрибуты name=""
      const json = JSON.stringify(Object.fromEntries(formData.entries()));
      // Данные из формы превращает в массив массивов, его в обычный объект, а его в JSON

      postData('url', json) // Настраивает и посылает запрос на сервер
        .then((data) => { // Обработка успешного promise
          console.log(data); // Ответ от сервера
          showThanks('Спасибо! Форма отправлена!');
        })
        .catch(() => { // Обработка reject (ошибки)
          showThanks('Что-то пошло не так...');
        })
        .finally(() => { // Выполнится в любом случае
          form.reset(); // Очистка формы
        });
    });

    async function postData(url, data) { // Настраивает и посылает запрос на сервер
      // const result = await fetch(url, { // await дождется результата функции fetch
      //   method: 'POST', // POST это отправка, GET получение
      //   headers: {'Content-type': 'application/json'}, // Заголовки нужны для JSON, если на сервер отправлять formData, то не нужны
      //   body: data, // Тело запроса, если запрос GET, то не нужно
      // });
      // return await result.json(); // Ответ от сервера в виде PROMISE в формате JSON
      const result = new Promise((resolve, reject) => { // заглушка
        setTimeout(() => {
          resolve(data);
        }, 300);
      });
      return await result;
    }

    function showThanks(text) { // Выводит сообщение об отправке
      alert(`${text}`);
    }


  });



}

export default form;

// $.ajax({
//   type: "POST",
//   url: "../form-processing.php",
//   data: $(this).serialize()
// }).done(function () {
//   $(this).find("input").val("");
//   $('#consultation, #order').fadeOut();
//   $('.overlay, #thanks').fadeIn('slow');
//   $('form').trigger('reset');

// });
// return false;