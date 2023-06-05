import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
const firebaseConfig = {
    apiKey: 'AIzaSyAscFbATArc12s_wV2DTKpZ8zLINKc-H-Y',
    authDomain: 'crud-233f4.firebaseapp.com',
    projectId: 'crud-233f4',
    storageBucket: 'crud-233f4.appspot.com',
    messagingSenderId: '3718356290',
    appId: '1:3718356290:web:0ca65cdc9fe9565d7cfcdb',
    measurementId: 'G-TRQKDRS0J7',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
