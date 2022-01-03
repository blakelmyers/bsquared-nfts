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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapshot = await userRef.get();

    if (!snapshot.exist) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;