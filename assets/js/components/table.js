import updateAttend from "../api/updateAttend.js";
import { createDiv } from "./functions.js"

export function table(dates, parent, id) {
    const table = createDiv('table',parent)

    const head = createDiv('thead', table)
    
    const datesArray = [];
    dates.forEach(element => {
        datesArray.push(element.date)
    })

    const thRow = createDiv('tr', head)
    createDiv('th', thRow)

    datesArray.forEach(date => {
        const newDate = new Date(date)
        const options = { day: 'numeric', month: 'long' }
        const formattedDate = newDate.toLocaleDateString('en-US', options)
        createDiv('th', thRow, formattedDate)
    });

    const tableBody = createDiv('tbody', table)

    const names = dates[0].attendees
    const checkboxes = []
    for (let i = 0; i < names.length; i++) {

        const tr = createDiv('tr', tableBody, '', 'tr-checked');
        createDiv('td', tr, names[i].name,'nameTable')
        
        
        

        for (let j = 0; j < datesArray.length; j++) {

            const attendee = dates[j].attendees.find(att => att.name === names[i].name)
            const data = {id: id,
                name:names[i].name,
                date:datesArray[j],
                available:false
            }

            if (attendee && attendee.available === true) {
                //available
               const td = createDiv('td', tr);
               const checkboxContainer = createDiv('div',td,null,'checkboxContainer')
               const checkbox = createDiv('div',checkboxContainer,null,'checkbox')
               checkbox.setAttribute('checked','true')
               checkbox.classList.add('checked')
               data.available = true
               checkboxEvent(dates,checkbox,data, j)
            } else {
                //unvailable
                const td = createDiv('td', tr);
                const checkboxContainer = createDiv('div',td,null,'checkboxContainer')
                const checkbox = createDiv('div',checkboxContainer,null,'checkbox')
                checkbox.setAttribute('checked','false')
                checkboxEvent(dates, checkbox,data, j)
            }
        } 
        createDiv('button', tr, 'update','change-available');
    }
}

 export function updateAvailable(id, dates) {
    const trChecked = document.querySelectorAll('.tr-checked');

    for (let i = 0; i < trChecked.length; i++) {
        const tr = trChecked[i];
        let btnAvailable = document.querySelectorAll('.change-available');
        btnAvailable[i].addEventListener('click', () => {
            const allChecked = tr.querySelectorAll('.checkbox');
            let nameData = tr.querySelector('.nameTable');
            let datas = {
                "name": nameData.textContent,
                "dates" : []
            };
            for (let j = 0; j < allChecked.length; j++) {
                const checkbox = allChecked[j];
                let bool = false;
                if (checkbox.getAttribute('checked') === 'true') {
                    bool = true;
                }
                datas.dates.push({"date": dates[j].date,"available": bool});
                
            }
            console.log(id);
            console.log(datas);
            updateAttend(id,datas);
        })
        
    }
}

function checkboxEvent( dates,checkbox,data, index) {
    checkbox.addEventListener('click', () => {
        const checked = checkbox.getAttribute('checked')
        data.available = checked == 'true' ? false : true
        checkbox.setAttribute('checked', data.available.toString())
        if(checked=='true') {
            checkbox.classList.remove('checked')
        } else {
            checkbox.classList.add('checked')
        }
        let arrayDates = []
        for (let i = 0; i < dates.length; i++) {
            let date = dates[i];
            dates[i].attendees.forEach( attendee => {
                if (attendee.available === null) {
                    attendee.available = false;
                }
                let dataDate =
                {
                    "name": attendee.name,
                    "dates": [{
                        "date" : date.date,
                    "available" : attendee.available
                    }]
                }
                arrayDates.push(dataDate);
            })
        }
        let arrayByName = [];
        arrayDates.forEach(dataByName => {
            if (dataByName.name === data.name) {
                arrayByName.push(dataByName.dates);
            }
        })
        let flatArray = arrayByName.flat()
        flatArray[index].available = data.available;
        //updateAttend(data.id,data.name, flatArray)
       
    })
}
