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
curl -fsSL https://www.mongodb.org/static/pgp/server-6.0.asc|sudo gpg --dearmor -o /etc/apt/trusted.gpg.d/mongodb-6.gpg
```

```bash
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu $(lsb_release -cs)/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
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

To configure mongodb go to here [Configuring MongoDB](configuring-mongodb)

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

Make sure the use the same password you used for to setup mongodb
```env
DATABASE_URL=mongodb://ararat:passwordhere@localhost:27017/ararat?authSource=admin
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


