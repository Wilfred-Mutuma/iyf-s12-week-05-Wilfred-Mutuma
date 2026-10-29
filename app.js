
/* =========================================
   WEEK 5: TO-DO LIST APPLICATION
   Wilfred Mutuma
========================================= */

// Select the HTML elements
const todoForm = document.getElementById("todo-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const tasksRemaining = document.getElementById("tasks-remaining");
const clearCompletedButton = document.getElementById("clear-completed");
const filterButtons = document.querySelectorAll(".filter-button");

// Store tasks while the page is open
let tasks = [];
let currentFilter = "all";
let nextTaskId = 1;

// Add a new task
function addTask(taskText) {
    const trimmedText = taskText.trim();

    if (trimmedText === "") {
        return;
    }

    const task = {
        id: nextTaskId++,
        text: trimmedText,
        completed: false
    };

    tasks.push(task);
    renderTasks();
}

// Display tasks on the page
function renderTasks() {
    taskList.innerHTML = "";

    const filteredTasks = tasks.filter(function (task) {
        if (currentFilter === "active") {
            return !task.completed;
        }

        if (currentFilter === "completed") {
            return task.completed;
        }

        return true;
    });

    if (filteredTasks.length === 0) {
        const emptyMessage = document.createElement("li");
        emptyMessage.className = "empty-message";

        if (currentFilter === "active") {
            emptyMessage.textContent = "No active tasks.";
        } else if (currentFilter === "completed") {
            emptyMessage.textContent = "No completed tasks.";
        } else {
            emptyMessage.textContent = "No tasks yet. Add your first task!";
        }

        taskList.appendChild(emptyMessage);
    }

    filteredTasks.forEach(function (task) {
        const listItem = document.createElement("li");
        listItem.className = "task-item";
        listItem.dataset.taskId = task.id;

        if (task.completed) {
            listItem.classList.add("completed");
        }

        // Checkbox to mark a task complete
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "complete-checkbox";
        checkbox.checked = task.completed;
        checkbox.setAttribute("aria-label", "Mark task complete");

        // Task text
        const taskTextElement = document.createElement("span");
        taskTextElement.className = "task-text";
        taskTextElement.textContent = task.text;

        // Edit button
        const editButton = document.createElement("button");
        editButton.type = "button";
        editButton.className = "edit-button";
        editButton.textContent = "Edit";

        // Delete button
        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.className = "delete-button";
        deleteButton.textContent = "Delete";

        const actions = document.createElement("div");
        actions.className = "task-actions";
        actions.append(editButton, deleteButton);

        listItem.append(checkbox, taskTextElement, actions);
        taskList.appendChild(listItem);
    });

    updateRemainingCount();
}

// Update the number of active tasks
function updateRemainingCount() {
    const remaining = tasks.filter(function (task) {
        return !task.completed;
    }).length;

    tasksRemaining.textContent =
        remaining + (remaining === 1 ? " task remaining" : " tasks remaining");
}

// Handle adding tasks using the form
todoForm.addEventListener("submit", function (event) {
    event.preventDefault();

    addTask(taskInput.value);
    taskInput.value = "";
    taskInput.focus();
});

// Handle task completion, editing, and deleting
taskList.addEventListener("click", function (event) {
    const listItem = event.target.closest(".task-item");

    if (!listItem) {
        return;
    }

    const taskId = Number(listItem.dataset.taskId);
    const task = tasks.find(function (item) {
        return item.id === taskId;
    });

    if (!task) {
        return;
    }

    // Delete a task
    if (event.target.classList.contains("delete-button")) {
        tasks = tasks.filter(function (item) {
            return item.id !== taskId;
        });

        renderTasks();
        return;
    }

    // Edit a task
    if (event.target.classList.contains("edit-button")) {
        const newText = prompt("Edit your task:", task.text);

        if (newText !== null && newText.trim() !== "") {
            task.text = newText.trim();
            renderTasks();
        }
    }
});

// Handle checking or unchecking tasks
taskList.addEventListener("change", function (event) {
    if (!event.target.classList.contains("complete-checkbox")) {
        return;
    }

    const listItem = event.target.closest(".task-item");
    const taskId = Number(listItem.dataset.taskId);

    const task = tasks.find(function (item) {
        return item.id === taskId;
    });

    if (task) {
        task.completed = event.target.checked;
        renderTasks();
    }
});

// Handle All, Active, and Completed filters
filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        currentFilter = button.dataset.filter;

        filterButtons.forEach(function (filterButton) {
            filterButton.classList.remove("active");
        });

        button.classList.add("active");
        renderTasks();
    });
});

// Remove all completed tasks
clearCompletedButton.addEventListener("click", function () {
    tasks = tasks.filter(function (task) {
        return !task.completed;
    });

    renderTasks();
});

// Show the initial empty list
renderTasks();

console.log("To-Do List application is ready!");
