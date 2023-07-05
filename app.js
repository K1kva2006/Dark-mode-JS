const button = document.getElementById("button");

const text = document.getElementById("text")

button.addEventListener("click", () => {
    if (button.classList.toggle("activeButton")) {
        button.textContent = "Light mode"
        document.body.style.backgroundColor = "black"
        document.body.style.transition = "1s"
        text.classList.toggle("text-active")
        text.textContent = "Dark mode"
    } else {
        button.textContent = 'Dark mode'
        document.body.style.backgroundColor = "white"
        text.classList.toggle("text-active")
        text.textContent = "Light mode"
    }
})