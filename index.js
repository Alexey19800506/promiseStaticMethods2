const checkboxElem = document.querySelector('.task-status');

function checked() {
    if (checkboxElem.checked) {
        console.log(true);
    } else console.log(false);
}
checkboxElem.addEventListener('click', checked);