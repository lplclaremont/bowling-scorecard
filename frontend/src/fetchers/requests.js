// This stores out http requests made to the backend API

export const fetchFrames = async (setFrames) => {
  try {
    const response = await fetch("http://localhost:3000/scorecard");
    console.log(response)
    const data = await response.json();
    const frameRolls = data.scorecard.map(
      (frame) => (frame.rolls)
    )
    setFrames(frameRolls);
  }
  catch(e) {
    console.log(e)
  }
}