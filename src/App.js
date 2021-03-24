import React, { useState, useEffect, useRef } from 'react';
import FlashcardList from './FlashcardList';
import './app.css';

function App() {
	const [flashcards, setFlashcards] = useState([]);
	const [categories, setCategories] = useState([]);
	const categoryEl = useRef();

	useEffect(() => {
		fetch('./categories.json')
			.then(res => res.json())
			.then(categories => setCategories(categories));
	}, []);
	// loads up letter cards initially
	useEffect(() => {
		fetch('./letter-cards.json')
			.then(res => res.json())
			.then(flashcards => setFlashcards(flashcards));
	}, []);
	// handles card category selection
	function handleSelect(event) {
		event.preventDefault();
		fetch(categoryEl.current.value)
			.then(res => res.json())
			.then(flashcards => setFlashcards(flashcards));
	}

	return (
		<div>
			<form className="input-form" action="">
				<div className="form-group">
					<label htmlFor="category">Select a Category</label>
					<select
						id="category"
						ref={categoryEl}
						onClick={handleSelect}
					>
						{categories.map(category => {
							return (
								<option value={category.file} key={category.id}>
									{category.name}
								</option>
							);
						})}
					</select>
				</div>
			</form>
			<FlashcardList flashcards={flashcards} />
		</div>
	);
}

export default App;
