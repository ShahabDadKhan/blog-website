import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyB0KnRFdhgJleKDZYtLnYL8-xu8Wi3TK68",
  authDomain: "blog-web-c957f.firebaseapp.com",
  projectId: "blog-web-c957f",
  storageBucket: "blog-web-c957f.appspot.com",
  messagingSenderId: "217437805116",
  appId: "1:217437805116:web:1bec2069962101a6ffc139",
  measurementId: "G-5REC1TVQEB",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
