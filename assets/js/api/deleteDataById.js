import { toastNotifications } from "../components/toast_notifications.js";

export async function deleteDataById(data) {
    const url = `http://localhost:3000/api/events/${data.id}`;

    try {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            toastNotifications("delete");
            const result = await response.json();
        } else {
            throw new Error('Network response was not ok: ' + response.statusText);
        }
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}
