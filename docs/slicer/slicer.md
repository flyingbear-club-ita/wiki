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

## Cura

Lo slicer piu' diffuso tra i membri della community, contiene gia' le impostazioni per la flyingbear ghost (dalla 4.6.0 quello per la 4s, dalla 4.8.0 quello per la 5)

[Scarica qui (gratuito)](https://ultimaker.com/software/ultimaker-cura)

*  [[Come_configurare_la_stampa_di_una_Temp_Tower | Configurazione Temp Tower]]
*  [I migliori plugin di cura](https://all3dp.com/2/5-must-have-cura-plugins)
*  [Settaggi per stampare miniature al meglio](https://www.youtube.com/watch?v=AqEWl51s9Rw)
*  [Come rimuovere lo stringing](https://youtu.be/_QRb54zVPfQ)

## Simplify3d
L'unico slicer a pagamento su questa pagina, sembra che sia rimasto un po' indietro rispetto agli altri slicer, non avendo ricevuto aggiornamenti da un bel po', pero' comunque sempre ottimo

[Scarica qui](https://www.simplify3d.com/) (gratuito per un periodo di prova, poi pagamento unico di $149) 

* [[TempTowerSimplify3d | Configurazione Temp Tower]]

## Ideamaker
Questo slicer sta prendendo sempre piu' piede, alcuni membri della community riportano una qualita' di stampa superiore a parita' di parametri

Per ora ci mettiamo un paio di link, poi vediamo come si evolvera'

[Scarica qui (gratuito)](https://www.raise3d.com/ideamaker/)

Tutorial:

[Introduzione](https://www.youtube.com/watch?v=rHL2ZSXvRxY&t=855s)

[Come creare un profilo - parte 1](https://www.youtube.com/watch?v=bOTC2CZQNgY)

[Come creare un profilo - parte 2](https://www.youtube.com/watch?v=IcyBEYYFn5s&t=1525s)
