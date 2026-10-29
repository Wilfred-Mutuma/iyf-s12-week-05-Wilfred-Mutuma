
console.log("=== WEEK 5: LESSON 9, TASK 9.1 ===");

// 1. getElementById() - selects one element by its ID
const header = document.getElementById("main-header");
console.log("getElementById:", header);

// 2. getElementsByClassName() - selects elements by class
const contents = document.getElementsByClassName("content");
console.log("getElementsByClassName:", contents);

// 3. getElementsByTagName() - selects elements by tag name
const paragraphs = document.getElementsByTagName("p");
console.log("getElementsByTagName:", paragraphs);

// 4. querySelector() - selects the first matching element
const firstLink = document.querySelector(".nav-link");
console.log("querySelector:", firstLink);

// 5. querySelectorAll() - selects all matching elements
const allLinks = document.querySelectorAll(".nav-link");
console.log("querySelectorAll:", allLinks);


// === PRACTICE TASKS ===

// 1. Select the h1 element
const h1Element = document.querySelector("h1");
console.log("1. H1 element:", h1Element);

// 2. Select all elements with class "content"
const contentElements = document.querySelectorAll(".content");
console.log("2. Content elements:", contentElements);

// 3. Select the form with id "contact-form"
const contactForm = document.getElementById("contact-form");
console.log("3. Contact form:", contactForm);

// 4. Select the email input
const emailInput = document.getElementById("email");
console.log("4. Email input:", emailInput);

// 5. Select all list items in the navigation
const navItems = document.querySelectorAll(".nav-list li");
console.log("5. Navigation list items:", navItems);

// 6. Select the first .nav-link
const firstNavLink = document.querySelector(".nav-link");
console.log("6. First navigation link:", firstNavLink);

// 7. Select the last paragraph on the page
const lastParagraph = document.querySelector("body p:last-of-type");
console.log("7. Last paragraph:", lastParagraph);

console.log("=== TASK 9.1 COMPLETE ===");

console.log("=== WEEK 5: LESSON 9, TASK 9.2 ===");

// 1. Select the header, then find the nav inside it
const headerElement = document.getElementById("main-header");
const navInsideHeader = headerElement.querySelector("nav");

console.log("1. Navigation inside header:", navInsideHeader);

// 2. Select the first navigation link, then get its parent li
const firstLinkElement = document.querySelector(".nav-link");
const parentListItem = firstLinkElement.parentElement;

console.log("2. Parent list item:", parentListItem);

// 3. Select the article, then get its next sibling
const articleElement = document.querySelector("article");
const nextSibling = articleElement.nextElementSibling;

console.log("3. Next sibling of article:", nextSibling);

// 4. Select the ul, then get all its child li elements
const navList = document.querySelector(".nav-list");
const navListItems = navList.children;

console.log("4. Navigation list children:", navListItems);

// 5. Start from the footer and navigate up to the body
const footerElement = document.querySelector("footer");
const bodyElement = footerElement.parentElement;

console.log("5. Body reached from footer:", bodyElement);

console.log("=== TASK 9.2 COMPLETE ===");

console.log("=== WEEK 5: LESSON 9, TASK 9.3 ===");

// 1. Reading and modifying text
const headingToModify = document.querySelector("h1");

console.log("Original heading:", headingToModify.textContent);
console.log("Visible heading:", headingToModify.innerText);

// Change the heading
headingToModify.textContent = "DOM Practice - Updated";
console.log("Updated heading:", headingToModify.textContent);


// 2. Reading and modifying HTML
const articleToModify = document.querySelector("article");

console.log("Original article HTML:", articleToModify.innerHTML);

// Replace article content with HTML we wrote ourselves
articleToModify.innerHTML = `
    <h2>Updated Article</h2>
    <p>This is new content.</p>
`;

console.log("Updated article HTML:", articleToModify.innerHTML);


// 3. Working with attributes
const linkToModify = document.querySelector(".nav-link");

console.log("Original link href:", linkToModify.getAttribute("href"));

linkToModify.setAttribute("href", "https://developer.mozilla.org");

console.log("Updated link href:", linkToModify.href);
console.log("Has target attribute:", linkToModify.hasAttribute("target"));

linkToModify.setAttribute("target", "_blank");
console.log("Target added:", linkToModify.hasAttribute("target"));

linkToModify.removeAttribute("target");
console.log("Target removed:", linkToModify.hasAttribute("target"));


// 4. Working with data attributes
const dataElement = document.createElement("div");

dataElement.dataset.id = "123";
dataElement.dataset.category = "tech";

console.log("Data ID:", dataElement.dataset.id);
console.log("Data category:", dataElement.dataset.category);


// 5. Changing styles
const containerToStyle = document.querySelector(".container");

containerToStyle.style.backgroundColor = "#f0f0f0";
containerToStyle.style.padding = "30px";
containerToStyle.style.borderRadius = "8px";

console.log("Container styles updated:", containerToStyle.style.cssText);

console.log("=== TASK 9.3 COMPLETE ===");

console.log("=== WEEK 5: LESSON 9, TASK 9.4 ===");

// 1. Create a new paragraph
const newParagraph = document.createElement("p");
newParagraph.textContent = "This paragraph was created using JavaScript.";
newParagraph.className = "created-paragraph";

console.log("1. New paragraph created:", newParagraph);

// 2. Add the paragraph to the page
const practiceContainer = document.querySelector(".container");
practiceContainer.appendChild(newParagraph);

console.log("2. Paragraph added to the page.");

// 3. Create and add a new list item
const newListItem = document.createElement("li");
newListItem.textContent = "JavaScript Added Item";
newListItem.className = "nav-link";

const navigationList = document.querySelector(".nav-list");

if (navigationList) {
    navigationList.appendChild(newListItem);
    console.log("3. New list item added:", newListItem);
} else {
    console.log("3. No .nav-list found. Check your HTML.");
}

// 4. Remove the paragraph we created
newParagraph.remove();

console.log("4. Created paragraph removed:", !document.body.contains(newParagraph));

// 5. Clone an existing element
const originalHeading = document.querySelector("h1");
const clonedHeading = originalHeading.cloneNode(true);

clonedHeading.textContent = "Cloned Heading";
clonedHeading.id = "cloned-heading";

practiceContainer.appendChild(clonedHeading);

console.log("5. Cloned heading added:", clonedHeading);

console.log("=== TASK 9.4 COMPLETE ===");

console.log("=== WEEK 5: LESSON 9, TASK 9.5 ===");

// Create a reusable function for adding navigation items
function addNavItem(text, url) {
    const list = document.querySelector(".nav-list");

    if (!list) {
        console.log("Navigation list not found.");
        return;
    }

    const listItem = document.createElement("li");
    const link = document.createElement("a");

    link.textContent = text;
    link.href = url;
    link.className = "nav-link";

    listItem.appendChild(link);
    list.appendChild(listItem);

    console.log("Navigation item added:", text);
}

// Test the function
addNavItem("Services", "#services");
addNavItem("My Portfolio", "#portfolio");

console.log("=== TASK 9.5 COMPLETE ===");


console.log("=== WEEK 5: LESSON 10, TASK 10.1 ===");

// Select the button and counter display
const clickButton = document.getElementById("click-button");
const clickCountDisplay = document.getElementById("click-count");

// Start the counter at zero
let clickCount = 0;

// Respond whenever the button is clicked
clickButton.addEventListener("click", function () {
    clickCount++;

    clickCountDisplay.textContent = clickCount;

    console.log("Button clicked:", clickCount, "times");
});

console.log("Click counter is ready!");

console.log("=== WEEK 5: LESSON 10, TASK 10.2 ===");

const keyboardInput = document.getElementById("keyboard-input");
const keyboardMessage = document.getElementById("keyboard-message");

// Listen for keyboard events in the input box
keyboardInput.addEventListener("keydown", function (event) {
    console.log("Key pressed:", event.key);

    if (event.key === "Escape") {
        keyboardInput.value = "";
        keyboardMessage.textContent = "Input cleared using Escape!";
    } else {
        keyboardMessage.textContent = "You pressed: " + event.key;
    }
});

// Listen for text changes
keyboardInput.addEventListener("input", function (event) {
    console.log("Current input:", event.target.value);
});

console.log("Keyboard event practice is ready!");

console.log("=== WEEK 5: LESSON 10, TASK 10.3 ===");

const delegationList = document.getElementById("delegation-list");
const delegationMessage = document.getElementById("delegation-message");

// One listener handles clicks on all three buttons
delegationList.addEventListener("click", function (event) {
    console.log("Clicked element:", event.target);

    // Check whether the click came from a delegation button
    const clickedButton = event.target.closest(".delegation-item");

    if (clickedButton && delegationList.contains(clickedButton)) {
        delegationMessage.textContent =
            "You selected: " + clickedButton.textContent;

        console.log("Selected:", clickedButton.textContent);
    }
});

console.log("Event delegation is ready!");


console.log("=== WEEK 5: LESSON 10, TASK 10.4 ===");

const validationForm = document.getElementById("validation-form");
const validationName = document.getElementById("validation-name");
const validationEmail = document.getElementById("validation-email");
const validationMessage = document.getElementById("validation-message");

validationForm.addEventListener("submit", function (event) {
    // Stop the form from refreshing the page
    event.preventDefault();

    const nameValue = validationName.value.trim();
    const emailValue = validationEmail.value.trim();

    // Check that the name is not empty
    if (nameValue === "") {
        validationMessage.textContent = "Please enter your name.";
        validationName.focus();
        return;
    }

    // Check that the email is not empty and has a valid format
    if (emailValue === "" || !validationEmail.validity.valid) {
        validationMessage.textContent = "Please enter a valid email address.";
        validationEmail.focus();
        return;
    }

    // Show a success message
    validationMessage.textContent =
        "Thank you, " + nameValue + "! Your form is valid.";

    console.log("Form validation successful for:", nameValue, emailValue);
});

console.log("Form validation is ready!");
