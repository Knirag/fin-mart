import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCqzi7dtUlINv9_NWJLWJTcos_NFNOLyDg",
  authDomain: "finsmart-auth.firebaseapp.com",
  projectId: "finsmart-auth",
  storageBucket: "finsmart-auth.appspot.com",
  messagingSenderId: "1034125715618",
  appId: "1:1034125715618:web:140ffa5a111d09c7a74ffb",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Get a reference to the auth service
const auth = getAuth(app);

export { auth };
