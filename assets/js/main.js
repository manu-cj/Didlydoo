import { intro } from "./components/intro.js";
import eventListenner from "./components/eventlistenner.js";
import { switchDarkmode } from "./components/darkmode.js";
import { footerLinks } from "./components/footerLinks.js";
import { cats } from "./components/cats.js";
import { displayAllEvents } from "./components/displayAllEvents.js";
import { getAllDatas } from "./api/getAllDatas.js";
import addEventModal, { deleteEventModal } from "./components/modal.js";

getAllDatas('events');

intro()

eventListenner()

switchDarkmode()

footerLinks()

cats()