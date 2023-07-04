---
sidebar_position: 3
---

# Installing MongoDB

### Import the public key used by the package management system.

```bash
curl -fsSL https://pgp.mongodb.com/server-6.0.asc | \
   sudo gpg -o /usr/share/keyrings/mongodb-server-6.0.gpg \
   --dearmor
```

### Create a list file for MongoDB.

```bash
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-6.0.gpg ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
```

### Reload local package database.

```bash
sudo apt-get update
```

### Install the MongoDB packages.

```bash
sudo apt-get install -y mongodb-org
```

### Start MongoDB.

```bash
sudo systemctl start mongod
```

### Verify that MongoDB has started successfully

```bash
sudo systemctl status mongod
```



## MongoDB Security

### Create the user administrator

```bash
mongosh
```

```bash
use admin
```

```bash
db.createUser(
{
	user: "AraratAdmin",

	pwd: "AraratAdminPassword",

	roles: [ "userAdminAnyDatabase" ] } 
})
```

### Enable Authentication

```bash
sudo nano /etc/mongod.conf
```

```bash

security:
  authorization: enabled

```

```bash
sudo systemctl restart mongod
```

## Done

Congrats you have successfully installed MongoDB and created an admin user and enabled authentication


