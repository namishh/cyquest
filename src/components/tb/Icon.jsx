const Icon = ({ picture, active }) => {
  return (
    <div className={`p-2 rounded-md ${active ? 'bg-[#222]' : 'bg-base'}`}>
      <img src={picture} className="h-12 w-12" alt="" />
    </div>
  )
}

export default Icon
