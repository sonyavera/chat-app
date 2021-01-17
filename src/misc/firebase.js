import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


const config = {

    apiKey: "AIzaSyAvke3VU70DBiLRXxR4ctoOFyc5PHNATj8",
    authDomain: "chat-web-app-d5e25.firebaseapp.com",
    projectId: "chat-web-app-d5e25",
    storageBucket: "chat-web-app-d5e25.appspot.com",
    messagingSenderId: "269592647500",
    appId: "1:269592647500:web:e87a41768817d491b221e9"
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();

