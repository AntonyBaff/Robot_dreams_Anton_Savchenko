function fetchRequest(url) {
    return fetch(url)
        .then((dataJson) => dataJson.json())
        .then((data) => data.map((user) => user.email));
}

function processData(emails) {
    console.log('User emails:', emails);
}

fetchRequest('https://jsonplaceholder.typicode.com/users').then(processData);
