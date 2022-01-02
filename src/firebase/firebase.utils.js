import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCajbGXkS68IIDHpX6l6s62PKslLzRYAJ8",
    authDomain: "bsquared-nfts.firebaseapp.com",
    projectId: "bsquared-nfts",
    storageBucket: "bsquared-nfts.appspot.com",
    messagingSenderId: "627787160017",
    appId: "1:627787160017:web:416e83914a3f741faaa8f0",
    measurementId: "G-S2Z0YMDQVL"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;