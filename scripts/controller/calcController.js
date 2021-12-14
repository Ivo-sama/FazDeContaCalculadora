class CalcController {

	constructor() {

		this._display = "0";

		this.initialize();
	}

	initialize() {
		let displayEl = document.querySelector("#display");
		displayEl.innerHTML = "0";
	}
}