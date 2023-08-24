import Draggable from "react-draggable"
import { useGameContext } from "../context/game.js"

const BaseWindow = ({ children, file, id }) => {
  let { windows, setWindows } = useGameContext()
  const handle = () => {
    console.log(id)
    const wins = windows.filter(i => i.id === id)
    const win = wins[0]
    windows = windows.filter(item => item.id !== win.id)
    setWindows(windows)
  }
  return <Draggable bounds="parent" handle=".handle">
    <div className={`absolute pointer-events-auto rounded-lg bg-neutral`}>
      <div className="top p-4 bg-base-100 rounded-t-lg handle flex justify-between">
        <div onClick={handle} className="cursor-pointer h-4 w-4 rounded-full bg-error"></div>
        <div>{file.name}</div>
      </div>
      <div className="p-3">
        {children}
      </div>
    </div>
  </Draggable>
}

export default BaseWindow
