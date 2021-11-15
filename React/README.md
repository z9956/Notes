## Table of Contents

1. [父组件调用子组件方法](#父组件调用子组件方法)

## 父组件调用子组件方法

```tsx
//父组件
import { useRef } from 'react';
const curRef: MutableRefObject<{ getFiles: Function } | undefined> = useRef();
curRef.current?.getFiles(); //调用子组件方法或者获取数据

<MailFiles ref={curRef} />;

//子组件
import { useState, useImperativeHandle, forwardRef } from 'react';
const MailFiles = forwardRef((props, ref) => {
	const [files, setFiles] = useState<UploadFileType[]>([]);

	useImperativeHandle(ref, () => {
		return {
			getFiles: () => files,
		};
	});
});
```

**[⬆ back to top](#table-of-contents)**
