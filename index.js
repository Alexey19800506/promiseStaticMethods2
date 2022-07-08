const divElem = document.querySelector('.pagination');

function handleClick(event) {
    if (event.target.closest('.pagination__page')) {
        console.log(event.target.dataset.pageNumber);
    }
}

divElem.addEventListener('click', handleClick);