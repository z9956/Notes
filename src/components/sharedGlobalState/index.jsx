import React from 'react';
import Larry from './larry';
import Curly from './curly';
import Moe from './moe';
import useCounter from './useCounter';
import global from './global';

const App = () => {
	global.counter = useCounter();

	return (
		<>
			<Larry />
			<Curly />
			<Moe />
		</>
	);
};

export default App;
