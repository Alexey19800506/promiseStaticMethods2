export function setSection(num) {
    const elemements = document.querySelectorAll('.box');
    const elem1 = `span[data-number = "${num}"]`;
    for (let elem of elemements) {
        if (elem.dataset == elem1) {
            return elem.closest('.box').dataset;
        }
    }
}