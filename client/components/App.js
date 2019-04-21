import React from 'react';

const App = ({ children }) => {
	return (
		<div className="container">
			<div>{children}</div>
		</div>
	);
};

export default App;
