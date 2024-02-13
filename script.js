setInterval(setTime, 1000);
const secondHand = document.querySelector('.second');
const minuteHand = document.querySelector('.minute');
const hourHand = document.querySelector('.hour');
function setTime() {
  const currentTime = new Date();
  const secondRatio = currentTime.getSeconds() /60;
  const minuteRatio = (secondRatio + currentTime.getMinutes()) /60;
  const hourRatio = (minuteRatio + currentTime.getHours()) /12;
  setRotation(secondHand, secondRatio);
  setRotation(minuteHand, minuteRatio);
  setRotation(hourHand, hourRatio);
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotate', rotationRatio *360)
}
setTime();




