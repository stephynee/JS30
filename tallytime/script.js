const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

const seconds = timeNodes
  .map(node => node.dataset.time)
  .map(timeCode => {
    const [mins, secs] = timeCode.split(':').map(parseFloat);
    return (mins * 60) + secs;
  })
  .reduce((a,b) => a + b);

var secondsLeft = seconds;
var hours = Math.floor(secondsLeft/3600);
secondsLeft = secondsLeft % 3600;
var minutes = Math.floor(secondsLeft/60);
secondsLeft = secondsLeft % 60;
var totalTime = `${hours}:${minutes}:${secondsLeft}`);
