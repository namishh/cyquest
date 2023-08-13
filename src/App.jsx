import { useEffect, useState } from "react"
import { auth, provider, db } from "./firebase"
import { signInWithPopup } from "firebase/auth"
import Home from "./pages/Home"
import { collection, setDoc } from "firebase/firestore";
import SignIn from "./pages/SignIn"
import { getDocs, doc } from "firebase/firestore";


const App = () => {
  const [acc, setAcc] = useState("")
  const [gameData, setGameData] = useState({})
  const signIn = function() {
    let json = {}
    signInWithPopup(auth, provider).then(data => {
      json = {
        displayName: data.user.displayName,
        email: data.user.email,
        pfp: data.user.photoURL,
        uid: data.user.uid
      }
      setAcc(json)
      localStorage.setItem("user", JSON.stringify({ ...json }))
    })
  }
  useEffect(() => {
    (async () => {
      const jdata = JSON.parse(localStorage.getItem("user"))
      if (!jdata) return
      setAcc(jdata)
      const col = collection(db, 'users')
      const a = await getDocs(col)
      const b = a.docs.map(doc => ({ data: doc.data() }))
      const exists = b.find(c => c.data.uid === jdata.uid)
      if (!exists) {
        setDoc(doc(db, 'users', (jdata.uid)), { uid: jdata.uid, level: 0 }).then(a => console.log(a))
        setGameData({ uid: jdata.uid, level: 0 })
      } else {
        setGameData({ uid: exists.data.uid, level: exists.data.level })
      }
    })();
    return () => {
      // this now gets called when the component unmounts
    };
  }, []);
  return (
    <>
      {acc ? <Home acc={acc} game={gameData} /> : <SignIn signin={signIn} />}
    </>
  )
}

export default App
