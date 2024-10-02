import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// IMPORTAMOS DOS FUNCIONES DE FIREBASE



const firebaseConfig = {
  apiKey: "AIzaSyCLwdeeETXDLgmNsIGl0INxKHmlRxY8qf4",
  authDomain: "batik-56ee2.firebaseapp.com",
  projectId: "batik-56ee2",
  storageBucket: "batik-56ee2.appspot.com",
  messagingSenderId: "133880838246",
  appId: "1:133880838246:web:ab03b625e893d7882b95a7",
  measurementId: "G-NW38QQMWS6"
};

  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)


