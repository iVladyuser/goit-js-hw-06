const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", onInputChange);

function onInputChange(event) {
	if (input.value.trim() !== "") {
		output.textContent = event.currentTarget.value;
	} else {
		output.textContent = "Anonymous";
	}
}
