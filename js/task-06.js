const input = document.querySelector("#validation-input");
const inputDataValue = Number(input.dataset.length);

const checkEnteredCharacters = (event) => {
	const curentValueLength = event.currentTarget.value.length;
	if (curentValueLength === inputDataValue) {
		input.classList.add('valid');
		input.classList.remove('invalid');
	} else if (curentValueLength !== inputDataValue && curentValueLength !== 0) {
		input.classList.remove('valid');
		input.classList.add('invalid');
	} else if (curentValueLength === 0) {
		input.classList.remove('invalid');
	}
}

input.addEventListener("blur", checkEnteredCharacters);


