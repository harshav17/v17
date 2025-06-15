---
layout: base.liquid
title: Harshavardhan Lingampally
---

I'm a developer building fast and useful things for the web. This site is my personal space to share what I'm working on and what I've learned.

---

## Writings

{% assign sorted_posts = collections.post | sort: "data.last_modified_at" | reverse %}
{% for post in sorted_posts %}
<article>
    <h3><a href="{{ post.url }}">{{ post.data.title }}</a></h3>
    <time>Created: {{ post.date | date: "%B %d, %Y" }}{% if post.data.last_modified_at %} • Updated: {{ post.data.last_modified_at | date: "%B %d, %Y at %H:%M" }}{% endif %}</time>
</article>
{% endfor %}