export function createButton(buttonText) {
    const elem = document.querySelector('body');
    const createElem = document.createElement('button');
    elem.append(createElem);
    createElem.textContent = buttonText;
}