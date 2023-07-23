---
sidebar_position: 1
---

# Requirements


### Node.JS
:::tip

We reccommend using the most recent **LTS release of Node.JS**.

:::
Node.JS version 18 or later



### Supported Operating Systems
- Ubuntu 22.04+ (only LTS releases supported)

### Kernel Requirements
The minimum supported kernel version is 5.4.

Hye Ararat requires a kernel with support for:
- Namespaces
- Seccomp
The following optional features also require extra kernel options:
- Namespaces (user and cgroup)
- AppArmor (including Ubuntu patch for mount mediation)
- Control Groups (blkio, cpuset, devices, memory, pids and netprio)
- CRIU (exact details to be found with CRIU upstream)

As well as any other kernel feature required by the LXC version in use