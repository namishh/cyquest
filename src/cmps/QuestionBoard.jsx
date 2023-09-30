import questions from "../questions"
import { useGameContext } from "../context/game"
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase"
import { useState, useEffect } from "react"
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify"
import { encodeRailFenceCipher } from "./helper";
var loadDB = function(str, amount) {
  if (amount < 0) {
    return loadDB(str, amount + 26);
  }
  var output = "";
  for (var i = 0; i < str.length; i++) {
    var c = str[i];
    if (c.match(/[a-z]/i)) {
      var code = str.charCodeAt(i);
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
  const totalQuestions = questions.length
  const handleSubmit = (e) => {
    e.preventDefault()
    setAnswer("")
    if (encodeRailFenceCipher(loadDB(answer, Number(process.env.REACT_APP_LOADING)), Number(process.env.REACT_APP_RAIL)) === question.answer) {
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
