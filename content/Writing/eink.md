---
title: eink
date: 2025-08-10
---

It's been a few days since the [**BOOX Note Air 5C**](https://www.amazon.ca/BOOX-10-3-ePaper-Reader-Android/dp/B0FR4KXMKF) arrived at my doorstep.
The packaging was satisfying to open and the tablet felt great to use for the few days it was working. This is the first eink device I've purchased and I've come away very impressed. I just bought another BOOX Note Air 5C in fact. Also be warned, it's [easy to soft brick](https://www.mobileread.com/forums/showthread.php?t=371290) when trying to get root which is what I've done. I'm waiting until Wednesday for an EDL cable to arrive and I'm going to attempt to recover by rewriting the `boot_b` I dumped back onto the same partition. The soft brick occurred when I was writing a **Magisk 30.7** patched `boot_b` image onto the device when the EDL failed writing at 12%. I haven't been able to trigger EDL mode through any key combination but from what I've read on forums the EDL cable should be able to put me back into EDL mode. There's been a few reports of successful roots on this tablet so that's my end goal.

# eInk App Ideas

1. **com.jerlendds.riddles**: Recreate Tom Riddles diary from Harry Potter. After you finish writing a sentence the written text vanishes and an LLMs response appear as if it was writing a reply to what you wrote.

2. **com.jerlendds.slum**: Connect zlib, sci-hub, annas-archive, etc into a book downloading app. The zlib APK does not work to download books on my BOOX but perhaps I need to experiment with and explore that route more. It would also need to be paginated rather than with the existing scroll navigation so the "Slum" app would be optimized for eink devices.

3. **com.jerlendds.flow**: Paginated canvas with zoom levels. For architecture diagrams, mindmaps, etc.

4. **com.jerlendds.**: to be continued...
