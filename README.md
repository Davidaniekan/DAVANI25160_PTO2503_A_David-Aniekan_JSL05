# JSL05 Project Brief: Task Board with Local Storage Persistence and Task Creation

## 📌 Kanban Task Management  

## 📝 Project Description  
The **Kanban Task Management** application is a lightweight, responsive web-based task board designed to help users organise their workflow efficiently.  
Users can create, view, and manage tasks across three main columns (**To Do, Doing, Done**) with persistence provided via **Local Storage**, ensuring tasks remain available even after refreshing or closing the browser.  

The project follows a modular approach, ensuring scalability and maintainability. It also integrates a responsive modal system for adding and editing tasks, matching modern UI/UX design principles.  

---

## ⚙️ Technologies Used  
- **HTML5** – semantic structure for accessible layouts  
- **CSS3** – responsive styling with mobile-first design principles  
- **JavaScript (ES6+)** – dynamic rendering, task persistence, and interaction logic  
- **Local Storage API** – saves tasks locally without a backend

---

## ✨ Features  

### ✅ User Features  
- **Task Persistence:** Saves tasks to **local storage** so they are available after refresh or reopening the browser.  
- **Dynamic Rendering:** Tasks are displayed in their respective columns (**To Do, Doing, Done**) automatically.  
- **Add Task Modal:** Create new tasks via a modal form with fields for title, description, and status selection.  
- **Form Validation:** Alerts users if a task title or status is missing.  
- **Responsive Design:** Application works seamlessly on both desktop and mobile devices.  
- **Dropdown Highlighting:** Selected status is emphasised while others appear faded for clarity.  

### 👨‍💻 Developer Features  
- **Modular Codebase:** Functions are separated by responsibility (rendering, storage, modal handling).  
- **JSDoc Documentation:** Every function is documented for maintainability.  
- **Commit History Structure:** Clear commit message structure for version control.  

---
## 📂 Project Structure  

```bash
├── index.html       # HTML structure
├── styles.css       # CSS styles and responsive design
├── scripts.js       # JavaScript logic for tasks, modals, and localStorage
├── assets/          # Logo, icons, and other static assets
└── README.md        # Project documentation
```
---

## 🛠️ Setup Instructions  

### 1. Clone Repository  
```bash
git clone https://github.com/Davidaniekan/DAVANI25160_PTO2503_A_David-Aniekan_JSL05.git
cd kanban-task-management
```
### 2. Open Project

Since it’s a front-end project, no build tools are required.
Simply open ```index.html``` in your browser:

```bash
open index.html
```
or (Windows):

```bash
start index.html
```
---
## 🚀 Usage Instructions
### 🖥️ Desktop View

- Click **"+ Add New Task"** to open the modal.

- Fill in the **title, description, and status.**

- Click **"Create Task"** → The task will appear in the correct column.

### 📱 Mobile View

- Use the **"+" floating button** to add a task.

- Modal adapts to smaller screen sizes for smooth interaction.

### 🔄 Task Persistence

- Tasks are saved to **Local Storage** automatically.

- Closing or refreshing the browser will not erase them.

---
## 📊 Example Workflow

- Add a task **"Finish Resume"** → Select status **To Do**

- Refresh the page → Task remains in **To Do** column

---

## 👤 Author

Developed by **David Aniekan**
[GitHub](https://github.com/Davidaniekan) | [LinkedIn](https://linkedin.com/in/david-aniekan)

