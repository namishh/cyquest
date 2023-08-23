import React, { createContext, useContext, useState } from "react"

// create Game context
const GameContext = createContext()

// create context provider
export const GameProvider = ({ children }) => {
  const [acc, setAcc] = useState("")
  const [gameData, setGameData] = useState({})
  const [windows, setWindows] = useState([])
  return (
    <GameContext.Provider value={{ acc, setAcc, gameData, setGameData, windows, setWindows }}>
      {children}
    </GameContext.Provider>
  )
}

export const useGameContext = () => {
  return useContext(GameContext)
}

