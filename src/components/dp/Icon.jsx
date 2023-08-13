const Icon = ({ picture, name, f }) => {
  return (
    <div><div onClick={f} className={`p-2 inline-flex flex-col justify-center items-center inline-block gap-2`}>
      <img src={picture} className="h-12 w-12" alt="" />
      <p className="text-lg text-[#fff]">{name}</p>
    </div>
    </div>
  )
}

export default Icon
