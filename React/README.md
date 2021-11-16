## Table of Contents

1. [useImperativeHandle](#useImperativeHandle)

## useImperativeHandle

* useImperativeHandle 可以让你在使用 ref 时自定义暴露给父组件的实例值。在大多数情况下，应当避免使用 ref 这样的命令式代码。useImperativeHandle 应当与 forwardRef 一起使用
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
