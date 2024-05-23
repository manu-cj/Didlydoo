 // Ajout de l'event + fermeture de la modale 
 function sendForm (url = 'http://localhost:3000/api/events', data = {author : 'Lyne', name : 'Mariage de Pepito', description : 'Bah le mariage de Pepito. venez !', method : 'POST' }) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        modalSection.remove() ;
        // const data =  new FormData(form) ;
        // const payload = new URLSearchParams(data);
        fetch(url, data)

        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err)) ;
        
    // fetch API method post 
    // refresh 


    })}