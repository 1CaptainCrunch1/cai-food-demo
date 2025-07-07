let tasks = JSON.parse(localStorage.getItem("cai_tasks")) || [];

function saveTasks() {
  localStorage.setItem("cai_tasks", JSON.stringify(tasks));
  renderTasks();
}

function renderTasks() {
  const role = localStorage.getItem("userRole");
  if (!["owner", "staff"].includes(role)) {
    document.getElementById("tabContent").innerHTML = "<p>❌ Access denied.</p>";
    return;
  }

  const container = document.getElementById("tabContent");
  container.innerHTML = `
    <h2>📋 Task Checklist</h2>
    ${role === "owner" ? `
      <form onsubmit="addTask(event)">
        <input type="text" id="taskText" placeholder="New task..." required>
        <button type="submit">Add Task</button>
      </form>
    ` : ""}
    <ul class="task-list">
      ${tasks.map((t, i) => `
        <li>
          <input type="checkbox" id="task-${i}" ${t.done ? "checked" : ""} onchange="toggleTask(${i})">
          <label for="task-${i}" ${t.done ? 'class="done"' : ""}>${t.text}</label>
          ${role === "owner" ? `<button onclick="deleteTask(${i})">🗑️</button>` : ""}
        </li>
      `).join("")}
    </ul>
  `;
}

function addTask(e) {
  e.preventDefault();
  const text = document.getElementById("taskText").value.trim();
  if (!text) return;
  tasks.push({ text, done: false });
  saveTasks();
  e.target.reset();
}

function toggleTask(i) {
  const role = localStorage.getItem("userRole");
  if (["owner", "staff"].includes(role)) {
    tasks[i].done = !tasks[i].done;
    saveTasks();
  }
}

function deleteTask(i) {
  if (confirm("Delete this task?")) {
    tasks.splice(i, 1);
    saveTasks();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("userRole")) renderTasks();
});
