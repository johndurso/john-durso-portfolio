---
title: "Neumorphism Looked Great. It Just Didn't Work."
date: "2026-04-08"
excerpt: "Neumorphism looked incredible in a Dribbble screenshot. Then someone tried to actually use it, and the whole thing fell apart."
coverImage: "/images/blog/neumorphism-looked-great-it-just-didnt-work.jpg"
tags: ["Web Design", "UX", "Accessibility"]
---

Every few years, the design world gets swept up in a new aesthetic that feels genuinely exciting, something that makes you stop scrolling Dribbble and think, "wait, that's cool." Neumorphism was that moment. For a brief window of time it felt like the future of UI design. Then reality set in, and it turned out that "looking incredible" and "actually working for people" are two very different things.

## So Where Did This Thing Come From?
 In late 2019, a designer named *Alexander Plyuto* posted a [concept on Dribbble](https://dribbble.com/shots/7994421-Skeuomorph-Mobile-Banking) that immediately blew up. The style combined soft shadows, muted backgrounds, and extruded shapes to create UI elements that looked like they were physically pressed into or popped out of the surface. It was skeuomorphism's cooler, more minimal cousin. Where the old iOS icons tried to look like real-world objects, neumorphism went for something more abstract.

The name itself came from a portmanteau: "new" plus "skeuomorphism." Creadit for coining it goes to designer Michal Malewicz, who wrote one of the earliest explainer articles on the style. From there, the design community ran with it. Tutorials flooded YouTube, CSS snippets spread across CodePen, and design Twitter could not stop talking about it.

## The Peak: When Dribbble Became a Neumorphism Gallery

By 2020 and into early 2021, neumorphism had completely taken over the concept design space. Figma files were being shared everywhere. Designers were building full dashboard concepts, music players, smart home apps, and banking UIs, all wrapped in that distinctive soft-extruded look.

The aesthetic had a specific visual formula: a mid-tone background, usually a soft gray or muted beige, with UI elements rendered using two shadows. One light shadow on the top-left, one dark shadow on the bottom-right, creating that sunken or raised illusion. It genuinely did photograph well. The screenshots were stunning. The style had a meditative quality to it. Everything felt calm, cohesive, and weirdly satisfying to look at. Brands and agencies started experimenting with it in real products, not just concept shots, and that's where the criticism started.

## The Accessibility Wall

Here is where neumorphism ran into a problem it could not design its way out of. The [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) require a minimum contrast ratio of 4.5:1 for normal text and 3:1 for interactive components like buttons. Neumorphism, by its very nature, makes elements blend into their surroundings. The shadows create the illusion of depth, but they do not create contrast. A button on a neumorphic interface and the background it sits on can be nearly identical in color.

For someone with low vision, color blindness, or even someone using their phone outdoors in bright sunlight, those buttons essentially disappear. You cannot tell what is interactive and what is decorative. You cannot distinguish between a pressed state and a default state. The entire depth illusion that makes neumorphism beautiful is built on exactly the visual subtlety that accessibility guidelines exist to prevent.

This is not a minor edge case. Roughly 8% of men have some form of color blindness. Around 246 million people globally have moderate to severe vision impairment. Designing an interface that excludes that many people is not a stylistic quirk. It is a fundamental failure.

## Focus States Were a Nightmare

Beyond contrast, there was another major usability problem: focus indicators. Keyboard navigation depends on being able to see which element currently has focus. In neumorphic designs, focus states were often either invisible or barely perceptible. Designers working in the style had no clean solution because any high-contrast focus ring looked jarring and completely broke the aesthetic.

That tension, between looking good and working for everyone, is ultimately what killed neumorphism. The style could not coexist with the things that make a practical interface. Every fix felt like a compromise that watered down the aesthetic until you were left asking why you bothered in the first place.

## Why 2023 Was Neumorphism's Last Hurrah

By 2023, the conversation had fully shifted. The design community had done what it always does: enthusiastically embraced something new, then gradually reckoned with its downsides. Accessibility advocates were loud and clear. Real-world implementations were getting negative feedback from users. And newer trends like glassmorphism had already started competing for the attention that neumorphism once possessed.

More importantly, the broader design industry was going through a serious accessibility reckoning during this period. There was growing legal pressure on companies to meet WCAG standards. Designers were being asked to justify their choices with data, not just aesthetics. In that environment, a style built on low contrast and ambiguous affordances had nowhere to go.

You still see neumorphism pop up in portfolios occasionally, usually as a nostalgic nod or a deliberate stylistic exercise. But it never made it into major production design systems. No big tech company shipped a product built on it. It stayed a Dribbble phenomenon, which is a bit fitting for a style that always looked better as a screenshot than as a working interface.

## What Neumorphism Actually Taught Us

The most useful lesson from neumorphism is not that it was bad. It was genuinely creative and introduced some interesting ideas about depth and surface in UI design. The lesson is about where design decisions need to start. If your aesthetic depends on low contrast to work visually, you are building on a foundation that will eventually collapse when real users show up.

Accessibility is not a constraint that limits creativity. It is a constraint that pushes creativity in better directions. The best UI design work right now is happening from designers who treat WCAG compliance as a starting point, not an afterthought. You can still make something beautiful. You just have to make sure people can actually see it.