
/* =========================================
   WEEK 5: TO-DO LIST APPLICATION
   Wilfred Mutuma
========================================= */

// Select HTML elements
const todoForm = document.getElementById("todo-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const tasksRemaining = document.getElementById("tasks-remaining");
const clearCompletedButton = document.getElementById("clear-completed");
const filterButtons = document.querySelectorAll(".filter-button");

// Store tasks in an array of objects
let tasks = [];
let currentFilter = "all";
let nextTaskId = 1;

// Add a new task
function addTask(taskText) {
    const trimmedText = taskText.trim();

    if (trimmedText === "") return;

    tasks.push({
        id: nextTaskId++,
        text: trimmedText,
        completed: false
    });

    renderTasks();
}

// Display tasks
function renderTasks() {
    taskList.innerHTML = "";

    const filteredTasks = tasks.filter(function (task) {
        if (currentFilter === "active") return !task.completed;
        if (currentFilter === "completed") return task.completed;
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

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "complete-checkbox";
        checkbox.checked = task.completed;
        checkbox.setAttribute("aria-label", "Mark task complete");

        const taskTextElement = document.createElement("span");
        taskTextElement.className = "task-text";
        taskTextElement.textContent = task.text;
        taskTextElement.title = "Double-click to edit";

        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.className = "delete-button";
        deleteButton.textContent = "Delete";

        const actions = document.createElement("div");
        actions.className = "task-actions";
        actions.appendChild(deleteButton);

        listItem.append(checkbox, taskTextElement, actions);
        taskList.appendChild(listItem);
    });

    updateRemainingCount();
}

// Update remaining task count
function updateRemainingCount() {
    const remaining = tasks.filter(function (task) {
        return !task.completed;
    }).length;

    tasksRemaining.textContent =
        remaining + (remaining === 1 ? " item left" : " items left");
}

// Add tasks using the form
todoForm.addEventListener("submit", function (event) {
    event.preventDefault();

    addTask(taskInput.value);
    taskInput.value = "";
    taskInput.focus();
});

// ONE click listener: delete tasks using event delegation
taskList.addEventListener("click", function (event) {
    const listItem = event.target.closest(".task-item");

    if (!listItem) return;

    const taskId = Number(listItem.dataset.taskId);

    if (event.target.classList.contains("delete-button")) {
        tasks = tasks.filter(function (task) {
            return task.id !== taskId;
        });

        renderTasks();
    }
});

// Complete or uncomplete tasks
taskList.addEventListener("change", function (event) {
    if (!event.target.classList.contains("complete-checkbox")) return;

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

 // BONUS: Double-click a task to edit it
taskList.addEventListener("dblclick", function (event) {
    const taskTextElement = event.target.closest(".task-text");

    if (!taskTextElement) return;

    const listItem = taskTextElement.closest(".task-item");
    const taskId = Number(listItem.dataset.taskId);

    const task = tasks.find(function (item) {
        return item.id === taskId;
    });

    if (!task || task.completed) return;

    if (listItem.querySelector(".edit-input")) return;

    const editInput = document.createElement("input");
    editInput.type = "text";
    editInput.className = "edit-input";
    editInput.value = task.text;
    editInput.setAttribute("aria-label", "Edit task");

    taskTextElement.replaceWith(editInput);

    editInput.focus();
    editInput.select();

    // Track whether editing has finished
    let editFinished = false;

    // Save changes
    function saveEdit() {
        if (editFinished) return;

        editFinished = true;

        const newText = editInput.value.trim();

        if (newText !== "") {
            task.text = newText;
        }

        renderTasks();
    }

    // Cancel changes
    function cancelEdit() {
        if (editFinished) return;

        editFinished = true;
        renderTasks();
    }

    editInput.addEventListener("keydown", function (keyEvent) {
        if (keyEvent.key === "Enter") {
            keyEvent.preventDefault();
            saveEdit();
        }

        if (keyEvent.key === "Escape") {
            keyEvent.preventDefault();
            cancelEdit();
        }
    });

    // Save when clicking outside the input
    editInput.addEventListener("blur", saveEdit);
});

// Handle filters
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

// Clear completed tasks
clearCompletedButton.addEventListener("click", function () {
    tasks = tasks.filter(function (task) {
        return !task.completed;
    });

    renderTasks();
});

// Initial display
renderTasks();

console.log("To-Do List application is ready!");
