const button = document.getElementById("button");

const text = document.getElementById("text");



button.addEventListener("click", () => {
    if (button.classList.toggle("activeButton")) {
        localStorage.displayMode = 1
        button.textContent = "Light mode";
        document.body.style.backgroundColor = "black";
        document.body.style.transition = "1s";
        text.classList.toggle("text-active");
        text.textContent = "Dark mode";
    } else {
        localStorage.displayMode = 0
        button.textContent = "Dark mode";
        document.body.style.backgroundColor = "white";
        text.classList.toggle("text-active");
        text.textContent = "Light mode";
    }
});

