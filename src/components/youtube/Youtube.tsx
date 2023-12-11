import React, {useState} from 'react';
import YouTube, {YouTubeProps} from 'react-youtube';
import './Youtube.css';

const Youtube = () => {
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    event.target.pauseVideo();
  }
  
  const opts: YouTubeProps['opts'] = {
    height: '100%',
    width: '40%',
    playerVars: {
      autoplay: 1,
    }
  }
  const [value, setValue] = useState("");
  const [updated, setUpdated] = useState(value);

  const handleChange = (event : any) => {
    setValue(event.target.value);
  };
  const handleClick = () => {
    setUpdated(value);
  };
  return (
  <>
  <div id="youtube">
    <div id="input-align">
      <input type="text" id="value" name="value" onChange={handleChange} value={value} />
      <button id="send-link" onClick={handleClick}>load</button>
    </div>
    <YouTube videoId={updated} opts={opts} onReady={onPlayerReady} />
  </div>
  </>
  )
}

export default Youtube;