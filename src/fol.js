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
        level: 7,
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
        level: 7,
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
        level: 7,
        comp: <div className="h-[30rem] w-[30rem]">
          <h2 className="text-2xl mb-2">satisfied.</h2>
          <p className="text-lg whitespace-pre-wrap">
            atharva's birthday today, and the gang organized a surprise party. it's been ages since we all hung out together. the smiles, the laughter, it felt like old times. seeing him happy was worth it. and the game design event last week? it went better than I expected. our project received praise, and I got to share the stage with my idols. everything's been going smoothly lately, and it's a welcome change
          </p>
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
        level: 9,
        comp: <ImageWindow image="concert.jpg" />,
      },
      {
        name: 'struggle.jpg',
        icon: 'image',
        level: 9,
        comp: <ImageWindow image="struggle.jpg" />,
      },
      {
        name: 'game2.png',
        icon: 'image',
        level: 9,
        comp: <ImageWindow image="game2.png" />,
      },
      {
        name: 'ticket.pdf',
        icon: 'pdf',
        level: 9,
        comp: <PdfWindow file="ticket.pdf" />,
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
        level: 6,
        comp: <PdfWindow file="curriculum.pdf" />,
      },
      {
        name: 'gamedev.pdf',
        icon: 'pdf',
        level: 6,
        comp: <PdfWindow file="gamedev.pdf" />,
      },
      {
        name: 'letter.pdf',
        icon: 'pdf',
        level: 6,
        comp: <PdfWindow file="letter.pdf" />,
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
        level: 10,
        comp: <AudioWindow audio={two} />,
      },
      {
        name: 'new.mp3',
        icon: 'audio',
        level: 10,
        comp: <AudioWindow audio={neW} />,
      },
      {
        name: 'em.mp3',
        icon: 'audio',
        level: 10,
        comp: <AudioWindow audio={em} />,
      },
      {
        name: 'mayasick.mp3',
        icon: 'audio',
        level: 10,
        comp: <AudioWindow audio={mayaissick} />,
      },
      {
        name: 'work.mp3',
        icon: 'audio',
        level: 10,
        comp: <AudioWindow audio={workmode} />,
      },
      {
        name: 'yes.mp3',
        icon: 'audio',
        level: 10,
        comp: <AudioWindow audio={yes} />,
      },
    ]
  },
  {
    name: "Evidence",
    image: "evidence",
    files: [
      {
        name: 'ev.txt',
        icon: 'txt',
        level: 8,
        comp: <div className="h-[30rem] w-[30rem]">
          <h2 className="text-2xl mb-2">summary</h2>
          <ul className="list-disc ml-4 text-lg ">
            <li>atharva - rip32(connection? maybe mobster or blackmailer) | blocked his chats | definitely not kidnapper (should have hurt me)</li>
            <li>Atharva -  hate tweets , atharva was stressed [note to self: look for changes in behaviour in past 4 weeks</li>
            <li>Atharva - ‘fixer’- multiple personalities? or kidnapper. one of the haters on twitter </li>
            <li>atharva’s last seen @ his home after fight, around 4 pm?</li>
            <li>note to self : atharva could be the one staging this? im so confused.</li>
            <li>Also ive removed all the files in evidence just to be safer.</li>
          </ul>
        </div>,
      },
    ]
  }
]

export default folders
