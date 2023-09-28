import ChatWindow from "./cmps/ChatWindow"
import GalleryWindow from "./cmps/GalleryWindow"
import Calculator from "./cmps/Calculator"
import SussyApp from "./cmps/SussyApp"
import MailWindow from "./cmps/MailWindow"
import Todo from "./cmps/Todo"
import Explorer from "./cmps/Explorer"
import LeaderBoard from "./cmps/LeaderBoard"
import QuestionBoard from "./cmps/QuestionBoard"

const files = [
  {
    name: 'Questions',
    icon: 'quiz',
    level: 1,
    comp: <QuestionBoard />,
  },
  {
    name: 'Podium',
    icon: 'leaderboard',
    level: 1,
    comp: <LeaderBoard />,
  },
  {
    name: 'Files',
    icon: 'explorer',
    level: 2,
    comp: <Explorer />,
  },
  {
    name: 'Todo',
    icon: 'todo',
    level: 1,
    comp: <Todo />,
  },
  {
    name: 'Gallery',
    icon: 'gallery',
    level: 1,
    comp: <GalleryWindow />,
  },
  {
    name: 'Calculator',
    icon: 'calculator',
    level: 1,
    comp: <Calculator />,
  },
  {
    name: 'Messages',
    icon: 'chat',
    level: 1,
    comp: <ChatWindow />,
  },
  {
    name: 'X',
    icon: 'socialmedia',
    level: 1,
    comp: <SussyApp />,
  },
  {
    name: 'Mail',
    icon: 'mail',
    level: 1,
    comp: <MailWindow />
  }
]

export default files
