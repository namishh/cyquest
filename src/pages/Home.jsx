import { useEffect, useState } from "react"
import wallpaper from "../assets/rock.jpeg"
import { useGameContext } from "../context/game"
import { useDate } from "../context/time"
const Home = () => {
  const time = useDate()
  const { acc, gameData, setGame } = useGameContext()
  console.log(gameData)
  const logOut = () => {
    localStorage.clear()
    window.location.reload()
  }
  return <div className="w-screen h-screen bg-cover" style={{
    backgroundImage: `url(${wallpaper})`
  }}>
    <div className="h-[93vh]"></div>
    <div className="h-[7vh] bg-neutral flex justify-between p-2 items-center">
      <img src="./windows.png" alt="" />
      <div className="flex flex-col">
        <p className="text-md">{time.time}</p>
        <p className="text-md">{time.date}</p>
      </div>
    </div>
  </div >
}

export default Home
