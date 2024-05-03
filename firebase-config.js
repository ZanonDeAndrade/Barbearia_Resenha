
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDwJq8j8javNGScBnNhdic5IuqEKYxhTmY",
  authDomain: "barbearia-resenha-745b8.firebaseapp.com",
  projectId: "barbearia-resenha-745b8",
  storageBucket: "barbearia-resenha-745b8.appspot.com",
  messagingSenderId: "417243560986",
  appId: "1:417243560986:web:43aaf7d9098b79801a65a3",
  measurementId: "G-DHB1R25MLC"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);