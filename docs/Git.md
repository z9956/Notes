## 修改已经 push 的 commit 信息

```shell
#运行命令进入vim编辑器
git commit --amend

#强制提交
git push -f
```

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

![Terminal](/img/git-default-branch.png)

## ssh: connect to host github.com port 22: Connection timed out fatal: Could not read from remote repository

- [git 官网文档](https://docs.github.com/cn/authentication/troubleshooting-ssh/using-ssh-over-the-https-port)
  ~/.ssh/config 文件加入一下内容

```shell
Host github.com
Hostname ssh.github.com
Port 443

```
