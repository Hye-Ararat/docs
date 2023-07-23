

# Configuring MongoDB


## Check if mongodb is running
```bash
mongod --version
```

## Making user for mongodb
```bash
sudo nano /etc/mongod.conf
```

```conf
# network interfaces
net:
  port: 27017
  bindIp: 127.0.0.1  # Enter 0.0.0.0,:: to bind to all IPv4 and IPv6 addresses or, alternatively, use the net.bindIpAll setting.
To bind to all IPv4 and IPv6 address you’ll set:
 bindIp: 0.0.0.0
```
To save the file press ``CTRL + X`` then press ``Y`` and then press ``ENTER``


Restart mongodb
```bash
sudo systemctl restart mongod
```

Login to mongodb shell
```bash
mongosh
```
Once your in mongodb shell type this command
```bash
> use admin
```

```bash
db.createUser({user:"ararat", pwd:"passwordhere", roles:[{role:"root", db:"admin"}]})
```
Make sure to change the password to something more secure
```bash
exit
```

Next we need to edit the service file for mongodb
```bash
sudo nano /lib/systemd/system/mongod.service
```
Add this line into this file

```service
ExecStart=/usr/bin/mongod --quiet --auth --config /etc/mongod.conf
```

```bash
sudo systemctl daemon-reload && sudo systemctl restart mongod
```


Check if you can login to mongodb shell with the user you created
```bash
mongosh -u ararat -p --authenticationDatabase admin
```

```bash
db.runCommand({connectionStatus : 1})
```

Now you got fully working mongodb server with user and password