// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDiuTx8TnODaMHN_WN7yq0AvDV8lvwX21s",
  authDomain: "vue-login-ea471.firebaseapp.com",
  projectId: "vue-login-ea471",
  storageBucket: "vue-login-ea471.appspot.com",
  messagingSenderId: "614514598760",
  appId: "1:614514598760:web:c67c5648d991f54a116cdd",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
