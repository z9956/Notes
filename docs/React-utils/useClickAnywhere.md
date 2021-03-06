import UseClickAnywhere from '../../src/components/useClickAnywhere';

## examples

查看控制台输出
<UseClickAnywhere/>

## source code

```typescript jsx
import { useEffect } from 'react';

const useClickAnywhere = (handle: (event: Event) => void) => {
	useEffect(() => {
		const callback = (event: Event) => handle(event);

		document.addEventListener('click', callback);

		return () => document.removeEventListener('click', callback);
	}, [handle]);
};

export default useClickAnywhere;
```
