import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyBXodyvnL6uJtyqRoCaFczDKUDTdwq8-pU",
  authDomain: "whatsapp-clone-79212.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-79212.firebaseio.com",
  projectId: "whatsapp-clone-79212",
  storageBucket: "whatsapp-clone-79212.appspot.com",
  messagingSenderId: "1060905148819",
  appId: "1:1060905148819:web:45c7d3a9196c714fbb0866",
  measurementId: "G-XFDHJV1PWK"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider};
export default db;