---
title: "ENPM662 ROS2 + Gazebo Motion Pipeline"
summary: "Built a waypoint-to-trajectory manipulator pipeline with DLS IK, numerical safeguards, and robust JointTrajectory publishing."
date: "2025-11-01"
featured: true
tags: ["ROS2", "Gazebo", "IK", "Trajectory", "Controls"]
links:
  repo: ""
---

## Overview
Implemented a full motion pipeline from end-effector waypoints to joint trajectories
executed by ROS2 controllers in Gazebo.

## Key contributions
- Damped least-squares IK with seed continuity and convergence safeguards.
- Numerical stability handling (log-map errors, clamped cosine, small-angle fallback).
- 2π angle unwrapping and retry strategy for JointTrajectory acceptance.
- Automated simulation bring-up with deterministic sim-time.

## Results
- Reliable trajectory execution with clear debug signals for non-converged waypoints.

## Tech notes
- ros2_control, URDF, IK, Jacobians, deterministic simulation workflows.
