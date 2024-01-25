import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
export const firebaseConfig = {
  apiKey: "AIzaSyC8hPGHdoqSMHKNJkladSfQA_h-EZ8wLg4",
  authDomain: "my-tasks-5557d.firebaseapp.com",
  projectId: "my-tasks-5557d",
  storageBucket: "my-tasks-5557d.appspot.com",
  messagingSenderId: "246772966266",
  appId: "1:246772966266:web:08bf7729c3023c10a12cc3",
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
