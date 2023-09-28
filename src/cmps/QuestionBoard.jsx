import questions from "../questions"
import { useGameContext } from "../context/game"
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase"
import { useState, useEffect } from "react"
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify"

const QuestionBoard = () => {
  const { question, setQuestion, acc, } = useGameContext()
  const [answer, setAnswer] = useState("")
  const totalQuestions = questions.length
  const [info, setInfo] = useState({})
  const handleSubmit = (e) => {
    e.preventDefault()
    setAnswer("")
    if (answer === question.answer) {
      console.log(info, totalQuestions)
      if (info.level < totalQuestions) {
        setInfo({ ...info, level: info.level + 1 })
        setQuestion(questions[info.level])
        toast("🎉 Correct Answer!!")
        setDoc(doc(db, 'users', (info.uid)), { ...info, level: info.level + 1 }).then(a => console.log(a))
      }
      else {
        toast("🎉 Game Ended!!")
      }
    } else {
      toast("😠 Wrong Answer!!")
    }
  }
  useEffect(() => {
    const doit = async () => {
      var user = {}
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
        const data = doc.data()
        if (data.uid === acc.uid) {
          user = doc.data()
          setInfo(doc.data())
        }
      });
      const level = user.level
      setQuestion(questions[level - 1])
    }
    doit()
    return () => {
    };
  }, [])
  return <div className="p-8 min-w-[20rem]">
    <p className="font-bold">Level {question.lvl}</p>
    <p>{question.question}</p>
    <form action="#" onSubmit={handleSubmit}>
      <div className="mt-8 relative bg-[#1c1c1c]" data-te-input-wrapper-init>
        <input className=" bg-transparent p-4 w-[30rem] h-[4rem] outline-none" value={answer}
          onChange={(e) => setAnswer(e.target.value)} />
      </div>
    </form>
  </div>
}

export default QuestionBoard
