import React from "react";

export default function Card(props) {
	let [items, setItems] = React.useState(props.cards);
	console.log(items);

	function shuffle(array) {
		return array.sort(() => Math.random() - 0.5);
	}

	function testShuffle() {
		let newArr = [...items];
		let randomNewArr = shuffle(newArr);
		setItems(randomNewArr);
	}
	let allCards = items.map((card) => {
		return <img src={card.image}></img>;
	});

	return (
		<div>
			{allCards}
			<button onClick={testShuffle}>Shuffle!</button>
		</div>
	);
}
