## git sparse checkout

```shell
#建立一个空的版本库
git init <project>

#添加远程库的地址
git remote add origin https://*****.git

#打开sparse checkout功能
git config core.sparsecheckout true

#设置要克隆的仓库的子目录路径、添加目录到checkout的列表
echo "path1/" >> .git/info/sparse-checkout

#拉取远程的分支
git pull origin [branch]
```

## git detaultBranch

```shell
git config --global init.detaultBranch main

#查看是否设置成功
cat ~/.gitconfig
```

![Terminal](/images/git-default-branch.png)
