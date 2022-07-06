export function squaredNumbers() {
    const elements = document.querySelectorAll('.number');
    for (let elem of elements) {
        elem.dataset.squaredNumber = elem.dataset.number * elem.dataset.number;
    }
}