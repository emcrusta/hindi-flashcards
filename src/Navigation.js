import React from 'react';

const Navigation = ({ next, prev }) => {
	return (
		<div className="nav-buttons">
			<button className="prev-button" onClick={prev}>
				Previous Card
			</button>
			<button className="next-button" onClick={next}>
				Next Card
			</button>
		</div>
	);
};

export default Navigation;
