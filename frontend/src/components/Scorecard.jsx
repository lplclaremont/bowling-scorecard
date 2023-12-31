import React, { useEffect, useState } from 'react';

import Frame from './Frame'
import AddFrame from './addFrame'
import { fetchFrames } from '../fetchers/requests'

const Scorecard = () => {
  const [frames, setFrames] = useState([]);
  const [totalScore, setTotalScore] = useState(0);

  useEffect(() => {
    if (frames.length !== 0) {
      const lastFrame = frames.slice(-1)[0]
      console.log(lastFrame)
      setTotalScore(lastFrame.score)
    }
  }, [frames])
  
  return (
    <>
    <AddFrame setFrames={ setFrames }/>
    <div id="frames">
      {frames.map(
        frame => (<Frame frame={ frame.rolls }/>)
      )}
    </div>

    <div id="score">
      <p>Total:</p>
      <p>{ totalScore }</p>
    </div>
    </>
    )
}

export default Scorecard;