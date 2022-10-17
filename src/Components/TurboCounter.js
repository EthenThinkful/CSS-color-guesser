import React from "react";
import Counter from "./Counter";
import "./TurboCounter.css";

class TurboCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {stepSize: 1}
    this.incrementCounter = this.incrementCounter.bind(this)
    this.decrementCounter = this.decrementCounter.bind(this)
  }
  
  // TODO your code here. Feel free to use a function component.
  incrementCounter() {
    this.setState(state => ({stepSize: state.stepSize + 1}))
  }
  
    decrementCounter() {
        if (this.state.stepSize >= 2) {
    this.setState(state => ({stepSize: state.stepSize - 1}))
        }
  }
  
  render() {
    return (
      <div className="main">
        <Counter stepSize={this.state.stepSize}/>
        <h3 className="step-size">{this.state.stepSize}</h3>
        <button className="increment-step-size" onClick={this.incrementCounter}>step size +</button>
        <button className="decrement-step-size" onClick={this.decrementCounter}>step size -</button>
      </div>
    );
  }
}

export default TurboCounter;