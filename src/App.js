import "./App.css";
import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import boston from "./logos/boston.png";
import atlanta from "./logos/atlanta.png";
import brooklyn from "./logos/brooklyn.png";
import charlotte from "./logos/charlotte.png";

function App() {
	let [currentScore, setCurrentScore] = React.useState(0);
	let [highScore, setHighScore] = React.useState(0);
	let [cards, setCards] = React.useState([
		{
			name: "atlanta",
			key: 1,
			image: atlanta,
			clicked: false,
		},
		{
			name: "boston",
			key: 2,
			image: boston,
			clicked: false,
		},
		{
			name: "brooklyn",
			key: 3,
			image: brooklyn,
			clicked: false,
		},
		{
			name: "charlotte",
			key: 4,
			image: charlotte,
			clicked: false,
		},
	]);

	function shuffle(array) {
		return array.sort(() => Math.random() - 0.5);
	}

	function shuffleCards() {
		let newArr = [...cards];
		let randomNewArr = shuffle(newArr);
		setCards(randomNewArr);
		// setCurrentScore((prevScore) => {
		// 	return prevScore + 1;
		// });
	}

	function testShuffle(event) {
		let id = parseInt(event.target.id);
		setCards((previousCards) =>
			previousCards.map((card) => {
				return card.key === id ? { ...card, clicked: true } : card;
			})
		);
	}
	console.log(cards);

	return (
		<div>
			<Header currentScore={currentScore} highScore={highScore} />
			<Card cards={cards} shuffle={testShuffle} />
		</div>
	);
}

export default App;
