const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
text.style.fontSize = `${input.value}px`;

const changeFontSize = (event) => {
	input.value = event.currentTarget.value;
	text.style.fontSize = `${input.value}px`
}


input.addEventListener("input", changeFontSize);