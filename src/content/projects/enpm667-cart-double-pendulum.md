---
title: "ENPM667 Cart + Double Pendulum Crane (LQG/LQI)"
summary: "Derived nonlinear dynamics, linearized for control, benchmarked observers, and implemented LQG/LQI with disturbance rejection."
date: "2025-12-01"
featured: true
tags: ["Controls", "LQG", "LQI", "Modeling", "Kalman"]
links:
  repo: "https://github.com/jerry102102102/ENPM667_Project2"
---

## Overview
Modeled and controlled a cart–double-pendulum crane system using classical and
state-space control techniques.

## Key contributions
- Derived nonlinear equations via Euler–Lagrange and built state-space simulation.
- Linearized around equilibrium and verified controllability before control design.
- Designed LQR with explicit Q/R weights and validated eigenvalue stability.
- Benchmarked Luenberger observers across measurement sets and pole speeds.
- Implemented LQG (LQR + Kalman filter) and extended to LQI for disturbance rejection.

## Results
- Demonstrated robust tracking beyond local linear assumptions.

## Tech notes
- Observer trade-off analysis, noise modeling, and feasibility checks.
