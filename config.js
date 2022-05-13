import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBA2Z8rkecJac7Kjff1yqerAe76UJPPcV8",
  authDomain: "willykiran-8d453.firebaseapp.com",
  projectId: "willykiran-8d453",
  storageBucket: "willykiran-8d453.appspot.com",
  messagingSenderId: "786470562040",
  appId: "1:786470562040:web:c8f12a874a6eb8dc4c330d"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
