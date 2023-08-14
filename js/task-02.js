const ingredients = [
	"Potatoes",
	"Mushrooms",
	"Garlic",
	"Tomatos",
	"Herbs",
	"Condiments",
];

const ul = document.querySelector("#ingredients");
const ingredientsArray = [];

ingredients.forEach((item) => {
	let li = document.createElement(`li`);
	li.textContent = item;
	li.classList.add("item");
	ingredientsArray.push(li);
});

ul.append(...li);
