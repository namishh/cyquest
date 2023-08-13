const SignIn = ({ signin }) => {
  return <div className="w-screen h-screen flex justify-center items-center">
    <div className="flex gap-8 flex-col items-center justify-center">
      <h1 className="text-6xl font-extrabold">Welcome to cyquest</h1>
      <button className="px-7 py-4 bg-neutral text-white flex items-center gap-4" onClick={signin}><img className="h-8 w-8" src="./google.png" /> Sign In With Google</button>
    </div>
  </div>
}

export default SignIn
