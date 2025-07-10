import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA5BPgDWNk2ATnReD8NHeD0_WMf1AISSWE",
  authDomain: "cai-food.firebaseapp.com",
  projectId: "cai-food",
  storageBucket: "cai-food.firebasestorage.app",
  messagingSenderId: "379750371996",
  appId: "1:379750371996:web:d6100801344eceb5835359",
  measurementId: "G-918QGVWCQ2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function loadSheet(sheet) {
  try {
    const snap = await getDoc(doc(db, "sheets", sheet));
    if (snap.exists()) {
      localStorage.setItem("cai_" + sheet, JSON.stringify(snap.data()));
      console.log("✅ Loaded", sheet);
    }
  } catch (e) {
    console.error("❌ Load error:", sheet, e);
  }
}

async function saveSheet(sheet) {
  try {
    const data = JSON.parse(localStorage.getItem("cai_" + sheet) || "[]");
    await setDoc(doc(db, "sheets", sheet), data);
    console.log("✅ Saved", sheet);
  } catch (e) {
    console.error("❌ Save error:", sheet, e);
  }
}

window.firebaseSync = {
  loadAll: () => ["inventory","sales","labor","costing","fixed","tasks","chat","schedule","orders"].forEach(loadSheet),
  saveAll: () => ["inventory","sales","labor","costing","fixed","tasks","chat","schedule","orders"].forEach(saveSheet),
  loadSheet, saveSheet
};
if (!localStorage.getItem("seeded")) {
  caiWrite("inventory", [{ item: "Pho Noodles", qty: 10 }]);
  caiWrite("sales", [{ item: "Spring Rolls", qty: 5, date: "2025-07-08" }]);
  localStorage.setItem("seeded", "1");
}
