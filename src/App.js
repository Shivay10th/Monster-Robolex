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
		return <div className="App"></div>;
	}
}

export default App;
