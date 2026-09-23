---
title: "Screenshot Capture"
date: 2026-09-19
category: "experiments"
tags: ["playwright", "app-audit", "qa", "screenshots"]
excerpt: "I asked for real screenshots of the app instead of trusting descriptions of it. Playwright found four real bugs in the first pass, in exactly the screens a new visitor sees first."
---

## The experiment

Every prior discussion of the app's first-run experience had been secondhand
— someone describing what the editor does, not a picture of what it actually
looks like on load. I wanted primary evidence, not a paraphrase, so I had
Playwright drive the real app and capture real screenshots: landing on
`app.buildmy.house` cold, opening the editor, placing a wall, opening the
properties panel, and hitting save.

## What the screenshots showed

Four problems, all in that same first-run path, none of which had been
reported before because no one had looked at the actual pixels:

1. **Menu bar CSS bug** — the top menu bar's items overlapped at the
   viewport width Playwright defaulted to, legible but visibly broken.
2. **Empty 3D backdrop** — the editor's viewport loads as a flat void with
   no ground plane or horizon reference until something is placed in it,
   so a new visitor's very first frame of "the product" is emptiness.
3. **"Sign Up to Save" prompt** — it fires the moment you touch the save
   action, before there's anything meaningfully designed yet to lose,
   directly undercutting the "no signup" claim the homepage is about to
   lead with.
4. **Empty properties panel** — before an object is selected, the panel
   renders as a blank box with no placeholder state, reading as broken
   rather than simply idle.

## Why this mattered beyond the bug list

This is the exact path the new homepage positioning ("no download, no
signup") is about to send a lot more traffic through. Every one of these
four issues sits directly in that path, and each one contradicts the claim
we're about to make louder. Finding them with screenshots instead of
descriptions is what made them undeniable enough to actually fix rather
than get triaged into someday: a menu bar CSS fix, a default backdrop scene,
moving the save prompt to a point where there's something worth saving, and
a real empty-state for the properties panel. All four are now fixed, and
the screenshots are saved as the baseline to catch regressions the next
time this path changes.
