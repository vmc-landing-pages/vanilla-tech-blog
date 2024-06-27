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

    container.addEventListener('mouseenter', function () {
      setDisplayTab(this, true);
    });
    container.addEventListener('mouseleave', function () {
      setDisplayTab(this, false);
    });
  });
}

function setDisplayTab(element, show) {
	const tabContent = element.querySelector('.tab-hover__container');
	tabContent.style.display = show ? 'block' : 'none';
}
