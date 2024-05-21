import addEventModal, { deleteEventModal } from './modal.js';



const eventListenner = () => {
    const addEventButton = document.getElementById('addEventButton');
    addEventButton.addEventListener('click', () => {
        addEventModal('Add event');
    })
}


export default eventListenner;
