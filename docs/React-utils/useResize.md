import UseResize from '../../src/components/useResize';

## examples

查看控制台输出
<UseResize/>

## source code

```typescript jsx
import { useEffect } from 'react';

const useResize = (callback: Function, immediatelyInvoke: boolean = true) => {
	useEffect(() => {
		const fn = () => callback();

		if (immediatelyInvoke) fn();

		window.addEventListener('resize', fn);

		return () => window.removeEventListener('resize', fn);
	}, []);
};

export default useResize;
```
