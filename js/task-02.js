const ingredients = [
	'Potatoes',
	'Mushrooms',
	'Garlic',
	'Tomatos',
	'Herbs',
	'Condiments',
];

const elementUl = document.querySelector("#ingredients")

ingredients.map(ingredient => {
	const elementLi = document.createElement("li");
	elementLi.classList.add("item")
	elementLi.textContent = ingredient;
	elementUl.append(elementLi);
})
