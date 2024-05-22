import { intro } from "./components/intro.js";
import eventListenner from "./components/eventlistenner.js";
import { switchDarkmode } from "./components/darkmode.js";
import { footerLinks } from "./components/footerLinks.js";
import {getAllEvents} from "./api/getAllDatas.js";

getAllEvents();

intro()

eventListenner();

switchDarkmode()

footerLinks()