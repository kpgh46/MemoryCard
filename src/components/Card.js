import React from "react";

export default function Card(props) {
	let allCards = props.cards.map((card) => {
		return (
			<div onClick={props.shuffle} key={card.key}>
				<img src={card.image} id={card.key}></img>
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
