import React, { useState, useEffect } from 'react';
import FlashcardList from './FlashcardList';
import './app.css';

function App() {
	const [flashcards, setFlashcards] = useState([]);

	useEffect(() => {
		fetch('./flashcards.json')
			.then(res => res.json())
			.then(flashcards => setFlashcards(flashcards));
	}, []);
	return (
		<div>
			<FlashcardList flashcards={flashcards} />
		</div>
	);
}

export default App;
