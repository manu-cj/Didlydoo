import addEventModal, { deleteEventModal } from "./modal.js";
import { table, updateAvailable } from "./table.js";
import { createDiv, stripTag } from "./functions.js"
import { AddAttendInEvent } from "../api/addAttendInEvent.js";


const displayAllEvents = (datas) => {
    datas.forEach(data => {
        const eventsList = document.querySelector('#eventsList');
        const eventArticle = document.createElement('article');
        const controlArticle = document.createElement('div');
        const eventName = document.createElement('h2');
        const seeMore = document.createElement('cite');
        const otherDatasDiv = document.createElement('div');
        const eventDescription = document.createElement('blockquote');
        const eventAuthor = document.createElement('cite');
        const eventDateDiv = document.createElement('table');
        
        table(data.dates,eventDateDiv,data.id, null);
    
        
        

        controlArticle.classList.add('controlArticle');
        eventName.classList.add('eventName');
        seeMore.classList.add('seeMore');
        otherDatasDiv.classList.add('otherDataDiv');
        eventDescription.classList.add('eventDdescription');
        eventAuthor.classList.add('eventAuthor');

        seeMore.style.fontWeight = '500';
        
        eventDateDiv.classList.add('eventDateDiv');
    
        controlArticle.innerHTML = `<i class="fas fa-pencil-alt"></i> <i class="fas fa-times"></i>`;
        eventName.textContent = data.name;
        seeMore.innerHTML = `See more <i class="fas fa-caret-down"></i>`;
        eventDescription.textContent = data.description;
        eventAuthor.textContent = 'author: '+data.author;
    
        eventArticle.appendChild(controlArticle);
        eventArticle.appendChild(eventName);
        eventArticle.appendChild(seeMore);
        eventArticle.appendChild(otherDatasDiv);
        
        otherDatasDiv.appendChild(eventDescription);
        otherDatasDiv.appendChild(eventAuthor);
        otherDatasDiv.appendChild(eventDateDiv);
    
        eventsList.appendChild(eventArticle);

        //ajout participant
        const participantContainer = createDiv('div',otherDatasDiv,null,'participantContainer')
        const participantInput = createDiv('input',participantContainer,null,'participantInput')
        participantInput.placeholder = 'Enter your name'
        const participantAdd = createDiv('div',participantContainer,null,'participantAdd')
        createDiv('p',participantAdd,'+')
        updateAvailable(data.id, data.dates);

        participantAdd.addEventListener('click', () => {
            const nameInput = participantInput.value
            
            let datas = {
                "name": stripTag(nameInput),
                "dates": [

                ]
            }
            data.dates.forEach(date => {
                datas.dates.push({
                    "date": stripTag(date.date),
                    "available": false
                })
            });
            AddAttendInEvent(data.id, datas)
           
        })

        participantInput.addEventListener('keyup', (event) => {
            if(event.key=='Enter') {
                const nameInput = participantInput.value
                
                
            let datas = {
                "name": stripTag(nameInput),
                "dates": [

                ]
            }
            data.dates.forEach(date => {
                datas.dates.push({
                    "date": stripTag(date.date),
                    "available": false
                })
            });
            AddAttendInEvent(data.id, datas)
            }
        })
    });

    const updateBtn = document.querySelectorAll('.fa-pencil-alt'); 
    const deleteBtn = document.querySelectorAll('.fa-times');

    for (let i = 0; i < datas.length; i++) {
        const seeMoreElements = document.querySelectorAll('.seeMore');
        const otherDataDivs = document.querySelectorAll('.otherDataDiv');

        seeMoreElements[i].addEventListener('click', () => {
            const isSeeMore = seeMoreElements[i].classList.contains('seeMore');
            if (isSeeMore) {
                seeMoreElements[i].innerHTML = `see Less <i class="fas fa-caret-up"></i>`;
                seeMoreElements[i].classList.remove('seeMore');
                seeMoreElements[i].classList.add('seeLess');
                otherDataDivs[i].style.display = 'block';
            } else {
                seeMoreElements[i].innerHTML = `See more <i class="fas fa-caret-down"></i>`;
                seeMoreElements[i].classList.remove('seeLess');
                seeMoreElements[i].classList.add('seeMore');
                otherDataDivs[i].style.display = 'none';
            }
        });
        
        const data = datas[i];
        
        updateBtn[i].addEventListener('click', () => {
            addEventModal('update', data);
        })

        deleteBtn[i].addEventListener('click', () => {
            deleteEventModal(data)
        })
    }
    
}

export {displayAllEvents};