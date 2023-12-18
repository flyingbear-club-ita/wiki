---
title: Kiauh
slug: /klipper/kiauh
keywords: ["stampa 3d", 3d printing", "flying bear", "flyingbear", "flying bear ghost", "flyingbear ghost", "flyingbear ghost 5", "flying bear ghost 5", "stampa 3d", "flyingbear ghost firmware", "klipper", "klipper firmware"]
description: Kiauh
---

import DisplayAd from '../../src/components/displayAd'
import FacebookLink from '../../src/components/facebookLink'


Come accennato precedentemente, kiauh e' un tool per la gestione dell'installazione delle varie utility necessarie per far girare e gestire klipper

Potete trovare ulteriori informazioni riguardo Kiauh [qui](https://github.com/dw-0/kiauh)

<DisplayAd/>

Una volta entrati nella riga di comando, assicuriamoci di installare **git**, un software per la gestione del codice, necessario per scaricare il sorgente di kiauh, che poi andremo ad utilizzare per installare klipper e tutte le sue componenti

Per installare git, scrivete, nella shell:

```sudo apt-get update && sudo apt-get install git -y```

Il primo comando scarica gli update del sistema, ma, se avete seguito i passi precedenti, non dovrebbe fare niente, mentre il secondo installa git

Una volta completata l'installazione, per installare kiauh, inserite nella shell:

```cd ~ && git clone https://github.com/dw-0/kiauh.git```

Con questo comando, ci assicuriamo di essere nella home directory (e' una directory in cui l'utente ha diritto a scrivere e leggere i dati), per poi scaricare il codice sorgent di kiauh, che verra' salvato nella directory chiamata **kiauh**

<DisplayAd/>

Il download dura giusto un paio di secondi, poi dovrebbe esserci una nuova directory chiamata kiauh

Muoviamoci nella directory:

```cd kiauh```

E, da li', inviamo il comando per lanciare kiauh:

```./kiauh.sh```

(inserire qui kiauh3.png)

A questo punto, dovrebbe comparire un menu testuale, come in foto

(inserire qui kiauhMenu)

Cominciamo ad installare, scegliendo come opzione "1". Si aprira' il seguente menu testuale

La prima cosa da installare e' Klipper, quindi selezioniamo "1", seguendo poi le opzioni consigliate (python 3.x, numero di stampanti da gestire con Klipper). Ovviamente potete fare come vi pare, ma noi consigliamo di seguire la procedura standard. Anche qui prendetevi una pausa, perche' per l'installazione di Klipper ci vuole un bel po'

Verso la fine, vi verra' chiesto di aggiungere l'utente al gruppo TTY, per connettersi, successivamente, alla stampante dalla raspberry pi
Quando vi verra' richiesto di aggiungere il vostro utente a questo gruppo, confermate

(aggiungere screen qui)

A questo l'installazione di klipper dovrebbe essere completata e un messaggio positivo dovrebbe comparire nella shell

# Moonraker

Il server che permette di , infatti alla fine dell'installazione rilascia un indirizzo ip


# Fluidd o Mainsail

Sono interfacce grafiche

Questa e' una scelta dovuta alle vostre preferenze
Io preferisco fluidd, ma la procedura di installazione e' identica

Selezionate l'opzione "4" per Fluidd ("3" per Mainsail) e completate la procedura di installazione

<DisplayAd/>

# Primo avvio

Completata la procedura di installazione di Fluidd (o Mainsail), assicuriamoci che la macchina sia raggiungibile, che il server sia attivo e che l'interfaccia grafica sia disponibile

Apriamo il browser ed andiamo al dominio scelto per la stampante, nel mio caso kp3s.local

(inserire foto della ui di fluidd)

Ottimo, adesso e' tutto pronto! Prima di passare alla configurazione del firmware per la stampante, pero', scarichiamo tutti gli aggiornamenti per Fluidd

Dal menu sulla sinistra, clicchiamo sull'icona dell'ingranaggio e, dal menu che si aprira', selezioniamo **Software Updates**. Da li' andiamo in basso, clicchiamo su Check for Updates, poi su Update All, oppure sulle singole voci, se Update All non e' attivo

Come al solito, mettetevi comodi: potrebbe volerci un po' di tempo...

<DisplayAd/>

Adesso Klipper e' installato, il server funziona e fluidd e' attivato! Ora passiamo a flashare il firmware sulla macchina

:::info
il materiale, per ora, si interrompe qui. A breve rilasceremo il proseguimento della guida e, grazie al vostro feedback, provvederemo a sistemare le sezioni precedenti

Per continuare l'installazione, per ora andate qui:

[Flyingbear-Info: Klipper](https://flyingbear.info/ru/firmware/klipper)