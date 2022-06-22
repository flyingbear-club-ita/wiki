---
title: Firmware MKS Compilato
slug: /marlin/firmware_compilato
image: /img/firmware/marlin.png
---

import DisplayAd from '../../src/components/displayAd'
import FacebookLink from '../../src/components/facebookLink'
import DisqusComments from '../../src/components/disqusComments'

<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>


In questa sezione abbiamo raccolto le varie versioni del firmware mks, basato su **Marlin 2.0.X**, a cura di **The_Wolf_87** e **Nick_it**

Questo tipo di firmware ha un po' di opzioni in piu' rispetto al firmware stock (per esempio, non e' necessario aggiornare gli step/mm dal config, basta aggiornare nella UI), oltre ad avere una grafica piu' accattivante

<DisplayAd/>

## Come flashare {#come-flashare}
1. Aprire il link relativo alla propria configurazione
2. Scaricare tutto il contenuto della cartella (un file Robin_nano35.bin ed una cartella assets)
3. Prendere una SD card, formattata in FAT32 e vuota, e copiare tutti i file scaricati
4. Inserire la SD card nella stampante
5. Spegnere, se accesa, la stampante, e riaccenderla

A questo punto, la procedura di installazione mostrera' una barra di progresso. Una volta completata, compariranno delle scrite per l'aggiornamento delle immagini. La procedura e' automatica, non e' richiesto nessun intervento

## Primi passi {#primi-passi}

La prima cosa da fare e' resettare la eeprom tramite interfaccia grafica, per evitare che valori vecchi vadadno ad interferire col firmware nuovo

La seconda e' configurare gli step per millimetro tramite interfaccia grafica

A questo punto, la stampante e' pronta per stampare

## I vari firmware {#i-vari-firmware}

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

## Firmware per la Robin Nano 1.3/1.3s

:::warning
Il firmware e' ancora in fase sperimentale, non e' stato fatto abbastanza testing, pero' confidiamo nei vostri feedback per sistemarlo e migliorarlo

Se avete dei commenti, osservazioni, oppure volete riportare un bug, potete farlo nella sezione commenti qui sotto, oppure potete andare sulla pagina Facebook e commentare li'

:::

Se avete letto la sezione precedente, avrete notato che i firmware che abbiamo pubblicato precedentemente non sono compatibili con le ultime configurazioni scheda madre/driver rilasciate da Flyingbear

Visto che, pero', secondo noi vale veramente la pena installare marlin sulla ghost, sia per la comodita' di poter aggiustare alcuni parametri tramite interfaccia grafica che per abilitare ulteriori funzionalita', come il linear advance, il nostro buon **Nick** ci si e' messo di punta e, dopo aver girato in lungo e in largo l'Europa e aver valicato l'Ellesponto, finalmente e' tornato all'ovile e vi ha regalato un firmware compatibile!

[ ![Yes Yesy Finally](/img/firmware/yes-yes-finally.webp) ](/img/firmware/yes-yes-finally.webp)

### Link al repository

Il link al repository di github e' questo:

[Firmware Marlin Mks Robin Nano 1.3](https://github.com/flyingbear-club-ita/flyingbear_ghost_marlin)

### Istruzioni per l'installazione

Le istruzioni per installarlo sono le solite:

- scaricare tutto il contenuto del repository
- formattare una SD card in FAT32 (mi raccomando, non sopra ai 32GB: la ghost non regge SD di dimensioni maggiori)
- Inserire la SD card a stampante spenta
- Accendere la stampante
- Attendere il completamento della procedura di flash
- Resettare la EEPROM (si fa dall'interfaccia grafica, basta girare un po' nei menu, si trova facilmente)
- Cominciare a smanettare con l'interfaccia grafica fin quando non si rompe tutto

### Funzionalita'

Aggiornamento a breve (devo chiedere a nick se ha abilitato il linear advance...)



:::note
Lo sviluppo del firmware e' stato possibile grazie alla gentile donazione di **Orkomastro**
:::

<FacebookLink link="https://www.facebook.com/hashtag/marlin_robin_nano_1_3?__gid__=600126627631693"/>

<DisqusComments 
 slug="/docs/marlin/firmware_compilato"
 articleId="4" 
 articleTitle="Firmware_Marlin"
/>
