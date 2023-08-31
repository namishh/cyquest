import tweets from "../tweets"
const SussyApp = () => {
  return <div className="h-[35rem] overflow-scroll w-[30rem]">
    <div className="bg-[#111] p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">twitta</div>
      <div className="text-md">log out</div>
    </div>
    <div className="flex-col mt-2 gap-2 flex">
      {tweets.map((i, j) => {
        return <div className="p-4 bg-[#111]" key={j}>
          <div className="flex gap-4 items-end">
            <img src={`./${i.image}`} alt="userim" className="h-16 rounded-full bg-[#191919]" />
            <div className="flex flex-col ">
              <p className="text-md mb-[-0.1rem] font-bold">{i.name}</p>
              <p className="text-sm">{i.handle}</p>
            </div>
          </div>
          <div className="p-4">
            {i.desc}
          </div>
          <div className="flex w-full justify-around">
            <i className="ph-thin ph-heart text-xl"></i>
            <i className="ph-thin ph-chat-teardrop text-xl"></i>
            <i className="ph-thin ph-share text-xl"></i>
          </div>
        </div>
      })}
    </div>
  </div>
}

export default SussyApp
