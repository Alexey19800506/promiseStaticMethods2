const getSum = numbers => numbers
    .filter(value => !isNaN(value))
    .reduce((acc, num) => acc + Number(num), 0);

export const asyncSum = (...asyncNumbers) => {
    return Promise.all(asyncNumbers)
        .then(num => getSum(num))
        .catch(() => Promise.reject(new Error(`Can't calculate\\`)));
};

//asyncSum(as1, Promise.reject(new Error('error')), as3)
//.then(result => console.log(result));