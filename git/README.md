## Table of Contents

1. [git sparse checkout](#git sparse checkout)

## git sparse checkout

```
git init <project> //建立一个空的版本库
git remote add origin https://*****.git //添加远程库的地址
git config core.sparsecheckout true //打开sparse checkout功能
echo "path1/" >> .git/info/sparse-checkout //设置要克隆的仓库的子目录路径、添加目录到checkout的列表
git pull origin [branch] //拉取远程的分支
```

**[⬆ back to top](#table-of-contents)**
