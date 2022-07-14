const counterEl = document.querySelector('#counter');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');


const counterObj = {
    value: 0,
    increment() {
        counterObj.value += 1;
    },
    decrement() {
        counterObj.value -= 1;
    }
}


decrementBtn.addEventListener('click', () => {
    counterObj.decrement();
    
    valueEl.textContent = counterObj.value;
});

incrementBtn.addEventListener('click', () => {
    counterObj.increment();
    
    valueEl.textContent=counterObj.value;
});












