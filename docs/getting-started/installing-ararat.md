---
sidebar_position: 2
---

# Installing Ararat

Hye Ararat will be automatically installed on your target system using the Hye Ararat install script. To install the Hye Ararat install tool to your computer, follow the steps.

Run the following commands on your personal computer, not on the target system. This will install a script which will allow you to install Hye Ararat on the target system.

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

## Download The Installer

Download and unzip the installer from [here](https://codeload.github.com/Hye-Ararat/Installer/zip/refs/heads/main).

## Prepare The Installer

Run the following commands in the directory of the installer.

```
npm install
```

## Run The Installer

Run the installer using the following command:

```
node installer.js
```

Follow the instructions and fill out the requested information, and the installer will automatically setup your Hye Ararat instance.
