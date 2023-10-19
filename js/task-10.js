const input = document.querySelector("input[type='number']");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const divBox = document.querySelector("#boxes");


function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

const createBoxes = (amount) => {
	for (let i = 0; i < amount; i++) {
		let divElement = document.createElement("div");
		divElement.style.width = 30 + (10 * i) + "px";
		divElement.style.height = 30 + (10 * i) + "px";
		divElement.classList.add("inside")
		divElement.style.backgroundColor = getRandomHexColor();
		divBox.append(divElement);
	}
}

const checkEnteredValue = () => {
	const enteredNum = input.value;
	if (enteredNum > 0) {
		createBoxes(enteredNum);
	}
}

const destroyBoxes = () => {
	divBox.innerHTML = "";
	input.value = "";
}

createBtn.addEventListener("click", checkEnteredValue);
destroyBtn.addEventListener("click", destroyBoxes);