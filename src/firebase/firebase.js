import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp({

    apiKey: "AIzaSyBmdksjfm2pFQSozlfxt2LOSu3BApewbZM",
    authDomain: "pc-paradise.firebaseapp.com",
    projectId: "pc-paradise",
    storageBucket: "pc-paradise.appspot.com",
    messagingSenderId: "440726214376",
    appId: "1:440726214376:web:0508eefa0ffd83c599db5d"
    });
    
export function getFirebase(){
    return app;
}
export function getFirestore(){
    return firebase.firestore(app);
}