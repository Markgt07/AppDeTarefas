import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig ={
    apiKey: "AIzaSyAQLsO1da2_1IySKiMHbMOUeeTzkShoPmA",
    authDomain: "subs-a17e3.firebaseapp.com",
    projectId: "subs-a17e3",
    storageBucket: "subs-a17e3.appspot.com",
    messagingSenderId: "18258257394",
    appId: "1:18258257394:web:b35f4b2e211afa2816776b"
    };

    const firebaseApp = firebase.initializeApp(firebaseConfig);

    const db = firebaseApp.firestore();

    const auth = firebase.auth();

    export {auth};
    export default db;