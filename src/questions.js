const questions = [
  {
    question: <div>
      <p className="question">BFgnzsHm + tl9KZvb == FINALISED</p>
    </div>,
    answer: process.env.REACT_APP_A1,
    lvl: 1,
  },
  {
    question: <div>
      <p className="question">wb5Yk7u</p>
    </div>,
    answer: process.env.REACT_APP_A2,
    lvl: 2,
  },
  {
    question: <div>
      <a href="https://drive.google.com/file/d/1lOh1oXDz_LUw-wEvjFefxMVzczQDJwrW/view?usp=sharing" className="question text-blue-500 underline">click here</a>
    </div>,
    answer: process.env.REACT_APP_A3,
    lvl: 3,
  },
  {
    question: <div>
      <p className="question">6 games. we used to play this when we were kids, goddamn. how did this turn out to be so deadly? maybe i should take this seriously. like literally.</p>
    </div>,
    answer: process.env.REACT_APP_A4,
    lvl: 4,
  },
  {
    question: <div>
      <a href="https://pastebin.com/PNtBmZ2c" className="question underline text-blue-500">Begin the gauntlet</a>
    </div>,
    answer: process.env.REACT_APP_A5,
    lvl: 5,
  },
  {
    question: <div>
      <a href="https://drive.google.com/file/d/1F-qK3M_FMMr7xarZUtjfuidwV1l81HgM/view?usp=sharing" className="question text-blue-500 underline">click here</a>
    </div>,
    answer: process.env.REACT_APP_A6,
    lvl: 6,
  },
  {
    question: <div>
      <p className="question">sjx6JEc</p>
    </div>,
    answer: process.env.REACT_APP_A7,
    lvl: 7,
  },
  {
    question: <div>
      <a href="https://pastebin.com/bxiYZn67" className="text-blue-500 underline">click here</a>
    </div>,
    answer: process.env.REACT_APP_A8,
    lvl: 8,
  },
  {
    question: <div>
      <p className="question">the wombat and the rich borzoi do go together pretty well. i hope the journey of the grimm brothers under the moon will be pleasant. {"<"}3</p>
    </div>,
    answer: process.env.REACT_APP_A9,
    lvl: 9,
  },
  {
    question: <div>
      <p className="question">the wombat and the rich borzoi do go together pretty well. i hope the journey of the grimm brothers under the moon will be pleasant. {"<"}3</p>
    </div>,
    answer: process.env.REACT_APP_A10,
    lvl: 10,
  },
  {
    question: <div>
      <a href="https://pastebin.com/D4SjKsVA" className="text-blue-500 underline">click here</a>
    </div>,
    answer: process.env.REACT_APP_A11,
    lvl: 11,
  },
  {
    question: <div>
      <p className="question">https://drive.google.com/file/d/1STWrWBj8tS8eIyDS-2rx7wdnhk5gjroy/view?usp=sharing</p>
    </div>,
    answer: process.env.REACT_APP_A12,
    lvl: 12,
  },
  {
    question: <div>
      <p className="question">the wombat and the rich borzoi do go together pretty well. i hope the journey of the grimm brothers under the moon will be pleasant. {"<"}3</p>
    </div>,
    answer: process.env.REACT_APP_A13,
    lvl: 13,
  },
  {
    question: <div>
      <a href="https://imgur.com/a/8ZRm7cl" className="text-blue-500 underline">click here</a>
    </div>,
    answer: process.env.REACT_APP_A14,
    lvl: 14,
  },
  {
    question: <div>
      <p >crack the z13 and find the person.</p>
      <p>hint - maybe tiny can help , if you find the 32 "mountain+"</p>
    </div>,
    answer: process.env.REACT_APP_A15,
    lvl: 15,
  },
  {
    question: <div>
      <p className="question">This is it. The finale. It was quite a journey. Star is probably someone who can help you, but how much even? Anyways, play well, kids.</p>
    </div>,
    answer: process.env.REACT_APP_A16,
    lvl: 16,
  },
  {
    question: <div>
      <a href="https://imgur.com/a/v3Upu9g" className="text-blue-500 underline">click here</a>
    </div>,
    answer: process.env.REACT_APP_A17,
    lvl: 17,
  },
  {
    question: <div>
      <a href="https://imgur.com/a/IpqsofR" className="text-blue-500 underline">click here</a>
    </div>,
    answer: process.env.REACT_APP_A18,
    lvl: 18,
  },
  {
    question: <div>
      <p className="question">no more links. i'll just tell about my day. i love macarons. so i went to get some, and then i went back to my project while listening to the sounds of water fountain. ill come back to my quizzes later on. ngl tho, im disappointed. it's time to bid adieu, user.</p>
    </div>,
    answer: process.env.REACT_APP_A19,
    lvl: 19,
  },
  {
    question: <div>
      <a href="https://www.youtube.com/watch?v=ZDuuxbDeAcs" className="text-blue-500 underline">goodbye, kid. zzz</a>
    </div>,
    answer: process.env.REACT_APP_A20,
    lvl: 20,
  },
  {
    question: <div>
      <p className="question">who is facade?</p>
    </div>,
    answer: process.env.REACT_APP_A21,
    lvl: 21,
  },
  {
    question: <div>
      <p className="question">where did he go to find the fixer? what was the final location?</p>
    </div>,
    answer: process.env.REACT_APP_A22,
    lvl: 22,
  },
  {
    question: <div>
      <p className="question">what happened to atharva dua?</p>
    </div>,
    answer: process.env.REACT_APP_A23,
    lvl: 23,
  },
  {
    question: <div>
      <p className="question">what did dhruv notice that made fixer so mad?</p>
    </div>,
    answer: process.env.REACT_APP_A24,
    lvl: 24,
  },
  {
    question: <div>
      <p className="question">where is dhruv now?</p>
    </div>,
    answer: process.env.REACT_APP_A25,
    lvl: 25,
  },
]

export default questions
