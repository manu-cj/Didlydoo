const updateDatas = (id, nameData, descriptionData, authorData, datesData) => {
    const url = `http://localhost:3000/api/events/${id}`;
    let datas = {
        "name" : nameData,
        "description" : descriptionData,
        "author" : authorData,
        "last_modification" : getDateNow(),
    }
   
    fetch(url, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        body: JSON.stringify(datas)
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Network response was not ok: ' + response.statusText);
        }
    })
    .then(datas => {
        console.log(datas);
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });
}

function getDateNow() {
const currentDate = new Date();

const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, '0');
const day = String(currentDate.getDate()).padStart(2, '0');
const hours = String(currentDate.getHours()).padStart(2, '0');
const minutes = String(currentDate.getMinutes()).padStart(2, '0');

const currentDateFormated = `${year}-${month}-${day}T${hours}:${minutes}`;

return currentDateFormated.toString;
}



export default updateDatas;