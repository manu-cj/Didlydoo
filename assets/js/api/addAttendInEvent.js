export function AddAttendInEvent(id, data) {
    let url = `http://localhost:3000/api/events/${id}/attend`
    console.log(data);
    

        fetch(url, {
            method: 'POST',
            mode : 'cors',
            headers: {          
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
           
        })
        .then(res => {
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .then(data => console.log("response:", data))
        .catch(err => console.error('error :', err));
    };
