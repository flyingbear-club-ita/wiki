---
title: Installare klipper su Raspberry Pi
slug: /klipper/installazione_raspberry
keywords: ["stampa 3d", 3d printing", "flying bear", "flyingbear", "flying bear ghost", "flyingbear ghost", "flyingbear ghost 5", "flying bear ghost 5", "stampa 3d", "flyingbear ghost firmware", "klipper", "klipper firmware", "installing klipper", "raspberry pi klipper"]
description: Installare Klipper sulla Raspberry Pi
---

import DisplayAd from '../../src/components/displayAd'
import FacebookLink from '../../src/components/facebookLink'

<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>

Sicuramente vi starete chiedendo quale sia l'hardware ottimo per fare girare Klipper su una Raspberry Pi. La risposta non ce l'abbiamo, pero' abbiamo testato Klipper sia su una Raspberry Pi 3B+ (1GB di RAM) che su una Raspberry Pi 4 (2GB di RAM) e possiamo affermare che gira egregiamente su entrambe, quindi prendete quella che vi capita o che avete sotto mano, senza pensare troppo a limitazioni tecniche (abbiamo letto in giro su internet che anche una Pi Zero 2W va bene per far girare Klipper...😵😵😵)

Prima di cominciare, assicuratevi di avere i seguenti componenti a portata di mano:

- Raspberry Pi (a vostra scelta, come consigliato sopra)
- Alimentatore 5V 3A per la Raspberry Pi
- SD card da 32GB (anche di meno o di piu' va bene, pero' noi abbiamo testato con 32GB e sembra a posto)
- [Cavo USB B - USB A](https://amzn.to/3DsvyrR) (piu' corto e', meglio e', per evitare dispersioni ed interferenze)
- (opzionale) Schermo e tastiera da collegare alla Raspberry Pi dopo il primo avvio

<DisplayAd/>

Una volta provvisti di tutto l'occorrente, andate a scaricare [Raspberry Pi Imager](https://www.raspberrypi.com/software/) per il vostro sistema operativo

Imager serve a scrivere sulla SD una immagine, che poi, una volta inserita nella Raspberry Pi, provvedera' ad installare tutto il necessario per il sistema operativo della Pi

Una volta scaricato ed installato il programma, lanciatelo:

[ ![Klipper - Imager Startup](/img/klipper/imager/klipper_imager_startup.png) ](/img/klipper/imager/klipper_imager_startup.png)

Dopo esservi assicurati di aver inserito la SD card nel computer, andate a selezionare il sistema operativo, cliccando su **Operating System**

Tra le opzioni offerte, scegliete **Raspberry Pi OS Lite (32-bit)**

Questo sistema operativo ci consente di ottimizzare le risorse della raspberry pi, non avendo una interfaccia grafica vera a proprio come quella di Windows, MacOSx od Ubuntu. Questo tipo di sistema operativo si chiama **Headless**, perche' consente l'accesso solo tramite terminale

Una volta selezionato il sistema operativo, scegliete la SD card sulla quale volete installare l'immagine cliccando su **Storage**

:::danger
Assicuratevi di scegliere il drive giusto: una volta confermato il tutto, Imager procedera' alla formattazione della periferica selezionata, con conseguente perdita dei dati. Opzionalmente, prima di cominciare la procedura, effettuate un 
backup del contenuto della SD
:::

Prima di iniziare la procedura di scrittuare dell'immagine, cliccate sull'icona con l'ingranaggio in basso a destra per aprire un nuovo menu', che vi consentira' di semplificare la procedura di configurazione della Raspberry Pi, evitandoci grossi mal di testa con la riga di comando

Qui potete inserire:

- il nome col quale individuare la raspberry pi nella rete locale
- le credenziali per l'accesso tramite ssh
- le credenziali per l'accesso alla rete wifi

<DisplayAd/>

Una volta inseriti tutti i dati, chiudete il menu e procedete all'installazione del sistema operativo sulla SD cliccando sul pulsante "Write". Mettetevi comodi, perche' la procedura di installazione dura un bel po'

Alla fine dell'installazione (comparira' un messaggio), rimuovete la SD card, inseritela nella Raspberry Pi e accendetela

:::info
Per la prima accensione, e' richiesto l'utilizzo di una tastiera e di uno schermo. Dopo il primo avvio, configureremo la Raspberry Pi per operare in modalita' **headless**, cioe' senza bisogno di tastiera e schermo: potremo accedere alla Raspberry Pi tramite SSH (secure shell), che andremo a spiegare piu' avanti
:::

Dopo aver acceso la Pi, dovrebbe comparire uno schermo con un quadrato colorato, poi, successivamente, una serie di stringhe che indicano il progresso nel processo di avvio della Pi. Una volta terminato il processo di avvio, dovrebbe venirvi richiesto di inserire le credenziali per il login: inserite quelle che avete specificato tramite imager

A questo punto, dovreste essere entrati nella riga di comando (che, da adesso in poi, chiameremo shell, per comodita') della Raspberry Pi. Da qui potete inserire tutti i comandi, ma cominciamo da questo:

```sudo apt-get update && sudo apt-get upgrade```

Questo comando scarica ed installa tutti gli aggiornamenti del sistema operativo. Per completare l'operazione, premete ENTER (va fatto ogni volta che viene specificato un comando da inserire nella shell)

Successivamente, inseriamo:

```sudo raspi-config```

Una volta digitato questo comando, premete enter ed inserite la vostra password

Si aprira' un menu testuale

In questo menu testuale, scegliete:

1. Expand file system - serve a garantire che tutto lo spazio sulla SD venga utilizzato
2. System Options --> Boot Auto Login --> Console/Auto Login - questo serve a far partire la raspberry pi in modalita' headless, cioe' senza bisogno di immettere la password e di connettere schermo e tastiera

Uscite dal terminale, inserite il comando:

```ifconfig```

Dovreste vedere la configurazione di rete della Raspberry Pi e, di conseguenza, l'ip sulla vostra rete locale (che poi sara' quello che utilizzerete per accedere al server locale di klipper, ma di questo parleremo dopo). Notate pero' che, qualora l'aveste specificato precedentemente durante la creazione dell'immagine tramite imager, la raspberry pi dovrebbe gia' essere connessa alla vostra rete locale. Controllate, tramite qualunque programma di gestione del router, che la Pi sia visibile sulla rete locale, col nome di riferimento che le avete dato tramite Imager (nel mio caso, ghost.local)

<DisplayAd/>

A questo punto, scrivete:

```sudo reboot now```

La raspberry pi si resettera' e potrete staccare tastiera e schermo

Il passo successivo sara' quindi connettersi tramite SSH (non stiamo qui a parlarne, visto che il tema e' gia' stato [abbondantemente trattato](/docs/raspberry/installazione_raspbian) ed installare **Kiauh**, un tool per l'installazione dei vari software necessari per klipper
