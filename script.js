
let count = 0;

const counter = document.getElementById("counter");

document.getElementById("clickButton").addEventListener("click", () => {
    count++;
    counter.textContent = count;
});

document.getElementById("resetButton").addEventListener("click", () => {
    count = 0;
    counter.textContent = count;
});
