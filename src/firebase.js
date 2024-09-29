import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDbCkwStkvf4A7XFedJqenQIPPAEjOpO8Q",
  authDomain: "frontendstore-e1e88.firebaseapp.com",
  projectId: "frontendstore-e1e88",
  storageBucket: "frontendstore-e1e88.appspot.com",
  messagingSenderId: "240819815001",
  appId: "1:240819815001:web:c59e7434c4b28e9759e748",
  measurementId: "G-90K343QDK5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const db = getFirestore(app);
export default auth
export const db = getFirestore(app);