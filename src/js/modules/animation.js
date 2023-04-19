function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');
for (let elm of elements) {
  observer.observe(elm);
}


 
const observer = new IntersectionObserver( trueCallback, options );
 
const target = document.querySelector( '#target' );
observer.observe( target ); // запускаем "слежку" за элементом(ами) в константе target
 
// callback-функция (возвратная функция)
const trueCallback = function(entries, observer) {
	entries.forEach((entry) => {
		// делаем что-либо для каждого переданного элемента (в нашем случае он один)
		console.log( 'сработало' );
		// например можно добавить какой-либо CSS-класс элементу
		entry.target.classList.add( 'some-class' );
	});
}



const observer = new IntersectionObserver(callback, options); // создается объект observer

const callback = function(item) { // делаем что-либо для каждого переданного элемента
  
};

const targets = document.querySelectorAll('.skill');

targets.forEach((item) => {
  observer.observe(item); // метод observe запускает "слежку" за элементами в константе target
})