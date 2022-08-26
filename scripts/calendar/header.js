import { getItem } from '../common/storage.js';
import { generateWeekRange } from '../common/time.utils.js';
import { openModal } from '../common/modal.js';

const daysOfWeek = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

export const renderHeader = () => {
    // на основе displayedWeekStart из storage с помощью generateWeekRange сформируйте массив дней текущей недели
    // на основе полученного массива сформируйте разметку в виде строки - 7 дней (день недели и число в месяце)
    // полученную разметку вставить на страницу с помощью innerHTML в .calendar__header
    // в дата атрибуте каждой ячейки должно хранить для какого часа эта ячейка
    const arrayDay = generateWeekRange(getItem('displayedWeekStart'));

    const elemCalendarHeader = document.querySelector('.calendar__header');
    console.log(arrayDay[0].getDate());
    //console.log(getItem('displayedWeekStart'));
    const elemStr = '';
    /*  = daysOfWeek.map(elem =>
             `<div class = 'calendar__day-label day-label'><span class='day-label__day-name'>${elem}</span>
             <span class='day-label__day-number'></span></div>`).join('');*/

    for (let i = 0; i < daysOfWeek.length; i++) {
        elemCalendarHeader.innerHTML +=
            (`<div class = 'calendar__day-label day-label'><span class='day-label__day-name'>${daysOfWeek[i]}</span>
            <span class='day-label__day-number'>${arrayDay[i].getDate()}</span></div>`);
    }
    // console.log(elemStr);







};

// при клике на кнопку "Create" открыть модальное окно с формой для создания события
// назначьте здесь обработчик