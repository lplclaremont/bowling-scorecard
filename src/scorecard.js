const Frame = require('./frame');

class Scorecard {
  constructor() {
    this.frames = [];
  }

  addFrame() {
    const rolls = Array.from(arguments);
    const frame = new Frame(rolls);
    this.frames.push(frame);
    this.#updateScores()
  }

  currentScore() {
    return this.calculateScoreUpTo(this.frames.length);
  }

  calculateScoreUpTo(i) {
    return this.frames.slice(0, i + 1)
    .map((frame) => frame.getFrameScore())
    .reduce((sum, num) => sum += num, 0)
  }

  show() {
    const scorecardArr = this.frames.map(this.format);
    return scorecardArr.join('\n')
  }

  format = (frame) => {
    const round = this.frames.indexOf(frame) + 1;
    return `${round} - rolls: ${frame.rolls} ...... ${this.calculateScoreUpTo(round - 1)}`
  }

  #updateScores() {
    for(let i = 0 ; i < this.frames.length - 1 ; i++) {
      const currentFrame = this.frames[i]
      const frameScore = currentFrame.getFrameScore()

      if (frameScore !==null) {
        continue
      }

      const nextFrame = this.frames[i + 1]
      const frameAfterNext = this.frames[i + 2]

      if (currentFrame.spare()) {
        currentFrame.scoreWithSpareBonus(nextFrame);
      } else if (currentFrame.strike()) {
        currentFrame.scoreWithStrikeBonus(nextFrame, frameAfterNext)
      }
    }
  }
}

module.exports = Scorecard;