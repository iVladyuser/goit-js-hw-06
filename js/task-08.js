const form = document.querySelector(".login-form");
const data = {
	email: "",
	password: "",
};

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
	event.preventDefault();

	const { email, password } = event.currentTarget.elements;

	if (!email.value.trim() || !password.value.trim()) {
		alert("Будь ласка, заповніть поля форми!");
	} else {
		data.email = email.value;
		(data.password = password.value), console.log(data);
		event.currentTarget.reset();
	}

	// 	for backEnd

	// 	const formData = new FormData(event.currentTarget);

	// 	formData.forEach((value, name) => {
	// 		console.log("onFormSubmit -> name", name);
	// 		console.log("onFormSubmit -> value", value);
	// 	});
}
