import { useState } from "react"
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { db } from "../firebase"
import BaseWindow from "./BaseWindow";
import { collection, getDocs } from "firebase/firestore";

import { useGameContext } from "../context/game"

let chats = [
  {
    name: "Sherlock",
    logs: [
      "~Hi! How are you!"
    ]
  },
  {
    name: "Watson",
    logs: [
      "~Hi! How are you!",
      "^I am doing fine",
      "^kys lol",
      "~Ok boomer",
    ]
  },
]

const ChatWindow = () => {
  function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
      .replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0,
          v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
  }
  const { windows, setWindows, gameData, setGameData } = useGameContext()
  const handle = (d) => {
    const id = uuidv4()
    setWindows([...windows, { file: d, win: <BaseWindow file={d} id={id}>{d.comp}</BaseWindow>, id }])
  }
  const [text, setText] = useState("");
  const [logs, setLogs] = useState(chats[0].logs)
  const [user, setUser] = useState(chats[0].name)
  const onSubmit = async (e) => {
    e.preventDefault()
    toast("Remember that sending messages is just for completeness of app and does nothing to progress the game!");
    if (text !== "") {
      const data = gameData
      const msg = "^" + text
      let t = chats.filter(cht => cht.name === user)[0]
      let n = chats.filter(cht => cht.name !== user)
      let d = t
      let newChats = [...n, t]
      chats = newChats
      d.logs.push(msg)
      console.log(data.chats)
      const col = collection(db, 'users')
      const a = await getDocs(col)
      const b = a.docs.map(doc => ({ data: doc.data() }))
      const exists = b.find(c => c.data.uid === gameData.uid)
      setText('')
      console.log(msg)
      if (text === "secretcode" && user == "Sherlock") {
        const file1 = {
          name: 'TOP LEVEL SECRET WINDOW',
          icon: 'image',
          level: 1,
          comp: <p className="p-8">SECRET WINDOW PASS CODE - 1234</p>,
        }
        handle(file1)
      }
    }
  }
  return <div className="w-[54rem] h-[32rem] flex">
    <div className="p-4 bg-[#111] w-48 flex-col flex justify-start gap-2">
      {gameData.chats.map((i, j) => {
        return <div onClick={() => {
          setUser(i.name)
          const a = chats.filter(b => b.name === i.name)[0]
          setLogs(a.logs)
        }
        } key={j}>
          <p className={`cursor-pointer p-2 rounded-lg ${user === i.name ? 'bg-primary font-bold text-black' : ''}`}>{i.name}</p>
        </div>
      })}
    </div>
    <div className="flex-col h-[32rem] flex px-2 justify-end gap-2">
      <div className="overflow-scroll grow max-h-[32rem]">
        {logs.map((i, j) => {
          return <div className={`my-4 flex ${i.startsWith("~") ? 'justify-start' : 'justify-end'} `}><p className={`p-2 inline text-black rounded-lg ${i.startsWith("~") ? 'bg-info ' : 'bg-primary'}`} key={j}>{i.slice(1)}</p></div>
        })}
      </div>
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


