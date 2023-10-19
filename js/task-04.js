let counterValue = 0;
const minusBtn = document.querySelector('button[data-action = "decrement"]')
const plusBtn = document.querySelector('button[data-action = "increment"]')
const value = document.querySelector("#value")

const increaseNumberClick = () => {
	counterValue++;
	value.innerHTML = counterValue;
}

const decreaseNumberClick = () => {
	counterValue--;
	value.innerHTML = counterValue;
}

plusBtn.addEventListener("click", increaseNumberClick);
minusBtn.addEventListener("click", decreaseNumberClick);