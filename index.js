const checkboxElem = document.querySelector('.task-status');

function checked() {
    if (checkboxElem.checked) {
        console.log(false);
    } else console.log(true);
}
checkboxElem.addEventListener('change', checked);