const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');

var walk = 100;

function shadow(e) {
  var width = hero.offsetWidth,
      height = hero.offsetHeight,
      x = e.offsetX,
      y = e.offsetY;

  if(this !== e.target) {
     x = x + e.target.offsetLeft;
     y = y + e.target.offsetTop;
  }

  var xWalk = Math.round((x/width * walk) - (walk/2)),
      yWalk = Math.round((y/height * walk) - (walk/2));

  text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
    ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
    ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
    ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
  `;
}

hero.addEventListener('mousemove', shadow);
