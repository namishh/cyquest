import Taskbar from "./components/Taskbar"
import Desktop from "./components/Desktop"
import { Context } from "./context"

import apps from "./apps";
import files from "./files";
function App() {
  return (
    <>
      <Context.Provider value={{files:files, apps:apps, level:0}}>
        <Desktop />
        <Taskbar />
      </Context.Provider>
    </>
  )
}

export default App
