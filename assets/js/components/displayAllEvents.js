import { getAllDatas } from "../api/getAllDatas";


const displayAllEvents = () => {
    getAllDatas('events');
}

export {displayAllEvents};