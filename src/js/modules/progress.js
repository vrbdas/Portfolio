function progress() {
  const counters = document.querySelectorAll('.progress__counter');
  const lines = document.querySelectorAll('.progress__bar_fill');

  counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
  });
}

export default progress;