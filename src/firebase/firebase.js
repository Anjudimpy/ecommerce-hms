
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDS8IcBRRWXp7opgMlg1VpYFfkMz_E1xPc",
  authDomain: "filmyverse-90ad8.firebaseapp.com",
  projectId: "filmyverse-90ad8",
  storageBucket: "filmyverse-90ad8.appspot.com",
  messagingSenderId: "741924397713",
  appId: "1:741924397713:web:d99f4dd57bfe619454d530"
};


const app = initializeApp(firebaseConfig);

export const db= getFirestore(app);
export const moviesRef=collection(db,"movies");

export default app;