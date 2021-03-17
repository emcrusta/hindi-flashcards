import React from 'react';

const Navigation = ({ next, prev }) => {
	return (
		<div className="nav-buttons">
			<button onClick={prev}>Previous Card</button>
			<button onClick={next}>Next Card</button>
		</div>
	);
};

export default Navigation;
