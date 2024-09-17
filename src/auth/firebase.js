// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpcDFUCJPqfF3wkNleEYOGso5BTMAKKak",
  authDomain: "aron-30d70.firebaseapp.com",
  projectId: "aron-30d70",
  storageBucket: "aron-30d70.appspot.com",
  messagingSenderId: "757209111598",
  appId: "1:757209111598:web:4702b32c651892956a53bf",
  measurementId: "G-CSWPFFKTZ5"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;