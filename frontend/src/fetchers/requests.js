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

export const postFrame = async (rolls) => {
  const response = await fetch("http://localhost:3000/frame", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "roll1": Number(rolls[0]),
      "roll2": Number(rolls[1])
    })
  })
  return response
}