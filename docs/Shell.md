---
sidebar_position: 1
---

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

## 忽略 ICMP 回应(ping)请求

```shell
echo net.ipv4.icmp_echo_ignore_all=0 >> /etc/sysctl.conf
sysctl -p
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

#启动
systemctl start vnstat

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

#升级
bash -c "$(curl -L https://github.com/XTLS/Xray-install/raw/main/install-release.sh)" @ install

#流量统计
xray api statsquery --server=127.0.0.1:10080 #查看所有流量
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

## nginx

```shell
cat /etc/nginx/nginx.conf #配置文件位置

nginx -s reload #不中断服务，重新加载配置文件

sudo systemctl restart nginx
```

## [内核优化 XanMod](https://xanmod.org/)

```shell
wget -qO - https://dl.xanmod.org/archive.key | sudo gpg --dearmor -o /usr/share/keyrings/xanmod-archive-keyring.gpg

echo 'deb [signed-by=/usr/share/keyrings/xanmod-archive-keyring.gpg] http://deb.xanmod.org releases main' | sudo tee /etc/apt/sources.list.d/xanmod-release.list

#v3会炸机器
sudo apt update && sudo apt install linux-xanmod-x64v2

reboot

bash startup.sh
```
