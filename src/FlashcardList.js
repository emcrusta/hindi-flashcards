import Flashcard from './Flashcard';

const FlashcardList = ({ flashcards, card, flip, flipFunc }) => {
	return (
		<div className="card-grid">
			<Flashcard
				flashcard={flashcards[card] ? flashcards[card] : []}
				key={flashcards[card] ? flashcards[card].id : null}
				flip={flip}
				flipFunc={flipFunc}
			/>
		</div>
	);
};

export default FlashcardList;
