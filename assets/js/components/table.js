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
        createDiv('td', tr, names[i].name)

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
               const checkbox = createDiv('input',td,null,['checkAvailability','available'])
               checkbox.type = 'checkbox'
               checkbox.checked = true
               data.available = true
               //`{ name: string, dates : [ { date: date 'YYYY-MM-DD', available: boolean (true/false) } ] }`
               checkboxEvent(checkbox,data)
            } else {
                //unvailable
                const td = createDiv('td', tr);
                const checkbox = createDiv('input',td,null,['checkAvailability','unvailable'])
                checkbox.type = 'checkbox'
                checkbox.checked = false
                checkboxEvent(checkbox,data)
            }
        } 
    }
}

function checkboxEvent(checkbox,data) {
    checkbox.addEventListener('change', () => {
        data.available = checkbox.checked
        console.log(data.id)
        console.log(data.name)
        console.log(data.date)
        console.log(data.available)
    })
}
