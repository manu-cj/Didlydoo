import { intro } from "./components/intro.js";
import eventListenner from "./components/eventlistenner.js";
import { switchDarkmode } from "./components/darkmode.js";
import { footerLinks } from "./components/footerLinks.js";
import { displayAllEvents } from "./components/displayAllEvents.js";
import { getAllDatas } from "./api/getAllDatas.js";

getAllDatas('events');

intro()

eventListenner();

switchDarkmode()

footerLinks()