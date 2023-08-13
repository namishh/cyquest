import Icon from "./tb/Icon"
import { useDate } from "../hooks/time"
import apps from "../apps"
function Taskbar() {
  const time = useDate()
  return (
    <>
      <div className="navbar bg-neutral">
        <div className="navbar-start">
          <Icon picture='./windows.png' />
        </div>
        <div className="navbar-center flex gap-4">
          {apps.map((i, j) => {
            return i.showOnBar && <Icon key={j} picture={`${i.name}.png`} active={i.active} />
          })}
        </div>
        <div className="navbar-end">
          <div className="flex flex-col">
            <p className="text-md">{time.time}</p>
            <p className="text-md">{time.date}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Taskbar

