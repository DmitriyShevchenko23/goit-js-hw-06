const numbersOfCategoriesEl = document.querySelectorAll('.item')
console.log(`Numbers of categories: ${numbersOfCategoriesEl.length}`)

numbersOfCategoriesEl.forEach(function (el, index) {
    const numberOfElements = el.querySelectorAll('li');
    const nameOfElements = el.querySelector('h2');
    console.log(`Category: ${nameOfElements.textContent}`);
    console.log(`Elements: ${numberOfElements.length}`);
});