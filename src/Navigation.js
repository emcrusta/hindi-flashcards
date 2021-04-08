import React from 'react';

const Navigation = ({ next, prev }) => {
	return (
		<div className="nav-buttons">
			<button className="nav-button" id="prev-button" onClick={prev}>
				Previous Card
			</button>
			<button className="nav-button" id="next-button" onClick={next}>
				Next Card
			</button>
		</div>
	);
};

export default Navigation;
