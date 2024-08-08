import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import {initializeApp} from 'firebase/app';
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
// import { useEffect } from "react";
// import { onAuthStateChanged } from 'firebase/auth';



 const firebaseConfig = {

    apiKey: "AIzaSyCv3NUeyiF4v7dwYcOpSEyeTMy8V025To8",
    authDomain: "payment-app-d791f.firebaseapp.com",
    projectId: "payment-app-d791f",
    storageBucket: "payment-app-d791f.appspot.com",
    messagingSenderId: "827562350152",
    appId: "1:827562350152:web:c770932b63665b046a6a7d",
    measurementId: "G-JJDHVT27ZX"
    
 };

//  const [currentUser, setCurrentUser] = useState(null);


//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setCurrentUser(user);
//       } else {
//         setCurrentUser(null);
//       }
//     });

//     return () => unsubscribe();
//   }, []);



 firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const app=initializeApp(firebaseConfig);
const auth=getAuth(app)
const provider =new GoogleAuthProvider()
export { firebase, firestore,auth,provider};
const db = firebase.firestore();
export { db };
// export {currentUser}