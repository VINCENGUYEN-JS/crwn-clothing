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

export const convertCollectionSnapShotToMap=(collection)=>{
    console.log(collection);
    const transformCollection = collection.docs.map(
      (doc)=>{
        const {title,items} = doc.data();
        return {
          routeName:encodeURI(title.toLowerCase()),
          id:doc.id,
          title,
          items
        }
      }
    )
    console.log(transformCollection);
   return transformCollection.reduce(
      (accumulator,collection)=>{
         accumulator[collection.title.toLowerCase()]=collection;
         return accumulator;
      }
      ,{});
}

// export const addCollectionAndDocuments = async(collectionKey,objectsToAdd) => {
//   const collectionRef = firestore.collection(collectionKey);
//   const batch = firestore.batch();
//   objectsToAdd.forEach((
//       obj => {
//         const newDocRef = collectionRef.doc();
//         batch.set(newDocRef,obj)
//       }
//     )
//   )
//   return await batch.commit()
// }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = ()=>auth.signInWithPopup(provider);

export default firebase;