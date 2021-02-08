// your Bomb code here!
import React from 'react';

export default class Bomb extends React.Component {

    constructor(props){
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    decrease = () => {
        this.setState({
            secondsLeft: this.state.secondsLeft - 1
        })
    }



    render(){
        if (this.state.secondsLeft != 0) {
            return `${this.state.secondsLeft} seconds left before I go boom!`
            this.decrease
        } else {
            return "Boom!"
        }
    }
}