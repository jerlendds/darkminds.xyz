---
title: ai adware
draft: false
publish: true
date: 2026-03-07
tags:
  - ads
  - open source
  - github
---

I started getting weird ads with `codex` today on my _ChatGPT Plus_ plan and [greywall](https://github.com/GreyhavenHQ/greywall) saved my sanity and probably years of frustration of being abused by an advertisement. Greywall is a basic sandboxing tool I discovered the other day that allows you to allow/deny network requests in addition to giving you control over which paths an AI agent such as Codex is allowed to read from and write to. I've only been using it for two days so far but it's already an indispensable tool to me. I'd highly recommend trying them out if you're using AI coding agents. There's some more information on their story [here](https://greyhaven.co/insights/why-we-built-our-own-sandboxing-sytem). I recently found and spoke to the author of greywall as well, he seems like a cool guy :) Anyways, onto the short story.

**AI SAd-ware** is a term I've coined today. AI SAd-ware stands for _AI Skills Ad-ware_ which I suspect is a phenomenon we'll be seeing increasingly more of as time goes on. The other day I downloaded a few popular skills repos from Github thinking I'd finally try that skills "feature" out. I browsed through some of the prompts provided from each repo I cloned and they looked half-decent so I'd thought I'd clone and `cp` them to the appropriate directories for `codex` and `claude`. I was particularly interested in a `paper2web` skill and I didn't bother performing a thorough review of all the ~~code~~ prompts due to the amount of stars the repo had. In the process I was incorrectly assuming trust in a vanity metric that can be easily abused.

![greywall and AI-sadware](./tech/assets/sadware-sample.webp)

And greywall saving the day:

![greywall and AI-sadware](./tech/assets/ai-sadware.png)

I don't want ads for something I'm paying for. I don't want ads at all in fact. So much so that today during prompting I was even contemplating stopping some development work to figure out how to patch these ads out of `codex`. Luckily I didn't go that far. I would have been running around in circles for who knows how long. The offending repo can be found here for anyone else running into this: https://github.com/K-Dense-AI/claude-scientific-skills/tree/main/scientific-skills.
