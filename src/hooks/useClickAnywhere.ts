import { useEffect } from 'react';

const useClickAnywhere = (handle: (event: Event) => void) => {
	useEffect(() => {
		const callback = (event: Event) => handle(event);

		document.addEventListener('click', callback);

		return () => document.removeEventListener('click', callback);
	}, [handle]);
};

export default useClickAnywhere;
