
const itemInput = document.getElementById("item-input");
const addItemButton = document.getElementById("add-item-button");
const itemList = document.getElementById("item-list");

function addItem() {
    const itemText = itemInput.value.trim();

    if (itemText === "") {
        alert("Please enter an item first.");
        return;
    }

    const listItem = document.createElement("li");
    listItem.textContent = itemText;

    itemList.appendChild(listItem);

    itemInput.value = "";
    itemInput.focus();
}

addItemButton.addEventListener("click", addItem);

itemInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addItem();
    }
});

console.log("Day 2 Dynamic Element Creator is ready!");
