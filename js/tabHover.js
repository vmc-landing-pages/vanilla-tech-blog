import { throttleEndWithCancel } from './utils/throttle.js';

const THROTTLE_DELAY = 500; // in miliseconds.

export function setTabHoverSettings() {
	const tabContainerIds = [
		'blogs-tab',
		'newsletters-tab',
		'videos-tab',
		'podcasts-tab',
		'resources-tab',
		'hubspot-tab'
	];

	tabContainerIds.forEach(containerId => {
		const container = document.getElementById(containerId);

		const throttledShow = throttleEndWithCancel(showTab, THROTTLE_DELAY);
		const throttledHide = throttleEndWithCancel(hideTab, THROTTLE_DELAY);

		container.addEventListener('mouseenter', function () {
			throttledHide.cancel();
			throttledShow.throttled.apply(this); //Sending the html element as context.
		});
		container.addEventListener('mouseleave', function () {
			throttledShow.cancel();
			throttledHide.throttled.apply(this); //Sending the html element as context.
		});
	});
}

function showTab() {
	setDisplayTab(this, true);
}

function hideTab() {
	setDisplayTab(this, false);
}

function setDisplayTab(element, show) {
	const tabContent = element.querySelector('.tab-hover__container');
	tabContent.style.display = show ? 'block' : 'none';
}
