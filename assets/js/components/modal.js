

const addEventModal = (inputValue) => {
    const main = document.querySelectorAll('body');
    const addEventButton = document.getElementById('addEventButton');

    const modalSection = document.createElement('section');
    const modalDiv = document.createElement('div');
    const closeDiv = document.createElement('div');
    const form = document.createElement('form');

    const labelInputName = document.createElement('label');
    const inputEventName = document.createElement('input');

    const labelDescription = document.createElement('label');
    const textareaDescription = document.createElement('textarea');

    const dateFormDiv = document.createElement('div');
    const startDiv = document.createElement('div');
    const endDiv = document.createElement('div');

    const labelDateStart = document.createElement('label');
    const inputDateStart = document.createElement('input');

    const labelDateEnd = document.createElement('label');
    const inputDateEnd = document.createElement('input');

    const inputSubmit = document.createElement('input');

    // Desactivation du bouton
    

    // Ajout des paramètres pour les éléments html
    modalSection.classList.add('modal-section');

    modalDiv.classList.add('modal-div');

    closeDiv.classList.add('close-div');
    closeDiv.innerHTML = '<i class="fas fa-times"></i>';

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
    textareaDescription.cols = '35';
    textareaDescription.rows = '5';

    dateFormDiv.classList.add('date-form-div');
    startDiv.classList.add('start-date');
    endDiv.classList.add('end-date');

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
    inputSubmit.value = inputValue;

    // Ajout des éléments au formulaire
    form.appendChild(labelInputName);
    form.appendChild(inputEventName);
    form.appendChild(labelDescription);
    form.appendChild(textareaDescription);
    startDiv.appendChild(labelDateStart);
    startDiv.appendChild(inputDateStart);
    endDiv.appendChild(labelDateEnd);
    endDiv.appendChild(inputDateEnd);
    dateFormDiv.appendChild(startDiv);
    dateFormDiv.appendChild(endDiv);
    form.appendChild(dateFormDiv);
    form.appendChild(inputSubmit);

    // Ajout du formulaire à la section modale et la section modale au main
    modalDiv.appendChild(closeDiv);
    modalDiv.appendChild(form);
    modalSection.appendChild(modalDiv);
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