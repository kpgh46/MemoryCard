import "./App.css";
import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import boston from "./logos/boston.png";
import atlanta from "./logos/atlanta.png";
import brooklyn from "./logos/brooklyn.png";
import charlotte from "./logos/charlotte.png";

function App() {
	let [currentScore, setCurrentScore] = React.useState(5);
	let [highScore, setHighScore] = React.useState(2);
	let [cards, setCards] = React.useState([
		{
			name: "atlanta",
			key: 1,
			image: atlanta,
			clicked: false,
		},
		{
			name: "chicago",
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
	}

	return (
		<div>
			<Header currentScore={currentScore} highScore={highScore} />
			<Card cards={cards} shuffle={shuffleCards} />
		</div>
	);
}

export default App;
