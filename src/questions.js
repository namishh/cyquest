import bcrypt from 'bcryptjs';
const saltRounds = 10
const questions = [
  {
    question: <div>
      <p className="question">BFgnzsHm + tl9KZvb == FINALISED</p>
    </div>,
    answer: bcrypt.hashSync(process.env.REACT_APP_A1, saltRounds),
    lvl: 1,
  },
  {
    question: <div>
      <p className="question">wb5Yk7u</p>
    </div>,
    answer: bcrypt.hashSync(process.env.REACT_APP_A2, saltRounds),
    lvl: 2,
  },
  {
    question: <div>
      <a href="https://drive.google.com/file/d/1lOh1oXDz_LUw-wEvjFefxMVzczQDJwrW/view?usp=sharing" className="question text-blue-500 underline">click here</a>
    </div>,
    answer: bcrypt.hashSync(process.env.REACT_APP_A3, saltRounds),
    lvl: 3,
  },
  {
    question: <div>
      <p className="question">6 games. we used to play this when we were kids, goddamn. how did this turn out to be so deadly? maybe i should take this seriously. like literally.</p>
    </div>,
    answer: bcrypt.hashSync(process.env.REACT_APP_A4, saltRounds),
    lvl: 4,
  },
  {
    question: <div>
      <a href="https://pastebin.com/PNtBmZ2c" className="question underline text-blue-500">Begin the gauntlet</a>
    </div>,
    answer: bcrypt.hashSync(process.env.REACT_APP_A5, saltRounds),
    lvl: 5,
  },
  {
    question: <div>
      <a href="https://drive.google.com/file/d/1lilrG_22cc-Gs1NwDgys-la0U9JRIcfH/view?usp=sharing" className="question text-blue-500 underline">click here</a>
    </div>,
    answer: bcrypt.hashSync(process.env.REACT_APP_A6, saltRounds),
    lvl: 6,
  },
  {
    question: <div>
      <p className="question">sjx6JEc</p>
    </div>,
    answer: bcrypt.hashSync(process.env.REACT_APP_A7, saltRounds),
    lvl: 7,
  },
  {
    question: <div>
      <a href="https://pastebin.com/bxiYZn67" className="text-blue-500 underline">click here</a>
    </div>,
    answer: bcrypt.hashSync(process.env.REACT_APP_A8, saltRounds),
    lvl: 8,
  },
  {
    question: <div>
      <p className="question">the wombat and the 2hWCDQy do go together pretty well.</p>
    </div>,
    answer: bcrypt.hashSync(process.env.REACT_APP_A9, saltRounds),
    lvl: 9,
  },
  {
    question: <div>
      <p className="question">ngl, this is their best song ever. but like, im batman so.🗿 gotta mix it up.</p>
    </div>,
    answer: bcrypt.hashSync(process.env.REACT_APP_A10, saltRounds),
    lvl: 10,
  },
  {
    question: <div>
      <a href="https://pastebin.com/D4SjKsVA" className="text-blue-500 underline">click here</a>
    </div>,
    answer: bcrypt.hashSync(process.env.REACT_APP_A11, saltRounds),
    lvl: 11,
  },
  {
    question: <div>
      <p className="question">https://drive.google.com/file/d/1R2hqgkAGWpakUDxDHKAQz4YEIacLj73v/view?usp=drive_link</p>
    </div>,
    answer: bcrypt.hashSync(process.env.REACT_APP_A12, saltRounds),
    lvl: 12,
  },
  {
    question: <div>
      <a href="https://imgur.com/a/ebHJe9o" className="text-blue-500 underline">hmmm</a>
    </div>,
    answer: bcrypt.hashSync(process.env.REACT_APP_A13, saltRounds),
    lvl: 13,
  },
  {
    question: <div>
      <a href="https://imgur.com/a/8ZRm7cl" className="text-blue-500 underline">click here</a>
    </div>,
    answer: bcrypt.hashSync(process.env.REACT_APP_A14, saltRounds),
    lvl: 14,
  },
  {
    question: <div>
      <p >crack the z13 and find the person.</p>
      <p>hint - maybe tiny can help , if you find the 32 "mountain+"</p>
    </div>,
    answer: bcrypt.hashSync(process.env.REACT_APP_A15, saltRounds),
    lvl: 15,
  },
  {
    question: <div>
      <p className="question">This is it. The finale. It was quite a journey. Star is probably someone who can help you, but how much even? Anyways, play well, kids.</p>
    </div>,
    answer: bcrypt.hashSync(process.env.REACT_APP_A16, saltRounds),
    lvl: 16,
  },
  {
    question: <div>
      <a href="https://imgur.com/a/v3Upu9g" className="text-blue-500 underline">click here</a>
    </div>,
    answer: bcrypt.hashSync(process.env.REACT_APP_A17, saltRounds),
    lvl: 17,
  },
  {
    question: <div>
      <a href="https://imgur.com/a/IpqsofR" className="text-blue-500 underline">click here</a>
    </div>,
    answer: bcrypt.hashSync(process.env.REACT_APP_A18, saltRounds),
    lvl: 18,
  },
  {
    question: <div>
      <p className="question">no more links. i'll just tell about my day. i love macarons. so i went to get some, and then i went back to my project while listening to the sounds of water fountain. ill come back to my quizzes later on. ngl tho, im disappointed. it's time to bid adieu, user.</p>
    </div>,
    answer: bcrypt.hashSync(process.env.REACT_APP_A19, saltRounds),
    lvl: 19,
  },
  {
    question: <div>
      <a href="https://www.youtube.com/watch?v=ZDuuxbDeAcs" className="text-blue-500 underline">goodbye, kid. zzz</a>
    </div>,
    answer: bcrypt.hashSync(process.env.REACT_APP_A20, saltRounds),
    lvl: 20,
  },
  {
    question: <div>
      <p className="question">who is facade?</p>
    </div>,
    answer: bcrypt.hashSync(process.env.REACT_APP_A21, saltRounds),
    lvl: 21,
  },
  {
    question: <div>
      <p className="question">where did he go to find the fixer? what was the final location?</p>
    </div>,
    answer: bcrypt.hashSync(process.env.REACT_APP_A22, saltRounds),
    lvl: 22,
  },
  {
    question: <div>
      <p className="question">what happened to atharva dua?</p>
    </div>,
    answer: bcrypt.hashSync(process.env.REACT_APP_A23, saltRounds),
    lvl: 23,
  },
  {
    question: <div>
      <p className="question">what did dhruv notice that made fixer so mad?</p>
    </div>,
    answer: bcrypt.hashSync(process.env.REACT_APP_A24, saltRounds),
    lvl: 24,
  },
  {
    question: <div>
      <p className="question">where is dhruv now?</p>
    </div>,
    answer: bcrypt.hashSync(process.env.REACT_APP_A25, saltRounds),
    lvl: 25,
  },
]

export default questions
