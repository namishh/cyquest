import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase"
import { useEffect, useState } from "react";
const LeaderBoard = () => {
  const [chats, setChats] = useState([])
  useEffect(() => {
    const doit = async () => {
      let ch = []
      setChats([])
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        ch = [...ch, { lvl: doc.data().level, user: doc.data().email }]
      });
      ch.sort((a, b) => Number(b.lvl) - Number(a.lvl));
      setChats(ch)
    }
    doit()
    return () => {
    };
  }, [])
  return <div className="h-[30rem] w-[30rem]">
    <div class="overflow-x-auto">
      <table class="table table-zebra">
        <thead>
          <tr>
            <th></th>
            <th>User</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {chats.map((i, j) => {
            return <tr key={j} >
              <th>{j + 1}</th>
              <td>{i.user}</td>
              <td>{i.lvl}</td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  </div>
}

export default LeaderBoard
