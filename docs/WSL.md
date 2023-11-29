## wsl 使用宿主网络代理

```shell
#获取ip后开启代理应用 允许来自局域网的连接 选项
cat /etc/resolv.conf | grep nameserver | awk '{ print $2 }'

#export ALL_PROXY="http://127.0.0.1:8000"
```

### clion wsl2 配置环境

![打开Experimental Features](/images/20210925185844.png)
![开启org.rust.wsl选项](/images/20210925185851.png)
![Terminal](/images/20211016232945.png)

### goland wsl2 配置环境

![Terminal](/images/bd0f1b2596718e0ce16651bae25ff00.png)

### WebStorm 使用 wsl2 git

![git](/images/1638180857330.png)
