---
title: Firmware Stock
slug: /firmware/firmware_stock
keywords: ["stampa 3d", 3d printing", "flying bear", "flyingbear", "flying bear ghost", "flyingbear ghost", "flyingbear ghost 5", "flying bear ghost 5", "stampa 3d", "flyingbear ghost firmware"]
description: Istruzioni sull'installazione del firmware e link per i firmware stock per la Flyingbear Ghost piu' aggiornati testati dalla community
---

import DisplayAd from '../../src/components/displayAd'
import FacebookLink from '../../src/components/facebookLink'

<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>


In questa pagina puoi recuperare il firmware per la stampante e le procedure di verifica ed aggiornamento del firmware in uso

## Verifica della versione attualmente installata {#verifica-della-versione-attualmente-installata}
1. Dal menu principale della stampante tocca l'icona "Tool"
2. Tocca l'icona "About"
3. Troverai la versione del firmware indicata nella riga "Mainboard version"

## Procedura di aggiornamento {#procedura-di-aggiornamento}
1. Scarica il file compresso del firmware
2. Estrai il file appena scaricato
3. Collega la microSD della stampante al PC/Mac
4. **Fai un backup dei file contenuti sulla microSD della stampante**
5. Copia l'intero contenuto (file e cartelle) all'interno della microSD
6. *Opzionale: Se in passato hai effettuato delle modifiche al file di configurazione "robin_nano35_cfg.txt", ricorda di inserire le stesse nel nuovo file, con lo stesso nome, che troverai nella cartella del nuovo firmware*
7. Spegni la stampante (se accesa)
8. Inserisci la microSD nella stampante
9. Riaccendi la stampante
10. Attendi il caricamento del nuovo firmware
11. Concluso l'aggiornamento sullo schermo della stampante visualizzerai il menu iniziale

:::danger
Attenzione: non spegnere per nessun motivo la stampante durante la procedura di aggiornamento!!!
:::

<DisplayAd/>

## Aumentare la velocita' di stampa {#aumentare-la-velocita-di-stampa}
Il firmware stock limita la velocita' della stampante, che puo' raggiungere accelerazioni piu' elevate

Questa limitazione e' la causa principale della discrepanza tra i tempi stimati da cura e quelli effettivi di stampa

Per rimuovere le limitazioni, sostituire i seguenti valori nel robin_nano_cgf.txt ed aggiornare il firmware come descritto nella sezione Primi Passi


```
 >DEFAULT_X_MAX_FEEDRATE        300    #XÖáÄ¬ÈÏËÙ¶È (mm/s)
 >DEFAULT_Y_MAX_FEEDRATE        300    #YÖáÄ¬ÈÏËÙ¶È (mm/s)
 >DEFAULT_Z_MAX_FEEDRATE        5    #ZÖáÄ¬ÈÏËÙ¶È (mm/s)
 >DEFAULT_E0_MAX_FEEDRATE    100    #EÖáÄ¬ÈÏËÙ¶È (mm/s)
 >DEFAULT_E1_MAX_FEEDRATE    70    #EÖáÄ¬ÈÏËÙ¶È (mm/s)
 >DEFAULT_X_MAX_ACCELERATION    1000    #XÖáÄ¬ÈÏ×î´ó¼ÓËÙ¶È (change/s) change = mm/s
 >DEFAULT_Y_MAX_ACCELERATION    1000    #YÖáÄ¬ÈÏ×î´ó¼ÓËÙ¶È (change/s) change = mm/s
 >DEFAULT_Z_MAX_ACCELERATION    200    #ZÖáÄ¬ÈÏ×î´ó¼ÓËÙ¶È (change/s) change = mm/s
 >DEFAULT_E0_MAX_ACCELERATION    80000    #EÖáÄ¬ÈÏ×î´ó¼ÓËÙ¶È (change/s) change = mm/s
 >DEFAULT_E1_MAX_ACCELERATION    1000    #EÖáÄ¬ÈÏ×î´ó¼ÓËÙ¶È (change/s) change = mm/s
 >DEFAULT_ACCELERATION        1000    #X,Y,Z,E ´òÓ¡Ê±µÄÄ¬ÈÏ¼ÓËÙ¶È
 >DEFAULT_RETRACT_ACCELERATION    3000    #X,Y,Z,E »Ø³éÄ¬ÈÏ¼ÓËÙ¶È
 >DEFAULT_TRAVEL_ACCELERATION    1000    #X,Y,Z ·Ç´òÓ¡Ê±µÄÄ¬ÈÏ¼ÓËÙ¶È
 >DEFAULT_MINIMUMFEEDRATE    0.0    #Ä¬ÈÏ×îÐ¡ËÙ¶È
 >DEFAULT_MINSEGMENTTIME        20000    #»º´æ¿ÕÊ±£¬Ò»¸öÒÆ¶¯ËùÐèµÄ×îÐ¡Ê±¼ä(µ¥Î»ms). 
 >DEFAULT_MINTRAVELFEEDRATE    0.0    #
```

<DisplayAd/>

## Versioni firmware disponibili {#versioni-firmware-disponibili}

:::danger
Ultimamente, Flyingbear ha consegnato delle stampanti con chipset e driver diversi

Prima di scaricare ed installare il firmware, controllate la stampante, per sapere quale modello avete

Purtroppo, l'unica maniera per farlo e' aprire la parte inferiore della stampante, ma non fate prove a caso se non volete avete un pesate soprammobile in casa

Si prega di seguire la foto sottostante, oppure chiedere su facebook o discord

Una volta trovata la configurazione, consultate la figura qui sotto per decidere quale firmware scaricare

Se non riuscite a vedere bene l'immagine, cliccateci sopra e si aprira' ingrandita in una nuova finestra
:::


Stampante  | Immagine  |  Chipset   | Driver    | Versione  | Link
:---------:| :-------: | :------:   | :------:  |   :--:    | :--:
4S         |   NA      |    NA      | STOCK     | **3.5.1** | [Firmware Stock](https://github.com/flyingbear-club-ita/firmware_stock_4s)
5          | [ ![Reborn TMC2209](/img/comboMoboDrivers/RebornV3_TMC2209.webp) ](/img/comboMoboDrivers/RebornV3_TMC2209.webp) | STM32F103 | TMC2208/9  |**5.85**| [Firmware Stock](https://github.com/flyingbear-club-ita/firmware_stock_5)
5          | [ ![Reborn TMC2209 A4889](/img/comboMoboDrivers/RebornV3_A4889_TMC2209.webp) ](/img/comboMoboDrivers/RebornV3_A4889_TMC2209.webp) | STM32F103 |  STOCK     | **5.8.7** | [Firmware Stock](https://github.com/flyingbear-club-ita/firmware_stock_5)
5          | [ ![Robin Nano TMC2225](/img/comboMoboDrivers/RobinNano1_3_TMC2225.webp) ](/img/comboMoboDrivers/RobinNano1_3_TMC2225.webp) | STM32F407 |  TMC2225   | **5.96-T25**| [Firmware Stock](https://github.com/flyingbear-club-ita/firmware_stock_5)
5          | [ ![Robin Nano TMC2209 A4889](/img/comboMoboDrivers/RobinNano1_3_TMC2209_A4889.webp) ](/img/comboMoboDrivers/RobinNano1_3_TMC2209_A4889.webp) | STM32F407 |  STOCK     | **v6.5**  | [Firmware Stock](https://github.com/flyingbear-club-ita/firmware_stock_5)
5          | [ ![Reborn TMC2225](/img/comboMoboDrivers/RebornV3_TMC2225.webp) ](/img/comboMoboDrivers/RebornV3_TMC2225.webp) | STM32F103 |  TMC2225     | **v71**  | [Firmware Stock](https://github.com/flyingbear-club-ita/firmware_stock_5)

<DisplayAd/>

## Link utili {#link-utili}
[Video-guida "Ghost 4S Firmware Upload Flying Bear" su YouTube](https://youtu.be/YxKrXQ3jQcA) 
    

<FacebookLink link="https://www.facebook.com/hashtag/firmware?__gid__=600126627631693"/>
