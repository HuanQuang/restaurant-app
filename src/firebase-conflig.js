import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
    apiKey: 'AIzaSyC2oqUnZ8S-zibbVRJ_38D9z1E9GMfEhSI',
    authDomain: 'food-app-aa205.firebaseapp.com',
    projectId: 'food-app-aa205',
    storageBucket: 'food-app-aa205.appspot.com',
    messagingSenderId: '317292877601',
    appId: '1:317292877601:web:fdb92de5b743212f135060',
    measurementId: 'G-HWNVCKC3PK',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
