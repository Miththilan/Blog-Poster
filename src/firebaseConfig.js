import {initializeApp} from 'firebase/app'
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBQ_bm14cBreJxO-ObmjbzU47dhHtd4fck",
  authDomain: "assignment-e116a.firebaseapp.com",
  projectId: "assignment-e116a",
  storageBucket: "assignment-e116a.appspot.com",
  messagingSenderId: "1049307534153",
  appId: "1:1049307534153:web:efb3e98459b488a1fac098"
};

  const app = initializeApp(firebaseConfig);

  export const storage = getStorage(app);
  export const db = getFirestore(app);
  export const auth =getAuth(app);