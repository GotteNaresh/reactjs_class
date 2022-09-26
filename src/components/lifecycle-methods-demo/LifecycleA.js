import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: 'Naresh',
			users: []
		}
		console.log('LifecycleA constructor')
	}

	static getDerivedStateFromProps(props, state) {
		console.log('LifecycleA getDerivedStateFromProps');
		return null
	}

	componentDidMount() {
		console.log('LifecycleA componentDidMount');
		fetch('https://jsonplaceholder.typicode.com/todos')
		.then(response => response.json())
		.then(data => this.setState({
			users: data
		}));
	}

	shouldComponentUpdate() {
		console.log('LifecycleA shouldComponentUpdate')
		return true
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('LifecycleA getSnapshotBeforeUpdate')
    return null
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('LifecycleA componentDidUpdate')
	}

	changeState = () => {
		this.setState({
			name: 'Suresh'
		})
	}

	render() {
		console.log('LifecycleA render')
		console.log("test", this.state.users);
		const userList = this.state.users;
		return (
			<>
			<div>
				<h1>{this.state.name}</h1>
				<button onClick={this.changeState}>Change state</button>
				LifecycleA<LifecycleB />
			</div>
			<table>
                <thead>
                    <tr>
                    <th>S.No</th>
                    <th>Title</th>
                    </tr>
                </thead>
                <tbody>
				{userList.map((adjkasdg, index) => {
					return(
						<tr key={index}><td>{index + 1}</td><td>{adjkasdg.title}</td></tr>
					)
				})}
                </tbody>
			</table>
			</>
		)
	}
}

export default LifecycleA
