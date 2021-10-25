---
title: Firmware MKS Compilato
slug: /marlin/firmware_compilato
---

import DisplayAd from '../../../src/components/displayAd'

<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>


In questa sezione abbiamo raccolto le varie versioni del firmware mks, basato su **Marlin 2.0.X**, a cura di The_Wolf_87

Questo tipo di firmware ha un po' di opzioni in piu' rispetto al firmware stock (per esempio, non e' necessario aggiornare gli step/mm dal config, basta aggiornare nella UI), oltre ad avere una grafica piu' accattivante

## Come flashare
1. Aprire il link relativo alla propria configurazione
2. Scaricare tutto il contenuto della cartella (un file Robin_nan035.bin ed una cartella assets)
3. Prendere una SD card, formattata in FAT32 e vuota, e copiare tutti i file scaricati
4. Inserire la SD card nella stampante
5. Spegnere, se accesa, la stampante, e riaccenderla

A questo punto, la procedura di installazione mostrera' una barra di progresso. Una volta completata, compariranno delle scrite per l'aggiornamento delle immagini. La procedura e' automatica, non e' richiesto nessun intervento

## Primi passi

La prima cosa da fare e' resettare la eeprom tramite interfaccia grafica, per evitare che valori vecchi vadadno ad interferire col firmware nuovo

La seconda e' configurare gli step per millimetro tramite interfaccia grafica

A questo punto, la stampante e' pronta per stampare

<DisplayAd/>

## I vari firmware

:::danger
A causa di alcuni problemi di incompatibilita' con le schede robin nano 1.3 e 1.3s, e' altamente sconsigliato installare il firmware su questo tipo di schede! 

In alcuni casi, l'installazione di questo firmware ha scombinato il bootloader della scheda, se proprio volete provare, fatelo a vostro rischio e pericolo

**Prima di installare, controllare il tipo di scheda madre, smontando il fondo della stampante**

:::


[Ghost 4s Stock](https://github.com/flyingbear-club-ita/mks-robin-nano-1.x/tree/master/ghost_4s_base)

[Ghost 4s Stock con BlTouch](https://github.com/flyingbear-club-ita/mks-robin-nano-1.x/tree/master/ghost_4s_bltouch)

[Ghost 5 Stock](https://github.com/flyingbear-club-ita/mks-robin-nano-1.x/tree/master/ghost_5_base)

[Ghost 5 Tutti TMC2209](https://github.com/flyingbear-club-ita/mks-robin-nano-1.x/tree/master/ghost_5_tmc2209)

[Ghost 5 Stock con BLTouch](https://github.com/flyingbear-club-ita/mks-robin-nano-1.x/tree/master/ghost_5_bltouch)


<DisplayAd/>