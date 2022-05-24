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
			id: 1,
			image: atlanta,
		},
		{
			name: "chicago",
			id: 2,
			image: boston,
		},
		{
			name: "brooklyn",
			id: 3,
			image: brooklyn,
		},
		{
			name: "charlotte",
			id: 4,
			image: charlotte,
		},
	]);

	return (
		<div>
			<Header currentScore={currentScore} highScore={highScore} />
			<Card cards={cards} />
		</div>
	);
}

export default App;
