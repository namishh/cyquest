import { useState } from "react"
import { toast } from 'react-toastify';
import { useGameContext } from "../context/game"
import BaseWindow from "./BaseWindow";
const Calculator = () => {
  const [value, setValue] = useState("")
  const { windows, setWindows } = useGameContext()
  function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
      .replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0,
          v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
  }
  const handle = (d) => {
    const id = uuidv4()
    setWindows([...windows, { file: d, win: <BaseWindow file={d} id={id}>{d.comp}</BaseWindow>, id }])
  }
  const reset = () => {
    setValue("")
  }
  const back = () => {
    setValue(value.slice(0, -1))
  }
  const evalueExpresion = () => {
    try {
      const evaluar = eval(value)
      setValue(evaluar.toString())

      if (evaluar == 4) {
        const file1 = {
          name: 'TOP LEVEL SECRET WINDOW',
          icon: 'image',
          level: 1,
          comp: <p className="p-8">SECRET WINDOW PASS CODE - 1234</p>,
        }
        handle(file1)
        console.log("access granted")
      }
    } catch (error) {
      toast("Someone is trying to cook garbage!! 🔥🔥 ")
    }
  }

  return <div className="p-5 bg-base-100">
    <form className="calculator ">
      <div className="display">
        <input placeholder="0" type="text" value={value}></input>
      </div>
      <div>
        <input onClick={reset} className="acb" type="button" value="AC"></input>
        <input onClick={back} className="deb" type="button" value="DE"></input>
        <input type="button" onClick={e => setValue(value + e.target.value)} value="."></input>
        <input type="button" onClick={e => setValue(value + e.target.value)} value="/"></input>
      </div>
      <div>
        <input type="button" onClick={e => setValue(value + e.target.value)} value="7"></input>
        <input type="button" onClick={e => setValue(value + e.target.value)} value="8"></input>
        <input type="button" onClick={e => setValue(value + e.target.value)} value="9"></input>
        <input type="button" onClick={e => setValue(value + e.target.value)} value="*"></input>
      </div>
      <div>
        <input type="button" onClick={e => setValue(value + e.target.value)} value="4"></input>
        <input type="button" onClick={e => setValue(value + e.target.value)} value="5"></input>
        <input type="button" onClick={e => setValue(value + e.target.value)} value="6"></input>
        <input type="button" onClick={e => setValue(value + e.target.value)} value="+"></input>
      </div>
      <div>
        <input type="button" onClick={e => setValue(value + e.target.value)} value="1"></input>
        <input type="button" onClick={e => setValue(value + e.target.value)} value="2"></input>
        <input type="button" onClick={e => setValue(value + e.target.value)} value="3"></input>
        <input type="button" onClick={e => setValue(value + e.target.value)} value="-"></input>
      </div>
      <div>
        <input type="button" onClick={e => setValue(value + e.target.value)} value="0"></input>
        <input type="button" onClick={e => setValue(value + e.target.value)} value="00"></input>
        <input onClick={evalueExpresion} className="eb" type="button" value="="></input>
      </div>
    </form>
  </div>
}


export default Calculator
