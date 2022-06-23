import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC-49Blumdo0hATu7ro0JSkORYBOQsO77U",
  authDomain: "facebook-clone-fe31a.firebaseapp.com",
  projectId: "facebook-clone-fe31a",
  storageBucket: "facebook-clone-fe31a.appspot.com",
  messagingSenderId: "936802240029",
  appId: "1:936802240029:web:27f2ee094824a07e7228f4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
