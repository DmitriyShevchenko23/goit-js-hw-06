function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const body = document.querySelector('body');
const buttonEl = document.querySelector('.change-color');

let color = document.querySelector('.color');


buttonEl.addEventListener('click', onButtonClick)

function onButtonClick() {
  body.style.backgroundColor = getRandomHexColor()
  color.textContent=`${body.style.backgroundColor}`
}