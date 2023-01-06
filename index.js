export const shmoment = (date) => {
    let newDate = new Date(date);
    let result = newDate;

    const moment = {
        add(name, value) {
            if (name === 'years') {
                result = new Date(newDate.setFullYear(newDate.getFullYear() + value));
                return this;
            } else if (name === 'months') {
                result = new Date(newDate.setMonth(newDate.getMonth() + value));
                return this;
            } else if (name === 'hours') {
                result = new Date(newDate.setHours(newDate.getHours() + value));
                return this;
            } else if (name === 'days') {
                result = new Date(newDate.setDate(newDate.getDate() + value));
                return this;
            } else if (name === 'minutes') {
                result = new Date(newDate.setMinutes(newDate.getMinutes() + value));
                return this;
            } else if (name === 'seconds') {
                result = new Date(newDate.setSeconds(newDate.getSeconds() + value));
                return this;
            } else if (name === 'milliseconds') {
                result = new Date(newDate.setMilliseconds(newDate.getMilliseconds() + value));
                return this;
            }
        },
        subtract(name, value) {
            if (name === 'years') {
                result = new Date(newDate.setFullYear(newDate.getFullYear() - value));
                return this;
            } else if (name === 'months') {
                result = new Date(newDate.setMonth(newDate.getMonth() - value));
                return this;
            } else if (name === 'hours') {
                result = new Date(newDate.setHours(newDate.getHours() - value));
                return this;
            } else if (name === 'days') {
                result = new Date(newDate.setDate(newDate.getDate() - value));
                return this;
            } else if (name === 'minutes') {
                result = new Date(date.setMinutes(date.getMinutes() - value));
                return this;
            } else if (name === 'seconds') {
                result = new Date(newDate.setSeconds(newDate.getSeconds() - value));
                return this;
            } else if (name === 'milliseconds') {
                result = new Date(newDate.setMilliseconds(newDate.getMilliseconds() - value));
                return this;
            }
        },
        result() {
            return result;
        }
    }
    return moment;
}

console.log(shmoment(new Date(2020, 0, 7, 17, 17, 17, 5)).add('minutes', 7).result());