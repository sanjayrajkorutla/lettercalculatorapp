// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    letter: '',
    lettersCount: 0,
  }

  changeLetter = event => {
    const req = event.target.value
    const lengthReq = req.length
    this.setState({letter: req, lettersCount: lengthReq})
  }

  render() {
    const {letter, lettersCount} = this.state
    return (
      <div className="container">
        <div className="column">
          <h1>Calculate the Letters you enter</h1>
          <label className="label" htmlFor="phrase">
            Enter the phrase
          </label>
          <input
            placeholder="Enter the phrase"
            className="inputWord"
            id="phrase"
            onChange={this.changeLetter}
            value={letter}
          />
          <p className="button">No.of letters: {lettersCount}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
        />
      </div>
    )
  }
}
export default LettersCalculator
