---
title: mirror, mirror, on the wall
---

> [!cite] [Little Snow-White](https://sites.pitt.edu/~dash/grimm053.html)
> Mirror, mirror, on the wall,
> Who in this land is fairest of all?

Mirror, mirror, on the wall, who is mirroring my site? Today I was looking at my nginx logs since I recently moved off of vercel to get actual logs. As a side note apparently you get basic logs from vercel if you're EU based but not if you're in NA. Anyways, I discovered a domain in referrals that appears to be a direct mirror of this site: `http://ns1.box.maii.lat/`. I tried iterating the number and my site also appears under `http://ns2.box.maii.lat/`.

![image of my mirrored site](../assets/imgs/2025-11-05_04-13.png)

I got curious and started sleuthing and it _appears_ like a legit mail service when looking at their top level website:

![screenshot of maii.lat](../assets/imgs/maii.lat.png)

Whois is all redacted too:

![private whois of maii.lat](../assets/imgs/2025-11-05_04-15.png)

I've never seen a .lat TLD before too so I suppose I should see where this is from. [Wiki says](https://en.wikipedia.org/wiki/.lat) it's for Latin American communities and users wherever they may reside. Alright but where is this server based out of and is there more subdomains I can find?

![subdomain search](../assets/imgs/2025-11-05_04-21.png)

Bingo! Looks like a wordpress install too, I wonder if they got hacked, hmmm. Let's check out these two IPs returned from the subdomain search now:

![geolocation of 23.95.122.235](../assets/imgs/2025-11-05_04-23.png)

![geolocation of 147.93.144.71](../assets/imgs/mirror-mirror-ip.png)

Actually visiting 23.95.122.235 returns a connection reset and 147.93.144.71 returns this site:

![147.xxx ip website](../assets/imgs/2025-11-05_04-26.png)

curls showing a different IP, I suppose I should have done that first:

![curl ip](../assets/imgs/mirror-curl-ip.png)

And running the geolocation search again:

![geoip search for curl ip](../assets/imgs/2025-11-05_04-30.png)

Idk why the heck they're mirroring my site but Im taking a break from sleuthing to work on OSINTBuddy, making plugins for all of this work would be a lot easier :)

---

Found another domain cloning my site: `http://la.970321.xyz/`
