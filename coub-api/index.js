const fetch = require('node-fetch');

const url = 'https://coub.com/api/v2/timeline/subscriptions/weekly?page=1';

fetch(url)
    .then((v) => {
        return v.json();
    })
    .then(data => {
        console.log('data: ', data);
        const links = data.coubs.map(v => v.file_versions.html5.video);
        console.log('data: ', links);
    })
    .catch(e => {
        console.log('error: ', e);
    });
