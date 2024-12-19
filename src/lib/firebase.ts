import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyClVeNWIHILKWTjBNmqV4rbN9gv2e0n3dY",
  authDomain: "jobdata-e8775.firebaseapp.com",
  projectId: "jobdata-e8775",
  storageBucket: "jobdata-e8775.firebasestorage.app",
  messagingSenderId: "224503937506",
  appId: "1:224503937506:web:6765fb73e34b8ca881e1bb"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);