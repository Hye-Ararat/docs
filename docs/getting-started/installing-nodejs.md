---
sidebar_position: 4
---

## how to install nvm on ubuntu

### Install the dependencies

```bash
sudo apt-get install build-essential libssl-dev
```

### Install nvm

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
```

### Install nodejs

```bash
nvm install --lts && nvm use --lts
```

### Verify the installation

```bash
node -v
```
