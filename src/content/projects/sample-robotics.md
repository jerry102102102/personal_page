---
title: "RL Brain Trainer — ROS2 Sim-to-Real Joint Control"
summary: "Modular pipeline that trains joint-level RL policies in Gazebo and deploys to ROS2 controllers with safety fallbacks and watchdogs."
date: "2025-09-01"
featured: true
tags: ["ROS2", "Gazebo", "RL", "Control", "Sim-to-Real"]
links:
  repo: "https://github.com/jerry102102102/RL_brain_trainer"
---

## Overview
Built a sim-to-real training and deployment pipeline for joint-level control policies.
The system is designed for repeatability, safety, and deterministic behavior in ROS2.

## Key contributions
- Trained joint policies in Gazebo and exported deployable ROS2 controllers.
- Added watchdog timeouts and safe-state fallbacks for NaNs and saturation.
- Profiled executor/QoS timing to reduce jitter and stabilize control loops.
- Integrated system identification (step + sine sweep) to model actuator dynamics.

## Results
- Reduced manual tuning time by ~40% with a CI-friendly, multi-seed test harness.
- Benchmarked PID vs. RL with rise time, overshoot, and tracking error metrics.

## Tech notes
- ROS2 Control, Gazebo, PyTorch RL, reproducible configs and seeds.
