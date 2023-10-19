const body = document.querySelector("body");
const colorValue = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}


const changeBgColor = () => {
	let newColor = getRandomHexColor()
	body.style.backgroundColor = newColor;
	colorValue.innerHTML = newColor;
}

changeColorBtn.addEventListener("click", changeBgColor);