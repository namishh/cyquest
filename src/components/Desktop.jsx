import Icon from "./dp/Icon"
import { useContext } from 'react';
import { Context } from '../context';
import Basic from "./apps/Basic"
const Desktop = () => {
  const {files, apps} = useContext(Context);
  return (
    <>
      <div className="desktop relative p-4 h-[91vh] grid grid-rows-6 grid-columns-12" style={{ backgroundImage: 'url("./haunted.png")' }}>
        {apps.map((i, j) => {
          return i.showOnDesktop && <Icon key={j} picture={`${i.name}.png`} name={i.name} f={i.f} />
        })}
        {files.map((i, j) => {
          return <Icon key={j} picture={`${i.icon}.png`} name={i.name} f={i.f} />
        })}
        <div className="absolute">
        </div>
      </div>
    </>
  )
}

export default Desktop
