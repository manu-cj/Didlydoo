

const addEventModal = () => {
    const main = document.querySelectorAll('main');
    const addEventButton = document.getElementById('addEventButton');

    const modalSection = document.createElement('section');
    const closeDiv = document.createElement('div');
    const form = document.createElement('form');

    const labelInputName = document.createElement('label');
    const inputEventName = document.createElement('input');

    const labelDescription = document.createElement('label');
    const textareaDescription = document.createElement('textarea');

    const labelDateStart = document.createElement('label');
    const inputDateStart = document.createElement('input');

    const labelDateEnd = document.createElement('label');
    const inputDateEnd = document.createElement('input');

    const inputSubmit = document.createElement('input');

    // Ajout des paramètres pour les éléments html
    modalSection.classList.add('modal-section');

    closeDiv.classList.add('close-div');
    closeDiv.innerHTML = '<i class="fas fa-times" style="color: #ff4000;"></i>';

    form.method = 'post';

    labelInputName.htmlFor = 'input-event-name';
    labelInputName.textContent = 'Event name :';
    inputEventName.id = 'input-event-name';
    inputEventName.type = 'text';
    inputEventName.placeholder = 'Add name';

    labelDescription.htmlFor = 'textarea-description';
    labelDescription.textContent = 'Event description :';
    textareaDescription.id = 'textarea-description';
    textareaDescription.placeholder = 'Add a description';

    labelDateStart.htmlFor = 'input-date-start';
    labelDateStart.textContent = 'Start :';
    inputDateStart.id = 'input-date-start';
    inputDateStart.type = 'date';

    labelDateEnd.htmlFor = 'input-date-end';
    labelDateEnd.textContent = 'End :';
    inputDateEnd.id = 'input-date-end';
    inputDateEnd.type = 'date';

    inputSubmit.id = 'input-submit';
    inputSubmit.type = 'submit';
    inputSubmit.value = 'Add';

    // Ajout des éléments au formulaire
    form.appendChild(labelInputName);
    form.appendChild(inputEventName);
    form.appendChild(labelDescription);
    form.appendChild(textareaDescription);
    form.appendChild(labelDateStart);
    form.appendChild(inputDateStart);
    form.appendChild(labelDateEnd);
    form.appendChild(inputDateEnd);
    form.appendChild(inputSubmit);

    // Ajout du formulaire à la section modale et la section modale au main
    modalSection.appendChild(closeDiv);
    modalSection.appendChild(form);
    main[0].appendChild(modalSection);

    // Fermeture de la modal
    const closeModal = document.querySelector('.fa-times');

    closeModal.addEventListener('click', () => {
        modalSection.remove()
    })

    window.addEventListener('click', (e) => {
        if (e.target === modalSection) {
            modalSection.remove()
        }
    })
};

function deleteEventModal() {
    // code pour supprimer le modal ici
}

export default addEventModal;
export { deleteEventModal };