import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCEqOb-bMnFOy8fyXvycABTBBL2kP6ZF0Y",
  authDomain: "uniconnapp-647fc.firebaseapp.com",
  databaseURL: "https://uniconnapp-647fc-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "uniconnapp-647fc",
  storageBucket: "uniconnapp-647fc.appspot.com",
  messagingSenderId: "920876151904",
  appId: "1:920876151904:web:e797144e0ca19ef8f1bf05",
  measurementId: "G-X6CLF98HS3"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()