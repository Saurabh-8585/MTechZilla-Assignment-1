import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyAQFBYiaOFp-R5X_tNHoIQQLYFCEyTUkg0",
    authDomain: "mtech-2-c9c8c.firebaseapp.com",
    projectId: "mtech-2-c9c8c",
    storageBucket: "mtech-2-c9c8c.appspot.com",
    messagingSenderId: "921772723802",
    appId: "1:921772723802:web:31b25a5804ffa6299c1263",
    measurementId: "G-KB351TN4QJ"
};

const app = initializeApp(firebaseConfig);
export const database = getAuth(app)