import { useState } from "react"
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { db } from "../firebase"
import BaseWindow from "./BaseWindow";
import { collection, getDocs } from "firebase/firestore";

import { useGameContext } from "../context/game"

let chats = [
  {
    lvl: 1,
    name: "Mrs Patel",
    logs: [
      "~Dhruv, can you help me move some furniture this Saturday?",
      "^Sure Aunty, I’ll come around 12..",
      "~Thank you, dear. You're such a kind neighbor.",
    ]
  },
  {
    lvl: 1,
    name: "Rahul",
    logs: [
      "~Dhruv, you up for a game of chess this weekend?",
      "^Absolutely, Rahul! It's been a while. You're going down!",
    ]
  },
  {
    lvl: 1,
    name: "Nikhil",
    logs: [
      "~Dhruv, did you see the email from theJanya? We have a team meeting at 3 PM",
      "^Thanks for the heads up!. I'll make sure to be there on time 🙂",
      "~Great, see you at the meeting!"
    ]
  },
  {
    lvl: 1,
    name: "Priya",
    logs: [
      "~Dhruv, can you help me with my math homework?",
      "^Of course, Priya! What's the problem?",
      "~It's these algebra equations. I'm so lost!!",
      "^Don't worry, I'll explain it step by step. Let's get on a call tonight."
    ]
  },
  {
    lvl: 1,
    name: "Sarah",
    logs: [
      "~Hey, Dhruv! How's it going?",
      "^Hey Sarah!!",
      "^I'm good, just busy with this assignment for Professor Rajan",
      "~Ugh, assignments are the worst.", "~What's it about?",
      "^It's a research paper on How we can address public fears and misconceptions about AGI, and promote informed discussions on its ethical implications?",
      "^Pretty Heavy Stuff",
      "~Yikes! Lmk if u need help with my degree in art history xd",
      "^Haha, thanks, Sarah. 😄"
    ]
  },
  {
    lvl: 1,
    name: "Prof",
    logs: [
      "~Good evening, Dhruv. I hope you're making good progress on your assignment..",
      "^Hello Sir.. Yes, I'm working on it. I've almost finished the research part and should be ready to start writing soon",
      "~That's great to hear. Remember to follow the assignment guidelines closely. It's an important project",
      "^I have a question about the citation style. Should I use APA or MLA for this one?",
      "~You should use APA style for this assignment, Dhruv. Make sure to include proper citations for all your sources",
      "^Got it! Thanks for clarifying, Professor"
    ]
  },
  {
    lvl: 1,
    name: "Maya",
    logs: [
      "^hi yaar, lmk when and where y’all wanna meet?",
      "~omg so sorry, atharva is taking FOREVER!!! We’ll meet you at the campus in 20?",
      "^hahaha that diva xd. See you!",
      "",
      "~Hey when is the assignment due for Rajan Sir’s class?",
      "^Tomorrow morning. Don’t tell me you haven’t started?",
      "~SHITTT",
      "^bro tt",
      "",
      "~Atharva and i will be right there, had to stop by the store",
      "^Alrr, dw 🙂",
      "",
      "^i swear this is the last time, can u plsplspls send the notes from yesterday’s class?",
      "~dhruv we both know this isn’t the last time. And i’ve already sent them, check ur mail ^^",
      "^aaaah Maya ur the best !!",
      "~that i am 🙂",
      "",
      "~Are you coming today?",
      "^No, i’ve got the flu",
      "~oh no, gws ❤️",
      "",
      "^We’re going to the library, meet us there after your class?",
      "~Sure, will be there in 10. Bring me a coffee if u can haha",
      "",
      "^hey Maya,  how’ve you been holding up? i have a few questions about Atharva's disappearance. Can u help?",
      "~hi Dhruv, what do you need to know?",
      "^Have you had any contact with Atharva since he disappeared? Any messages or calls?",
      "~Dhruv, you really think I had something to do with this? No, I haven't heard from him. It's really worrying",
      "^Sorry, I didn't mean to imply anything. I'm just trying to cover all possibilities. Have you noticed anything unusual or received any strange messages or visits recently?",
      "~No, nothing strange at all. We were just going about our usual routines before he vanished.",
      "^Alright, thanks for answering. I hope you understand, I'm just trying to figure things out.",
      "~ I get it, Dhruv. We're all trying to make sense of this. If you have more questions, feel free to ask",
      "^Thanks, Maya. ❤️  Let's hope we find some answers soon",
    ],
  },
  {
    lvl: 1,
    name: "Atharva",
    logs: [
      "^hey,valo tn?",
      "~sorry can’t bro, maya and i have a date night. Tomorrow?",
      "^cool, dw",
      "",
      "~Did anything important happen in class today?",
      "^yeah, we completed discussions of the last reading. Wanna meet up at the library? I can catch you up",
      "~thank you so much yaar, see you in 15!",
      "",
      "~wya??",
      "^omw, sorry running a little late",
      "~okayy, no worries. Lmk when you’re here.",
      "^just reached, where are you guys?",
      "^oh i see you",
      "^why am i still texting lmao",
      "~lmao",
      "",
      "^Pleaseee send the notes plsplspls",
      "~sent on mail",
      "^THANK YOUUUU",
      "^Bhai your handwriting sucks t_t",
      "~shut upT_T",
      "",
      "~wanna hang out tn?",
      "^sure, see you at 8?",
      "~Sounds good 😄"
    ]
  },
  {
    lvl: 23,
    name: "The Fixer",
    logs: [
      "~hello? who?",
      "^Hey, it's dhruv. I've been following the clues you sent, but I'm not sure about the last one. The mountain? Do I need to go there?",
      "~No, dhruv, that's not where you need to be. You've misinterpreted the clues. You're on the wrong path",
      "^What? But I thought....",
      "~Trust me, dhruv. You're heading in the wrong direction. I can't give you more details right now, but you need to reevaluate everything you've learned so far.",
      "^This is getting really confusing. Atharva's safety is at stake, and I don't have time for these games!",
      "~I understand your frustration, dhruv, but the path to Atharva's location is complex for a reason. Take a step back, re-examine the clues, and you'll find the right way",
      "^But this is too hard! What is even going on? Are you tricking me?",
      "~Fine, I guess I’ll just solve it for you, since you’re so desperate for your best friend. Pay a visit to the place where you met me",
      "^Do I have to travel anywhere?",
      "~Not really. It’s right where you are, right now.",
    ],
  },
  {
    lvl: 23,
    name: "Atharva 2",
    logs: [
      "~hey man ,I’m sorry i went off at you",
      "^it’s alright , I’m sorry i went through your computer",
      "~it’s not okay lmao, just promise me you won’t try to psycho marry me next.",
      "^who knows? by the way do you like pink tulips better or white ones?",
      "~NOO nuh not at all. ditching maya? with you?",
      "^well, you were okay dealing with that creep though... ",
      "~not this again...",
      "^please tell me it was a joke",
      "~ofcourse it was !",
      "^right. you make it hard to trust you. no wonder your fam didn’t stick around",
      "~that’s a bit much brother",
      "^then don’t treat me like crap.",
      "~I’M the one treating YOU like crap?", "~WHO went through WHO’s stuff again????",
      "^WHO refuses to answer simple questions?",
      "~I’m trying to protect your mental health psycho",
      "^really? cause you need it more",
      "^see you around mate",
      "~i’d rather not",
      "",
      "^what in the world are you doing talking to this weirdo who says he’ll give you ‘services’ are you drunk???",
      "~what?",
      "^DO NOT ‘WHAT’ me atharva, i’m this close to tracking you down myself.",
      "~for god’s sake man what happened?",
      "^is this about the drug dealing? god i thought that was a dope! you will not deal with this man.",
      "~i’m not doing anything. stop snooping through my phone.",
      "^alright man, when you get in trouble ,and you will, i’ll just leave you alone to die",
      "~come on bro , this isn’t about you and me helping each other, there is nothing wrong . i dont need your help.",
      "^its just that.. you’ve been a stranger this past week to me and then i see this.",
      "~i’m sorry i know , things at home aren’t looking good",
      "^are you alright man? you seem like you’re in a problem",
      "~I’m okay.",
      "~there’s nothing wrong with ME",
      "~you don't need to babysit me.",
      "~and you don't need to go all father figure on me,",
      "~You DARE go through my stuff again",
      "",
      "^bro you have been ignoring me for a long time. no more excuses, atharva.",
      "^we've been friends for years, and this silence is tearing us apart.",
      "^i've seen you go through a lot, but this? it's different. ",
      "^you're hiding something big, and it's eating at you.",
      "~dhruv",
      "~i wish i could explain everything right now",
      "~but",
      "^you can explain. you should explain. ",
      "^look, i get it, life can be complicated, but shutting me out like this? It's not fair, man. We’re in this together.",
      "~dhruv, it's just... it's dangerous, okay? I can't involve you. I thought I could handle it on my own, but now it's... it's overwhelming.",
      "~It’s a heck of a thing right now",
      "^atharva, whatever it is, you don't have to face it alone.",
      "^Friends stick by each other, no matter how tough things get. Trust me, keeping secrets will only make it worse. We can figure this out together.",
      "~dhruv, I can't do this right now. ",
      "~I need some space.",
      "^Dammit, atharva!",
      "^You can't just keep pushing me away like this. We're friends, and friends don't leave each other in the dark.",
      "~This is MY mess, dhruv! ",
      "~I'll deal with it my way.",
      "^Your way?",
      "^Your way is making you paranoid and shutting out the people who care about you!",
      "^YOURE NOT THINKING STRAIGHT",
      "~I SAID",
      "~ILL HANDLE IT",
      "~I don't need your help",
      "^FINE",
      "^Handle it on your own.",
    ],
  }
]

const ChatWindow = () => {
  function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
      .replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0,
          v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
  }
  const { windows, setWindows, gameData, setGameData, info } = useGameContext()
  const handle = (d) => {
    const id = uuidv4()
    setWindows([...windows, { file: d, win: <BaseWindow file={d} id={id}>{d.comp}</BaseWindow>, id }])
  }
  const [text, setText] = useState("");
  const [logs, setLogs] = useState(chats[0].logs)
  const [user, setUser] = useState(chats[0].name)
  const onSubmit = async (e) => {
    e.preventDefault()
    if (text !== "") {
      const data = gameData
      const msg = "^" + text
      let t = chats.filter(cht => cht.name === user)[0]
      let n = chats.filter(cht => cht.name !== user)
      let d = t
      let newChats = [...n, t]
      chats = newChats
      d.logs.push(msg)
      const col = collection(db, 'users')
      const a = await getDocs(col)
      const b = a.docs.map(doc => ({ data: doc.data() }))
      const exists = b.find(c => c.data.uid === gameData.uid)
      setText('')
      if (text === "secretcode" && user == "Sherlock") {
        const file1 = {
          name: 'TOP LEVEL SECRET WINDOW',
          icon: 'image',
          level: 1,
          comp: <p className="p-8">SECRET WINDOW PASS CODE - 1234</p>,
        }
        handle(file1)
      }
    }
  }
  return <div className="w-[54rem] h-[32rem] flex">
    <div className="p-4 bg-[#111] w-48 flex-col flex justify-start gap-2">
      {chats.map((i, j) => (
        info.level >= i.lvl && <div onClick={() => {
          setUser(i.name)
          const a = chats.filter(b => b.name === i.name)[0]
          setLogs(a.logs)
        }
        } key={j}>
          <p className={`cursor-pointer p-2 rounded-lg ${user === i.name ? 'bg-primary font-bold text-black' : ''}`}>{i.name}</p>
        </div>
      ))}
    </div>
    <div className="flex-col h-[32rem] flex px-2 justify-end gap-2">
      <p className="text-sm text-center">You have succesfully hacked into Dhruv's account. Here are his chats with {user} </p>
      <div className="overflow-scroll grow max-h-[32rem]">
        {logs.map((i, j) => {
          return i ? <div className={`my-4 max-w-[41rem] flex ${i.startsWith("~") ? 'justify-start' : 'justify-end'} `}><p className={`p-2 max-w-[38rem] inline text-black rounded-lg ${i.startsWith("~") ? 'bg-info ' : 'bg-primary'}`} key={j}>{i.slice(1)}</p></div> : <div className="flex justify-center"> <div className="text-center bg-[#444] w-4/5 p-[1px] rounded-lg"></div></div>
        })}
      </div>
      <form onSubmit={onSubmit} className="flex items-center">
        <button type="submit"><img className="h-10 mr-2" src="./send.png" alt="send" /></button>
        <div className="relative bg-[#0c0c0c] mt-2" data-te-input-wrapper-init>
          <input type="text" className="bg-transparent p-4 w-[38.1rem] h-[3rem] outline-none" value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </form>
    </div>
  </div>
}


export default ChatWindow


