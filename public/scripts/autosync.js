const syncStatus = document.createElement("div");
syncStatus.id = "syncStatus";
syncStatus.style = "position:fixed;bottom:15px;right:15px;background:#111;color:#fff;padding:6px 12px;border-radius:5px;font-family:sans-serif;font-size:13px;z-index:9999;";
document.body.appendChild(syncStatus);

function updateSyncStatus(text, color) {
  syncStatus.textContent = text;
  syncStatus.style.backgroundColor = color;
}

function smartSave(sheet) {
  updateSyncStatus("🔄 Saving " + sheet, "#333");
  firebaseSync.saveSheet(sheet).then(() => {
    updateSyncStatus("🟢 Synced " + sheet, "#155");
    setTimeout(() => updateSyncStatus("Idle", "#222"), 3000);
  }).catch(() => {
    updateSyncStatus("❌ Error syncing " + sheet, "#a00");
  });
}

function autoSyncWatcher(sheet) {
  let last = localStorage.getItem("cai_" + sheet);
  setInterval(() => {
    let now = localStorage.getItem("cai_" + sheet);
    if (now !== last) {
      last = now;
      smartSave(sheet);
    }
  }, 3000);
}

window.enableAutoSync = () => {
  ["inventory","sales","labor","costing","fixed","tasks","chat","schedule","orders"].forEach(autoSyncWatcher);
  updateSyncStatus("Auto-sync on", "#444");
};
