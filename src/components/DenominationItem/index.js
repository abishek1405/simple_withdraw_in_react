// Write your code here
import {Component} from 'react'
import './index.css'

class Denomination extends Component {
  render() {
    const {Reduce} = this.props
    const onReduce50 = () => {
      Reduce(50)
    }
    const onReduce100 = () => {
      Reduce(100)
    }
    const onReduce200 = () => {
      Reduce(200)
    }
    const onReduce500 = () => {
      Reduce(500)
    }
    return (
      <div>
        <p>Withdraw</p>
        <p>CHOOSE SUM (IN RUPEES)</p>
        <div>
          <ul className="button_container">
            <li>
              <button onClick={onReduce50} type="button">
                50
              </button>
            </li>
            <li>
              <button onClick={onReduce100} type="button">
                100
              </button>
            </li>

            <li>
              <button onClick={onReduce200} type="button">
                200
              </button>
            </li>
            <li>
              <button onClick={onReduce500} type="button">
                500
              </button>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Denomination
