## Table of Contents

1. [webpack examples](https://github.com/webpack/webpack/tree/main/examples)
2. [require.context](#require.context)

## [require.context](https://webpack.docschina.org/guides/dependency-management/#requirecontext)

```javascript
//如果想引入一个文件夹下面的所有文件，或者引入能匹配一个正则表达式的所有文件，这个功能就会很有帮助，例如:
function importAll(r) {
  r.keys().forEach(r);
}

importAll(require.context('../components/', true, /\.js$/));


const cache = {};

function importAll(r) {
  r.keys().forEach((key) => (cache[key] = r(key)));
}

importAll(require.context('../components/', true, /\.js$/));
```

**[⬆ back to top](#table-of-contents)**
