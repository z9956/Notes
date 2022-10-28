import React from 'react';
import EventEmitter from '@site/src/utils/eventEmitter';

const EventbusComponent = () => {
	const eventEmitter = new EventEmitter();

	const eventList = [
		{
			text: 'a event',
			event: () => {
				eventEmitter.emit('a', { a: 1 });
			},
		},
		{
			text: 'b once event',
			event: () => {
				eventEmitter.emit('b', 'b');
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

	eventEmitter.on('a', (data) => {
		console.log({ data });
	});

	eventEmitter.once('b', () => {
		console.log('bbb');
	});

	return <div>{eventList.map((item) => createElementAndBindEvent(item))}</div>;
};

export default EventbusComponent;
