import OpenBase64ImageComponent from '../../src/components/openBase64Image';

## 新窗口打开图片

## examples

<OpenBase64ImageComponent/>

## source code

```javascript
const img = document.createElement('img');
//图片路径
img.src = URL.createObjectURL(files[0]);

const newWindow = window.open('');
newWindow.document.write(img.outerHTML);
newWindow.document.close();
```
