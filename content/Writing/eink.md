---
title: eink
date: 2025-08-10
---

It's been a few days since the [**BOOX Note Air 5C**](https://www.amazon.ca/BOOX-10-3-ePaper-Reader-Android/dp/B0FR4KXMKF) arrived at my doorstep.
The packaging was satisfying to open and the tablet felt great to use for the few days it was working. This is the first eink device I've purchased and I've come away very impressed. I just bought another BOOX Note Air 5C in fact. Also be warned, it's [easy to soft brick](https://www.mobileread.com/forums/showthread.php?t=371290) when trying to get root which is what I've done. I'm waiting until Wednesday for an EDL cable to arrive and I'm going to attempt to recover by rewriting the `boot_b` I dumped back onto the same partition. The soft brick occurred when I was writing a **Magisk 30.7** patched `boot_b` image onto the device when the EDL wite failed at 12%. I haven't been able to trigger EDL mode through any key combination but from what I've read on forums an EDL cable should be able to put me back into EDL mode. There's been a few reports of successful roots on this tablet so that's my end goal.

## eInk Constraints

Developing eInk apps comes with some uncommon challenges and constraints that aren't normally thought about during the lifecycle of a typical app. I'll document some of the challenges I ran into once I recover my device from its soft brick.

## App Ideas

<!--
It changes the order of information.
It introduces new concepts at moments of high receptivity.
It asks reflective questions after emotional content.
It exposes the user to adversarial viewpoints gradually.
It discourages certain cognitive shortcuts.
It rewards certain forms of reasoning.
It simulates future versions of the user.
It shows how their beliefs would change under different media diets.
It makes some identities more available than others.
 -->

1.  **com.jerlendds.riddles**: Recreate Tom Riddles diary from Harry Potter. After you finish writing a sentence the written text vanishes and an LLMs response appear as if it was writing a reply to what you wrote.

2.  **com.jerlendds.slum**: Connect zlib, sci-hub, annas-archive, etc into a book downloading app. The zlib APK does not work to download books on my BOOX but perhaps I need to experiment with and explore that route more. It would also need to be paginated rather than with the existing scroll navigation so the "Slum" app would be optimized for eink devices.

3.  **com.jerlendds.flow**: Paginated canvas with zoom levels. For architecture diagrams, mind maps, etc.

4.  **com.jerlendds.queue**: Inbox zero concept when adding new reading material i.e. web pages, books, research PDFs, etc.

5.  **com.jerlendds.memory**: Spaced repetition note book and flashcards. Interoperability with Anki would be cool.

6.  **com.jerlendds.launcher**: Self-explanatory, build a custom Android launcher...

7.  **com.jerlendds.track**: <details> <summary> Track as many stats on the device as we can access </summary>
    i.e. <!-- more metric ideas here: https://chatgpt.com/c/6a51afcc-e4a4-83e8-8c10-3d509af41424 -->
    - Active reading time
    - Session frequency
    - Session fragmentation
    - Deep-focus intervals
    - Time-of-day distribution
    - Interruption rate
    - Return latency
    - Abandonment rate
    - Rereading rate
    - Idle-display time
    - Scroll or page-turn velocity
    - Reading-speed variance
    - Task switch rate
    - Content queue growth
    - Completion-to-save ratio

    Could also try and track reading and information-consumption patterns:
    - Source diversity i.e. 64% of news came from three publishers
    - Topic diversity i.e. Your reading covers 12 topic clusters
    - Format diversity (essays, news, books, video transcripts, etc)
    - Repetition index i.e. Repeated exposure to substantially identical claims
    - Novelty rate i.e. New concepts versus familiar material
    - Familiarity bias i.e. Preference for previously known sources or ideas
    - Reading-depth distribution i.e. Headlines, excerpts, full articles, long-form works
    - Citation-following rate i.e. How often references are inspected
    - Feed-origin share i.e. User-selected versus algorithmically recommended material
    - Serendipity rate i.e. Useful material outside established interests
      Could attempt to track knowledge and learning metrics too:
    - Concept acquisition i.e. Newly understood concepts
    - Concept retention i.e. Recall after time has passed
    - Retrieval strength i.e. Ability to recall without cues
    - Recognition–recall gap i.e. Difference between recognizing and independently explaining
    - Transfer rate i.e. Use of knowledge in a new context

</details>
   
8.  **com.jerlendds.academy**: to be continued...
9.  **com.jerlendds.pdf**: to be continued...
10. **com.jerlendds.keyboard**: to be continued...
11. **com.jerlendds.queue**: to be continued...
12. **com.jerlendds.zero**: A notebook where handwritten marks become live objects. i.e. draw table → becomes structured data, circle phrase → make it a tag, draw arrow between concepts → creates typed relation, write “todo: email Alex” → becomes action item, write equation → resolves to LaTeX + symbolic form. ink stays ink, but gains optional computational affordances
13. **com.jerlendds.malleable**: paper reading and research notes where embeddings, summaries, citations, and links are computed locally or on a user-chosen backend. i.e. offline embeddings, citation graph from your PDFs, semantic search over highlights, daily "what should I read", sync.
14. **com.jerlendds.eink.clipboard**: A persistent side panel for text snippets, citations, LaTeX fragments, shell commands, links, and prompts. It should support one-tap paste, QR transfer, and local-only storage.
15. **com.jerlendds.agent.scratchpad**: A local-first agent that does not chat endlessly. It maintains a visible working memory on e-ink. The user can directly edit any part. The agent treats edits as authoritative. This avoids the opaque “assistant blob” problem and makes the AI state inspectable.
16. **com.jerlendds.web.epub**: A local article cleaner that turns messy web pages into readable e-ink documents. Think Readability + EPUB/PDF generation + font/layout control + offline archive.

17. **com.jerlendds.terminal**: to be continued...
18. **com.jerlendds.recommender**: to be continued...
19. **com.jerlendds.ambsheet**: An e-ink spreadsheet for scenarios, tradeoffs, and research planning.
20. **com.jerlendds.**: to be continued...

## Further reading

- https://arxiv.org/abs/2601.17975
