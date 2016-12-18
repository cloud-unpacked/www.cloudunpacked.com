---
title: "Linode Regions and Types for Ansible and Terraform"
author: FelicianoTech
date: 2023-10-14T17:48:54-04:00
categories:
  - "Info"
tags:
  - linode
  - terraform
  - ansible
---

I ran into an issue that many seemed to when using Linode with Terraform or Ansible for the first time.
To define a Linode VPS, the type/plan and the data center where it should be located is needed.
This needs to be provided in a slug format but what are the options?
First I'll provide you with the list here which will be accurate of of October 2023, then I'll show you how to get this information on your own.


## Linode / Akamai Data Center IDs

Linode data centers, which the CLI/API calls "regions".

ID|Label|Country
--|---|---
ap-west|Mumbai, IN|in
ca-central|Toronto, CA|ca
ap-southeast|Sydney, AU|au
us-iad|Washington, DC|us
us-ord|Chicago, IL|us
fr-par|Paris, FR|fr
us-sea|Seattle, WA|us
br-gru|Sao Paulo, BR|br
nl-ams|Amsterdam, NL|nl
se-sto|Stockholm, SE|se
in-maa|Chennai, IN|in
jp-osa|Osaka, JP|jp
it-mil|Milan, IT|it
us-mia|Miami, FL|us
id-cgk|Jakarta, ID|id
us-central|Dallas, TX|us
us-west|Fremont, CA|us
us-southeast|Atlanta, GA|us
us-east|Newark, NJ|us
eu-west|London, UK|gb
ap-south|Singapore, SG|sg
eu-central|Frankfurt, DE|de


## Linode / Akamai Plan / Type IDs

Linode types and plans. These include the original ones, called "standard", as well as the more specific high RAM or dedicated CPU plans.

ID|Label|Type|SSD (MiB)|RAM (MiB)
---|---|---|---|---
g6-nanode-1|Nanode 1GB|nanode|25600|1024
g6-standard-1|Linode 2GB|standard|51200|2048
g6-standard-2|Linode 4GB|standard|81920|4096
g6-standard-4|Linode 8GB|standard|163840|8192
g6-standard-6|Linode 16GB|standard|327680|16384
g6-standard-8|Linode 32GB|standard|655360|32768
g6-standard-16|Linode 64GB|standard|1310720|65536
g6-standard-20|Linode 96GB|standard|1966080|98304
g6-standard-24|Linode 128GB|standard|2621440|131072
g6-standard-32|Linode 192GB|standard|3932160|196608
g7-highmem-1|Linode 24GB|highmem|20480|24576
g7-highmem-2|Linode 48GB|highmem|40960|49152
g7-highmem-4|Linode 90GB|highmem|92160|92160
g7-highmem-8|Linode 150GB|highmem|204800|153600
g7-highmem-16|Linode 300GB|highmem|348160|307200
g6-dedicated-2|Dedicated 4GB|dedicated|81920|4096
g6-dedicated-4|Dedicated 8GB|dedicated|163840|8192
g6-dedicated-8|Dedicated 16GB|dedicated|327680|16384
g6-dedicated-16|Dedicated 32GB|dedicated|655360|32768
g6-dedicated-32|Dedicated 64GB|dedicated|1310720|65536
g6-dedicated-48|Dedicated 96GB|dedicated|1966080|98304
g6-dedicated-50|Dedicated 128GB|dedicated|2560000|131072
g6-dedicated-56|Dedicated 256GB|dedicated|5120000|262144
g6-dedicated-64|Dedicated 512GB|dedicated|7372800|524288
g1-gpu-rtx6000-1|Dedicated 32GB + RTX6000 GPU x1|gpu|655360|32768
g1-gpu-rtx6000-2|Dedicated 64GB + RTX6000 GPU x2|gpu|1310720|65536
g1-gpu-rtx6000-3|Dedicated 96GB + RTX6000 GPU x3|gpu|1966080|98304
g1-gpu-rtx6000-4|Dedicated 128GB + RTX6000 GPU x4|gpu|2621440|131072
g7-premium-2|Premium 4GB|premium|81920|4096
g7-premium-4|Premium 8GB|premium|163840|8192
g7-premium-8|Premium 16GB|premium|327680|16384
g7-premium-16|Premium 32GB|premium|655360|32768
g7-premium-32|Premium 64GB|premium|1310720|65536
g7-premium-48|Premium 96GB|premium|1966080|98304
g7-premium-50|Premium 128GB|premium|2560000|131072
g7-premium-56|Premium 256GB|premium|5120000|262144
g7-premium-64|Premium 512GB|premium|7372800|524288


## How to find this data myself?

The information above changes infrequently but **it can change**.
The easiest way to get the latest IDs is using the [Linode CLI](https://github.com/linode/linode-cli).
The following two commands will provide a more verbose, and more importantly, up-to-date version of the above data:

```bash
linode-cli regions list
linode-cli linodes types
```
