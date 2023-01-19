import { initializeApp } from 'firebase/app';

import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBgpTm_AIF2ZDiASoFH9AQ1VOH12ANW7Ts',
  authDomain: 'shopkart-app-db.firebaseapp.com',
  projectId: 'shopkart-app-db',
  storageBucket: 'shopkart-app-db.appspot.com',
  messagingSenderId: '305059988865',
  appId: '1:305059988865:web:1929b8eb9fc7db10e11480',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUser = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  // console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  // console.log(userSnapshot);

  //creating user if already not there
  if (!userSnapshot.exists()) {
    try {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.log('ERROR:', error.message);
    }
  }
  return userDocRef;
};