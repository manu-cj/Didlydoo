import { displayAllEvents } from "./../components/displayAllEvents.js";


const getAllDatas = (request) => {
    const url = `http://localhost:3000/api/${request}/`;
   

    fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Network response was not ok: ' + response.statusText);
        }
    })
    .then(datas => {
        displayAllEvents(datas);
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });
};

export {getAllDatas};
