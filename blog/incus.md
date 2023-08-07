---
slug: incus
title: Moving from Canonical LXD to Linux Containers Incus
authors:
  - joseph
date: 2023-08-07:10:00
---

Canonical has repeatedly demonstrated that they have a conflict of interest with the Hye company and the services that it offers. Most recently, their creation of a project called LXD-UI that competes directly with Hye Ararat. Over the years, Hye has become long dependent on services that Canonical offers. I am proud to announce that as a first step, Hye Ararat will now be abandoning Canonical services from it's codebase and infrastructure. On the heels of the latest announcement of the Linux Containers project's latest announcement, I have decided that we will be moving Hye Ararat off of Canonical LXD, and moving to Linux Containers Incus. Additionally, Hye Ararat official images will no longer be based on Canonical Ubuntu, but rather Debian, and all internal Hye Ararat infrastructure will be moving from Canonical Ubuntu to Debian as well. 

You can read about Incus [here](https://linuxcontainers.org/incus/).

