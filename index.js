const inputElem = document.querySelector('.text-input');

function change(event) {
    console.log(event.target.value);
}
inputElem.addEventListener('change', change);