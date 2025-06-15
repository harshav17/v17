---
layout: base.liquid
title: Your Name - Developer
---

# Hi, I'm Harshavardhan Lingampally

I'm a developer building fast and useful things for the web. This site is my personal space to share what I'm working on and what I've learned.

---

## Writings

{% for post in collections.post | reverse %}
<article>
    <h3><a href="{{ post.url }}">{{ post.data.title }}</a></h3>
    <time>{{ post.date | date: "%B %d, %Y" }}</time>
</article>
{% endfor %}