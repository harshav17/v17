---
layout: base.liquid
title: Harshavardhan Lingampally
---

I'm a builder who worked on workflow automation at Salesforce (Flow) and now building the Agentic platform, exploring the frontiers of humanoid robots and LeRobot.

---

## Writings

{% assign sorted_posts = collections.post | sort: "date" | reverse %}
{% for post in sorted_posts %}
<article>
    <h3><a href="{{ post.url }}">{{ post.data.title }}</a></h3>
    <time>Created: {{ post.date | date: "%B %d, %Y" }}{% if post.data.last_modified_at %} • Updated: {{ post.data.last_modified_at | date: "%B %d, %Y at %H:%M" }}{% endif %}</time>
</article>
{% endfor %}