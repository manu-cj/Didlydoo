

export function sendForm(form, dates) {
    let url = 'http://localhost:3000/api/events/'
    const allDates = document.querySelectorAll('.input-date')
    const formData = new FormData(form);
    const payload = {
        author: formData.get('author'),
        name: formData.get('name'),
        description : formData.get('description'),
        dates: dates
    };

    console.log("Payload:", payload) ;

        fetch(url, {
            method: 'POST',
            mode : 'cors',
            headers: {          
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
           
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


    
