import ImageWindow from "./cmps/ImageWindow"
import AudioWindow from "./cmps/AudioWindow"
import pastlives from "./assets/song.mp3"
import PdfWindow from "./cmps/PdfWindow"
const folders = [
  {
    name: "Home",
    image: "folder",
    files: [
      {
        name: 'hmm.mp3',
        icon: 'audio',
        level: 1,
        comp: <AudioWindow audio={pastlives} />,
      },
      {
        name: 'rules.txt',
        icon: 'txt',
        level: 1,
        comp: <div className="h-[30rem] w-[30rem]">
          <h2 className="text-2xl mb-2">Rules!</h2>
          <ul className="list-disc ml-4 text-lg ">
            <li>This will be 48 online cryptic hunt in the form of an ARG</li>
            <li>Solving the previous problem is important to move on to the next level</li>
            <li>For any clues and assistance you can contact the mods in the discord servel</li>
          </ul>
        </div>,
      },
    ],
  },
  {
    name: "Evidence",
    image: "evidence",
    files: [
      {
        name: 'clue.png',
        icon: 'image',
        level: 1,
        comp: <ImageWindow image="mona.jpg" />,
      },
    ]
  },
  {
    name: "Documents",
    image: "documentfolder",
    files: [
      {
        name: 'silico.pdf',
        icon: 'pdf',
        level: 1,
        comp: <PdfWindow file="silico.pdf" />,
      },
    ]
  },
  {
    name: "Audio",
    image: "audiofolder",
    files: [
    ]
  },
]

export default folders
