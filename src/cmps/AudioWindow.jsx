import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const AudioWindow = ({ audio }) => {
  return <div className="bg-cover w-[23rem] h-[6rem]">
    <AudioPlayer
      showSkipControls={false}
      showJumpControls={false}
      showFilledVolume={false}
      showFilledProgress={false}
      customAdditionalControls={[]}
      customVolumeControls={[]}
      src={audio}
    // other props here
    />
  </div>
}


export default AudioWindow

