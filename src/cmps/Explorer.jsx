import { useState } from "react"
import folders from "../fol"
import DesktopIcon from "./DesktopIcon"
import { useGameContext } from "../context/game"
const Explorer = () => {
  const [folder, setFolder] = useState("Home")
  const { info } = useGameContext()
  const [files, setFiles] = useState(folders[0].files)
  return <div className="h-[38rem] w-[60rem] flex">
    <div className="p-4 bg-[#111] w-48 flex-col flex justify-start gap-2">
      {folders.map((i, j) => {
        return <div onClick={() => {
          setFolder(i.name)
          const a = folders.filter(b => b.name === i.name)[0]
          setFiles(a.files)
        }
        } key={j}>
          <div className={`cursor-pointer p-2 items-center rounded-lg ${folder === i.name ? 'bg-[#141414] font-bold' : ''} flex gap-2`}>
            <img className="h-8" src={`./${i.image}.png`} />
            <p>{i.name}</p>
          </div>
        </div>
      })}
    </div>
    <div className="p-4 px-16 bg-[#141414] flex flex-wrap gap-4 grow">
      {info != {} && files.map((i, j) => {
        return info.level >= i.level && <DesktopIcon key={j} picture={`${i.icon}`} name={i.name} d={i} />
      })}

    </div>
  </div>
}

export default Explorer
