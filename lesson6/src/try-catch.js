async function fetchData(url) {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.log('error while requesting');
        throw error;
    }
}

async function getData() {
    const fakeUrl = 'https://api.nonexistent123.com/data';
    const realUrl = 'https://jsonplaceholder.typicode.com/users';

    try {
        console.log('Request on fake url');
        const data = await fetchData(fakeUrl);
        console.log('Data from fakeUrl', data);
    } catch (error) {
        console.warn('fakeUrl is not working, trying realUrl...');

        try {
            const realData = await fetchData(realUrl);
            console.log('Data from realUrl', realData);
        } catch (error) {
            throw new Error('All URLs are not working');
        }
    }
}

getData();
