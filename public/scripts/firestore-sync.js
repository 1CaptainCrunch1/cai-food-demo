/**
 * Firestore Sync Engine
 * Syncs all cai_ sheets from localStorage into Firestore live
 */
 
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const firebaseSync = {
  saveAll: () => {
    const keys = Object.keys(localStorage).filter(k => k.startsWith("cai_"));
    keys.forEach(key => {
      const values = JSON.parse(localStorage.getItem(key) || "[]");
      const sheet = key.replace("cai_", "");
      const ref = db.collection("sheets").doc(sheet).collection("entries");

      values.forEach(entry => {
        ref.add(entry)
          .then(() => console.log(`✅ Saved ${sheet} entry to Firestore`))
          .catch(e => console.error(`❌ Error saving ${sheet}:`, e));
      });
    });
  }
};
