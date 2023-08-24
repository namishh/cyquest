import { useEffect, useState } from "react"
import wallpaper from "../assets/rock.jpeg"
import { useGameContext } from "../context/game"
import { useDate } from "../context/time"
import BaseWindow from "../cmps/BaseWindow"
import files from "../files"
import DesktopIcon from "../cmps/DesktopIcon"


const Home = () => {
  const time = useDate()
  const { acc, gameData, setGame, windows, setWindows } = useGameContext()
  const [openMenu, setOpenMenu] = useState(false)
  const logOut = () => {
    localStorage.clear()
    window.location.reload()
  }
  return <div className="w-screen h-screen bg-cover" style={{
    backgroundImage: `url(${wallpaper})`
  }}>
    <div className="h-[91vh] relative">
      <div className="p-4 pointer-events-none absolute grid h-full grid-rows-6 grid-columns-12">
        {files.map((i, j) => {
          return <DesktopIcon key={j} picture={`${i.icon}`} name={i.name} d={i} />
        })}
      </div>
      <div className="absolute pointer-events-none top-0 left-0 h-full w-full">
        {windows.map((i, j) => {
          return i.win
        })}
      </div>
    </div>
    <div className="relative h-[9vh] bg-base-100 flex justify-between p-4 items-center">
      {openMenu && <div className="absolute h-[30rem] w-[27rem] left-[0] -top-[30rem] bg-base-100 flex flex-col gap-4 p-4">
        <div className="text-xl cursor-pointer p-4 bg-neutral rounded-lg">{acc.email}</div>
        <div className="text-xl p-4 cursor-pointer">Leaderboard</div>
        <div onClick={logOut} className="text-xl p-4 cursor-pointer">Logout</div>
      </div>}
      <img onClick={() => setOpenMenu(!openMenu)} className="cursor-pointer" src="./windows.png" alt="" />
      <div className="flex flex-col">
        <p className="text-md">{time.time}</p>
        <p className="text-md">{time.date}</p>
      </div>
    </div>
  </div >
}

export default Home
