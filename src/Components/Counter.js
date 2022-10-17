import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props) //props is an empty object here
    console.log(this.props.stepSize)
    this.state = {counter: 0} //this takes from props and makes the empty object {counter: 0}
    this.incrementCounter = this.incrementCounter.bind(this) //this.incrementCounter has a global reference to the incrementCounter() function
    this.decrementCounter = this.decrementCounter.bind(this) //this.decrementCounter has a global reference to the decrementCounter() function
  }
  
  // TODO your code here; feel free to use a functional component
 incrementCounter() {
   this.setState(state => ({counter: state.counter + this.props.stepSize})); //this.setState works like useState (I think) in that we call state and increment it
 }
  
  decrementCounter() {
    this.setState(state => ({counter: state.counter - this.props.stepSize})); //this.setState works like useState (I think) in that we call state and decrement it
  }
  
  render() {
    return (
      <div>
        <h1 className="counter">{this.state.counter}</h1>
        <button
          className="decrement"
          type="button"
          onClick={this.decrementCounter}
          >
          Decrement
        </button>
        <button type="button"
          className="increment"
          onClick={this.incrementCounter}
          >
          Increment
        </button>
      </div>
    );
  }
}

export default Counter;