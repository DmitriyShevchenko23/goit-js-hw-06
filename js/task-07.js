const fontSizeEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
console.log(fontSizeEl, textEl)

fontSizeEl.addEventListener('input', (event) => {
    textEl.style.fontSize = `${event.currentTarget.value}px`;
});

