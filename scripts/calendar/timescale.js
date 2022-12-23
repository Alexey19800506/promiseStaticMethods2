import { createNumbersArray } from '../common/createNumbersArray.js';

export const renderTimescale = () => {
    const elemTimeScale = document.querySelector('.calendar__time-scale');

    const array = createNumbersArray(1, 24);
    array.map(num => {
        elemTimeScale.innerHTML += `<div class='time-slot'><span class='time-slot__time'>${num+'.00'}</span></div>`;
    })
};