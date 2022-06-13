import UseStateListeningPropDemo from '../../src/components/useStateListeningProp';

## examples

查看控制台输出
<UseStateListeningPropDemo/>

## source code

```typescript
import { useState, useRef, useEffect, Dispatch, SetStateAction } from 'react';

type StateListeningPropResult<T> = [T, Dispatch<SetStateAction<T>>];

const useStateListeningProp = <T>(prop: T): StateListeningPropResult<T> => {
	const [state, setState] = useState<T>(prop);
	const previousPropRef = useRef<T>();

	if (prop !== previousPropRef.current && prop !== state) {
		setState(prop);
	}

	useEffect(() => {
		previousPropRef.current = prop;
	}, [prop]);

	return [state, setState];
};

export default useStateListeningProp;
```
