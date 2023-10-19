const submitBtn = document.querySelector("button[type='submit']")
const form = document.querySelector(".login-form")



const sentForm = (event) => {
	event.preventDefault();
	const emailInputValue = form.elements.email.value;
	const passwordInputValue = form.elements.password.value;

	const userData = {};
	userData.email = emailInputValue;
	userData.password = passwordInputValue;

	if (emailInputValue === "" || passwordInputValue === "") {
		alert("All fields must be filled!")
	} else {
		console.log(userData);
	}
	form.reset();
}

submitBtn.addEventListener("click", sentForm);