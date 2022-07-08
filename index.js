const inputElem = document.querySelector('.task-status');

function change(event) {
    if (event.target.checked) {
        console.log(true);
    } else console.log(false);

}
inputElem.addEventListener('change', change);