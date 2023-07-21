---
sidebar_position: 4
---

# SSL Certificates for Ararat Panel

## Creating a SSL Certificate

### Creating a SSL Certificate with Certbot

```bash
sudo apt install certbot -y
```

```bash
sudo certbot certonly --standalone -d example.com
```

### Installing the SSL Certificate

```bash
apt install nginx -y
```

```bash
rm /etc/nginx/sites-enabled/defualt 
```

```bash
nano /etc/nginx/sites-enabled/ararat.conf
```

```conf
server {
    server_name example.com;
    location / {
        proxy_pass http://localhost:3000/;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_redirect off;
        proxy_buffering off;
        proxy_request_buffering off;
    }
}
server {
    server_name example.com;
    location / {
        proxy_pass http://localhost:3000/;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_redirect off;
        proxy_buffering off;
        proxy_request_buffering off;
    }
    listen [::]:443 ssl;
    listen 443 ssl;
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
}
```
to save the file press ``CTRL + X`` then press ``Y`` and then press ``ENTER``

```bash
systemctl restart nginx
```
you can now access the panel at https://yourdomain.com

## Editing the lxd config to domain name

```bash
lxc config edit
```

```yaml
config:
  core.https_address: '[::]:8443'
  core.https_allowed_headers: '*, authorization, x-lxd-gid'
  core.https_allowed_methods: GET, POST, PUT, DELETE, OPTIONS, HEAD
  core.https_allowed_origin: '*'
  core.proxy_http: true
  core.proxy_https: true
  oidc.client.id: lxd
  oidc.issuer: https://example.com/oidc

```
to save the file press ``CTRL + X`` then press ``Y`` and then press ``ENTER``

```bash
snap restart lxd
```



## Creating a SSL Certificate For Lava


### Creating a SSL Certificate with Certbot


```bash
sudo certbot certonly --standalone -d example.com
```

### Installing the SSL Certificate For Lava

```bash
nano /etc/nginx/sites-enabled/lava.conf
```

```conf
server {
    server_name example.com;
    location / {
        proxy_pass http://localhost:8443/;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_redirect off;
        proxy_buffering off;
        proxy_request_buffering off;
    }
}
server {
    server_name example.com;
    location / {
        proxy_pass http://localhost:8443/;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_redirect off;
        proxy_buffering off;
        proxy_request_buffering off;
    }
    listen [::]:443 ssl;
    listen 443 ssl;
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
}
```
to save the file press ``CTRL + X`` then press ``Y`` and then press ``ENTER``

```bash
systemctl restart nginx
```


