const ingredients = [
	'Potatoes',
	'Mushrooms',
	'Garlic',
	'Tomatos',
	'Herbs',
	'Condiments',
];

const elementUl = document.querySelector("#ingredients")

const viewingIngredients = ingredients.map(ingredient => {
	const elementLi = document.createElement("li");
	elementLi.classList.add("item")
	elementLi.textContent = ingredient;
	return elementLi;
})
elementUl.append(...viewingIngredients);

