---
sidebar_position: 1
---

# Requirements

# Ararat

### Ports

The ports listed below must be opened

- 443 (ssl if chosen)
- 3000 (web server)

### Node.JS
:::tip

We reccomend using the most recent **LTS release of Node.JS**.

:::
Node.JS version 16 or later

### PostgreSQL Database
Ararat uses PostgreSQL to store data. Make sure to have a database ready to go. <!-- You can deploy one on **[Hye Cloud]("https://cloud.hye.gg")** -->

# Lava

### Supported Operating Systems
:::info Compatibility
On macOS, **Lava is only compatible with Macs with Apple Silicon chips.** Virtual Machines and taking snapshots of instances is not supported on macOS nodes.

On Windows, Lava must run under a supported **[Ubuntu Windows Subsystem for Linux](https://apps.microsoft.com/store/detail/ubuntu-2204-lts/9PN20MSR04DW)** environment.
:::
- Ubuntu 18.04+ (only LTS releases supported)
- macOS 11+
- Windows 10+



### Ports

The ports listed below must be opened

- Any Port Of Your Choice For SSL (if you choose to enable ssl)
- 8443 or any port of your choice (LXD)
- 2222 or any port of your choice (SFTP)

### Kernel Requirements
The minimum supported kernel version is 5.4.

Lava requires a kernel with support for:
- Namespaces
- Seccomp
The following optional features also require extra kernel options:
- Namespaces (user and cgroup)
- AppArmor (including Ubuntu patch for mount mediation)
- Control Groups (blkio, cpuset, devices, memory, pids and netprio)
- CRIU (exact details to be found with CRIU upstream)

As well as any other kernel feature required by the LXC version in use
