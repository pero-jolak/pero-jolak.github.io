---
layout: page
permalink: /repositories/
title: repositories
description: Below is a list of selected repositories for reproducing the results of the corresponding papers.
nav: true
nav_order: 3
---

## GitHub Repositories

{% if site.data.repositories.github_repos %}

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
{% endif %}
