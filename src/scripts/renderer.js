import { getItem } from './storage.js';

const compareTasks = () => {
    const tasksList = getItem('tasksList');
    tasksList.sort((a, b) => +(Date.now(a.createDate)) - +(Date.now(b.createDate)));

    return tasksList;
}

const createCheckbox = ({ done, id }) => {
    const checkboxElem = document.createElement('input');
    checkboxElem.setAttribute('type', 'checkbox');
    checkboxElem.setAttribute('data-id', id);
    checkboxElem.checked = done;
    checkboxElem.classList.add('list__item-checkbox');

    return checkboxElem;
}

const createListItem = ({ text, done, id }) => {
    const listItemElem = document.createElement('li');
    listItemElem.classList.add('list__item');
    const checkboxElem = createCheckbox({ done, id });
    if (done) {
        listItemElem.classList.add('list__item_done');
    }
    listItemElem.append(checkboxElem, text);

    return listItemElem;
}

export const renderTasks = () => {
    const tasksList = getItem('tasksList') || [];
    console.log(Date.now(getItem('tasksList')[0].createDate));
    const listElem = document.querySelector('.list');
    listElem.innerHTML = '';
    const tasksElems = tasksList
        .sort(compareTasks)
        .map(createListItem);
    listElem.append(...tasksElems);
};