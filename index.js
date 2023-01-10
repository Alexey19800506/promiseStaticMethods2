const requestUserData = userId => {
    const request = new Promise((resolve, reject) => {
        if (userId === 'broken') {
            setTimeout(() => {
                reject(new Error('User not found'));
            }, 500);
        } else {
            setTimeout(() => {
                resolve({
                    name: 'John',
                    age: 17,
                    email: `${userId}@exsemple.com`,
                    userId
                });
            }, 1000);
        }
    });
    return request;
};

requestUserData('broken')
    .then(data => console.log(data))
    .catch(error => console.log(error));