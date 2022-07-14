const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');


function onInput(event) {
    outputEl.textContent = event.currentTarget.value;
    if (outputEl.textContent === '') {
        outputEl.textContent = 'Anonymous';
    }
};

inputEl.addEventListener('input', onInput);



