import React, { createContext, useContext, useState } from "react"
import questions from "../questions"

const GameContext = createContext()

// create context provider
export const GameProvider = ({ children }) => {
  const [acc, setAcc] = useState("")
  const [gameData, setGameData] = useState({})
  const [windows, setWindows] = useState([])
  const [questionIndex, setQuestionIndex] = useState(0)
  const [question, setQuestion] = useState(questions[0])
  return (
    <GameContext.Provider value={{ acc, setAcc, gameData, setGameData, windows, setWindows, question, setQuestion, questionIndex, setQuestionIndex }}>
      {children}
    </GameContext.Provider>
  )
}

export const useGameContext = () => {
  return useContext(GameContext)
}

