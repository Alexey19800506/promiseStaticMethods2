 import { getItem } from '../common/storage.js';
 import { generateWeekRange } from '../common/time.utils.js';
 import { renderEvents } from '../events/events.js';
 import { createNumbersArray } from '../common/createNumbersArray.js';

 const generateDay = () => {
     const stringHours = createNumbersArray(0, 23).map(num =>
         `<div class='calendar__time-slot' data-time='${num}'></div>`
     ).join('');
     return stringHours;
 };

 const clock = () => {
     const clockHeight = () => new Date().getHours() * 60 + new Date().getMinutes();
     const currentDate = new Date();
     const currentDayElem = document.querySelector(
         `.calendar__day[data-day="${currentDate.getDate()}"]`
     );
     const presentTime = document.createElement('div');
     presentTime.classList.add('clockline');
     presentTime.style.marginTop = `${clockHeight()}px`;

     currentDayElem.append(presentTime);
 }

 export const renderWeek = () => {
     const elemCalendarWeek = document.querySelector('.calendar__week');
     const arrayDay = generateWeekRange(getItem('displayedWeekStart'));

     const continieArray = arrayDay.map(elem =>
         `<div class='calendar__day' data-day='${elem.getDate()}'>${generateDay()}</div>`
     ).join('');
     elemCalendarWeek.innerHTML = continieArray;

     const dayMonday = getItem('displayedWeekStart');
     if (dayMonday.getTime() <= Date.now() && Date.now() <= (dayMonday.getTime() + 6 * 24 * 60 * 60 * 1000)) {
         clock();
     }
     renderEvents();
 };