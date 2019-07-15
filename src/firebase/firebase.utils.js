import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyAYXgUpx8sgdqfwbnscS0ebKzPx4RUBLYI",
        authDomain: "crwn-db-vince.firebaseapp.com",
        databaseURL: "https://crwn-db-vince.firebaseio.com",
        projectId: "crwn-db-vince",
        storageBucket: "",
        messagingSenderId: "827292126330",
        appId: "1:827292126330:web:38731adfd79fee31"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = ()=>auth.signInWithPopup(provider);

export default firebase;