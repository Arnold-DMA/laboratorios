import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBIPZVWhMXNXp_Xm5drW0lToDANrhznjuo",
    authDomain: "labspe-e042d.firebaseapp.com",
    projectId: "labspe-e042d",
    storageBucket: "labspe-e042d.appspot.com",
    messagingSenderId: "923061743290",
    appId: "1:923061743290:web:aa60b513551d0a5dee5c83"
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;