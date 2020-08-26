/** @format */

import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			monster: [
				{
					name: 'Aman',
					id: 0,
				},
				{
					name: 'Saurabh',
					id: 1,
				},
				{
					name: 'RKT',
					id: 2,
				},
				{
					name: 'Arun',
					id: 3,
				},
				{
					name: 'Anarth',
					id: 4,
				},
			],
		};
	}
	render() {
		return (
			<div className="App">
				{this.state.monster.map((monster) => (
					<h1 key={monster.id}>{monster.name}</h1>
				))}
			</div>
		);
	}
}

export default App;
