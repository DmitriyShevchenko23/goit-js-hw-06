const inputEl = document.querySelector('input')
console.log(inputEl)

const validLength = parseInt(inputEl.getAttribute("data-length"))
console.log(validLength)

inputEl.addEventListener("blur", (event) => {

    if (event.currentTarget.value.length === validLength) {
        event.currentTarget.classList.add('valid')
        event.currentTarget.classList.remove('invalid')
    }
    else {
        event.currentTarget.classList.add('invalid')
        event.currentTarget.classList.remove('valid')
    }
});
