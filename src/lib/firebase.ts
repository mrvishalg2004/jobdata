import { initializeApp } from 'firebase/app';
    import { getAuth } from 'firebase/auth';
    import { getFirestore } from 'firebase/firestore';

    const firebaseConfig = {
      apiKey: "AIzaSyB0lM_2WTAC7XeF7uHPvNleHWt4TtL6gSs",
      authDomain: "jobsave-73ac0.firebaseapp.com",
      databaseURL: "https://jobsave-73ac0-default-rtdb.firebaseio.com",
      projectId: "jobsave-73ac0",
      storageBucket: "jobsave-73ac0.firebasestorage.app",
      messagingSenderId: "480087591682",
      appId: "1:480087591682:web:52b0743dccd48d8772901b",
      measurementId: "G-7Q1V4MSCDS"
    };

    const app = initializeApp(firebaseConfig);
    export const auth = getAuth(app);
    export const db = getFirestore(app);
