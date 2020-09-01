import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAGc2IlJdlXS0k35jlV2E5QJJcZrCsZ7ok",
    authDomain: "mcinar-whatsapp-clone.firebaseapp.com",
    databaseURL: "https://mcinar-whatsapp-clone.firebaseio.com",
    projectId: "mcinar-whatsapp-clone",
    storageBucket: "mcinar-whatsapp-clone.appspot.com",
    messagingSenderId: "407534698556",
    appId: "1:407534698556:web:d93091f33126e21bcc8339"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {
    auth,
    provider
};
export default db;