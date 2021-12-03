import * as firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBfEuTSlFCeMrq_kj5MZ86Vz85kIGXiEPk",
  authDomain: "scubapp-cf309.firebaseapp.com",
  projectId: "scubapp-cf309",
  storageBucket: "scubapp-cf309.appspot.com",
  messagingSenderId: "340476477503",
  appId: "1:340476477503:web:777ad57fccd1f38ca2b88a",
});

export const auth = app.auth();
export default app;
