import React from "react";

export default function Header(props) {
	return (
		<div>
			<header>
				<h2>NBA Memory Card Game</h2>

				<div className="scoreboard">
					<div>Current Score: {props.currentScore}</div>
					<div>High Score: {props.highScore}</div>
				</div>
			</header>
		</div>
	);
}
