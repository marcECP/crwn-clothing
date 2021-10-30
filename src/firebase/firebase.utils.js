import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyD_2FkiXhaYrkKJCZch9QOQq0shpAqw7xM',
  authDomain: 'fr-crwn-db-b62f5.firebaseapp.com',
  projectId: 'fr-crwn-db-b62f5',
  storageBucket: 'fr-crwn-db-b62f5.appspot.com',
  messagingSenderId: '206503852617',
  appId: '1:206503852617:web:92ed91558287490bca9d98',
  measurementId: 'G-J53BKJNJ22',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
