import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDFhGCRNRnyB6DKakYO5akfaEVHFWCOtN4",
  authDomain: "netflix-clone-7621c.firebaseapp.com",
  projectId: "netflix-clone-7621c",
  storageBucket: "netflix-clone-7621c.appspot.com",
  messagingSenderId: "420905370464",
  appId: "1:420905370464:web:79833542807dcff54c1405",
  measurementId: "G-MCRC81FW68"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
