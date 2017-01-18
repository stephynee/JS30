(function() {
  var secondHand = document.querySelector('.second-hand'),
      minuteHand = document.querySelector('.minute-hand'),
      hourHand = document.querySelector('.hour-hand');

  function setDate() {
    var now = new Date();

    var seconds = now.getSeconds(),
        minutes = now.getMinutes(),
        hours = now.getHours();

    var secondDegrees = ((seconds/60) * 360) + 90,
        minuteDegrees = ((minutes/60) * 360) + 90,
        hourDegrees = ((hours/12) * 360) + 90;

    secondHand.style.transition = secondDegrees === 90 ? 'none' :'all 0.05s';
    minuteHand.style.transition = minuteDegrees === 90 ? 'none' :'all 0.05s';
    hourHand.style.transition = hourDegrees === 90 ? 'none' :'all 0.05s';

    secondHand.style.transitionTimingFunction = 'cubic-bezier(0.1, 2.7, 0.58, 1)';

    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  }

  setDate();
  setInterval(setDate, 1000);
}());
