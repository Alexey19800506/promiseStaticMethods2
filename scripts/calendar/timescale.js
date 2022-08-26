import { createNumbersArray } from '../common/createNumbersArray.js';

export const renderTimescale = () => {
    // ф-ция должна генерировать разметку для боковой шкалы времени (24 часа)
    // полученную разметку вставьте на страницу с помощью innerHTML в .calendar__time-scale
    const elemTimeScale = document.querySelector('.calendar__time-scale');
    for (let i = 1; i <= 24; i++) {
        elemTimeScale.innerHTML += `<div class='time-slot'><span class='time-slot__time'>${i+'.00'}</span></div>`;

    }


};