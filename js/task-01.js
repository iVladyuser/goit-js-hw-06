const categoriesNode = document.querySelector(`#categories`);

const categories = categoriesNode.children;

console.log(`Number of categories: ${categories.length}`);

let categoriesArray = [];
categoriesArray = [...categories];

categoriesArray.forEach((category) => {
	console.log(`Category: ${category.firstElementChild.textContent}`);
	console.log(`Elements: ${category.lastElementChild.children.length}`);
});
