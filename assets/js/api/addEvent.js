

export function sendForm(url = 'http://localhost:3000/api/events/f5b6564b5dc4', data = {"author": 'Lyne', "name": 'Mariage de Pepito', "description": 'Bah le mariage de Pepito. venez !'}) {
    const modalSection = document.querySelector('.modal'); 

    // addEventListener('submit', function(e) {
    //     e.preventDefault();
    //     closeModalFNC(modalSection);
        
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
        .then(data => console.log(data))
        .catch(err => console.error('error :', err));
    };





//   Ajout de l'event + fermeture de la modale 
//  function sendForm (url = 'http://localhost:3000/api/events', data = {author : 'Lyne', name : 'Mariage de Pepito', description : 'Bah le mariage de Pepito. venez !'}) {
//     form.addEventListener('submit', function(e) {
//         e.preventDefault();
//         closeModalFNC(modalSection);
//          // const data =  new FormData(form) ;
//         // const payload = new URLSearchParams(data);
//         fetch(url, {
//             method : 'POST',
//             body : JSON.stringify(data),
//             headers {          
//                 'accept' : 'application/json',
//                 'content-Type' : 'application/json'
//             })
//         .then(res => res.json())
//         .then(data => console.log(data))
//         .catch(err => console.log(err))
//     })
//     // fetch API method post 
//      // refresh 
