
const colorButton = document.getElementById("color-button");
const colorMessage = document.getElementById("color-message");

const colors = ["#dbeafe", "#dcfce7", "#fef3c7", "#fce7f3", "#e9d5ff"];
let colorIndex = 0;

colorButton.addEventListener("click", function () {
    document.body.style.backgroundColor = colors[colorIndex];

    colorMessage.textContent = "Background color changed successfully!";

    colorIndex = (colorIndex + 1) % colors.length;
});

console.log("Day 1 Color Changer is ready!");
