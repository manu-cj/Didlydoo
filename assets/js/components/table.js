import { createDiv } from "./functions.js"

export function table(dates, parent) {

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
            if (attendee && attendee.available === true) {
                //available
               const td = createDiv('td', tr);
               const checkbox = createDiv('input',td,null,['checkAvailability','available'])
            } else {
                //unvailable
                const td = createDiv('td', tr);
                const checkbox = createDiv('input',td,null,['checkAvailability','unvailable'])
            }
        } 
    }
}



// export function table(dates,parent) {
//     console.log(dates)

//     //create table
//     const head = createDiv('thead',parent)
    
//     const datesArray=[]
//     dates.forEach(element => {
//         datesArray.push(element.date)
//     });

//     const thRow = createDiv('tr',head)

//     createDiv('th',thRow)

//     datesArray.forEach(date => {
//         const newDate = new Date(date)
//         const options = { day: 'numeric', month: 'long' };
//         const formattedDate = newDate.toLocaleDateString('en-US', options);
//         createDiv('th',thRow,formattedDate)
//     });

//     const tableBody = createDiv('tbody',parent)

//     const names = dates[0].attendees
//     let tr;
//     for(let i=0; i<names.length; i++) {
//         tr = createDiv('tr',tableBody,names[i].name)

//         for(let j=0; j<datesArray.length; j++) {
//             for(let k=0; k<dates[j].attendees.length; k++) {
//                 if(dates[j].attendees[k].name == names[i].name && dates[j].attendees[k].available==true) {
//                     createDiv('td',tr,'V')
//                 } else {
//                     createDiv('td',tr,'X')
//                 }
//             }
//         }
//     }
// }