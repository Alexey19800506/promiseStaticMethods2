export const createNumbersArray = (from, to) => {
    // ф-ция должна генерировать массив чисел от from до to
    let arrayNumber = [];
    for (let i = 0; i <= (to - from); i++) {

        arrayNumber[i] = from + i;
    }
    return arrayNumber;
};