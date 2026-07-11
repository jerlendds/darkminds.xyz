---
title: "microsoft sucks"
draft: false
publish: true
date: 2025-07-27
tags:
  - fuck-microsoft
---

Since I use VSCodium and not VSCode, someone had the bright idea to ensure their "open source" VSCode is nice and "open". HOWEVER, the Pylance extension is fucked on anything except the official VSCode build. The Pylance extension _explicitly_ checks for if it's running on an official VSCode build. Who the hell thought that was a good idea!? Check out [this discussion](https://github.com/VSCodium/vscodium/discussions/1641) on the VSCodium repo for more details.

After I finally got my Pylance extension working on VSCodium after following that discussion and [this one](https://errorism.dev/issues/vscodium-vscodium-python-autocompletion-doesnt-work-with-vs-code-python-extenstion-pylance) I noticed something else stupid. As you're about to see in the images, the color decorators stopped working when I got Pylance to finally run by changing `nameShort` and `nameLong` to `Visual Studio Code`. I'm switching to Zed for Python work, I can't be bothered...

Color decorators breaking:

![image 1](./tech/assets/fk-ms-1.png)
![image 1-1](./tech/assets/fk-ms-1-1.png)

and when the name is `VSCodium`, the decorators work.

![image 2](./tech/assets/fk-ms-2.png)
![image 2-2](./tech/assets/fk-ms-2-1.png)

I can't believe this...

## Related

- https://www.reddit.com/r/privacy/comments/80d8wu/just_realised_that_visual_studio_code_sends/

- https://nathancai.medium.com/read-the-terms-of-service-vscode-tracks-you-heres-how-to-disable-it-e5a6b278c9f7

- https://stackoverflow.com/questions/54508834/how-do-i-disable-telemetry-for-all-users-in-visual-studio-code
