import { initializeApp } from "firebase/app";   
import { getDatabase } from "firebase/database";


// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyBy4GsSEnr411eMVlmBWfpSmiqP8C9q6ew",
authDomain: "esp-communicate.firebaseapp.com",
databaseURL: "https://esp-communicate-default-rtdb.firebaseio.com",
projectId: "esp-communicate",
storageBucket: "esp-communicate.appspot.com",
messagingSenderId: "353171807513",
appId: "1:353171807513:web:00e5134b223ceae877b988",
measurementId: "G-1NS3VS2P0G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);    

//initizile database
export const db = getDatabase(app);