---
sidebar_position: 3
---

# Installing Lava for Ararat


## Clone the Lava repository

```bash
git clone https://github.com/Hye-Ararat/Lava.git Lava
```

## Install Lava Dependencies

```bash
cd Lava && yarn install
```

## Installing LXD Snap Package

```bash
snap install lxd --channel=latest/stable
```

## Configuring LXD

```bash
EDITOR=nano
```

```bash
lxc config edit
```
Make sure to edit the the ip address to the ip address of your server
```yaml
config:
  core.https_address: '[::]:8443'
  core.https_allowed_headers: '*, authorization, x-lxd-gid'
  core.https_allowed_methods: GET, POST, PUT, DELETE, OPTIONS, HEAD
  core.https_allowed_origin: '*'
  oidc.client.id: lxd
  oidc.issuer: http://ipaddress:3000/oidc
```
To save the file press ``CTRL + X`` then press ``Y`` and then press ``ENTER``


## Starting Lava

```bash 
yarn run start
```

## Press next to continue

Press the Next button on the Ararat panel to continue to the create the node. 


## SSL Certificates

if you want to use SSL certificates you can follow this guide [here](https://ararat.hye.gg/docs/getting-started/ssl-certificates)