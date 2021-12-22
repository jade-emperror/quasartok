import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGfC28n3KiS1AtouBA7PKjJjfpyPo-_uQ",
  authDomain: "quasartok.firebaseapp.com",
  projectId: "quasartok",
  storageBucket: "quasartok.appspot.com",
  messagingSenderId: "1094599363431",
  appId: "1:1094599363431:web:42c5fb3e670026d3e8fdc2",
  measurementId: "G-N9NSLHMY48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);