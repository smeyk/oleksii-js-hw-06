const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

const changeFontSize = (event) => {
	input.value = event.currentTarget.value;
	text.style.fontSize = input.value + "px";
}

input.addEventListener("change", changeFontSize);