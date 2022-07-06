export function finshList() {
    const elem = document.querySelector('.list');
    const createElem = document.createElement('li');
    elem.prepend(createElem);
    createElem.textContent = '1';
    const createElem1 = document.createElement('li');
    elem.append(createElem1);
    createElem1.textContent = '8';
    const elem1 = document.querySelector('.special');
    const createElem2 = document.createElement('li');
    elem1.before(createElem2);
    createElem2.textContent = '4';
    const createElem3 = document.createElement('li');
    elem1.before(createElem3);
    createElem3.textContent = '6';
}