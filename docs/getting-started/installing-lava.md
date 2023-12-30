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
cd Lava && bun install
```

## Install Incus

```bash
curl -fsSL https://pkgs.zabbly.com/key.asc | gpg --show-keys --fingerprint
```

```
mkdir -p /etc/apt/keyrings/
curl -fsSL https://pkgs.zabbly.com/key.asc -o /etc/apt/keyrings/zabbly.asc
```

```
sh -c 'cat <<EOF > /etc/apt/sources.list.d/zabbly-incus-stable.sources
Enabled: yes
Types: deb
URIs: https://pkgs.zabbly.com/incus/stable
Suites: $(. /etc/os-release && echo ${VERSION_CODENAME})
Components: main
Architectures: $(dpkg --print-architecture)
Signed-By: /etc/apt/keyrings/zabbly.asc
EOF'
```

```
apt update
```

```
apt install incus
```

## Configuring Incus

```bash
EDITOR=nano incus config edit
```

Make sure to replace the information highlighted <>like so</>

```yaml
config:
  core.https_address: "[::]:8443"
  core.https_allowed_headers: "*, authorization, x-incus-gid"
  core.https_allowed_methods: GET, POST, PUT, DELETE, OPTIONS, HEAD
  core.https_allowed_origin: "*"
  oidc.client.id: incus
  oidc.issuer: https://<>Hye Ararat web panel hostname</>:<>Hye Ararat web panel port</>/oidc
```

To save the file press `CTRL + X` then press `Y` and then press `ENTER`
:::tip
Make sure your ararat server is running before you save those changes
:::

## Starting Lava

```bash
bun run index.js
```

## Press next to continue

Press the Next button on the Ararat panel to continue to the create the node.

## SSL Certificates

if you want to use SSL certificates you can follow this guide [here](ssl-certificates) (THIS GUIDE IS COMING SOON. FOR NOW REQUIRES SUPPORT IN OUR DISCORD SERVER.)
