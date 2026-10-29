
const originalContent = document.getElementById("original-content");
const copiedContent = document.getElementById("copied-content");
const copyButton = document.getElementById("copy-button");
const copyMessage = document.getElementById("copy-message");

copyButton.addEventListener("click", function () {
    copiedContent.textContent = originalContent.textContent.trim();

    copyMessage.textContent = "Content copied successfully!";

    console.log("Content copied:", copiedContent.textContent);
});

console.log("Day 4 Content Copier is ready!");
