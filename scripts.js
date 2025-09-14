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
