import React, {useState} from "react";

const App = (props) => {
	const [index, setIndex] = useState(0)
	const [key, setKey] = useState(0)
	const [points, setPoints] = useState({0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0})

	const setVote = () => {
		const copy = { ...points }
		copy[key] += 1
		setPoints(copy)
	  }

	const anecdotes = [
		'If it hurts, do it more often',
		'Adding manpower to a late software project makes it later!',
		'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
		'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
		'Premature optimization is the root of all evil.',
		'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
	]
	
	const handleChange = () => {
		setIndex(Math.floor(Math.random()*anecdotes.length))
	}
	
	return (
		<div>
			<p>{anecdotes[index]}</p>
			<p>has {points[key]} votes</p>
			<button onClick={setVote}>Vote</button>
			<button onClick = {handleChange}>Next Anecdote</button>
		</div>
	)
}


export default App;
