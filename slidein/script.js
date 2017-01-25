const sliderImages = document.querySelectorAll('.slide-in');

//wrap function in debounce to make sure that function only runs at certain times.
function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function checkSlide(e) {
  sliderImages.forEach(sliderImage => {
    //halfway through image
    var slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height /2;
    //bottom of image
    var imageBottom = sliderImage.offsetTop + sliderImage.height;

    //show images if halfway but not completely scrolled past
    if(slideInAt > sliderImage.offsetTop && window.scrollY < imageBottom) {
      sliderImage.classList.add('active');
    } else {
      sliderImage.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', debounce(checkSlide));
