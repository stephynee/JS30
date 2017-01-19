(function() {

  var panels = document.querySelectorAll('.panel');

  function toggleOpen() {
    this.classList.toggle('open');
  }

  function showText(e) {
    if(e.propertyName.includes('flex')) {
      this.classList.toggle('open-active');
    }
  }

  panels.forEach(function(panel) {
    panel.addEventListener('click', toggleOpen);
    panel.addEventListener('transitionend', showText);
  });

}());
