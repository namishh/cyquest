import ChatWindow from "./cmps/ChatWindow"
import GalleryWindow from "./cmps/GalleryWindow"
import Calculator from "./cmps/Calculator"
import SussyApp from "./cmps/SussyApp"
import MailWindow from "./cmps/MailWindow"
import Todo from "./cmps/Todo"
import Explorer from "./cmps/Explorer"
import LeaderBoard from "./cmps/LeaderBoard"
import QuestionBoard from "./cmps/QuestionBoard"
import ImageWindow from "./cmps/ImageWindow"
import VideoWindow from "./cmps/VideoWindow"
const files = [
  {
    name: 'Questions',
    icon: 'quiz',
    level: 1,
    comp: <QuestionBoard />,
  },
  {
    name: 'Answers',
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
    name: "us.png",
    icon: "image",
    level: 1,
    comp: <ImageWindow image={"./us.png"} />
  },
  {
    name: 'Todo',
    icon: 'todo',
    level: 2,
    comp: <Todo />,
  },
  {
    name: 'Calculator',
    icon: 'calculator',
    level: 3,
    comp: <Calculator />,
  },
  {
    name: "hey.mp4",
    icon: "video",
    level: 4,
    comp: <VideoWindow vid="./hey.mp4" h="400" w="400" />
  },
  {
    name: 'Files',
    icon: 'explorer',
    level: 5,
    comp: <Explorer />,
  },
  {
    name: "facade.jpg",
    icon: "image",
    level: 11,
    comp: <ImageWindow image={"./facade.jpg"} />
  },
  {
    name: 'Gallery',
    icon: 'gallery',
    level: 12,
    comp: <GalleryWindow />,
  },
  {
    name: "clue.png",
    icon: "image",
    level: 13,
    comp: <ImageWindow image={"./meme.png"} />
  },
  {
    name: 'Mail',
    icon: 'mail',
    level: 14,
    comp: <MailWindow />
  },
  {
    name: "homework.txt",
    icon: "txt",
    level: 15,
    comp: <div className='p-8 w-[30rem]'>Ugh, homework? Seriously, it's like the struggle is so real! We're out here hustling, dealing with our own drama, and teachers be like, "Here's some more work!" Can we catch a break? Our mental health matters, and drowning us in assignments? Not cool. We need time for self-care, for our passions, and, like, to binge-watch our favorite shows. Homework just adds stress, and we're over it. Let's vibe, let us breathe, and give us the freedom to live our best lives! 🙌😩 #HomeworkRebellion</div>
  },
  {
    name: 'Zoros',
    icon: 'socialmedia',
    level: 16,
    comp: <SussyApp />,
  },
  {
    name: "fix.txt",
    icon: "txt",
    level: 17,
    comp: <div className='p-8 w-[30rem]'>
      <ul>
        <li>In a labyrinth of shelves, I hide the feast</li>
        <li>In your daily quest, I'm crucial, to say the least.</li>
        <li>From your wants to your needs, and to say a little more,</li>
        <li>Where am I found? Tell me, what's the score?</li>
      </ul>
    </div>
  },
  {
    name: "fix.png",
    icon: "image",
    level: 18,
    comp: <ImageWindow image={"./fixer.png"} />
  },
  {
    name: 'Messages',
    icon: 'chat',
    level: 19,
    comp: <ChatWindow />,
  },
  {
    name: "hint.png",
    icon: "image",
    level: 20,
    comp: <ImageWindow image={"./struggle.png"} />
  },
  {
    name: "pm.txt",
    icon: "txt",
    level: 21,
    comp: <div className='p-8 w-[30rem]'>
      <h1 className="text-3xl font-bold"> Profround Miseries </h1>
      <p className="my-4 text-xl">Hello, user.</p>
      <p>The company one chooses to surround oneself with possesses a profound capacity to influence one's life. In the case of the individual in question, this company wrought a multitude of effects upon his existence, leading to a state of profound misery. He found himself ensnared in a grievous predicament, entangled within the snares of circumstances from which he struggled in vain to extricate himself. Ultimately, his response to this ordeal was marked by an act of desperation: he made the decision to flee, seeking refuge from the turmoil that had come to define his life. </p>
    </div>
  },
  {
    name: "mm.txt",
    icon: "txt",
    level: 22,
    comp: <div className='p-8 w-[30rem]'>
      <h1 className="text-3xl font-bold mb-4"> Menacing Movies </h1>
      <p>"A friend in need is a friend indeed," holds a timeless truth, and in this tale, it finds its embodiment in the character of our subject. He epitomized the very essence of a true friend—steadfast and unwavering in times of need. As the narrative unfolds, it encourages all to emulate his virtuous example, emphasizing the value of reciprocity in friendship. Just as he proved himself a friend indeed, so too should all aspire to be. A friendship promises support, not protection.
        Beware, for in the darkness of deceit, even the closest allies can harbor menacing motives.
      </p>
    </div>
  },
  {
    name: "pp.txt",
    icon: "txt",
    level: 23,
    comp: <div className='p-8 w-[50rem]'>
      <h1 className="text-3xl font-bold "> Pretty Previliges </h1>
      <p className="my-4 text-xl">Hello, user.</p>
      <p>In the course of one's life, there may come moments when the seemingly everyday rights and privileges we take for granted suddenly slip from our grasp. At first, surrendering these privileges can seem like a small sacrifice, a mere adjustment in our routines. However, the true realization dawns when the weight of their absence becomes palpable, and we comprehend the high price paid for their relinquishment.
        Consider the freedom to move about without restraint, to go where one pleases, unrestricted and unhindered. It is an everyday right, often unnoticed in its presence. Yet, when circumstances force its forfeiture, when movement becomes constrained, the full extent of its value becomes clear. The price exacted for its loss extends far beyond what one initially bargained for, imposing a heavy toll on the spirit.The simple act of sharing a meal, exchanging stories, or embracing a loved one takes on newfound significance when denied. The price paid for such a loss is not measured in mere currency but in the emotional toll exacted by the void left in their absence.So cherish what you have, for what you have is never forever.
        In life, we may encounter moments where the cost of surrendering everyday rights and privileges is unexpectedly high. It serves as a stark reminder that sometimes, the price paid for what we once considered trivial can be monumental. As we navigate these moments, we gain a deeper appreciation for the value of the everyday, recognizing that the things we take for granted are often the most precious, and their absence is a stark reminder of the high price we sometimes have to pay.
      </p>
    </div>
  },
  {
    name: "aa.txt",
    icon: "txt",
    level: 24,
    comp: <div className='p-8 w-[50rem]'>
      <h1 className="text-3xl font-bold mb-4"> Aveiltornasunder </h1>
      <p> In the intricate tapestry of existence, the preservation of one's secret identity is often paramount. It's a concealed facet of life, guarded like a precious jewel, tucked away from prying eyes and inquisitive minds. Yet, there are moments when the shroud of anonymity is inadvertently lifted, and the revelation of one's hidden self becomes a catalyst for anger.

        Imagine a life lived in shadows, where a carefully crafted persona conceals the true self. This secret identity, meticulously constructed, serves as both refuge and sanctuary. However, when the veil is torn asunder, exposing the concealed identity, anger courses through the individual like a raging storm.

        The anger that surges in such moments is not solely a reaction to the unmasking but also a response to the breach of trust and privacy. It is a tempest of emotions, fueled by betrayal and vulnerability. The individual grapples with the aftermath of their secret's exposure, struggling to reclaim what was once hidden and protect the fragile balance of their existence.

        In these instances, anger becomes a fierce guardian of the exposed identity, a fierce protector of the sanctuary that has been invaded. It serves as a reminder that secrets, once unraveled, can unleash powerful and tumultuous emotions, forever altering the delicate dance between concealment and revelation. The anger that arises in the wake of such discovery is a testament to the depth of emotions hidden beneath the surface, waiting to be unveiled when secrecy is shattered


      </p>
    </div>
  },
  {
    name: "hm.txt",
    icon: "txt",
    level: 25,
    comp: <div className='p-8 w-[50rem]'>
      <h1 className="text-3xl font-bold"> Humble Message </h1>
      <p className="my-4 text-xl">Hello, user.</p>
      <p> In the intricate tapestry of life, there are moments when an individual's most cherished desires and the treasures they hold closest to their heart unwittingly find themselves in the crosshairs of fate. Despite their most vigilant efforts to safeguard these aspirations, the path of destiny often unfolds with an unexpected twist, leaving them grappling with outcomes that stand in stark contrast to their fervent wishes.

        In this scenario, he carefully nurtures dreams and aspirations, guarding them like precious jewels within the vault of their heart. These are the desires that have been woven into the very fabric of their existence, protected with unwavering diligence. However, as the story of their life unfolds, it becomes glaringly evident that the bullseye of fate has taken aim at these cherished dreams, turning them into the focal point of unforeseen turmoil.

        They are left to grapple with the cruel irony that the very things they had sought to shield have become the center of life's turbulence. It's as though the universe has conspired to test their mettle, subjecting them to a humbling lesson in the capriciousness of existence.

      </p>
    </div>
  },
]

export default files
