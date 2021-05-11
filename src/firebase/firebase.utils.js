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

export const createUserProfileDocument = async (userAuth,additionalData) => {
    if(!userAuth) return; //if userAuth object not exists..i.e. if it is null then don't do anything
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get(); // fetch the user from firestore db
    if(!snapShot.exists){ // the exists property is true or false. If object is present in db it will return true
        alert("Creating user profile in db")
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        //setting the properties of userref object which is given by gmail. This is done in case user is not present in db
        // see how the properties of the userref object is set, here displayName, email,createdAT is property of objects (key value pair)
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error){
                console.log('error creating the user ',error.message);
        }
    }else{
        alert("User is already present in DB");
    }
    //console.log(snapShot);
    return userRef;

}


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

export default firebase;