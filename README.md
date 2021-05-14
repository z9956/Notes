## Table of Contents

[eslint](#eslint)<br>
[React](#React)
[zsh](#zsh)

## eslint
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
### setState更新数组元素
```
this.setState({ [list[{ index }]]: item });
```
### Code-Splitting
[React.lazy Suspense](https://zh-hans.reactjs.org/docs/code-splitting.html#reactlazy)

**[⬆ back to top](#table-of-contents)**

## zsh
### zsh bindkey
不使用 [Oh My Zsh](https://github.com/ohmyzsh/ohmyzsh) 配置，直接用zsh安装[zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions) ,[zsh-syntax-highlighting](https://github.com/zsh-users/zsh-syntax-highlighting) 后，backward-word、forward-word错误

[zsh手册](http://zsh.sourceforge.net/Doc/Release/Zsh-Line-Editor.html#Standard-Widgets)


.zshrc下添加
```
# ctrl+<- | ctrl+->
bindkey "^[[1;5D" backward-word
bindkey "^[[1;5C" forward-word
```
**[⬆ back to top](#table-of-contents)**
