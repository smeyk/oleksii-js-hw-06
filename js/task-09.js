const body = document.querySelector("body");
const colorValue = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

const changeBgColor = () => {
	body.style.backgroundColor = getRandomHexColor();
	colorValue.innerHTML = getRandomHexColor();
}

changeColorBtn.addEventListener("click", changeBgColor);