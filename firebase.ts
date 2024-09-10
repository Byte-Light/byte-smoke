import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCWYcEX1Uog4uyqYb-GqNmOuB7VBrkKjZw",
  authDomain: "byte-smoke.firebaseapp.com",
  projectId: "byte-smoke",
  storageBucket: "byte-smoke.appspot.com",
  messagingSenderId: "45375757697",
  appId: "1:45375757697:web:7fbbab3629316f061a9c80"
};

const app = initializeApp(firebaseConfig);

// Initialize Firestore and Storage
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };