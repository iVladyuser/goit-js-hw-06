const ingredients = [
	"Potatoes",
	"Mushrooms",
	"Garlic",
	"Tomatos",
	"Herbs",
	"Condiments",
];

const ul = document.querySelector(`ul`);

let ingredientsArray = [...ingredients];
ingredientsArray.forEach((ingred) => {
	const li = document.createElement(`li`);
	li.textContent = ingred;
	li.classList.add("item");
	ul.append(li);
});
