import "./App.css";
import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import { levelOne, levelTwo } from "./cardData";

function App() {
	let [currentScore, setCurrentScore] = React.useState(0);
	let [highScore, setHighScore] = React.useState(0);
	let [cards, setCards] = React.useState(levelOne);

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

	React.useEffect(() => {
		if (currentScore === 2) {
			setCards(levelTwo);
		}
	}, [currentScore]);

	function reset() {
		setHighScore((score) => {
			return currentScore > score ? currentScore : score;
		});

		setCurrentScore(0);
		setCards(levelOne);
	}

	function shuffleCards() {
		let newArr = [...cards];

		let randomNewArr = shuffle(newArr);

		setCards(randomNewArr);
	}

	function handleClick(event) {
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
			<Card cards={cards} shuffle={handleClick} />
		</div>
	);
}

export default App;
