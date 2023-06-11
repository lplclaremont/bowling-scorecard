import React, { useEffect, useState } from 'react';

import Frame from './Frame'

const Scorecard = () => {
  const [frames, setFrames] = useState([]);
  
  return (
    <div id="frames">
      {frames.map(
        frame => (<Frame frame={ frame }/>)
      )}

    </div>
    )
}

export default Scorecard;