---
title: Generale
slug: /slicer
---

## GCode
### Start Gcode
Comune per tutti gli slicer

``` 
 M220 S100 ;Reset Feedrate
 M221 S100 ;Reset Flowrate  --> da rimuovere in Ideamaker
 
 G28 ;Home
 
 ;Code for nozzle cleaning and flow normalization
 G92 E0 ;Reset Extruder
 G1 Z2.0 F3000 ;Move Z Axis up
 G1 X10.4 Y20 Z0.28 F5000.0
 G1 X10.4 Y170.0 Z0.28 F1500.0 E15
 G1 X10.1 Y170.0 Z0.28 F5000.0
 G1 X10.1 Y40 Z0.28 F1500.0 E30
 
 G92 E0 ;Reset Extruder
 G1 Z2.0 F3000 ;Move Z Axis up
```
### End Gcode
Comune per tutti gli slicer

```
 G91 ;Relative positioning
 G1 E-2 F2700 ;Retract the filament
 G1 E-2 Z0.2 F2400 ;Retract and raise Z
 G1 X5 Y5 F3000 ;Wipe out
 G1 Z10 ;Raise Z more
 G90 ;Absolute positionning
 
 G28 X0 Y0 ;Home X and Y 
 
 M106 S0 ;Turn-off fan
 M104 S0 ;Turn-off hotend
 M140 S0 ;Turn-off bed
 
 M84 X Y E ;Disable all steppers but Z
```
