import { MutableRefObject, useEffect } from 'react';

const useClickAway = (
	ref: MutableRefObject<HTMLElement | null>,
	handle: (event: Event) => void,
) => {
	useEffect(() => {
		const listener = (event: Event) => {
			const el = ref.current;

			if (!event || !el || el.contains((event as any).target)) return;

			handle(event);
		};

		document.addEventListener('click', listener);

		return () => document.removeEventListener('click', listener);
	}, [ref, handle]);
};

export default useClickAway;
