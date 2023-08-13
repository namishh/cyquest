import Draggable from "react-draggable"

const Basic = ({ children, app }) => {

  return (<Draggable>
    <div className="box h-[400px] w-[400px] bg-zinc-950 rounded-md">
      <div id="elemheader" className="bg-zinc-900 flex justify-between p-4 rounded-md">
        <div className="w-4 h-4 rounded-full bg-error"></div>
        <p className="text-sm leading-0 m-0 p-0 font-mono text-white">{app}</p>
      </div>
      <div className="content p-4 font-mono">
        {children}
      </div>
    </div>
  </Draggable>)
}

export default Basic
