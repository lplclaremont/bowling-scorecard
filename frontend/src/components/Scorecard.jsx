import React, { useEffect, useState } from 'react';

import Frame from './Frame'
import AddFrame from './addFrame'
import { fetchFrames } from '../fetchers/requests'

const Scorecard = () => {
  const [frames, setFrames] = useState([]);
  const [totalScore, setTotalScore] = useState(0);

  useEffect(() => {
    // fetchFrames(setFrames)
    //const lastFrame = frames.slice(-1)
    console.log(frames)
    //setTotalScore(lastFrame.score)
    console.log(totalScore)
  }, [frames])
  
  // useEffect(() => {
  //   const frameKeys = Object.keys(frames);
  //   if (frameKeys.length > 0) {
  //     const lastFrameKey = frameKeys[frameKeys.length - 1];
  //     const lastFrame = frames[lastFrameKey];
  //     if (lastFrame && lastFrame.score !== undefined) {
  //       setTotalScore(lastFrame.score);
  //       fetchFrames(setFrames);
  //     } else {
  //       console.log("Unable to retrieve the score from the last frame");
  //     }
  //   } else {
  //     console.log("No frames available");
  //   }
  // }, [frames]);
  
  return (
    <>
    <div id="frames">
      {frames.map(
        frame => (<Frame frame={ frame.rolls }/>)
      )}
      <AddFrame setFrames={ setFrames }/>
    </div>

    <div id="score">
      <p>Total:</p>
      <p>{ totalScore }</p>
    </div>
    </>
    )
}

export default Scorecard;