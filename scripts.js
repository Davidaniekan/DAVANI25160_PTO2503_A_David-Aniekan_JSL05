import { initialTasks } from "./initialData.js";

/**
 * @typedef {Object} Task
 * @property {number} id - Unique identifier for the task.
 * @property {string} title - Title of the task.
 * @property {string} description - Short description of the task.
 * @property {string} status - Status column: 'todo', 'doing', or 'done'.
 */

// =========================
// DOM Elements
// =========================

// Existing task modal (view/edit)
const taskTitleInput = document.getElementById("task-title");
const taskDescriptionInput = document.getElementById("task-description");
const taskStatusSelect = document.getElementById("task-status");
const modalBackdrop = document.getElementById("modal-backdrop");
const closeModalBtn = document.getElementById("close-modal");

// New task modal
const newTaskBtn = document.querySelectorAll(".newTaskBtn");
const modalNewTask = document.getElementById("modal-new-task");
const newTaskCloseBtn = document.getElementById("new-task-close-modal");
const createTaskBtn = document.getElementById("create-task-btn");
const newTaskTitleInput = document.getElementById("new-task-title");
const newTaskDescriptionInput = document.getElementById("new-task-description");
const newTaskStatusSelect = document.getElementById("new-task-status");

// =========================
// State Management
// =========================
let tasks = [];
let nextTaskId = 9; // Start counting from 9

/**
 * Saves tasks array to local storage and updates task counter.
 * @param {Task[]} updatedTasks - Array of tasks to save.
 */
function saveTasks(updatedTasks) {
  tasks = updatedTasks;
  localStorage.setItem("tasks", JSON.stringify(tasks));
  localStorage.setItem("nextTaskId", nextTaskId);
}

/**
 * Loads tasks from local storage. Falls back to initialTasks if not found.
 * Updates `nextTaskId` counter if stored in localStorage.
 * @returns {Task[]} Array of loaded tasks.
 */
function loadTasks() {
  const saved = localStorage.getItem("tasks");
  tasks = saved ? JSON.parse(saved) : [...initialTasks];

  const savedNextId = localStorage.getItem("nextTaskId");
  if (savedNextId) nextTaskId = parseInt(savedNextId, 10);

  return tasks;
}

// =========================
// Task Rendering
// =========================
/**
 * Render all tasks into their respective columns.
 * @param {Task[]} tasks - Array of task objects to render
 */
function renderTasks(tasks) {
  // Clear all task containers
  document.querySelectorAll(".tasks-container").forEach((container) => {
    container.innerHTML = "";
  });

  tasks.forEach((task) => {
    // Create task card
    const taskElement = document.createElement("div");
    taskElement.classList.add("taskCard");
    taskElement.dataset.id = task.id;
    taskElement.textContent = task.title; // Only show title

    // Append to correct column by status
    const column = document.querySelector(`#${task.status} .tasks-container`);
    if (column) {
      column.appendChild(taskElement);
    }

    // When clicked → open modal with task details
    taskElement.addEventListener("click", () => openModal(task));
  });

  updateColumnCounts(tasks);
}

/**
 * Update column headers with task counts.
 * @param {Task[]} tasks - Array of tasks to count for each status.
 */
function updateColumnCounts(tasks) {
  const todoCount = tasks.filter((t) => t.status === "todo").length;
  const doingCount = tasks.filter((t) => t.status === "doing").length;
  const doneCount = tasks.filter((t) => t.status === "done").length;

  document.querySelector(
    "#todo h4"
  ).innerHTML = `<span class="dot indigo"></span> TODO (${todoCount})`;
  document.querySelector(
    "#doing h4"
  ).innerHTML = `<span class="dot purple"></span> DOING (${doingCount})`;
  document.querySelector(
    "#done h4"
  ).innerHTML = `<span class="dot green"></span> DONE (${doneCount})`;
}

/**
 * Opens modal with provided task data pre-filled.
 * @param {Task} task - Task object to display in modal.
 */
function openModal(task) {
  taskTitleInput.value = task.title;
  taskDescriptionInput.value = task.description;
  taskStatusSelect.value = task.status;

  // Make sure faded styles are applied immediately
  updateDropdownHighlight(taskStatusSelect);

  // show modal
  modalBackdrop.style.display = "flex";
}

/**
 * Closes the modal by hiding the backdrop and the new task modal.
 */
function closeModal() {
  [modalBackdrop, modalNewTask].forEach((el) => (el.style.display = "none"));
}

/**
 * Handles logic for close buttons.
 * Prompts confirmation if closing a new task modal.
 * @param {"newTask" | "oldTask"} buttonType - The type of close button clicked.
 */
function handleCloseClick(buttonType) {
  if (buttonType === "newTask") {
    const confirmCancel = confirm("Are you sure you want to cancel?");
    if (!confirmCancel) return; // stop if user cancels
  }
  closeModal();
}

// =========================
// New Task Creation
// =========================
/**
 * Creates a new task from modal input fields, validates, saves, and renders it.
 */
function createTask() {
  const updatedTasks = loadTasks();

  // Validate status first
  const status = newTaskStatusSelect.value;
  if (!status) {
    alert("Please select a valid status for the task.");
    return; // stop creating the task
  }

  const newTask = {
    id: nextTaskId++, // increment for each new task
    title: newTaskTitleInput.value.trim(),
    description: newTaskDescriptionInput.value.trim(),
    status: status, // use validated status
  };
  if (!newTask.title) {
    alert("! Please fill out this field.");
    return;
  }

  updatedTasks.push(newTask);
  saveTasks(updatedTasks);
  renderTasks(updatedTasks);

  // Reset form fields
  newTaskTitleInput.value = "";
  newTaskDescriptionInput.value = "";
  newTaskStatusSelect.value = "";

  closeModal();
}
