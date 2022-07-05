export function setButton(buttonText) {
    const buttonElem = document.querySelector('body');
    buttonElem.innerHTML = `<button> ${buttonText} </button>`;
}