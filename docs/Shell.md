## netstat

```shell
netstat -na|grep ESTABLISHED #统计已连接上的，状态为 established

netstat -nat|grep -i "80" #查看80端口连接
```

## ufw

```shell
ufw allow [port]/tcp #想要放行的端口
ufw status numbered # 查询放行的端口
ufw delete {行号} # 删除记录 建议删除v6相关
```

## ssh

```shell
# 端口配置文件
cat /etc/ssh/sshd_config

# 重启 ssh 服务，让变更生效
systemctl restart ssh
```

## systemctl

```shell
# 查看是否有 unit 加载失败
systemctl --failed

#列出所有active状态（运行或退出）的服务
systemctl list-units --type=service --state=active
systemctl list-units --type=service --state=running
systemctl list-units --type=service --state=failed
```

## scp

```shell
scp -P [port] -r [file] [username]@[ip]:[path]
```

## vnStat

```shell
#查看系统上 vnStat 可以监控的所有可用接口
vnstat --iflist

#启动 vnstatd，它将在后台监视和记录这些信息
vnstatd -d
```

## scoop

```shell
#设置代理
scoop config proxy 127.0.0.1:10809
#移除代理
scoop config rm proxy

#更换源，bucket源带上https://ghproxy.com/
scoop config SCOOP_REPO 'https://ghproxy.com/https://github.com/ScoopInstaller/Scoop'

#bucket源移除并重新添加
scoop bucket rm main
scoop bucket add main 'https://ghproxy.com/https://github.com/ScoopInstaller/Main'

#使用Aria2多线程下载
scoop install aria2

#更新所有包
scoop update *

# 清除旧版本安装信息
scoop cleanup *
```

## xray

```shell
sudo systemctl start xray
sudo systemctl status xray
sudo systemctl restart xray

cat /usr/local/etc/xray/config.json

#查看xray
ps -ef | grep vnst

#流量统计
xray api statsquery --server=127.0.0.1:10080 #查看所有流量
#重置统计
xray api restartlogger --server=127.0.0.1:10080
```

## git 代理

socks5

```shell
git config --global http.proxy 'socks5://127.0.0.1:10808'
```

http

```shell
git config --global http.proxy 'http://127.0.0.1:10809'
```

## v2ray

修改文件配置

```shell
vim /usr/local/etc/v2ray/config.json
```

安装和更新

```shell
# bash <(curl -L https://raw.githubusercontent.com/v2fly/fhs-install-v2ray/master/install-release.sh)
```

其他命令

```shell
service v2ray start

service v2ray stop

#查看v2ray
ps aux | grep v2ray
```
