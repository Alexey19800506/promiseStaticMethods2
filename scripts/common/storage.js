let storage = {
    eventIdToDelete: null,
    displayedWeekStart: null,
    events: [],
};

export const setItem = (key, value) => {
    if (key == 'events') return storage['events'].push(value);
    else return storage[key] = value;
};

export const getItem = (key) => {
    return storage[key];
};