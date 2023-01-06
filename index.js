const shmoment = (date) => {
    let result;

    const moment = {
        add(name, value) {
            if (name === 'years') {
                result = new Date(date.setFullYear(date.getFullYear() + value));
                return this;
            } else if (name === 'months') {
                result = new Date(date.setMonth(date.getMonth() + value));
                return this;
            } else if (name === 'hours') {
                result = new Date(date.setHours(date.getHours() + value));
                return this;
            } else if (name === 'dates') {
                result = new Date(date.setDate(date.getDate() + value));
                return this;
            } else if (name === 'minutes') {
                result = new Date(date.setMinutes(date.getMinutes() + value));
                return this;
            } else if (name === 'seconds') {
                result = new Date(date.setSeconds(date.getSeconds() + value));
                return this;
            } else if (name === 'milliseconds') {
                result = new Date(date.setMilliseconds(date.getMilliseconds() + value));
                return this;
            }
        },
        subtract(name, value) {
            if (name === 'years') {
                result = new Date(date.setFullYear(date.getFullYear() - value));
                return this;
            } else if (name === 'months') {
                result = new Date(date.setMonth(date.getMonth() - value));
                return this;
            } else if (name === 'hours') {
                result = new Date(date.setHours(date.getHours() - value));
                return this;
            } else if (name === 'dates') {
                result = new Date(date.setDate(date.getDate() - value));
                return this;
            } else if (name === 'minutes') {
                result = new Date(date.setMinutes(date.getMinutes() - value));
                return this;
            } else if (name === 'seconds') {
                result = new Date(date.setSeconds(date.getSeconds() - value));
                return this;
            } else if (name === 'milliseconds') {
                result = new Date(date.setMilliseconds(date.getMilliseconds() - value));
                return this;
            }
        },
        result() {
            return result;
        }
    }
    return moment;
}

console.log(shmoment(new Date(2020, 0, 7, 17, 17, 17, 5)).add('years', 1).add('seconds', 65).add('milliseconds', 65).result());