## 安装环境

git go

## 安装 mtg

```shell
git clone https://github.com/9seconds/mtg.git
cd mtg
go build
cp mtg /usr/local/bin
```

## 生成密钥

```shell
# 这将返回一个ee开头的密钥，ee表示支持Fake TLS
mtg generate-secret --hex namesilo.com
```

## 为 mtg 创建一个系统服务文件

```shell
vim /usr/lib/systemd/system/mtg.service

# mtg.service 将下面内容复制到文件里面去
[Unit]
Description=mtg - MTProto proxy server
Documentation=https://github.com/9seconds/mtg
After=network.target

[Service]
ExecStart=/usr/local/bin/mtg run /etc/mtg.toml
Restart=always
RestartSec=3
DynamicUser=true
AmbientCapabilities=CAP_NET_BIND_SERVICE

[Install]
WantedBy=multi-user.target
```

## 编辑 mtg 配置文件

```shell
vim /etc/mtg.toml

# mtg.toml 只需要配置密钥和端口便可以成功运行mtg
secret = "生成的密钥"
bind-to = "0.0.0.0:443"
```

## 启动

```shell
systemctl daemon-reload
systemctl enable mtg
systemctl start mtg
```

## 输出 MTProxy 代理链接

```shell
mtg access /etc/mtg.toml
```
