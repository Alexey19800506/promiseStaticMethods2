export function manageClasses() {
    const elem = document.querySelector('.one');
    elem.classList.add('selected');
    const elem1 = document.querySelector('.two');
    elem1.classList.remove('selected');
    const elem2 = document.querySelector('.three');
    elem2.classList.toggle('three_done');
    const elem3 = document.querySelector('.four');
    if (elem3.classList.contains('some-class')) {
        elem3.classList.add('another-class');
    }
}