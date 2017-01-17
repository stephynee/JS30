var keys = document.querySelectorAll('.key');

window.addEventListener('keydown', function(e) {
  var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`),
      key = document.querySelector(`.key[data-key="${e.keyCode}"]`),
      body = document.querySelector('body');

  var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
  var i = Math.floor(Math.random() * 7);

  if(!audio) {
    //end the function if there is no audio for associated key
    return;
  }

  //run animations
  body.style.backgroundColor = colors[i];
  key.classList.add('play');

  //play sound
  audio.currentTime = 0;
  audio.play();
});

keys.forEach(function(key) {
  //remove the play class after the transition has ended so that animation functions properly
  key.addEventListener('transitionend', function(e) {
    if(e.propertyName !== 'transform') {
      return;
    }
    this.classList.remove('play');
  });
});
