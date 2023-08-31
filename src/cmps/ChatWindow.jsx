import { useState } from "react"
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { db } from "../firebase"
import { collection, setDoc, getDocs, doc } from "firebase/firestore";

import { useGameContext } from "../context/game"

const ChatWindow = () => {
  const { gameData, setGameData } = useGameContext()
  const [text, setText] = useState("");
  const [logs, setLogs] = useState(gameData.chats[0].logs)
  const [user, setUser] = useState(gameData.chats[0].name)
  const onSubmit = async (e) => {
    e.preventDefault()
    toast("Remember that sending messages is just for completeness of app and does nothing to progress the game!");
    if (text !== "") {
      const data = gameData
      const msg = "^" + text
      console.log(msg)
      let t = data.chats.filter(cht => cht.name === user)[0]
      let n = data.chats.filter(cht => cht.name !== user)
      let d = t
      let newChats = [...n, t]
      data.chats = newChats
      d.logs.push(msg)
      console.log(data.chats)
      const col = collection(db, 'users')
      const a = await getDocs(col)
      const b = a.docs.map(doc => ({ data: doc.data() }))
      const exists = b.find(c => c.data.uid === gameData.uid)
      setGameData({ uid: exists.data.uid, level: exists.data.level, chats: newChats })
      setText('')
    }
  }
  return <div className="w-[54rem] overflow-scroll h-[32rem] flex">
    <div className="p-4 bg-[#111] w-48 flex-col flex justify-start gap-2">
      {gameData.chats.map((i, j) => {
        return <div onClick={() => {
          setUser(i.name)
          const a = gameData.chats.filter(b => b.name === i.name)[0]
          setLogs(a.logs)
        }
        } key={j}>
          <p className={`cursor-pointer p-2 rounded-lg ${user === i.name ? 'bg-primary font-bold text-black' : ''}`}>{i.name}</p>
        </div>
      })}
    </div>
    <div className="flex-col overflow-scroll h-[32rem] flex px-2 justify-end gap-2">
      {logs.map((i, j) => {
        return <div className={`p-2 text-black max-w-[30rem] rounded-lg ${i.startsWith("~") ? 'self-start bg-info' : 'self-end bg-primary'}`} key={j}>{i.slice(1)}</div>
      })}
      <form onSubmit={onSubmit} className="flex items-center">
        <button type="submit"><img className="h-10 mr-2" src="./send.png" alt="send" /></button>
        <div className="relative bg-[#0c0c0c] mt-2" data-te-input-wrapper-init>
          <input type="text" className="bg-transparent p-4 w-[38.1rem] h-[3rem] outline-none" value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </form>
    </div>
  </div>
}


export default ChatWindow


