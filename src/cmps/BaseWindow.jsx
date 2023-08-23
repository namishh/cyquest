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
  return <div className="absolute pointer-events-none"><Draggable handle=".handle">
    <div className=" pointer-events-auto h-[30rem] w-[30rem] rounded-lg bg-white">
      <div className="top p-4 bg-neutral rounded-t-lg handle flex justify-between">
        <div onClick={handle} className="h-4 w-4 rounded-full bg-error"></div>
        <div>{file.name}</div>
      </div>
      <div className="p-3">
        {children}
      </div>
    </div>
  </Draggable>
  </div>
}

export default BaseWindow
