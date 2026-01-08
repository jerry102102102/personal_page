---
title: "Real-time Streaming ETL Platform"
summary: "Event-driven Azure Event Hubs → Databricks DLT pipeline processing millions of events/day with ~5-minute latency and SLO alerting."
date: "2025-04-01"
featured: true
tags: ["Azure", "Databricks", "Streaming", "ETL", "SLO"]
links:
  repo: "https://github.com/jerry102102102"
---

## Overview
Designed and deployed a large-scale real-time automation pipeline for recommendation
and analytics signals.

## Key contributions
- Implemented idempotent updates to prevent duplicate events from contaminating aggregates.
- Built SLO/SLI monitoring and alerting for latency, backlog, and failure rates.
- Adopted medallion (bronze/silver/gold) layers and materialized views for stable downstream use.

## Results
- Processed millions of events per day with ~5-minute end-to-end latency.
- Supported 100,000+ events per 10 minutes and improved CTR by ~20%.

## Tech notes
- Event-driven ingestion with Event Hubs and Databricks DLT.
- Regression tests for schema and logic stability.
