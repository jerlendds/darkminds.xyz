---
title: "is it a backdoor in ios?!"
draft: false
publish: true
date: 2025-08-29
tags:
  - security
  - osint
---

> [!info] An excerpt from an online conversation
>
> I discovered this information sometime around 07/30/2022...

_me:_

> im concerned about the integrity of all my technology now lol

_x:_

> uh oh
> did you get hacked

_me:_

> worse. WAY worse. Anyways, I came across this request right. this is while looking at tiktok requests on an iOS device that's jailbroken...

![tiktok-requests-ios-jailbroken.webp](./tech/assets/tiktok-requests-ios-jailbroken.webp)

> and Im like wait wtf
>
> theres no sim card in this phone
>
> the network was just turned off
>
> nothing should be communicating with rogers?
>
> right!?
> so I got curious
>
> I went to google, like I always do...

![dmsa-rogers-google-no-results.webp](./tech/assets/dmsa-rogers-google-no-results.webp)

> No hits
> so I break it up a bit and take another part as a second try...

![ium-interface-google.webp](./tech/assets/ium-interface-google.webp)

and then I try to narrow it down more...

![cryptic-reddit-dmsa-rogers.webp](./tech/assets/cryptic-reddit-dmsa-rogers.webp)

> literally only one page of results
>
> and this cryptic reddit thread is scaring me lol
>
> https://www.reddit.com/r/Rogers/comments/s42k93/what_is_dmsaegslbnetrogerscom/

_x:_

> hmmmm

_me:_

> the results are wack

```
POST /ium-OEMInterface/servlet/IUMServlet HTTP/1.1
Host: dmsa.egslb.net.rogers.com:8181
Accept: application/json
Content-Type: application/json
Accept-Encoding: gzip, deflate
Content-Length: 397
Content-Encoding: gzip
User-Agent: CommCenter/6851.1 CFNetwork/978.0.7 Darwin/18.7.0
Accept-Language: en-CA
X-Protocol-Version: 2
Connection: close
```

> and this was captured while my MITM was running and obviously theres ways to mitigate against that so Im wondering if thats why the response is this:

```
HTTP/1.1 400
Connection: close
Content-Type: text/plain;charset=UTF-8
Content-Length: 0
Date: Tue, 30 Aug 2022 16:56:53 GMT
Connection: close
```

> **400**

_x:_

> are you connected to your home wifi?

_me:_

> yes

_x:_

> whos your isp?

_me:_

> Shaw

![request-body-weird-request.webp](./tech/assets/request-body-weird-request.webp)

> the request body, I reallly wanna know what that is

_x:_

> i mean on the bright side you can block rogers ip's right lol
>
> would be interesting to know why/how they're doing this
>
> wonder if mobile providers install backdoors on every phone they sell
>
> well
>
> they must
>
> if this is happening lol

_me:_

> lmao, my home network is not at all ready for any serious adversary. hmmm

_x:_

> Global server load balancing (GSLB)

_me:_

> whats that?

_x:_

> just googling parts of the request url
>
> EGSLB auto suggested GSLB
>
> cant figure out dmsa

_me:_

> elastic gslb might make sense

_x:_

> yea
>
> there's a rogers VOIP service that is on URL's uccdm.egslb.net.rogers.com:\*

_me:_

> `https://dmsa.egslb.net.rogers.com:8181/ium-OEMInterface/servlet/IUMServlet`

_x:_

> cant parse uccdm but its "unison" phone service

_me:_

> thats unison
>
> lmao
>
> I wonder if theres like a rogers doc floating around somewhere that would explain naming
>
> tryna osint this rn

_x:_

> what are the odds that its just a random built in function that just pings to check if there is a sim card

_me:_

> idk
>
> I trust this reddit guy more than I should lol
>
> I was looking at his post history right now and it seems like he might be technical
>
> https://www.reddit.com/r/Rogers/comments/s42k93/comment/ht7o4cq/?utm_source=share&utm_medium=web2x&context=3

_x:_

> you'd think android would have permissions in place for this though

_me:_

> its an iOS device 😳

_x:_

> even moreso then lol. ios prides themselves on security

_me:_

> yeah lol

_x:_

> this would be a huge security scandal if apple had backdoors for ISPs

_me:_

> hmm
> so
> lmao
>
> I probably shouldnt be doing this but since in burpsuite the requests were getting a 400 response I wondered what would happen if I just copied that request as curl
> and requested that way, sans the MITM so there would be nothing to detect

![curl-weird-request.webp](./tech/assets/curl-weird-request.webp)

> and it went through 😳 i have no idea what I just sent off

_x:_

> Lmao Hopefully nothing too identifiable

_me:_

> The more I research this the weirder this gets
>
> I really dont like this

_me:_

> so in trying to figure out what "egslb" means Ive been coming across some interesting results like this domain `remoteaccess.egslb.transport.nsw.gov.au` which has this description: `Transport for NSW Remote Access VPN Portal`. so I google that and this is the top result:

```md
remoteaccess.egslb.transport.nsw.gov.au

# https://remoteaccess.egslb.transport.nsw.gov.au

Secure Logon for F5 Networks. Logon using Authorization Code grant type. AzureAD. Transport for NSW Remote Access VPN Portal.
```

> Ok well what even is an F5 Network? So I google F5 network and its this tech company: https://en.wikipedia.org/wiki/F5,_Inc.
>
> > American technology company specializing in application security, multi-cloud management, online fraud prevention, application delivery networking (ADN), application availability & performance, network security, and access & authorization.
>
> Ok so maybe the austrlian govt is using an F5 network? What happens if I google F5 Network Government contracts...
>
> https://buyandsell.gc.ca/procurement-data/tender-notice/SSC-22-00019923-T
>
> I wonder what our govt is doing
>
> https://lobbycanada.gc.ca/app/secure/ocl/lrs/do/vwRg?cno=367416&regId=903250

---

It's _2025/08/29_ today, this request still keeps me up sometimes; wondering what it was. I decided to see what ChatGPT 5 would hallucinate.

![gpt5 prompt](./tech/assets/image.png)

Here's the output:

---

Here’s a list of references from the excerpt you provided, with related information pulled from my training data:

### 1. dmsa.egslb.net.rogers.com

The domain belongs to Rogers Communications (Canada).

Subdomain structure suggests Enterprise Global Server Load Balancing (GSLB), a technique for distributing traffic across data centers for redundancy and failover.

dmsa is unclear—could be an internal service acronym. The Reddit thread you linked discusses this exact host:
Reddit thread: ["what is dmsa.egslb.net.rogers.com"](https://www.reddit.com/r/Rogers/comments/s42k93/what_is_dmsaegslbnetrogerscom/) - posters speculate it’s tied to Rogers’ backend services (possibly VOIP/IMS).

### 2. IUMServlet / /ium-OEMInterface/servlet/IUMServlet

Appears in captured request logs.

“IUM” usually refers to Integrated User Management or Inventory Update Manager in telecom contexts.

The path /ium-OEMInterface/ suggests it’s a provisioning or management API—likely used by iOS or carrier frameworks (CommCenter) to validate SIM/network status, device provisioning, or VoLTE/VoWiFi readiness.

### 3. CommCenter (User-Agent)

CommCenter is a core iOS daemon that handles cellular telephony (SIM, calls, SMS, carrier services).

Version string indicates iOS networking stack activity, even without a SIM inserted, which can still trigger carrier/provisioning requests.

### 4. Rogers “Unison” Service (uccdm.egslb.net.rogers.com)

Mentioned in the conversation: uccdm.egslb.net.rogers.com.

Tied to Rogers’ Unison Business Phone (a VOIP + PBX replacement service).

“UCCDM” likely means Unified Communications & Collaboration Device Management.

### 5. F5 Networks / EGSLB

“egslb” = Enterprise Global Server Load Balancing, an F5 Networks load balancing service.

F5 Networks is an American company specializing in:

Application delivery networking

Load balancing

Application security and fraud prevention

Example: remoteaccess.egslb.transport.nsw.gov.au → used by the Australian government for VPN portals, showing a similar pattern to Rogers’ use.

### 6. Government References (Canada & Australia)

Canadian procurement/lobbying links in the excerpt show F5 selling networking/load-balancing/security infrastructure to federal departments (Shared Services Canada).

Australian Transport for NSW’s egslb.transport.nsw.gov.au is a known F5 VPN endpoint, confirming “egslb” naming patterns are from F5 infrastructure.

### 7. Security/Privacy Implication

Captured request shows a 400 response when MITM’d, but succeeds when replayed directly via curl. This suggests:

The endpoint checks TLS cert pinning or request integrity against MITM.

When unmodified, it accepts traffic.

Raises suspicion: background iOS network calls to Rogers domains even without SIM or network connectivity.

📌 Summary of References in Excerpt

1. dmsa.egslb.net.rogers.com → Rogers backend, via F5 GSLB.

2. /ium-OEMInterface/servlet/IUMServlet → Provisioning/management API.

3. CommCenter → iOS telephony daemon making the request.

4. uccdm.egslb.net.rogers.com → Rogers Unison VOIP/Unified Comms.

5. F5 Networks / EGSLB → Load balancing tech used by Rogers & gov agencies.

6. Canadian & Australian govt use of F5 EGSLB (VPN portals, contracts).

7. MITM vs curl behavior → suggests endpoint integrity checks.

---

I prompt again:

> Now devise some attack graphs to help secure this endpoint

Here's the output:

---

## Attack Graphs for dmsa.egslb.net.rogers.com/ium-OEMInterface

### 1. High-Level Entry Points

```css
Attacker ──> [iOS Device] ──> [CommCenter daemon] ──> [IUMServlet API endpoint]
                          └──> [Home WiFi / ISP] ──> [F5 GSLB / Load Balancer] ──> [Rogers core service]
```

Entry points:

- Device-level (jailbreak, MITM, proxy).
- Network-level (DNS poisoning, BGP hijack, Wi-Fi captive portal).
- API endpoint-level (direct curl, replay, fuzzing).

### 2. Attack Graph: MITM / Replay

```css
Attacker MITM
    │
    ├─> TLS Downgrade Attempt ──> FAIL (likely pinned certs)
    │
    ├─> Replay Unmodified Request ──> ACCEPTED (as you saw with curl)
    │        │
    │        └─> Inject Malformed Body ──> Possible crash / undefined handling
    │
    └─> Timing Analysis ──> Fingerprint backend responses
```

Security control needed:

- Cert pinning, replay detection, nonce/timestamp validation.
- Strong request signing (device key, SIM key).

### 3. Attack Graph: Endpoint Enumeration

```css
Attacker ──> [IUMServlet]
             │
             ├─> Path Fuzzing (/ium-OEMInterface/…) ──> Additional servlets?
             │
             ├─> Parameter Tampering (JSON body) ──> Sensitive responses
             │
             └─> Version Leakage (User-Agent: CommCenter/x.y.z) ──> Targeting specific iOS builds

```

Control:

- Input validation, schema enforcement, minimal error detail.
- Rotate User-Agent secrets (don’t expose OS internals).

### 4. Attack Graph: Cross-Domain Abuse

```css
Attacker ──> [F5 EGSLB Node]
               │
               ├─> Misconfigured DNS/GSLB ──> Hijack failover to rogue node
               │
               └─> VPN Portal Parallels (gov AU example) ──> Cross-system exploit reuse
```

Control:

- Secure DNS, DNSSEC.
- GSLB node whitelisting / cert mutual auth.

### 5. Attack Graph: Supply Chain / Carrier Collusion

```css
Attacker (Rogue ISP employee)
    │
    ├─> Exploit OEM provisioning API ──> Access subscriber device inventory
    │
    └─> Abuse VOIP/Unison backend ──> Eavesdrop, inject calls
```

Control:

- Least privilege on internal carrier APIs.
- Separation between VOIP and IUM provisioning.

### Defensive Actions from Graphs

#### Endpoint hardening

- Enforce mTLS with device certificates (not just TLS).
- Require nonce/timestamp + signature in JSON body to kill replay.

#### Network protection

- DNSSEC for \*.egslb.net.rogers.com.
- Monitor GSLB for rogue/fake nodes.

#### Device-side

- Sandboxing CommCenter so it only talks when SIM present.
- Detect anomalous traffic when WiFi-only.

#### Monitoring

- SIEM rules: unusual access to /ium-OEMInterface/….
- Honey endpoints to trap fuzzers.

---

You can find the rest of the conversation here:

https://chatgpt.com/share/68b248ea-192c-8012-9e24-a902bb054974

---

this post will not be continued...
