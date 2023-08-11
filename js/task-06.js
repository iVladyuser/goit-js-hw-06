const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", onInputBlur);

function forClass(el, a, b) {
	el.classList.add(a);
	el.classList.remove(b);
}

function onInputBlur(event) {
	if (event.currentTarget.value.length === Number(validationInput.dataset.length)) {
		forClass(validationInput, "valid", "invalid");
	} else {
		forClass(validationInput, "invalid", "valid");
	}
}



