export function finishform() {
    const el = document.querySelector('input');
    el.setAttribute('type', 'password')
    const elem = document.querySelector('.login-form');
    const createElem = document.createElement('input');
    elem.prepend(createElem);
    createElem.setAttribute('type', 'text');
    createElem.setAttribute('name', 'login');
}