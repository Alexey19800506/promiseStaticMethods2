export function getDiff(startDate, endDate) {

    const firstDate = new Date(startDate);
    const secondDate = new Date(endDate);

    const result = Math.abs(firstDate.getTime() - secondDate.getTime());
    const days = Math.floor((result / (24 * 60 * 60 * 1000)) % 30);
    const hours = Math.floor((result / (60 * 60 * 1000)) % 24);
    const minuts = Math.floor((result / (60 * 1000)) % 60);
    const seconds = Math.floor((result / 1000) % 60);

    return `${days}d ${hours}h ${minuts}m ${seconds}s`;
}


console.log(getDiff(new Date(2021, 2, 1, 15, 32, 33), new Date(2021, 1, 1, 14, 31, 32)));