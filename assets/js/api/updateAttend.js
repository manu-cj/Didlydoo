import { toastNotifications } from "../components/toast_notifications.js";


const updateAttend = (id, data) => {
    const url = `http://localhost:3000/api/events/${id}/attend`;
  console.log(id);
  console.log(data.name);
  console.log(data.dates[0].date);
  let datas = {
    "name": data.name,
    "dates": []
  }
  data.dates.forEach(dateData => {
    datas.dates.push({"date": dateData.date, "available": dateData.available});
  });
    
  
    fetch(url, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Network response was not ok: " + response.statusText);
        }
      })
      .then((dataas) => {
        toastNotifications("add-available");
        console.log(dataas);
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  };
  
  export default updateAttend;
  