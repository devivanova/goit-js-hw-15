const slider = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

text.style.fontSize = `${slider.value}px`;

slider.addEventListener("input", (evt) => text.style.fontSize =`${evt.currentTarget.value}px`);