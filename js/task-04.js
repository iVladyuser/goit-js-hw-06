const decrementBtn = document.querySelector('[data-action="decrement"]');
const span = document.querySelector("#value");
const incrementBtn = document.querySelector('[data-action="increment"]');

incrementBtn.addEventListener("click", plusClick);
decrementBtn.addEventListener("click", minusClick);

let counterValue = 0;

function minusClick() {
	counterValue -= 1;
	span.textContent = counterValue;
}

function plusClick() {
	counterValue += 1;
	span.textContent = counterValue;
}
