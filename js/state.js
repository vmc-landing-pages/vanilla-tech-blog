import Observable from './observable.js';

/*
  THIS IS THE STATE OF THE APPLICATION
*/

class ApplicationState {
	#contrast = new Observable(false);

	get contrast() {
		return this.#contrast;
	}

	set contrast(newValue) {
		this.#contrast.value = newValue;
	}
}

const appState = new ApplicationState();

export default appState;
