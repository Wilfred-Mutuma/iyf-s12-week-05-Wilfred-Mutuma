
const themeButton = document.getElementById("theme-button");
const themeMessage = document.getElementById("theme-message");

themeButton.addEventListener("click", function () {
    const isDarkMode = document.body.classList.toggle("dark-mode");

    if (isDarkMode) {
        themeButton.textContent = "Enable Light Mode";
        themeButton.setAttribute("aria-pressed", "true");
        themeMessage.textContent = "Dark mode is active.";
    } else {
        themeButton.textContent = "Enable Dark Mode";
        themeButton.setAttribute("aria-pressed", "false");
        themeMessage.textContent = "Light mode is active.";
    }

    console.log("Dark mode:", isDarkMode ? "ON" : "OFF");
});

console.log("Day 5 Dark Mode Toggle is ready!");
