function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");
const container = document.querySelector("#boxes");
const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");

const createBoxes = (amount) => {
  
	let boxes = [];
  let boxSize = 30;
  
  for (let i = 0; i < amount; i++) {
		if (i > 0) {
			boxSize += 10;
		}
		let box = document.createElement("div");
		box.style.backgroundColor = getRandomHexColor();
		box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
		boxes.push(box);
	}
	return boxes;
};

const destroyBoxes = () => {
	container.innerHTML = "";
};

const handleCreate = (evt) => {
	const boxes = createBoxes(input.value);
	container.append(...boxes);
	input.value = "";
};

const handleDestroy = (evt) => {
	destroyBoxes();
};

createButton.addEventListener("click", handleCreate);
destroyButton.addEventListener("click", handleDestroy);
