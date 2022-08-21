import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBJVQ89KnhcQwv1u1UaqS-RQrZsZ5pzDyE",
    authDomain: "cipher-a603b.firebaseapp.com",
    projectId: "cipher-a603b",
    storageBucket: "cipher-a603b.appspot.com",
    messagingSenderId: "196684387064",
    appId: "1:196684387064:web:baba88e1bbf0a7c4d1a10d"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const db = app.firestore()

export default db