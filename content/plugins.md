---
title: Quartz plugins
---

An overview of the custom plugins I've built for my personal site.

## Chat Bubbles

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
