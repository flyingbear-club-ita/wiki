---
title: Firmware per la stampante
slug: /klipper/firmware_stampante
keywords: ["stampa 3d", 3d printing", "flying bear", "flyingbear", "flying bear ghost", "flyingbear ghost", "flyingbear ghost 5", "flying bear ghost 5", "stampa 3d", "flyingbear ghost firmware", "klipper", "klipper firmware"]
description: Guida per installare e compilare il firmware per la stampante
---

import DisplayAd from '../../src/components/displayAd'

<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>

Usando la vostra utility preferita, connettetevi tramite SSH alla raspberry pi

```ssh yourusername@mymachinename.local```

Se non funziona, invece di mymachinename.local, utilizzate l'indirizzo ip

Una volta entrati nella raspberry pi, navigate nella cartella klipper:

```cd klipper```

e lanciate questo comando:

```make menuconfig```

Si aprira' un menu testuale, dal quale scegliere le opzioni per generare il firmware da installare sulla stampante

[ ![Klipper - Make Menu config Flyingbear Ghost](/img/klipper/firmware/make_menuconfig.png) ](/img/klipper/firmware/make_menuconfig.png)


In base alla vostra scheda, dovrete selezionare valori diversi

## MKS Robin Nano v1.x

- attivare ```Extra low-level configuration options```
- Micro-controller Architecture: selezionare ```STMicroelectronics STM32```
- Processor model: selezionare ```STM32F103```
- Bootloader offset: selezionare ```28KiB Bootloader```

## Mks Robin Nano v1.3 and Mks Robin Nano S v1.3

- attivare ```Extra low-level configuration options```
- Micro-controller Architecture: selezionare ```STMicroelectronics STM32```
- Processor model: selezionare ```STM32F407```
- Bootloader offset: selezionare ```28KiB Bootloader```



Una volta selezionati i valori corretti, salvate la configurazione premendo "Q" (sta per Quit, cioe' "abbandona"). Una volta premuto "Q", vi sara' chiesto di confermare di salvare la configurazione. Premete "Y" e vi ritroverete nel terminale

Assicuratevi che la directory per la build del firmware sia pulita, inviando il comando:

```make clean```

Controllate che la directory chiamata **out** non sia presente inviando il comando ```ls -lat```: la directory non dovrebbe essere elencata

A questo punto, potrete compilare il firmware tramite il comando:

```make```

Una volta completata la procedura di compilazione, muovetevi nella cartella **out**:

```cd out```

Elencate i file presenti nella cartella:

```ls -lat```

Controllate che sia presente il file **klipper.bin**. Se non c'e', ricominciate da capo la procedura per la creazione del firmware per la stampante

Se invece il file c'e', passate allo step successivo

## Generare il firmware compatibile con la stampante



```~/klipper/scripts/update_mks_robin.py ~/klipper/out/klipper.bin ~/klipper/out/Robin_nano35.bin```
