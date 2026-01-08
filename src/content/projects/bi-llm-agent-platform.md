---
title: "Enterprise BI LLM Agent Platform"
summary: "LLM-powered text-to-SQL and visualization with HITL gating and nightly regression tests; +35% query success, -20% cloud cost."
date: "2025-03-01"
featured: true
tags: ["LLM", "Text-to-SQL", "HITL", "Reliability", "Cost"]
links:
  repo: "https://github.com/jerry102102102"
---

## Overview
Built an enterprise BI assistant that turns natural language into SQL and charts with
strong guardrails and regression safety.

## Key contributions
- Implemented human-in-the-loop gating for high-risk or incomplete queries.
- Added fail-fast validation to detect missing metrics/dimensions/timeframes.
- Built nightly regression suites to prevent quality drift during prompt/tooling changes.

## Results
- Improved analytics success rate by ~35%.
- Reduced cloud costs by ~20% by avoiding repeated invalid executions.

## Tech notes
- Guardrails, evaluation, and regression testing for production LLMs.
