import React, { Component } from 'react'; 
import './Styles.css';
import Child from './Child';
class ClassA extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Ramesh"
        }
    }
    myStyles = {
        color: 'red'
    }
    render() {
        return(
            <>
            <h1>Hello1</h1>
            
        <Child username={this.state.name} />
            </>
        )
        }
}
export default ClassA;