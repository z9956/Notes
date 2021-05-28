## Table of Contents

1. [Version Manager](#Version-Manager)
1. [ESLint](#ESLint)
2. [React](#React)
3. [Zsh](#Zsh)

## Version Manager
### nvm
[Node Version Manager](https://github.com/nvm-sh/nvm)
### gvm
[Go Version Manager](https://github.com/moovweb/gvm)

**[⬆ back to top](#table-of-contents)**

## ESLint
### @typescript-eslint/no-unused-vars 
[no-unused-vars对TypeScript支持差，会报告不正确的错误](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md)

[[no-unused-vars] False positive enum ](https://github.com/typescript-eslint/typescript-eslint/issues/2621)
```
{
  // note you must disable the base rule as it can report incorrect errors
  "no-unused-vars": "off",
  "@typescript-eslint/no-unused-vars": ["error"]
}
```

**[⬆ back to top](#table-of-contents)**

## React
### normalize.css(使用create-react-app创建的项目)
app.css下添加
```
@import-normalize; /* bring in normalize.css styles */
```
### setState更新数组元素
```
this.setState({ [list[{ index }]]: item });
```
### Code-Splitting
[React.lazy Suspense](https://zh-hans.reactjs.org/docs/code-splitting.html#reactlazy)

### 错误边界（Error Boundaries）
[官方文档](https://zh-hans.reactjs.org/docs/error-boundaries.html)
```javascript
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // 你同样可以将错误日志上报给服务器
    logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // 你可以自定义降级后的 UI 并渲染
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}
```
**[⬆ back to top](#table-of-contents)**

## Zsh
### Zsh bindkey
不使用 [Oh My Zsh](https://github.com/ohmyzsh/ohmyzsh) 配置，直接用zsh安装[zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions) ,[zsh-syntax-highlighting](https://github.com/zsh-users/zsh-syntax-highlighting) 后，backward-word、forward-word错误

[Zsh绑定键转义序列](http://zsh.sourceforge.net/Doc/Release/Zsh-Line-Editor.html#Standard-Widgets)

.zshrc下添加
```
# ctrl+<- | ctrl+->
bindkey "^[[1;5D" backward-word
bindkey "^[[1;5C" forward-word
```
**[⬆ back to top](#table-of-contents)**
