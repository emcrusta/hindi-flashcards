import React, { useState } from 'react';
import Flashcard from './Flashcard';
import Navigation from './Navigation';

const FlashcardList = ({ flashcards }) => {
	const [card, setCard] = useState(0);
	const [flip, setFlip] = useState(false);

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
		<div className="card-grid">
			<Flashcard
				flashcard={flashcards[card] ? flashcards[card] : []}
				key={flashcards[card] ? flashcards[card].id : null}
				flip={flip}
				flipFunc={() => setFlip(!flip)}
			/>
			<Navigation next={nextCard} prev={prevCard} />
		</div>
	);
};

export default FlashcardList;
