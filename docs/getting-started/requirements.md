---
sidebar_position: 1
---

# Requirements


### Node.JS
:::tip

We reccommend using the most recent **LTS release of Node.JS**.

:::
Node.JS version 16 or later



### Supported Operating Systems
:::info Compatibility
On macOS, **Hye Ararat is only compatible with Macs with Apple Silicon chips.** Virtual Machines and taking snapshots of instances is not supported on macOS nodes.

On Windows, Hye Ararat must run under a supported **[Ubuntu Windows Subsystem for Linux](https://apps.microsoft.com/store/detail/ubuntu-2204-lts/9PN20MSR04DW)** environment.
:::
- Ubuntu 18.04+ (only LTS releases supported)
- macOS 11+
- Windows 10+

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