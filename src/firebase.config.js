


import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore} from 'firebase/firestore';
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBLobQsKalKVAXW5fLaPqPd01DjTuEnZ5E",
  authDomain: "ecommerce-935e2.firebaseapp.com",
  projectId: "ecommerce-935e2",
  storageBucket: "ecommerce-935e2.appspot.com",
  messagingSenderId: "325907101915",
  appId: "1:325907101915:web:abb78eded8776d6002b4fe"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;