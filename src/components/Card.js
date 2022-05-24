import React from "react";

export default function Card(props) {
	let allCards = props.cards.map((card) => {
		return (
			<div onClick={props.shuffle}>
				<img src={card.image}></img>
			</div>
		);
	});

	return (
		<div className="card-container">
			{allCards}
			<button onClick={props.shuffle}>Shuffle!</button>
		</div>
	);
}
