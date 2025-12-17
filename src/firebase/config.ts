// This file is not intended to be edited.
// It is used to deploy and configure Firebase services.
// To configure your Firebase project, edit the service-account.json file.
import { FirebaseOptions, getApp, getApps, initializeApp } from 'firebase/app';

const firebaseConfig: FirebaseOptions = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};


// Initialize Firebase
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

export { app };
export { firebaseConfig };