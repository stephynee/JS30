const slider = document.querySelector('.items');
var isDown = false,
    startX,
    scrollLeft;

function setActive(e) {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
}

function setInactive() {
  isDown = false;
  slider.classList.remove('active');
}

function slide(e) {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3;
  slider.scrollLeft = scrollLeft - walk;
}

slider.addEventListener('mousedown', setActive);
slider.addEventListener('mousemove', slide);

slider.addEventListener('mouseleave', setInactive);
slider.addEventListener('mouseup', setInactive);
