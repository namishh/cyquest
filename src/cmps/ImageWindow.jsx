const ImageWindow = ({ image }) => {
  return <div className="bg-cover w-[20rem] h-[30rem]" style={{ backgroundImage: `url("./${image}")` }}></div>
}


export default ImageWindow
