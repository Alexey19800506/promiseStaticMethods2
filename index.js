const buttonElem = document.querySelector('.btn');

function handleClick(event) {
    console.log(event.target.textContent);
}
buttonElem.addEventListener('click', handleClick);