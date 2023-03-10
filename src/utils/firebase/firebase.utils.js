import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARekybzP97FqsjOjyDzNNsAk-f_KbOOJ8",
  authDomain: "ant-clothing-db.firebaseapp.com",
  projectId: "ant-clothing-db",
  storageBucket: "ant-clothing-db.appspot.com",
  messagingSenderId: "1004890860030",
  appId: "1:1004890860030:web:c6356c2874b5bf4634f8af",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);
