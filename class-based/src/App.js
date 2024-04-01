import React from "react";

class Counter extends React.Component{

  constructor(props){
    super(props);
    this.state={count:2}
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement=this.handleIncrement.bind(this);
  }

  handleDecrement() {
    this.setState(curState=>{
       return {count:curState.count-1}
    });
  }

  handleIncrement() {
    this.setState(curState=>{
      return {count:curState.count+1}
    });
  }

  render(){
       return (
    <div className="app">
        <button className="btnMinus" onClick={this.handleDecrement}>HULLO -</button>
        <span className="numberSpan">{this.state.count}</span>
        <button className="btnPlus" onClick={this.handleIncrement}>+ HULLO</button>
      </div>
    );
  }
};
export default Counter;
