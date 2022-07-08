const buttonElem = document.querySelector('.search__btn');
const inputElem = document.querySelector('.search__input');

function click() {
    console.log(inputElem.value);
}
buttonElem.addEventListener('click', click);