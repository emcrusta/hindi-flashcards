import React, { useState, useEffect, useRef } from 'react';
import FlashcardList from './FlashcardList';
import Navigation from './Navigation';
import './app.css';

function App() {
	const [flashcards, setFlashcards] = useState([]);
	const [categories, setCategories] = useState([]);
	const [card, setCard] = useState(0);
	const [flip, setFlip] = useState(false);
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
	const handleSelect = event => {
		event.preventDefault();
		fetch(categoryEl.current.value)
			.then(res => res.json())
			.then(flashcards => setFlashcards(flashcards));
		setCard(0);
		setFlip(false);
	};

	const nextCard = event => {
		if (card < flashcards.length - 1) {
			setCard(card + 1);
			setFlip(false);
		} else {
			alert(`You've reached the last flashcard.`);
		}
	};
	const prevCard = event => {
		if (card > 0) {
			setCard(card - 1);
			setFlip(false);
		} else {
			alert(`You've reached the first flashcard.`);
		}
	};

	return (
		<div className="app-container">
			<form className="input-form" action="">
				<div className="form-group">
					<label className="form-el" htmlFor="category">
						Select a Category
					</label>
					<select
						className="form-el"
						id="category"
						ref={categoryEl}
						onChange={handleSelect}
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
			<FlashcardList
				flashcards={flashcards}
				card={card}
				flip={flip}
				flipFunc={() => setFlip(!flip)}
			/>
			<Navigation next={nextCard} prev={prevCard} />
		</div>
	);
}

export default App;
