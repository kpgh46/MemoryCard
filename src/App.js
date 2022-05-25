import "./App.css";
import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import boston from "./logos/boston.png";
import atlanta from "./logos/atlanta.png";
import brooklyn from "./logos/brooklyn.png";
import charlotte from "./logos/charlotte.png";
import chicago from "./logos/chicago.png";
import cleveland from "./logos/cleveland.png";
import dallas from "./logos/dallas.png";
import denver from "./logos/denver.png";

function App() {
	let defaultCards = [
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
		{
			name: "chicago",
			key: 5,
			image: chicago,
			clicked: false,
		},
		{
			name: "cleveland",
			key: 6,
			image: cleveland,
			clicked: false,
		},
		{
			name: "dallas",
			key: 7,
			image: dallas,
			clicked: false,
		},
		{
			name: "denver",
			key: 8,
			image: denver,
			clicked: false,
		},
	];

	let [currentScore, setCurrentScore] = React.useState(0);
	let [highScore, setHighScore] = React.useState(0);
	let [cards, setCards] = React.useState(defaultCards);

	function shuffle(array) {
		return array.sort(() => Math.random() - 0.5);
	}

	React.useEffect(
		() => {
			shuffleCards();
		},
		[currentScore],
		[highScore]
	);

	function reset() {
		setHighScore((score) => {
			return currentScore > score ? currentScore : score;
		});

		setCurrentScore(0);

		setCards(defaultCards);
	}

	function shuffleCards() {
		let newArr = [...cards];
		let randomNewArr = shuffle(newArr);
		setCards(randomNewArr);
	}

	function testShuffle(event) {
		let id = parseInt(event.target.id);

		let selectedCard = cards.filter((card) => {
			return card.key === id;
		});

		if (selectedCard[0].clicked) {
			reset();
			return;
		}

		setCards((previousCards) =>
			previousCards.map((card) => {
				return card.key === id ? { ...card, clicked: true } : card;
			})
		);
		setCurrentScore((previousScore) => previousScore + 1);
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
