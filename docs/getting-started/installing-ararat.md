---
sidebar_position: 2
---
# Installing Ararat

## Installing Node.js

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```

```bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
```

```bash
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```

```bash
nvm install --lts
```

```bash
nvm use --lts
```

## Installing MongoDB

```bash
wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -
```

```bash
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/5.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list
```

```bash
sudo apt-get update
```

```bash
sudo apt-get install -y mongodb-org
```

```bash
sudo systemctl start mongod
```

```bash
sudo systemctl enable mongod
```

## Installing Ararat

```bash
git clone https://github.com/Hye-Ararat/Ararat.git Ararat
```

## Installing Ararat Dependencies
```bash
npm i -g yarn
```

```bash
cd Ararat && yarn install
```

## Configuring Ararat

```bash
nano .env.local
```

```env
DATABASE_URL=mongodb://ararat:ararat@localhost:27017/ararat
ENC_KEY=32characterstring
URL=ipaddress:3000
```

To save the file press ``CTRL + X`` then press ``Y`` and then press ``ENTER``

## Running Ararat

```bash
yarn run build
```

```bash
yarn run start
```


