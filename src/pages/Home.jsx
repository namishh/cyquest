import { useEffect, useState } from "react"
import wallpaper from "../assets/rock.jpeg"
import { useGameContext } from "../context/game"
import { useDate } from "../context/time"
import files from "../files"
import DesktopIcon from "../cmps/DesktopIcon"
import { ToastContainer, toast } from 'react-toastify';
import CalAndWeather from "../cmps/CalAndWeather"

const Home = () => {
  const time = useDate()
  const { acc, windows, info, gameData } = useGameContext()
  const [openMenu, setOpenMenu] = useState(false)
  const [openCal, setOpenCal] = useState(false)
  const logOut = () => {
    localStorage.clear()
    window.location.reload()
  }
  return <div className="w-screen h-screen bg-cover" style={{
    backgroundImage: `url(${wallpaper})`
  }}>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
    <div className="h-[91vh] relative">
      <div className="p-8 pointer-events-none absolute h-[91vh] flex flex-col  flex-wrap">
        {info != {} && files.map((i, j) => {
          return info.level >= i.level && <DesktopIcon key={j} picture={`${i.icon}`} name={i.name} d={i} />
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
        <div className="text-xl flex gap-4 p-4 bg-neutral rounded-lg justify-between"><img className="h-8 w-8" src="./profile.png" />{acc.email}</div>
        <div onClick={logOut} className="text-xl p-4 cursor-pointer">Logout</div>
      </div>}
      {openCal && <CalAndWeather />}
      <img onClick={() => setOpenMenu(!openMenu)} className="cursor-pointer" src="./windows.png" alt="" />
      <div onClick={() => setOpenCal(!openCal)} className="cursor-pointer flex flex-col">
        <p className="text-md">{time.time}</p>
        <p className="text-md">{time.date}</p>
      </div>
    </div>
  </div >
}

export default Home
