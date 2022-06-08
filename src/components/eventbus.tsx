import React from 'react';
import Eventbus from '@site/src/utils/eventbus';

const EventbusComponent = () => {
	const eventbus = new Eventbus();

	const eventList = [
		{
			text: 'a event',
			event: () => {
				eventbus.emit('a', { a: 1 });
			},
		},
		{
			text: 'b once event',
			event: () => {
				eventbus.emit('b', 'b');
			},
		},
	];

	const createElementAndBindEvent = ({ text, event }) => {
		return (
			<button style={{ marginRight: 10 }} onClick={event}>
				{text}
			</button>
		);
	};

	eventbus.on('a', (data) => {
		console.log({ data });
	});

	eventbus.once('b', () => {
		console.log('bbb');
	});

	return <div>{eventList.map((item) => createElementAndBindEvent(item))}</div>;
};

export default EventbusComponent;
