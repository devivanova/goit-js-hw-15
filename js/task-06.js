const input = document.querySelector("#validation-input");

const handleInput = (evt) => {
	const inputStr = evt.currentTarget.value;
    const dataValue = input.dataset.length;
    if (inputStr.length === 0) {
		return (input.classList = "");
	}
	if (inputStr.length === Number(dataValue)) {
		return (input.classList = "valid");
	}
	return (input.classList = "invalid");
};

input.addEventListener("blur", handleInput);