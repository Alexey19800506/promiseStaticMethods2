export const createNumbersArray = (from, to) => {
    let arrayNumber = [];
    for (let i = from; i <= to; i++) {

        arrayNumber[i] = i;
    }
    return arrayNumber;
};