async function fetchRequest() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const dataJson = await response.json();
    const emails = dataJson.map((user) => user.email);
    console.log('User emails:', emails);
}

(async () => {
    await fetchRequest();;
})();
