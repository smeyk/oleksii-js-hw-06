const inputText = document.querySelector("#name-input");
const outputText = document.querySelector("#name-output");

const enterText = (event) => {
	outputText.textContent = event.currentTarget.value || 'Anonymous';
}

inputText.addEventListener("input", enterText);