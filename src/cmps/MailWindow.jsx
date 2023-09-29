import { useState } from "react"
import mails from "../mails"

const MailWindow = () => {
  const [mail, setMail] = useState()
  return <div className="h-[35rem] overflow-scroll w-[50rem]">
    <div className="bg-[#111] p-4 flex justify-between items-center">
      <div onClick={() => setMail("")} className="cursor-pointer text-2xl font-bold">bmail</div>
      <div className="text-md cursor-pointer">log out</div>
    </div>
    <div className="mt-2">
      {mail ? <div className="p-4 bg-[#111] h-[30.5rem] overflow-scroll">
        <button onClick={() => setMail("")} className="text-primary ">Go Back</button>
        <p className="mt-4 text-2xl font-bold">{mail.name}</p>
        <p className="mt-2 text-sm mb-4">{mail.id}</p>
        <p className="mt-2 whitespace-pre-wrap">{mail.desc}</p>
      </div> :
        <div className="mails flex flex-col gap-2">
          {mails.map((i, k) => {
            return <div key={k} onClick={() => setMail(i)} className="bg-[#111] cursor-pointer p-4 flex flex-col">
              <p className="text-xl font-bold">{i.name}</p>
              <p className="text-md font-light">{i.id}</p>
              <p className="text-sm mt-4 ">{i.desc.slice(0, 200)}...</p>
            </div>
          })}
        </div>
      }
    </div>
  </div>
}

export default MailWindow
