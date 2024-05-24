datas.forEach(data => {
    const eventsList = document.querySelector('#eventsList');
    const eventArticle = document.createElement('article');
    const controlArticle = document.createElement('div');
    const eventName = document.createElement('h2');
    const eventDescription = document.createElement('blockquote');
    const eventAuthor = document.createElement('cite');
    const eventDateDiv = document.createElement('div');

    data.dates.forEach(dataDate => {
        const eventDate = document.createElement('h5');

        eventDate.classList.add('eventDate');

        eventDate.textContent = dataDate.date;

        eventDateDiv.appendChild(eventDate)
        
    });


    eventDateDiv.classList.add('eventDateDiv');

    controlArticle.innerHTML = `<i class="fas fa-pencil-alt"></i> <i class="fas fa-times"></i>`;
    eventName.textContent = data.name;
    eventDescription.textContent = data.description;
    eventAuthor.textContent = data.author;

    eventArticle.appendChild(controlArticle);
    eventArticle.appendChild(eventName);
    eventArticle.appendChild(eventDescription);
    eventArticle.appendChild(eventAuthor);
    eventArticle.appendChild(eventDateDiv);

    eventsList.appendChild(eventArticle);
});