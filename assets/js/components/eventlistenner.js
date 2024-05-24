import addEventModal, { deleteEventModal } from './modal.js';


const eventListenner = () => {
    const addEventBtn = document.getElementById('addEventButton');
    addEventBtn.addEventListener('click', () => {
        addEventModal('Add');
    })
}

const updateEvent = (id) => {
    const updateBtn = document.querySelectorAll('.fa-pencil-alt'); 
    for (let i = 0; i < updateBtn.length; i++) {
        const btn = updateBtn[i];
        updateBtn[i].addEventListener('click', () => {
            
        })   
    }
}


export default eventListenner;
export {updateEvent}
