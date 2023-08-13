import { useEffect, useState } from "react"
import { auth, provider } from "./firebase"
import { signInWithPopup } from "firebase/auth"
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
const App = () => {
  const [acc, setAcc] = useState("")
  const signIn = function() {
    signInWithPopup(auth, provider).then(data => {
      const json = {
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
    setAcc(JSON.parse(localStorage.getItem("user")))
  }, [])
  return (
    <>
      {acc ? <Home acc={acc} /> : <SignIn signin={signIn} />}
    </>
  )
}

export default App
