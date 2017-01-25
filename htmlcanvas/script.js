(function() {
  var canvas = document.querySelector('#draw');
  var context = canvas.getContext('2d');

  var isDrawing = false,
      lastX = 0,
      lastY = 0,
      hue = 0,
      direction = true;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  context.lineJoin = 'round';
  context.lineCap = 'round';
  context.lineWidth = 50;

  function draw(e) {
    if(!isDrawing) return;

    context.strokeStyle = `hsl(${hue}, 100%, 50%)`
    context.beginPath();
    context.moveTo(lastX, lastY);
    context.lineTo(e.offsetX, e.offsetY);
    context.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];

    hue++;

    if(hue >= 360) {
      hue = 0;
    }

    if(context.lineWidth >= 100 || context.lineWidth <= 1) {
      direction = !direction;
    }

    if(direction) {
      context.lineWidth++;
    } else {
      context.lineWidth--;
    }
  }

  canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
  });
  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mouseup', () => isDrawing = false);
  canvas.addEventListener('mouseout', () => isDrawing = false);
}());
