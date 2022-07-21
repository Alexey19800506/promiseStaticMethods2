const tasks = [
    { text: 'Buy milk', done: false },
    { text: 'Pick up Tom from airport', done: false },
    { text: 'Visit party', done: false },
    { text: 'Visit doctor', done: true },
    { text: 'Buy meat', done: true },
];

const listElem = document.querySelector('.list');

const renderTasks = tasksList => {
    let i = 0;

    const tasksElems = tasksList
        .sort((a, b) => a.done - b.done)
        .map(({ text, done }) => {
            const listItemElem = document.createElement('li');
            listItemElem.classList.add('list__item');
            const checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            checkbox.dataset.id = i + 1;
            checkbox.checked = done;
            checkbox.classList.add('list__item-checkbox');
            if (done) {
                listItemElem.classList.add('list__item_done');
            }
            listItemElem.append(checkbox, text);

            return listItemElem;
        });

    listElem.append(...tasksElems);
};

renderTasks(tasks);

const createTask = () => {
    if (!inputTask.value == '') {
        tasks.unshift({ text: inputTask.value, done: false });
        renderTasks(tasks);
        inputTask.value = '';
    }
}

buttonSubmit.addEventListener('click', createTask);

const statusCheckbox = document.querySelector('.list__item-checkbox');
const checked = event => {
    tasks[+event.target.dataset.id].done = true;
    renderTasks(tasks);
}

statusCheckbox.addEventListener('click', checked);