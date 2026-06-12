---
title: Quartz Plugins
---

An overview of the custom plugins I've built for my personal site.

## Peek Quotes

https://github.com/jerlendds/quartz-peek-quote

```peek
peekQuote:
  maxPeekAbove: 340
  maxPeekBelow: 200
  snapThreshold: 200
  text: |
    1

    2

    3

    4

    5

    6

    7

    8

    10

    blah blah blah....
    The witness began with the weather.

    The selected sentence stayed in the transcript because it changed how the rest of the interview should be read.

    Only later did the surrounding details make the statement feel complete.
    
    Blah
    b;lah
    blah...
  highlight: "The selected sentence stayed in the transcript because it changed"
  highlightColor: "#faf61148"
```

## Chat Bubbles

https://github.com/jerlendds/quartz-chat-bubbles

```chat {.left .muted from="ChatGPT 5.5" time="9:15"}
Can you review this?
```

```chat {from="Sam" side="left" time="10:42"}
Hey, are you joining?
```

---

```chat {.right from="Me" status="read"}
Yes, in two minutes.
```

```chat {from="Ava" avatar="/avatars/ava.png" time="9:15"}
Can you review this?
```

```chat {.right from="Me" avatar="/avatars/me.png" status="delivered"}
Reviewed. Looks good.
```

---

```chat {.system tone="muted"}
Conversation started on June 11, 2026.
```

```chat {variant="warning"}
This message needs attention.
```

```chat {variant="success" tone="emphasis"}
The deployment finished successfully.
```

---

::chat{from="Ava" time="9:15"}
Can you review this?
::

::chat-reply{from="Me" status="read"}
Reviewed. Looks good.
::

---

:::chat
< Sam [10:42]: Hey.

> Me [read]: Hi.

< Sam: Quick question.
:::
