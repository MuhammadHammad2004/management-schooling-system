import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAXE0o6QFo5a-d4SyeF2k479JTDoUPjhDw",
  authDomain: "frp-pro-9182d.firebaseapp.com",
  projectId: "frp-pro-9182d",
  storageBucket: "frp-pro-9182d.firebasestorage.app",
  messagingSenderId: "218614352635",
  appId: "1:218614352635:web:634b47a2325a4c7062fe5e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };
