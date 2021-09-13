// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBl2koMzmmqWne1PIVQvnBd6XlQTbehGO4",
  authDomain: "tienda-de-musica-13c54.firebaseapp.com",
  projectId: "tienda-de-musica-13c54",
  storageBucket: "tienda-de-musica-13c54.appspot.com",
  messagingSenderId: "1038665284843",
  appId: "1:1038665284843:web:c0ba43928ebdfa6503d2ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


//devuelve la conexion con firestore
export const getData = () => getFirestore(app)