let chatLog = JSON.parse(localStorage.getItem("cai_chat")) || [];

function saveChat() {
  localStorage.setItem("cai_chat", JSON.stringify(chatLog));
  renderChat();
}

function renderChat() {
  const role = localStorage.getItem("userRole");
  if (!["owner", "staff"].includes(role)) {
    document.getElementById("tabContent").innerHTML = "<p>❌ Access denied.</p>";
    return;
  }

  const container = document.getElementById("tabContent");
  container.innerHTML = `
    <h2>💬 Staff Message Board</h2>
    <form onsubmit="postChat(event)">
      <input type="text" id="chatMsg" placeholder="Message..." required>
      <button type="submit">Send</button>
    </form>
    <div class="chat-feed" id="chatFeed">
      ${chatLog.slice().reverse().map(msg => `
        <div class="chat-bubble">
          <b>${msg.role.toUpperCase()}:</b> ${msg.text}<br>
          <small>${msg.time}</small>
        </div>
      `).join("")}
    </div>
  `;
}

function postChat(e) {
  e.preventDefault();
  const input = document.getElementById("chatMsg");
  const text = input.value.trim();
  if (!text) return;

  const role = localStorage.getItem("userRole") || "staff";
  const now = new Date().toLocaleString();

  chatLog.push({ text, role, time: now });
  saveChat();
  input.value = "";
}

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("userRole")) renderChat();
});
