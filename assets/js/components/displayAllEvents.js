import addEventModal, { deleteEventModal } from "./modal.js";
import { createDiv } from "./functions.js";

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

        table(data.dates,eventDateDiv)
    
        // data.dates.forEach(dataDate => {
        //     const eventDate = document.createElement('h5');
    
        //     eventDate.classList.add('eventDate');
    
        //     eventDate.textContent = dataDate.date;
    
        //     eventDateDiv.appendChild(eventDate)

        //     attendeesFNC(data,dataDate.date,)

        //     for(let i=0; i<names.length; i++) {
        //         createDiv('p',eventDateDiv,names[i])
        //     }
        // });
        
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
                seeMoreElements[i].classList.add('SeeLess');
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

function table(dates,parent) {
    console.log(dates)

    //create table
    const head = createDiv('thead',parent)
    
    const datesArray=[]
    dates.forEach(element => {
        datesArray.push(element.date)
    });

    const thRow = createDiv('tr',head)

    createDiv('th',thRow)

    datesArray.forEach(date => {
        const newDate = new Date(date)
        const options = { day: 'numeric', month: 'long' };
        const formattedDate = newDate.toLocaleDateString('en-US', options);
        createDiv('th',thRow,formattedDate)
    });

    const tableBody = createDiv('tbody',parent)

    const names = dates[0].attendees
    let tr;
    for(let i=0; i<names.length; i++) {
        tr = createDiv('tr',tableBody,names[i].name)

        for(let j=0; j<datesArray.length; j++) {
            for(let k=0; k<dates[j].attendees.length; k++) {
                if(dates[j].attendees[k].name == names[i].name && dates[j].attendees[k].available==true) {
                    createDiv('td',tr,'V')
                } else {
                    createDiv('td',tr,'X')
                }
            }
        }
    }
}

export {displayAllEvents};