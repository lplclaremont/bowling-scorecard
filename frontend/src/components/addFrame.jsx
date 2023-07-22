import { fetchFrames } from '../fetchers/requests'

const AddFrame = ({setFrames}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    fetchFrames(setFrames)
    console.log("clicked the button bbe")
  }


  return(
    <form className="addFrame" onSubmit={ handleSubmit }>
      <input className="addFrameSubmit" type="submit" />
    </form>
  )
}

export default AddFrame;
