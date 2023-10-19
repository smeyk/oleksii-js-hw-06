const inputText = document.querySelector("#name-input");
const outputText = document.querySelector("#name-output");

const enterText = (event) => {
	outputText.textContent = event.currentTarget.value;
	if (outputText.textContent === "") {
		outputText.textContent = 'Anonymous';
	}
}

inputText.addEventListener("input", enterText);