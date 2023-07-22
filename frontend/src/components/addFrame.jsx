import { fetchFrames, postFrame } from '../fetchers/requests'

const AddFrame = ({setFrames}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    postFrame()
    fetchFrames(setFrames)
  }

  return(
    <form className="addFrame" onSubmit={ handleSubmit }>
      <input className="addFrameSubmit" type="submit" />
    </form>
  )
}

export default AddFrame;
