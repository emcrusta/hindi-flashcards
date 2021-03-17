import { React, useState } from 'react';
import Flashcard from './Flashcard';
import Navigation from './Navigation';

const FlashcardList = ({ flashcards }) => {
	const [card, setCard] = useState(0);

	const nextCard = event => {
		if (card < flashcards.length - 1) {
			setCard(card + 1);
		} else {
			alert(`You've reached the last flashcard.`);
		}
	};
	const prevCard = event => {
		if (card > 0) {
			setCard(card - 1);
		} else {
			alert(`You've reached the first flashcard.`);
		}
	};

	return (
		<div className="card-grid">
			<Flashcard flashcard={flashcards[card]} key={flashcards[0].id} />
			<Navigation next={nextCard} prev={prevCard} />
		</div>
	);
};

export default FlashcardList;
