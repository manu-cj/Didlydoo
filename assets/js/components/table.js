import { createDiv } from "./functions.js"

export function table(dates, parent, id) {

    const head = createDiv('thead', parent)
    
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

    const tableBody = createDiv('tbody', parent)

    const names = dates[0].attendees
    const checkboxes = []
    for (let i = 0; i < names.length; i++) {

        const tr = createDiv('tr', tableBody)
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
               checkboxEvent(checkbox,data,dates)
            } else {
                //unvailable
                const td = createDiv('td', tr);
                const checkboxContainer = createDiv('div',td,null,'checkboxContainer')
                const checkbox = createDiv('div',checkboxContainer,null,'checkbox')
                checkbox.setAttribute('checked','false')
                checkboxEvent(checkbox,data,dates)
            }
        } 
    }
}

function checkboxEvent(checkbox,data,dates) {
    checkbox.addEventListener('click', () => {
        const checked = checkbox.getAttribute('checked')
        data.available = checked == 'true' ? false : true
        checkbox.setAttribute('checked', data.available.toString())

        if(checked=='true') {
            checkbox.classList.remove('checked')
        } else {
            checkbox.classList.add('checked')
        }

        console.log(data.id)
        console.log(data.name)
        console.log(data.date)
        console.log(data.available)
        console.log(dates)
    })
}
