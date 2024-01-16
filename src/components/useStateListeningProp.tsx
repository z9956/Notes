import { useState } from 'react';
import useStateListeningProp from '../hooks/useStateListeningProp';

type User = { id: string; name: string };

const Users: React.FC<{ users: User[] }> = (props) => {
	const { users: usersProp } = props;

	const [users, setUsers] = useStateListeningProp(usersProp);

	const addUser = (userName: User['name']) => {
		setUsers((oldUsers) =>
			oldUsers.concat({
				id: Date.now().toString(),
				name: userName,
			}),
		);
	};

	const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.code === 'Enter') {
			addUser(event.currentTarget.value);
			event.currentTarget.value = '';
		}
	};

	console.error('render', users);
	return (
		<div>
			<input
				type="text"
				placeholder="Enter Your Name"
				onKeyPress={handleKeyPress}
			/>
			<ul>
				{users.map((user) => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul>
		</div>
	);
};

const getRandomUser = () => {
	return {
		id: Date.now().toString(),
		name: `test${Math.floor(Math.random() * 100000)}`,
	};
};

function Demo() {
	const [users, setUsers] = useState([getRandomUser()]);

	const handleAdd = () => {
		setUsers((prevState) => {
			prevState.push(getRandomUser());
			return [...prevState];
		});
	};

	return (
		<div className="App">
			<button onClick={handleAdd}>change users</button>
			<br />
			<Users users={users} />
		</div>
	);
}

export default Demo;
