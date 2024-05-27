export function toastNotifications(etat) {

    switch (etat) {
        case "update":
            localStorage.setItem('toast', "update");
            break;
        case "add-event":
            localStorage.setItem('toast', "add-event");
            break;
        case "add-available":
            localStorage.setItem('toast', "add-available");
            break;
        case "delete":
            localStorage.setItem('toast', "delete");
            break;

    }
}

export function checkNotifs() {
    let toastBox= document.getElementById('toastBox');
    let successNotification = "You successfully added !";
    let deleteNotification = "Event deleted";
    let changeNotification = "Your modifications have been saved" ;
    let AvailableNotification = "Your availability to this event has been saved !";
    let valueStored = localStorage.getItem('toast');

    switch (valueStored) {
        case "update":
            notif(valueStored, changeNotification, toastBox);
            break;
        case "add-event":
            notif(valueStored, successNotification, toastBox);
            break;
        case "delete":
            notif(valueStored, deleteNotification, toastBox);
            break;
        case "add-available":
            notif(valueStored, AvailableNotification, toastBox);
            break;
        default:
            break;
    }
   
}

function notif(etat, text, parent) {
    setTimeout(() => {
        if (localStorage.getItem('toast') === etat) {
    
            parent.classList.add(etat);
            const svgCheckmark = `<p>${text} <i class="fas fa-check-circle"></i></p>` ;
            parent.innerHTML += svgCheckmark ;
            // Perform any action you want to take if 'toast' is present
        } else {
            console.log('Toast key is not present or has a different value.');
        }
    },2000)
    setTimeout(() => {
        localStorage.setItem('toast', "null");
        parent.style.animationName = "delete-toast";
        parent.classList.remove(etat);
        parent.innerHTML = "";

    },8000)
}