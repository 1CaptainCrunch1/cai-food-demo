let schedule = JSON.parse(localStorage.getItem("cai_schedule")) || [];

const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

function saveSchedule() {
  localStorage.setItem("cai_schedule", JSON.stringify(schedule));
  renderSchedule();
}

function renderSchedule() {
  const role = localStorage.getItem("userRole");
  if (!["owner", "staff"].includes(role)) {
    document.getElementById("tabContent").innerHTML = "<p>❌ Access denied.</p>";
    return;
  }

  const container = document.getElementById("tabContent");
  container.innerHTML = `
    <h2>📅 Weekly Shift Schedule</h2>
    ${role === "owner" ? `
      <form onsubmit="addShift(event)">
        <select id="day">${weekdays.map(d => `<option>${d}</option>`).join("")}</select>
        <input type="text" id="staffName" placeholder="Staff Name" required>
        <input type="text" id="shiftTime" placeholder="e.g. 9am–5pm" required>
        <button type="submit">+ Add</button>
      </form>
    ` : ""}
    <div class="schedule-grid">
      ${weekdays.map(day => `
        <div class="day-block">
          <h3>${day}</h3>
          ${schedule.filter(s => s.day === day).map((s, i) => `
            <div class="shift">
              <span>${s.name} — ${s.time}</span>
              ${role === "owner" ? `<button onclick="deleteShift(${i})">🗑️</button>` : ""}
            </div>
          `).join("")}
        </div>
      `).join("")}
    </div>
  `;
}

function addShift(e) {
  e.preventDefault();
  const day = document.getElementById("day").value;
  const name = document.getElementById("staffName").value.trim();
  const time = document.getElementById("shiftTime").value.trim();
  if (!day || !name || !time) return;

  schedule.push({ day, name, time });
  saveSchedule();
  e.target.reset();
}

function deleteShift(index) {
  if (confirm("Remove this shift?")) {
    schedule.splice(index, 1);
    saveSchedule();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("userRole")) renderSchedule();
});
