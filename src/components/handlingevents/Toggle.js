import React, {Component} from 'react';

class Toggle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true
        };
        this.changeState = this.changeState.bind(this);
        this.deleteRow = this.deleteRow.bind(this);
    }

    changeState() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
        console.log("cliked", this.state.isToggleOn);
    }
    deleteRow(id, e) {
        console.log(id);
    }
    render() {
        let id = 10;
        return(
            <>
            <button onClick={this.changeState}>Change State</button>
            <h1>{this.state.isToggleOn? 'ON' : 'OFF'}</h1>
            <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>

            </>
        )
    }
}

export default Toggle;