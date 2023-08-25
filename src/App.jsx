import { useEffect, useState } from "react"
import { auth, db } from "./firebase"
import { signInWithEmailAndPassword } from "firebase/auth"
import Home from "./pages/Home"
import { collection, setDoc } from "firebase/firestore";
import { getDocs, doc } from "firebase/firestore";
import { useGameContext } from "./context/game";
import chats from "./chat";

import Background from "./cmps/Background"
const SignIn = ({ signin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAcc, setGameData } = useGameContext()

  const signIn = (e) => {
    e.preventDefault();
    let json = {}
    signInWithEmailAndPassword(auth, email, password).then(async data => {
      json = {
        email: data.user.email,
        uid: data.user.uid,
      }
      setAcc(json)
      const col = collection(db, 'users')
      const a = await getDocs(col)
      const b = a.docs.map(doc => ({ data: doc.data() }))
      const exists = b.find(c => c.data.uid === json.uid)
      if (!exists) {
        setDoc(doc(db, 'users', (json.uid)), { uid: json.uid, level: 1, chats: chats }).then(a => console.log(a))
        setGameData({ uid: json.uid, level: 1, chats })
      } else {
        setGameData({ uid: exists.data.uid, level: exists.data.level, chats: exists.data.chats })
      }
      localStorage.setItem("user", JSON.stringify({ ...json }))
    }).catch(err => {
      console.log("no user lol")
    })
  };
  return <div className="w-screen h-screen flex justify-center items-center">
    <Background />
    <div className="z-[1223] ">
      <form onSubmit={signIn} className="flex z-[1223]  gap-8 flex-col items-center justify-center">
        <h1 className="text-6xl text-center font-extrabold mb-4">Welcome to cyquest</h1>
        <div className="relative bg-neutral" data-te-input-wrapper-init>
          <input type="text" className="bg-transparent p-4 w-[30rem] h-[4rem] outline-none" value={email}
            onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="relative bg-neutral" data-te-input-wrapper-init>
          <input type="password" className=" bg-transparent p-4 w-[30rem] h-[4rem] outline-none" value={password}
            onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="relative bg-neutral" data-te-input-wrapper-init>
        </div>
        <button type="submit" className="px-7 py-4 bg-neutral text-white flex items-center gap-4" onClick={signin}><img className="h-8 w-8" src="./signin.png" />
          Sign In With Email</button>
      </form>
    </div>
  </div>
}


const App = () => {
  const { acc, setAcc, setGameData } = useGameContext()
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
        setDoc(doc(db, 'users', (jdata.uid)), { uid: jdata.uid, level: 1, chats: chats }).then(a => console.log(a))
        setGameData({ uid: jdata.uid, level: 1, chats: chats })
      } else {
        setGameData({ uid: exists.data.uid, level: exists.data.level, chats: exists.data.chats })
      }
    })();
    return () => {
      // this now gets called when the component unmounts
    };
  }, []);
  return (
    <>
      {acc ? <Home /> : <SignIn />}
    </>
  )
}

export default App
