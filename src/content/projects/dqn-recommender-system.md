---
title: "DQN Recommender System"
summary: "Reinforcement learning-based ranking robust to drift and cold start; +20% CTR, +15% engagement, +0.07 PR-AUC."
date: "2024-12-01"
featured: false
tags: ["Recommender", "RL", "DQN", "A/B Testing", "Drift"]
links:
  repo: "https://github.com/jerry102102102"
---

## Overview
Developed a production-minded recommender system using DQN-style policy learning.

## Key contributions
- Added fallback strategies for sparse or unstable signals.
- Established offline/online validation gates and staged rollout workflows.
- Built related-news module using word2vec with keyword-weighted similarity.

## Results
- Improved CTR by ~20% and engagement by ~15%.
- Increased PR-AUC by ~0.07 in A/B evaluations.

## Tech notes
- Drift handling, cold-start strategies, and measurable business metrics.
