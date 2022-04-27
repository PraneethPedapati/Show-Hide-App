import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isFirstNamePresent: false, isLastNamePresent: false}

  checkFirstNameStatus = () => {
    this.setState(prevState => ({
      isFirstNamePresent: !prevState.isFirstNamePresent,
    }))
  }

  checkLastNameStatus = () => {
    this.setState(prevState => ({
      isLastNamePresent: !prevState.isLastNamePresent,
    }))
  }

  render() {
    const {isFirstNamePresent, isLastNamePresent} = this.state
    return (
      <div className="bg-container">
        <h1>Show/Hide</h1>
        <div className="name-container">
          <div className="name-card">
            <button
              type="button"
              className="button"
              onClick={this.checkFirstNameStatus}
            >
              Show/Hide Firstname
            </button>
            {isFirstNamePresent && <p className="name">Joe</p>}
          </div>
          <div className="name-card">
            <button
              type="button"
              className="button"
              onClick={this.checkLastNameStatus}
            >
              Show/Hide Lastname
            </button>
            {isLastNamePresent && <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
