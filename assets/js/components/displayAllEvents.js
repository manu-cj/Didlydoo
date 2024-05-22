import { getAllDatas } from "./../api/getAllDatas.js";


const displayAllEvents = (datas) => {
    datas.forEach(data => {
        const eventsList = document.querySelector('#eventsList');
        const eventArticle = document.createElement('article');
        const controlArticle = document.createElement('div');
        const eventName = document.createElement('h2');
        const eventDescription = document.createElement('blockquote');
        
    
       
    

    
        controlArticle.innerHTML = `<i class="fas fa-pencil-alt"></i> <i class="fas fa-times"></i>`;
        eventName.textContent = data.name;
        eventDescription.textContent = data.description;

    
        eventArticle.appendChild(controlArticle);
        eventArticle.appendChild(eventName);
        eventArticle.appendChild(eventDescription);
        
    
        eventsList.appendChild(eventArticle);
    });
    


}

export {displayAllEvents};