export function getDiff(startDate, endDate) {

    const firstDate = new Date(startDate);
    const secondDate = new Date(endDate);

    const result = Math.abs(firstDate.getTime() - secondDate.getTime());
    const days = Math.floor(result / (24 * 60 * 60 * 1000));
    const hours = Math.floor((result / (60 * 60 * 1000)) % 24);
    const minuts = Math.floor((result / (60 * 1000)) % 60);
    const seconds = Math.floor((result / 1000) % 60);

    return `${days}d ${hours}h ${minuts}m ${seconds}s`;
}