import ImageWindow from "./cmps/ImageWindow"
import AudioWindow from "./cmps/AudioWindow"
import mayaissick from "./assets/mayaissick.mp3"
import em from "./assets/em.mp3"
import neW from "./assets/new.mp3"
import two from "./assets/2.mp3"
import workmode from "./assets/workmode.mp3"
import yes from "./assets/yes.mp3"
import PdfWindow from "./cmps/PdfWindow"
const folders = [
  {
    name: "Journal",
    image: "folder",
    files: [
      {
        name: 'music.txt',
        icon: 'txt',
        level: 1,
        comp: <div className="h-[30rem] w-[30rem]">
          <h2 className="text-2xl mb-2">music</h2>
          <p className="text-lg whitespace-pre-wrap">
            music has always been my refuge, a sanctuary in the chaos of life. I've been losing myself in its melodies lately. there's something about the way the notes dance, creating emotions words fail to express. the symphony of instruments weaving stories, touching my soul. it's in these tunes that I find comfort honestly, its like a temporary escape from the mysteries and uncertainties that surround me. \n
            there's this one track that's been on repeat. its tune resonates with the turmoil within me. I'm not sure what the future holds, but for now, I'll let the music guide me through the shadows, hoping to find the answers I need.

          </p>
        </div>,
      },
      {
        name: 'weird.txt',
        icon: 'txt',
        level: 1,
        comp: <div className="h-[30rem] w-[30rem]">
          <h2 className="text-2xl mb-2">weird</h2>
          <p className="text-lg whitespace-pre-wrap">
            I haven't heard from atharva in days, and it's not like him to go completely off the grid. my calls and messages go unanswered. I can't shake this feeling of unease. something's not right, and Im scared that it might be connected to that. I think i need to check whats going on with him properly. it's time to dig deeper and retrace my steps as well. I hope I'm just overreacting or being paranoid tho.
          </p>
        </div>,
      },
      {
        name: 'satisfied.txt',
        icon: 'txt',
        level: 1,
        comp: <div className="h-[30rem] w-[30rem]">
          <h2 className="text-2xl mb-2">satisfied.</h2>
          <p className="text-lg whitespace-pre-wrap">
            atharva's birthday today, and the gang organized a surprise party. it's been ages since we all hung out together. the smiles, the laughter, it felt like old times. seeing him happy was worth it. and the game design event last week? it went better than I expected. our project received praise, and I got to share the stage with my idols. everything's been going smoothly lately, and it's a welcome change
          </p>
        </div>,
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
            <li>For any clues and assistance you can contact the mods in the discord server</li>
          </ul>
        </div>,
      },
    ],
  },
  {
    name: "Memories",
    image: "favs",
    files: [
      {
        name: 'concert.jpg',
        icon: 'image',
        level: 1,
        comp: <ImageWindow image="concert.jpg" />,
      },
      {
        name: 'struggle.jpg',
        icon: 'image',
        level: 1,
        comp: <ImageWindow image="struggle.jpg" />,
      },
    ]
  },
  {
    name: "PDFs",
    image: "documentfolder",
    files: [
      {
        name: 'curriculum.pdf',
        icon: 'pdf',
        level: 1,
        comp: <PdfWindow file="curriculum.pdf" />,
      },
      {
        name: 'gamedev.pdf',
        icon: 'pdf',
        level: 1,
        comp: <PdfWindow file="gamedev.pdf" />,
      },
      {
        name: 'letter.pdf',
        icon: 'pdf',
        level: 1,
        comp: <PdfWindow file="letter.pdf" />,
      },
      {
        name: 'tickets.pdf',
        icon: 'pdf',
        level: 1,
        comp: <PdfWindow file="tickets.pdf" />,
      },
    ]
  },
  {
    name: "Audio",
    image: "audiofolder",
    files: [
      {
        name: '2.mp3',
        icon: 'audio',
        level: 1,
        comp: <AudioWindow audio={two} />,
      },
      {
        name: 'new.mp3',
        icon: 'audio',
        level: 1,
        comp: <AudioWindow audio={neW} />,
      },
      {
        name: 'em.mp3',
        icon: 'audio',
        level: 1,
        comp: <AudioWindow audio={em} />,
      },
      {
        name: 'mayasick.mp3',
        icon: 'audio',
        level: 1,
        comp: <AudioWindow audio={mayaissick} />,
      },
      {
        name: 'work.mp3',
        icon: 'audio',
        level: 1,
        comp: <AudioWindow audio={workmode} />,
      },
      {
        name: 'yes.mp3',
        icon: 'audio',
        level: 1,
        comp: <AudioWindow audio={yes} />,
      },
    ]
  },
]

export default folders
