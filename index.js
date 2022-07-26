const tasks = [
    { text: 'Buy milk', done: false },
    { text: 'Pick up Tom from airport', done: false },
    { text: 'Visit party', done: false },
    { text: 'Visit doctor', done: true },
    { text: 'Buy meat', done: true },
];
for (let i = 0; i < tasks.length; i++) {
    tasks[i].id = Math.floor(Math.random() * 1000);
}

const listElem = document.querySelector('.list');

const renderTasks = tasksList => {

    const tasksElems = tasksList
        .sort((a, b) => a.done - b.done)
        .map(({ text, done, id }) => {
            const listItemElem = document.createElement('li');
            listItemElem.classList.add('list__item');
            const checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            checkbox.dataset.id = id;
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
const buttonSubmit = document.querySelector('.create-task-btn');
const inputTask = document.querySelector('.task-input');

const createTask = () => {
    if (inputTask.value == '') {
        return;
    }
    listElem.innerHTML = '';
    tasks.push({ text: inputTask.value, done: false, id: Math.floor(Math.random() * 1000) });
    renderTasks(tasks);

    inputTask.value = '';
}

buttonSubmit.addEventListener('click', createTask);

const onToggleTask = event => {

    const isCheckbox = event.target.classList.contains('list__item-checkbox');

    if (!isCheckbox) {
        return;
    }
    listElem.innerHTML = '';
    const taskData = tasks.find(task => task.id === +(event.target.dataset.id));
    Object.assign(taskData, { done: event.target.checked });
    renderTasks(tasks);
}

listElem.addEventListener('click', onToggleTask);