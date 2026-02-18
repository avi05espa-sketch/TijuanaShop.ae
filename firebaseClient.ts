import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCkCyy3z_J6k3Tv-9xi-3qu-ijpWg0z6iY",
  authDomain: "studio-2149089110-17f83.firebaseapp.com",
  databaseURL: "https://studio-2149089110-17f83-default-rtdb.firebaseio.com",
  projectId: "studio-2149089110-17f83",
  storageBucket: "studio-2149089110-17f83.firebasestorage.app",
  messagingSenderId: "920029707018",
  appId: "1:920029707018:web:384b222a029cd764ee18f3",
  measurementId: "G-DJTY5226K9"
};

// Evita que Firebase se inicialice dos veces (causa error en Vercel)
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

// Exportamos lo que el Marketplace necesita
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
