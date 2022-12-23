import { getItem, setItem } from '../common/storage.js';
import { renderEvents } from './events.js';
import { getDateTime } from '../common/time.utils.js';
import { closeModal } from '../common/modal.js';

const eventFormElem = document.querySelector('.event-form');
const closeEventFormBtn = document.querySelector('.create-event__close-btn');

function clearEventForm() {
    eventFormElem.reset();
}

function onCloseEventForm() {
    closeModal();
    clearEventForm();

}

function onCreateEvent(event) {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(eventFormElem));
    const objectEvent = {
        id: Math.random(),
        title: formData.title || '(No title)',
        description: formData.description,
        start: getDateTime(formData.date, formData.startTime),
        end: getDateTime(formData.date, formData.endTime),
    };


    const crossEvent = getItem('events').find(event => objectEvent.start <= event.start && objectEvent.end >= event.start ||
        objectEvent.start >= event.start && objectEvent.start <= event.end);
    if (getItem('events').includes(crossEvent)) {
        alert('You have an event at this time already!');
        return;
    }

    if (new Date(objectEvent.start).getTime() > new Date(objectEvent.end).getTime()) {
        alert('The ending of the event cannot be greater than the beginning')
        return
    }

    const maxEventTime = 6;
    const maxTime = new Date(objectEvent.end).getHours() - new Date(objectEvent.start).getHours();
    if (maxTime > maxEventTime) {
        alert('The event duration cannot exceed 6 hours');
        return;
    }

    setItem('events', objectEvent);
    onCloseEventForm();
    renderEvents();
}

export function initEventForm() {
    eventFormElem.addEventListener('submit', onCreateEvent);
    closeEventFormBtn.addEventListener('click', onCloseEventForm);
}