import setTabHoverSettings from "./components/tabHover.js";
import { setContrastSettings } from './app.js';

function initUISettings() {
	setContrastSettings();
	setHeaderSettings();
}

function setHeaderSettings() {
	setTabHoverSettings();
}

export default initUISettings;
