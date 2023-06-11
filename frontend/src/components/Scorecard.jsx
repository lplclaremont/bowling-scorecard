import React, { useEffect, useState } from 'react';

import Frame from './Frame'
import { fetchFrames } from '../fetchers/requests'

const Scorecard = () => {
  const [frames, setFrames] = useState([]);

  useEffect(() => {
    fetchFrames(setFrames)
  }, [])
  
  return (
    <div id="frames">
      {frames.map(
        frame => (<Frame frame={ frame }/>)
      )}

    </div>
    )
}

export default Scorecard;