// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwJq8j8javNGScBnNhdic5IuqEKYxhTmY",
  authDomain: "barbearia-resenha-745b8.firebaseapp.com",
  projectId: "barbearia-resenha-745b8",
  storageBucket: "barbearia-resenha-745b8.appspot.com",
  messagingSenderId: "417243560986",
  appId: "1:417243560986:web:43aaf7d9098b79801a65a3",
  measurementId: "G-DHB1R25MLC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);