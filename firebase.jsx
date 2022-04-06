// Import the functions you need from the SDKs you need
import firebase from 'firebase';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBiIeZ7NVa7Jt7sLv0myBDcbUy6h_J2mv8",
    authDomain: "movierating-d2b53.firebaseapp.com",
    projectId: "movierating-d2b53",
    storageBucket: "movierating-d2b53.appspot.com",
    messagingSenderId: "455427644391",
    appId: "1:455427644391:web:2a357dc3c2ea254f62bb42"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };