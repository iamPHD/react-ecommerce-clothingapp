import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';


const config =  {
        apiKey: "AIzaSyBUA91NZb2crQxK4AWEpRG3uvRyC9TvOR4",
        authDomain: "crwn-db-874ce.firebaseapp.com",
        projectId: "crwn-db-874ce",
        storageBucket: "crwn-db-874ce.appspot.com",
        messagingSenderId: "825281000274",
        appId: "1:825281000274:web:4b7d1289b15d103e44c08b",
        measurementId: "G-FJT6Z0C1K3"
      };


firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

export default firebase;