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


export const createUserProfileDocument = async (userAuth,additionalData)=>{
  if(!userAuth){
        return;
  }

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  console.log(userRef);

  const snapShot = await userRef.get();

  if(!snapShot.exists){
         const {displayName,email} = userAuth;
         const createdAt = new Date();
         try {
          await userRef.set({
                  displayName,
                  email,
                  createdAt,
                  ...additionalData
          })
         }catch(err){
           console.log('err creating user', err.message);
         }
  }

  return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = ()=>auth.signInWithPopup(provider);

export default firebase;