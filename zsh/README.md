## Table of Contents

1. [zsh bindkey](#zsh bindkey)

## zsh bindkey

不使用 [Oh My Zsh](https://github.com/ohmyzsh/ohmyzsh) 配置，直接用zsh安装[zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions) ,[zsh-syntax-highlighting](https://github.com/zsh-users/zsh-syntax-highlighting) 后，backward-word、forward-word错误


[zsh手册](http://zsh.sourceforge.net/Doc/Release/Zsh-Line-Editor.html#Standard-Widgets)

.zshrc下添加
```
# ctrl+<- | ctrl+->
bindkey "^[[1;5D" backward-word
bindkey "^[[1;5C" forward-word
```
**[⬆ back to top](#table-of-contents)**
