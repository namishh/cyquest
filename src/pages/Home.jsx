import Background from "../cmps/Background"

const Home = ({ acc }) => {
  const logOut = () => {
    localStorage.clear()
    window.location.reload()
  }

  return <div className="w-screen h-screen">
    <div onClick={logOut} className="z-[1223] absolute h-[3rem] cursor-pointer w-[8rem] top-[3rem] right-[3rem] bg-neutral flex items-center justify-center text-xl">logout</div>
    <Background />
    <div className="w-full h-full flex justify-center items-center">
      <div className="div p-16 text-center">
        <h1 className="text-6xl font-extrabold">Welcome to cyquest, {acc.displayName}</h1>
      </div>
    </div>
  </div>
}

export default Home
