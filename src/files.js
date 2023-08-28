import ImageWindow from "./cmps/ImageWindow"
import AudioWindow from "./cmps/AudioWindow"
import ChatWindow from "./cmps/ChatWindow"
import pastlives from "./assets/song.mp3"
import GalleryWindow from "./cmps/GalleryWindow"
import Calculator from "./cmps/Calculator"
import Todo from "./cmps/Todo"
import Explorer from "./cmps/Explorer"

const files = [
  {
    name: 'Files',
    icon: 'explorer',
    level: 1,
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
]

export default files
