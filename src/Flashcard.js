import React, { useState } from 'react';

const Flashcard = ({ flashcard, flip, flipFunc }) => {
	return (
		<div onClick={flipFunc} className={`card ${flip ? 'flip' : ''}`}>
			<div className="front">{flashcard.question}</div>
			<div className="back">{flashcard.answer}</div>
		</div>
	);
};

export default Flashcard;
