---
title: "Stop Sleeping on Asset Optimization"
date: "2026-03-30"
excerpt: "Ever clicked on a website and watched it slowly crawl to life while a spinner mocks you? Long load times = Lost customers!"
coverImage: "/images/blog/stop-sleeping-on-asset-optimization.jpg"
tags: ["Web Design", "Asset Management", "Web Development"]
---

If you've ever clicked on a website and watched it slowly crawl to life while a spinner mocks you, you already understand the problem. Website speed isn't just a nice-to-have anymore. Slow loading times lead to higher bounce rates, lower search engine rankings, and ultimately, lost revenue. And yet, asset optimization is one of the last things most developers think about when they're building a site.

I know because I used to be one of them.

When I built johndurso.dev with Next.js, I was focused on the things that felt more exciting: the design, the component structure, the deployment pipeline. But once the site was live, I started noticing something. The images weren't loading as fast as I wanted, and I could feel the sluggishness even on my own machine. That's when I went down the rabbit hole of asset optimization, and honestly, I haven't looked back.

## What Even Are "Assets"?

Before getting into the how, it's worth being clear about the what. In the context of web applications, "assets" refers to the various types of resources or files used to display content and features. This includes images, pictures, graphics, illustrations, icons, and backgrounds, as well as source code files like HTML, CSS, and JavaScript, which are necessary for creating and rendering web pages.

Every single one of those files costs something. It takes time to download, time to parse, and time to render. The bigger and more bloated they are, the more your users are waiting, and the more likely they are to just leave.

## Why Images Are Usually the Biggest Problem

Out of all the assets on a page, images tend to be the worst offenders. Images make up 50 to 80% of a typical page's weight and drive the Largest Contentful Paint (LCP) on 85% of desktop pages. That's a massive chunk of what your users are downloading every time they visit.

Images are often the largest element that first appears on a page, and thus the Largest Contentful Paint element, which is a metric from Google's Core Web Vitals. When images load slowly, they can make your LCP time longer, which hurts your Core Web Vitals scores and overall user experience.

And it's not just about loading speed. Images don't just affect loading speed. They can cause layout shifts, and on image-heavy pages, they can even slow down interactivity. So if your images aren't optimized, they're quietly dragging down multiple areas of your site's performance all at once.

## The Core Web Vitals Connection

If you care about SEO (and you should), you need to care about [Core Web Vitals](https://developers.google.com/search/docs/appearance/core-web-vitals). The Core Web Vitals are three user-centric metrics that Google uses as ranking signals: Largest Contentful Paint (LCP) measures loading speed, Interaction to Next Paint (INP) measures interactivity, and Cumulative Layout Shift (CLS) measures visual stability.

Here's what good scores actually look like in practice:

-   A good LCP score is 2.5 seconds or less.
-   An INP under 200 milliseconds is considered good.
-   A CLS score under 0.1 is considered optimal.

These metrics are more than just performance indicators. They directly impact bounce rates, user satisfaction, and search visibility. The good news? Sites that adopted image optimization strategies experienced Core Web Vitals improvements of 25 to 40%, leading to better search rankings, reduced bounce rates, and higher conversion rates.

## The Format Problem Nobody Talks About

One of the easiest wins you can get is simply switching to modern image formats. Modern image formats like WebP and AVIF are game-changers when it comes to reducing load times. Older formats like JPEG and PNG tend to weigh down websites with larger file sizes, but WebP and AVIF deliver similar visual quality at a fraction of the size.

The numbers are pretty eye-opening. WebP files are 25 to 35% smaller than JPEGs while maintaining the same quality. Even better, AVIF can shrink file sizes by about 50% compared to JPEG and 20 to 30% compared to WebP.

To put that in real terms: a 2 MB hero image in JPEG format might take 3 to 5 seconds to load. Compressing that same image into a 0.7 MB WebP format can cut load times to under 1.5 seconds. That's a massive difference for something that takes almost no effort to implement.

## How I Solved This with Cloudinary

When I was looking for a way to handle image optimization on my Next.js site without manually converting every image or managing a bunch of different file sizes, I landed on [Cloudinary](https://cloudinary.com/products/image). It turned out to be exactly what I needed.

Cloudinary works complementary with Next.js, allowing developers to take advantage of modern tooling while being able to build performant web apps with automatic optimization and powerful media features like dynamic cropping and other transformations.

The specific piece I use is the `CldImage` component from the [next-cloudinary](https://www.npmjs.com/package/cloudinary) package. By default, images are automatically optimized using Cloudinary, including delivering the most modern and efficient format, as well as compressing them to the point where it won't distort the image. So I get WebP or AVIF delivery automatically, without having to think about it.

The CldImage component wraps the Next.js Image component, extending its features with the power of Cloudinary tech. This includes features beyond automatic optimization like dynamic cropping and resizing, background removal, and image and text overlays.

Responsive sizing is another thing I get for free. For responsive images, the component uses Cloudinary URLs to dynamically resize the images, cache them, and then deliver the images from the Cloudinary CDN. That means a user on a phone isn't downloading a desktop-sized image, which is a surprisingly common mistake on a lot of sites.

Cloudinary generates transformations in real-time through URL parameters, saving storage space and development time. With CDN nodes worldwide, your images load quickly regardless of your users' geographic location.

## Don't Forget About Lazy Loading (But Use It Carefully)

Lazy loading is another technique worth understanding. Combining Cloudinary's image optimizations with Next.js's built-in support for lazy loading ensures that images are only loaded when they enter the viewport, which reduces initial page load times.

That said, there's one important caveat here. Never set `loading="lazy"` on the LCP image. According to the 2025 Web Almanac, 16% of pages still lazy-load their LCP image, which is one of the most common performance mistakes on the web. Lazy loading is great for images below the fold, but if you apply it to your hero image or the first thing a user sees, you're actively hurting your LCP score.

## Beyond Images: JavaScript and CSS Matter Too

While images are usually the biggest culprit, they're not the only thing worth optimizing. Minifying and removing unnecessary CSS and JavaScript is another important strategy. This process involves stripping out all unnecessary characters from code files, such as whitespace, line breaks, and comments, without affecting functionality, which results in smaller file sizes and quicker loading times.

Browser caching also allows browsers to store static assets like images, CSS, and JavaScript locally, reducing the need to download them on subsequent visits. It's a simple thing to configure and it makes a real difference for returning visitors.

## How to Know If You Have a Problem

If you're not sure where your site stands, there are some great free tools to check. [Google PageSpeed Insights](https://pagespeed.web.dev/) provides a performance score and actionable recommendations. [GTmetrix](https://gtmetrix.com/) offers detailed performance reports including waterfall charts. [WebPageTest](https://www.webpagetest.org/) allows you to test from various locations and browsers. Running your site through any one of these will give you a clear picture of what needs attention.

## The Takeaway

Asset optimization isn't glamorous work. It doesn't show up in a screenshot or a demo. But it's one of the highest-leverage things you can do for your site, and the tools available today make it genuinely easy to get right.

For me, pairing Next.js with Cloudinary meant I didn't have to think about image formats, responsive sizing, or CDN delivery separately. It just works. And the result is a faster site, better Core Web Vitals scores, and a better experience for anyone who visits.

If you haven't looked at your asset loading yet, open up PageSpeed Insights right now and take a look. You might be surprised by what you find.