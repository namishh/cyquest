import questions from "../questions"
import { useGameContext } from "../context/game"
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase"
import { useState, useEffect } from "react"
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify"
import { encodeRailFenceCipher } from "./helper";
let loadDB = function(str, amount) {
  if (amount < 0) {
    return loadDB(str, amount + 26);
  }
  var output = "";
  for (let i = 0; i < str.length; i++) {
    let c = str[i];
    if (c.match(/[a-z]/i)) {
      let code = str.charCodeAt(i);
      if (code >= 65 && code <= 90) {
        c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
      }
      else if (code >= 97 && code <= 122) {
        c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
      }
    }
    output += c;
  }
  return output;
};
const QuestionBoard = () => {
  const { question, setQuestion, acc, info, setInfo } = useGameContext()
  const [answer, setAnswer] = useState("")
  console.log(question)
  const totalQuestions = questions.length
  const handleSubmit = (e) => {
    e.preventDefault()
    setAnswer("")
    if (loadDB(encodeRailFenceCipher(loadDB(answer, Number(process.env.REACT_APP_LOADING)), Number(process.env.REACT_APP_RAIL)), Number(process.env.REACT_APP_LOADING2)) === question.answer) {
      if (info.level < totalQuestions) {
        setQuestion(questions[info.level])
        toast("🎉 Correct Answer!!")
        setInfo({ ...info, level: info.level + 1, lastUpdate: Date.now() })
        setDoc(doc(db, 'users', (info.uid)), { ...info, level: info.level + 1, lastUpdate: Date.now() }).then(a => console.log(a))
      }
      else {
        toast("🎉 Game Ended!!")
        setInfo({ ...info, displayName: info.displayName + " 👑 ", lastUpdate: Date.now() })
        setDoc(doc(db, 'users', (info.uid)), { ...info, displayName: info.displayName + " 👑 ", lastUpdate: Date.now() }).then(a => console.log(a))
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
        <input disabled={info.level >= 25 ? true : false} className=" bg-transparent p-4 w-[30rem] h-[4rem] outline-none" value={answer}
          onChange={(e) => setAnswer(e.target.value)} />
      </div>
    </form>
  </div>
}

export default QuestionBoard
