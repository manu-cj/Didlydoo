const updateDatesDatas = (id, datesData) => {
    const url = `http://localhost:3000/api/events/${id}/attend`;
    let datas = {
        "dates" : datesData
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

export default updateDatesDatas;