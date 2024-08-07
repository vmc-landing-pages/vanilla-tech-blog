import appState from "./state.js";

export function setContrastSettings() {
	const SWITCH_ACTIVE_CLASS = 'active';
	const switchButton = document.getElementById('contrast-switch');
	const switchComponent = switchButton.querySelector('.switch');

	appState.contrast.addObservers([changeAppContrast]);

	switchButton.addEventListener('click', () => {
		if (!switchComponent.classList.contains(SWITCH_ACTIVE_CLASS)) {
			switchComponent.classList.add(SWITCH_ACTIVE_CLASS);
			appState.contrast = true;
		} else {
			switchComponent.classList.remove(SWITCH_ACTIVE_CLASS);
			appState.contrast = false;
		}
	});
}

function changeAppContrast(_, contrast) {
	const CONTRAST_CLASS = 'contrast';

	contrast
		? document.body.classList.add(CONTRAST_CLASS)
		: document.body.classList.remove(CONTRAST_CLASS);
}