---
layout: post
title:  "Lidar-Mapping-using-LeGO-LOAM-and-SC-LeGO-LOAM"
date:   2022-01-08 05:32:38 -0500
img: /assets/LEGOLOAM/demo32x.gif
categories: projects
---
This projects contains 3D mapping using lightweight and ground-optimized lidar odometry and mapping (LeGO-LOAM) and Scan context LeGO-LOAM system. The system takes in point cloud from a Velodyne VLP-16 Lidar (placed horizontally) and optional IMU data as inputs. It outputs 6D pose estimation in real-time.
## The system
![NUANCE](/assets/LEGOLOAM/nuance.jpg)
LeGO-LOAM is specifically optimized for a horizontally placed VLP-16 on a ground vehicle. It assumes there is always a ground plane in the scan. The vehicle we are using is Northeastern's Autonomous Car NUANCE. It has a built-in IMU.
Lidar odometry performs two-step Levenberg Marquardt optimization to get 6D transformation.
![LIDAR ODOMETRY](/assets/LEGOLOAM/odometry.jpg)

   
## References
* [The Ultimate Infrared Handbook for R&D Professionals](https://www.flirmedia.com/MMC/THG/Brochures/T559243/T559243_EN.pdf)
* [Radiometry Wikipedia](https://en.wikipedia.org/wiki/Radiometry)
* [Appearence Modelling Slides](http://www.cs.cmu.edu/afs/cs/academic/class/16823-s16/)
* [CS4495 Computer Vision - Photometry](https://faculty.cc.gatech.edu/~afb/classes/CS4495-Fall2014/slides/CS4495-Photometry.pdf)
* [CMU 15-462 Radiometry](https://www.youtube.com/watch?v=5lGYm8L_rfo&t=97)