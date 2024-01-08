import React from "react";

class Counter extends React.Component{
    constructor(){
        super();
        this.state = {
            count: 0
        }
    }
    render(){

        let incrementCounter = () => {
            this.setState(prevState => {
                return {count : prevState.count +1}
            })
        }

        let decrementCounter = () => {
            this.setState(prevState => {
                return {count : prevState.count -1}
            })
        }

        let reset = () =>{
            this.setState({count : 0});
        }

        return (
            <div>
                <h1>Counter</h1>
                <p>{this.state.count}</p>
                <div>
                    <button onClick={() => incrementCounter()}>+</button>
                    <button onClick={() => decrementCounter()}>-</button>
                    <button onClick={() => reset()}>Reset</button>
                </div>
            </div>
        )
    }
}


export default Counter;