import { initializeApp } from 'firebase/app';

import { 
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from 'firebase/auth';

import{
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBBeMSwZosHUpkC6HehF3DN2_NfwPZlar8",
    authDomain: "crwn-clothing-db-dbe2f.firebaseapp.com",
    projectId: "crwn-clothing-db-dbe2f",
    storageBucket: "crwn-clothing-db-dbe2f.appspot.com",
    messagingSenderId: "402666830942",
    appId: "1:402666830942:web:1db37d10de59deba4308cf"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
      prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  export const db = getFirestore();

  export  const createUserDocumentFromAuth = async (userAuth) =>{
      const userDocRef = doc(db, 'users', userAuth.uid);

      console.log(userDocRef);
      const userSnapshot = await getDoc(userDocRef);
      console.log(userSnapshot.exists());

      if(!userSnapshot.exists()){
          const {displayName, email} = userAuth;
          const createdAt = new Date();

          try{
              await setDoc(userDocRef,{
                displayName,
                email,
                createdAt,
              });
          }
          catch(error) {
              console.log('error creating the user', error.message);
          }
      }

      return userDocRef;
  };