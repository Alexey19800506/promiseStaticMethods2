const buttonElem = document.querySelector('.single-use-btn');

function clicked() {
    console.log('clicked');
    buttonElem.removeEventListener('click', clicked);
}
buttonElem.addEventListener('click', clicked);