
//------------------------------------------------------------------------------------------
// SLEEP FUNCTION
// wait a minute! We need to sleep! 
// use: await sleep(time in ms)
// async function needed

export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//------------------------------------------------------------------------------------------
// CREATE DIV
// create a container of your choice, with optionnal content and classe(s)
// Return the created div
// use: const div = createDiv('type of div',the parent,'content','classname')
// you can use null value to avoid content and class
// ex: const div = createDiv('p',parent,null,null)

export function createDiv(type,parent,content,className,setValue,setSrc) {
    const newDiv=document.createElement(type);
    if (content!=null) {
      newDiv.innerHTML=content;
    }
    if (className!=null) {
      newDiv.classList.add(className);
    }
    if (setValue!=null) {
      newDiv.value=setValue
    }
    if (setSrc!=null) {
      newDiv.value=setSrc
    }
    parent.appendChild(newDiv);
    return newDiv;
}

export function blurEverything() {
  document.querySelector('header').classList.add('blur')
  document.querySelector('main').classList.add('blur')
  document.querySelector('footer').classList.add('blur')
}

export function closeModalFNC(container) {
  document.querySelector('header').classList.remove('blur')
  document.querySelector('main').classList.remove('blur')
  document.querySelector('footer').classList.remove('blur')
  container.remove()
}


// Sécurité des forms
export function sanityzeForm(namedata, description, author, sumitBtn) {

  namedata.addEventListener('keyup', () => {
    console.log(namedata.value.length);
    if (namedata.value.length < 3 || namedata.value.length > 39) {
      namedata.setCustomValidity('The name must contain at least 3 and 40 characters');
      namedata.style.outlineColor = 'red';
    } else {
      namedata.setCustomValidity('');
      namedata.style.outlineColor = 'green';
    }
    namedata.reportValidity();
    
  });
  description.addEventListener('keyup', () => {
    if (description.value.length < 3 || description.value.length > 255) {
      description.setCustomValidity('The description must contain at least 3 and 256 characters');
      description.style.outlineColor = 'red';
    }
    else{
      description.setCustomValidity('');
      description.style.outlineColor = 'green';
    }
    description.reportValidity();
  });

 author.addEventListener('keyup', () => {
    if (author.value.length < 3 ||author.value.length > 39) {
     author.setCustomValidity('The author must contain at least 3 and 40 characters');
      author.style.outlineColor = 'red';
    }
    else{
     author.setCustomValidity('');
     author.style.outlineColor = 'green';
    }
    author.reportValidity();
  });

  if (namedata.value === "") {
    namedata.setCustomValidity('The name must contain at least 3 and 40 characters');
    namedata.style.outlineColor = 'red';
  }else {
    namedata.setCustomValidity('');
    namedata.style.outlineColor = 'green';
  }

  if (description.value === "") {
    description.setCustomValidity('The description must contain at least 3 and 256 characters');
    description.style.outlineColor = 'red';
  }
  else{
    description.setCustomValidity('');
    description.style.outlineColor = 'green';
  }

  if (author.value === "") {
    author.setCustomValidity('The author must contain at least 3 and 40 characters');
    author.style.outlineColor = 'red';
   }
   else{
    author.setCustomValidity('');
    author.style.outlineColor = 'green';
   }
  
   sumitBtn.addEventListener('click', () => {
    namedata.reportValidity();
    description.reportValidity();
    author.reportValidity();
   })

  
}

export function compareDates(dateInputs) {
  // Obtenez la date actuelle au format 'YYYY-MM-DD'
  const currentDate = new Date().toISOString().split('T')[0];
  // Définissez la date minimale pour chaque champ de date
  dateInputs.forEach(dateInput => {
    dateInput.min = currentDate;
  });



  // Fonction pour vérifier les doublons
 

  // Ajoutez un écouteur d'événement "change" à chaque champ de date
  
}





export function stripTag(input) {
  // Remplace les balises ouvertes et fermées par du texte vide
  const sanitizedInput = input.replace(/<[^>]*>/g, '');

  // Supprime les événements JavaScript tels que onclick, onmouseover, etc.
  const sanitizedInputWithoutEvents = sanitizedInput.replace(/on\w+="[^"]*"/g, '');

  return sanitizedInputWithoutEvents;
}

    
    

