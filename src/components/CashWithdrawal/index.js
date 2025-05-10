// Write your code here
import {Component} from 'react'
import './index.css'
import Denomination from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {
    count: 2000,
  }

  ReDuce = x => {
    this.setState(previous => ({
      count: previous.count - x,
    }))
  }

  render() {
    const {denominationsList} = this.props
    const {count} = this.state
    return (
      <div className="main">
        <div className="secont">
          <div className="profiledet">
            <div className="profilename">s</div>
            <h1>Random Number</h1>
          </div>
          <div className="balancedet">
            <p>Your Balance</p>
            <div className="amount_container">
              <p>{count}</p>
              <p>In Rupees</p>
            </div>
          </div>
          <div>
            <Denomination
              const
              Reduce={this.ReDuce}
              denominationsList={denominationsList}
              key={denominationsList.id}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
