---
sidebar_position: 2
---

:::danger 
Ararat is still in development
:::

# Installing Ararat

## Prerequisites
Before you can install Ararat, you need to have the following installed on your system:
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/)

## Installing Ararat

```bash 
git clone https://github.com/Hye-Ararat/Ararat.git
```

next navigate to the Ararat directory

```bash
cd Ararat
```

next run the following command to install all the dependencies

```bash
npm install 
```

next we need to edit the config files

```bash
nano .env
```

```env
# The MongoDB connection string
DATABASE_URI=mongodb://ararat:ararat@localhost:27017/ararat?authSource=admin&readPreference=primary&appname=Ararat&ssl=false
```
To save the file press ``CTRL + X`` then press ``Y`` and then press ``ENTER``



To Generate a random string you can use the following command

```bash
openssl rand -base64 32
```
```bash
nano .env.local
```
```env
ENC_KEY=32characterstring
```
To save the file press ``CTRL + X`` then press ``Y`` and then press ``ENTER``

Next we need to prisma migrate

```bash
npx prisma migrate dev
```

Next we need to build the project

```bash
npm run build
```


## Running Ararat

To run Ararat you can use the following command

```bash
npm run start
```

### Congratulations
Congrats! Your done! Your shiny new Hye Ararat instance is ready!