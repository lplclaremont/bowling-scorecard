import { useState } from 'react';
import { fetchFrames, postFrame } from '../fetchers/requests'

const AddFrame = ({setFrames}) => {
  const [roll1, setRoll1] = useState(0)
  const [roll2, setRoll2] = useState(0)

  const handleSubmit = (event) => {
    event.preventDefault();
    const rolls = [roll1, roll2]
    postFrame(rolls)
    fetchFrames(setFrames)
  }

  const changeRoll1 = (event) => {
    setRoll1(event.target.value)
  }

  const changeRoll2 = (event) => {
    setRoll2(event.target.value)
  }

  return(
    <form className="addFrame" onSubmit={ handleSubmit }>
      <label htmlFor="roll1">First roll pins (0-10):</label>
      <input type="number" id="roll1" name="roll1"
       min="0" max="10" required={true} onChange={changeRoll1}></input>
      <label htmlFor="roll2">Second roll pins (0-10):</label>
      <input type="number" id="roll2" name="roll2"
       min="0" max="10" required={true} onChange={changeRoll2}></input>
      <label htmlFor="roll3">Third roll pins (0-10).... (**Final frame only**):</label>
      <input type="number" id="roll3" name="roll3"
       min="0" max="10"></input>
      <input className="addFrameSubmit" type="submit" />
    </form>
  )
}

export default AddFrame;
