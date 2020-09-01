/** @format */

import React from 'react';

import './card.style.css';

export const Card = (props) => (
	<div className="card-container">
		<img
			alt="You Know you are too a monster"
			src={`https://robohash.org/${
				props.monster.id + 10
			}?set=set1&size=180x180`}
		/>
		<h2>{props.monster.name}</h2>
		<p>{props.monster.email}</p>
	</div>
);
