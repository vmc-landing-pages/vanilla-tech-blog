window.addEventListener('load', () => {
	initialize();
});

function initialize() {
	setContrastSettings();
}

function setContrastSettings() {
	const SWITCH_ACTIVE_CLASS = 'active';
	const switchButton = document.getElementById('contrast-switch');
	const switchComponent = switchButton.querySelector('.switch');

	switchButton.addEventListener('click', () => {
		if (!switchComponent.classList.contains(SWITCH_ACTIVE_CLASS))
			switchComponent.classList.add(SWITCH_ACTIVE_CLASS);
		else 
      switchComponent.classList.remove(SWITCH_ACTIVE_CLASS);
	});
}
