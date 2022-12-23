import { getItem, setItem } from '../common/storage.js';
import { renderWeek } from '../calendar/calendar.js';
import { renderHeader } from '../calendar/header.js';
import { getStartOfWeek, getDisplayedMonth } from '../common/time.utils.js';

const navElem = document.querySelector('.navigation');
const displayedMonthElem = document.querySelector(
    '.navigation__displayed-month'
);

function renderCurrentMonth() {
    const date = getStartOfWeek(getItem('displayedWeekStart'));
    displayedMonthElem.innerHTML = getDisplayedMonth(date);
}

const onChangeWeek = (event) => {
    const switchWeek = event.target.closest('button');

    if (switchWeek === null) {
        return;
    }

    const mondayCurrentWeek = getStartOfWeek(getItem('displayedWeekStart'));
    const day = new Date(mondayCurrentWeek).getDate();
    const week = 7;

    const changeMonth =
        switchWeek.dataset.direction === 'next' ?
        new Date(mondayCurrentWeek).setDate(day + week) :
        switchWeek.dataset.direction === 'prev' ?
        new Date(mondayCurrentWeek).setDate(day - week) :
        getStartOfWeek(new Date());

    setItem('displayedWeekStart', new Date(changeMonth));

    renderHeader();
    renderCurrentMonth();
    renderWeek();
};

export const initNavigation = () => {
    renderCurrentMonth();
    navElem.addEventListener('click', onChangeWeek);
};