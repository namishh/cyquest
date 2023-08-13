import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messageSenderId: process.env.REACT_APP_MESSAGESENDERID,
  appId: process.env.REACT_APP_APPID,
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app);
const auth = getAuth(app)
const provider = new GoogleAuthProvider

export { auth, provider, db }
