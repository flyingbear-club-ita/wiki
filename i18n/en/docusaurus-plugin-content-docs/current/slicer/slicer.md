---
title: Slicers in general
slug: /slicer
keywords: ["3d printing", "flying bear", "flyingbear", "flying bear ghost", "flyingbear ghost", "flyingbear ghost 5", "flying bear ghost 5", "stampa 3d",  "slicer", "cura", "ultimaker", "ultimaker cura", "ideamaker", "prusa slicer", "slic3r"]
description: Common start and end gcode for Flyingbear Ghost
---
import DisplayAd from '../../src/components/displayAd'

## GCode {#gcode}

<DisplayAd/>

### Start Gcode {#start-gcode}
Common for all the slicers

``` 
 M220 S100 ;Reset Feedrate
 M221 S100 ;Reset Flowrate  --> to remove when using Ideamaker
 
 G28 ;Home
 
 ; Optional
 ; This gcode pushes a bit the filament inside the nozzle and, if the optional end gcode is enabled, it puts the filament back in the start position inside the nozzle
 ;G92 E0 ;Reset Extruder
 ;G91 ;Relative positioning
 ;G1 E60 F2400 ;Introduce filament in the nozzle
 ;G90 ;Absolute positionning

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

<DisplayAd/>

### End Gcode {#end-gcode}
Common for all the slicers

```
 G91 ;Relative positioning
 G1 E-2 F2700 ;Retract the filament
 G1 E-2 Z0.2 F2400 ;Retract and raise Z
 G1 X5 Y5 F3000 ;Wipe out
 G1 Z10 ;Raise Z more
 ;Optional
 ;G0 F500 X0 Y0 Z190; Pushes the plate down to 19cm
 G90 ;Absolute positionning
 
 G28 X0 Y0 ;Home X and Y 
 ;Optional
 ;Retract filament from the nozzle, so it's easier to change filament after the end of the print
 ;G92 E0 ;Reset Extruder
 ;G91 ;Relative positioning
 ;G1 E-55 F2400 ;Retract filament from hotend
 ;G92 E0 ;Reset Extruder
 ;G90 ;Absolute positionning
 
 M106 S0 ;Turn-off fan
 M104 S0 ;Turn-off hotend
 M140 S0 ;Turn-off bed
 
 M84 X Y E ;Disable all steppers but Z
```

<DisplayAd/>
