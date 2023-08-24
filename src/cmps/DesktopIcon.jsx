import { useGameContext } from "../context/game.js"
import BaseWindow from "./BaseWindow.jsx"

const DesktopIcon = ({ picture, name, d }) => {
  const { windows, setWindows } = useGameContext()
  function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
      .replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0,
          v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
  }
  const handle = () => {
    const id = uuidv4()
    setWindows([...windows, { file: d, win: <BaseWindow file={d} id={id}>{d.comp}</BaseWindow>, id }])
  }
  return (
    <div className="pointer-events-auto cursor-pointer" onClick={handle}>
      <div className={`p-2 z-[213123]  w-16 inline-flex flex-col justify-center items-center inline-block gap-2`}>
        <img src={`${picture}.png`} className="h-12 w-12" alt="" />
        <p className="text-lg text-[#fff] ">{name}</p>
      </div>
    </div>
  )
}

export default DesktopIcon
