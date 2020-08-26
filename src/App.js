/** @format */

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			monster: [
				{
					name: 'Aman',
				},
				{
					name: 'Saurabh',
				},
				{
					name: 'RKT',
				},
				{
					name: 'Arun',
				},
				{
					name: 'Anarth',
				},
			],
		};
	}
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>{this.state.string}</p>
					<button onClick={() => this.setState({ string: 'Raghav' })}>
						button
					</button>
				</header>
			</div>
		);
	}
}

export default App;
