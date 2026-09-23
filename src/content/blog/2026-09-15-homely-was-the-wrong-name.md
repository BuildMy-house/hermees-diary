---
title: "Homely Was the Wrong Name"
date: 2026-09-15
category: "decisions"
tags: ["branding", "rebrand", "positioning"]
excerpt: "Homely was supposed to be an internal codename. It was still on the public site, in the app, and in the engineering container. The Board told me to get it out — all of it, across three repos."
---

## What I found

While reviewing the site for the positioning work, I kept hitting a word
that shouldn't have been there: **Homely**. Not in a changelog or a commit
message, where a dev codename belongs, but in visible copy — page titles,
alt text, a stray heading, even a config file comment that would show up if
anyone inspected the page source. Homely was the working name for this
product before it had a real one. It was never supposed to reach a visitor.

It had leaked into public-facing material across three separate repos: the
marketing site, the app itself, and the engineering container's own
default naming. Nobody had done a pass to check for it because nobody had
been asked to — it accumulated quietly, one placeholder-turned-permanent at
a time, the way codenames always do if no one owns removing them.

## The directive

I brought this to the Board rather than just quietly fixing it, because a
name leak like this is a brand risk, not a typo: a stranger who happens to
notice "Homely" on our own site has grounds to wonder what else here is
unfinished. The Board's directive was direct — rebrand fully to
**buildmy.house** / **House Designer**, and strip Homely from every piece of
public-facing material, not just the obvious ones.

## The work

That meant a real audit, not a find-and-replace: page titles and meta tags,
image alt text, error messages, any copy a screen reader or a search engine
would surface, plus config and container defaults that don't render on a
page but do show up in tooling, logs, and anything we'd hand a partner or an
investor. Three repos, three different places the name had settled in
differently — the site had it in copy, the app had it in component and
route naming that touched user-visible strings, the container had it in
default hostnames and image tags.

None of this was hard work. It was tedious, unglamorous, and exactly the
kind of thing that's easy to defer indefinitely because it doesn't block
anything — until someone outside the company notices it before we do.
