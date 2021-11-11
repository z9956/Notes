## Table of Contents

1. [bindkey](#bindkey)

## bindkey

不使用 [Oh My Zsh](https://github.com/ohmyzsh/ohmyzsh) 配置，直接用 zsh
安装[zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions)
,[zsh-syntax-highlighting](https://github.com/zsh-users/zsh-syntax-highlighting)
后，backward-word、forward-word 错误

[zsh 手册](http://zsh.sourceforge.net/Doc/Release/Zsh-Line-Editor.html#Standard-Widgets)

.zshrc 下添加

```shell
# ctrl+<- | ctrl+->
bindkey "^[[1;5D" backward-word
bindkey "^[[1;5C" forward-word
```

**[⬆ back to top](#table-of-contents)**
