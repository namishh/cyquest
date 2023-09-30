import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase"
import { useEffect, useState } from "react";
import { useGameContext } from "../context/game"
const LeaderBoard = () => {
  const [chats, setChats] = useState([])
  const { question } = useGameContext()
  useEffect(() => {
    const doit = async () => {
      let ch = []
      setChats([])
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        ch = [...ch, { lvl: doc.data().level, user: doc.data().displayName }]
      });
      ch.sort((a, b) => Number(b.lvl) - Number(a.lvl));
      setChats(ch)
    }
    doit()
    return () => {
    };
  }, [])
  return <div className="min-h-[30rem] min-w-[30rem]">
    For reasons, close and open the leaderboard again to refresh it
    <div className="overflow-x-auto">
      <table className="table table-zebra">
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
              <td>{i.user.toUpperCase()}</td>
              <td>{i.lvl * 1000}</td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  </div>
}

export default LeaderBoard
