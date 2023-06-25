## nginx 配置

```shell
http {
  sendfile on;
  tcp_nopush on;
  tcp_nodelay on;
  keepalive_timeout 65;
  types_hash_max_size 2048;
  # server_tokens off;

  # server_names_hash_bucket_size 64;
  # server_name_in_redirect off;

  include /etc/nginx/mime.types;
  default_type application/octet-stream;

  ##
  # SSL Settings
  ##

  ssl_protocols TLSv1 TLSv1.1 TLSv1.2 TLSv1.3; # Dropping SSLv3, ref: POODLE
  ssl_prefer_server_ciphers on;

  ##
  # Logging Settings
  ##

  access_log /var/log/nginx/access.log;
  error_log /var/log/nginx/error.log;

  ##
  # Gzip Settings
  ##

  gzip on;

  ##
  # Virtual Host Configs
  ##

  include /etc/nginx/conf.d/*.conf;
  include /etc/nginx/sites-enabled/*;

  server {
    listen     443 ssl;
    server_name [domain];

    ssl_certificate /usr/local/etc/xxxxxxxxxx/domain_bundle.pem;
    ssl_certificate_key  /usr/local/etc/xxxxxxxxxx/domain.key;

    ssl_prefer_server_ciphers on;

    location / {
      root /usr/local/etc/frontEnd/dist;
      index index.html;
   }
  }

  server {
    listen 80;
    server_name [domain];
    return 301 https://$server_name$request_uri;
  }
}
```
