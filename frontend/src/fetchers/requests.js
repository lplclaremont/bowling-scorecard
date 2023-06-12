// This stores out http requests made to the backend API

export const fetchFrames = async (setFrames) => {
  try {
    const response = await fetch("http://localhost:3000/scorecard");
    const data = await response.json();
    setFrames(data.scorecard);
  }
  catch(e) {
    console.log(e)
  }
}