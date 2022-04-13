// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCmu7aY59uGfyyFYWe7-krdd7dkf8htP0o",
    authDomain: "route-firebase-auth-66025.firebaseapp.com",
    projectId: "route-firebase-auth-66025",
    storageBucket: "route-firebase-auth-66025.appspot.com",
    messagingSenderId: "859848817087",
    appId: "1:859848817087:web:d3e7daf3913d01f97f890a",
    measurementId: "G-M969R0ZX1Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;