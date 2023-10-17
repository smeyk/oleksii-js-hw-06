const itemsLi = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemsLi.length}`);
itemsLi.forEach(itemLi => {
	const title = itemLi.querySelector("h2")
	console.log(`Category: ${title.textContent}`);
	const childrenLi = itemLi.querySelectorAll("li");
	console.log(`Elements: ${childrenLi.length}`);
})
