import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangocount: 0, bananacount: 0}

  onIncrementMango = () => {
    this.setState(prevState => ({mangocount: prevState.mangocount + 1}))
  }

  onIncrementBanana = () => {
    this.setState(prevState => ({bananacount: prevState.bananacount + 1}))
  }

  render() {
    const {mangocount, bananacount} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">
            Bob ate <span className="highlight">{mangocount}</span> mangoes{' '}
            <span className="highlight">{bananacount}</span> bananas
          </h1>
          <div className="card">
            <div className="fruit">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button className="button" onClick={this.onIncrementMango}>
                Eat Mango
              </button>
            </div>
            <div className="fruit">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button className="button" onClick={this.onIncrementBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
