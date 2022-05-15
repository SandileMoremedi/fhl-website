// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJYjDjtlajCDvkH_0-kbGZUtoFMUQVOYw",
  authDomain: "fhl-production.firebaseapp.com",
  projectId: "fhl-production",
  storageBucket: "fhl-production.appspot.com",
  messagingSenderId: "419170905439",
  appId: "1:419170905439:web:8a15ce4d8067404103daea",
  measurementId: "G-RSBN7SPN2T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export { app };
