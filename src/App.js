import { useState } from "react";
import "./App.css";
import Title from "./Title";
import Scissors from "./Scissors";
import Rock from "./Rock";
import Paper from "./Paper";
import Result from "./Result";

function App() {
	const [result, setResult] = useState("");
	const [player2, setPlayer2] = useState(0);
	const [com2, setCom2] = useState(0);
	player2 = 0;
	com2 = 0;

	function click(player) {
		const com = parseInt(Math.random() * 3);
		player2 = player;
		com2 = com;

		if ((player2 + 1) % 3 == com2) {
			setPlayer2(player2);
			setCom2(com2);
			setResult("당신이 졌습니다");
		} else if (player2 == com2) {
			setPlayer2(player2);
			setCom2(com2);
			setResult("비겼습니다.");
		} else {
			setPlayer2(player2);
			setCom2(com2);
			setResult("당신이 이겼습니다.");
		}
		console.log(`App click: ${player2}`);
	}

	return (
		<div className="App">
			<Title />
			<Scissors click={click} />
			<Rock click={click} />
			<Paper click={click} />
			<Result result={result} player={player2} com={com} />
		</div>
	);
}

export default App;
