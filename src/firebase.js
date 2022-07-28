import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// import { initializeApp } from 'firebase/compat/app';
import {getStorage} from "firebase/storage";
import "firebase/compat/firestore";
import { getAuth } from '@firebase/auth';


// import firebase from 'firebase';
// import db from 'firebase/compat/database';
// import { getFirestore } from 'firebase/firestore/lite';
// import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyApNGuqUCVVUPDBWrPqy_MKHpEwY7qJZxc",
    authDomain: "linkedin-clone-yt-6c001.firebaseapp.com",
    projectId: "linkedin-clone-yt-6c001",
    storageBucket: "linkedin-clone-yt-6c001.appspot.com",
    messagingSenderId: "4624389096",
    appId: "1:4624389096:web:3bee24b25c5f5bb0254a5d"
  };

  const app =firebase.initializeApp(firebaseConfig);

  export const storage = getStorage(app);

  export const auth = getAuth(app);

  export default firebase;




// const firebaseApp = initializeApp(firebaseConfig);
// const db = getFirestore(firebaseApp);
// const db = firebaseApp.firestore();
// const auth = getAuth(firebaseApp);

// export {db, auth};

