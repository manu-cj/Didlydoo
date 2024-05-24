let toastBox= document.getElementById('toastBox');
let successNotification = "You successfully added an event !";
let deleteNotification = "Event deleted";
let changeNotification = "Your modifications have been saved" ;
let AvailableNotification = "Your availability to this event has been saved !";


function showToast(msg) {
    let toast = document.createElement('div');
    toast.classList.add('toast')
    toast.innerHTML = msg ;
    toastBox.appendChild(toast);
    switch (msg) {
        case 1:
            msg === successNotification || msg === changeNotification || msg === AvailableNotification;
            const svgCheckmark = '<svg id="Icons" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:#232323;}</style></defs><path class="cls-1" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm5.707,8.707-7,7a1,1,0,0,1-1.414,0l-3-3a1,1,0,0,1,1.414-1.414L10,14.586l6.293-6.293a1,1,0,0,1,1.414,1.414Z"/></svg>' ;
            toast.innerHTML = svgCheckmark ;
        case 2: 
            msg === deleteNotification ;
            let svgDelete = '<svg height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M12 38c0 2.21 1.79 4 4 4h16c2.21 0 4-1.79 4-4v-24h-24v24zm26-30h-7l-2-2h-10l-2 2h-7v4h28v-4z"/><path d="M0 0h48v48h-48z" fill="none"/></svg>' ;
            toast.innerHTML = svgDelete ;

    }

}

const addButton = document.getElementById('input-submit') ;
addButton.addEventListener("click",showToast(successNotification)) ;


