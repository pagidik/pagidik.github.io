---
layout: post
title:  "Introduction to Thermal Cameras"
date:   2022-01-08 05:32:38 -0500
img: /assets/thermal-camera/thermal-image.jpeg
categories: blog
---
The main purpose of this blog is to understand Thermal imaging systems and to understand what Thermal Cameras really measure? I start with some refresher of the Infrared Radiation, followed by a section on Thermal Cameras and conclude with Radiometry concepts.
## Infrared Radiation
![IR Spectrum](/assets/thermal-camera/IR%20Spectrum.jpeg){: .img}
Infrared Radiation is a part of the electromagnetic spectrum from approximately 0.9-14 µm (microns). It is emitted by all objects at temperatures above absolute zero and is directly proportional to the temparature. **Thermography** is the type of imaging accomplished by an IR calibrated camera to display temparature values across a scene. **Radiometry** is the measurement of radiant electromagnetic energy in the IR spectrum specified as radiant flux. IR has the same properties as visible light regarding reflection, refraction and transmission. According to **Total Radiation Law**, an object reacts to incident radiation as follows  

$$
    W = \alpha W + \phi W + \tau W
$$

where $$\alpha$$ denotes the energy absorbtion, $$\phi$$ reflection and $$\tau$$ transmission.

## Thermal Camera
An IR camera is similar in construction to a digital RGB camera. It has a lens that focuses the IR onto a focal plane array (FPA) along with the electronics and software to process and display the signal. The FPA is the detector which consists of micrometer size pixels constructed from materials that are sensitive to IR wavelengths. The FPA detectors are mainly of 2 types - thermal detectors and quantum detectors. The most common thermal detector is an **uncooled microbolometer**, made of a semiconductor material. They are cheaper than quantum detectors and are slow and less sensitive to IR. IR cameras are specifically designed and calibrated for a desired range in the IR spectrum. Uncooled microbolometers work in the LWIR as shown in Figure below.  
![IR Range](/assets/thermal-camera/IR%20range.png){: .img}
Some thermal cameras can be calibrated to ouput object temperatures but for that the object emmissivity, atmospheric attenuation and temperature and temperature of the ambient surroundings is needed. **Emmissivity** is a measure of how much energy the object absorbs; $$\epsilon$$ is 1 if the object is a perfect blackbody.

## Radiometry Concepts
There's not a lot of differences between Thermal cameras and Visible light cameras in terms of radiometry concepts. Both cameras measure the sensor irradiance i.e. **thermal cameras do not measure the temparature of the scene but the irradiance**. Let's dive deeper into this.  

* Radiant Energy - This is the total energy from the electromagnetic radiation calculated for a particular wavelength. 
* Radiant Flux -  This is the Radiant Energy per second. For example, the photons emitted by a glowing bulb per second is the flux.
* Radiant Energy Density - This is the Radiant Energy on a surface per unit area. 
* Irrandiance - This is the flux impinging on a surface per unit area of the surface. It depends on the distance but not the directionality. This is the total radiation incedent on the surface which can be coming from the sun or the surrounding environment. 
* Radiance - This is the flux emmited, reflected, transmitted or received by a surface per unit solid angle per unit area. It is directional.

## References
* [The Ultimate Infrared Handbook for R&D Professionals](https://www.flirmedia.com/MMC/THG/Brochures/T559243/T559243_EN.pdf)
* [Radiometry Wikipedia](https://en.wikipedia.org/wiki/Radiometry)
* [Appearence Modelling Slides](http://www.cs.cmu.edu/afs/cs/academic/class/16823-s16/)
* [CS4495 Computer Vision - Photometry](https://faculty.cc.gatech.edu/~afb/classes/CS4495-Fall2014/slides/CS4495-Photometry.pdf)
* [CMU 15-462 Radiometry](https://www.youtube.com/watch?v=5lGYm8L_rfo&t=97)