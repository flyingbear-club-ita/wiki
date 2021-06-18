---
title: Installare Octoprint
slug: /raspberry/installazione_raspbian
---

## Installazione e prima configurazione

Come spiegato precedentemente è possibile installare diversi sistemi operativi, ora ne vediamo alcuni e a grandi linee

Li vedremo tutti, ma abbiate un po di pazienza 😁

Per il momento, ci focalizzeremo sulla combinazione piu' semplice, che consiste in una distro basata su Raspbian, ma che contiene gia' octoprint

:::info
Materiale occorrente

* [Putty](https://www.putty.org/), per connettersi tramite ssh alla raspberry senza dover collegarla ad uno schermo
* la [distribuzione customizzata Octoprint](https://octoprint.org/download/)
* Il [software per caricare l'immagine sulla micro sd](https://etcher.io/ )
* Raspberry Pi, modello 3B o superiore
* Micro sd card (almeno 8 Gb)
* Cavo Usb 
* un'ora del vostro tempo
:::


### Preparare la scheda SD

Bene, per prima cosa dobbiamo preparare la scheda micro sd e installare il sistema operativo contenente OctoPrint

Dopo avete installato **Balena Etcher**, inserite la scheda micro SD con l'adattatore nel PC e aprite qualunque programma usiate per formattare una memoria (SD Card Formatter su Windows, Disks su Ubuntu, etc)

Nel campo “Volume Label” inserite un nome pertinente, come ad esempio “octoprint”

 Lasciate tutte le impostazioni di default e premete “Format”



Aprite ora Balena Etcher, Comparirà una finestra con tre passi da configurare

Come prima cosa dove vi chiede “Select Image” selezionate il file .zip che avete scaricato dal sito di Octoprint 

[ ![Balena etcher start](/img/raspberry1.JPG) ](/img/raspberry1.JPG)

Successivamente, alla voce “Select Drive” selezionate il supporto micro SD 

[ ![Select Drive](/img/raspberry2.JPG) ](/img/raspberry2.JPG)

Una volta terminate queste due operazioni, **premete su “Flash!”**

[ ![Balena etcher Flash](/img/raspberry3.JPG) ](/img/raspberry3.JPG)

L’operazione durerà qualche minuto, mostrandovi questa schermata

[ ![Balena etcher Finito](/img/raspberry4.JPG) ](/img/raspberry4.JPG)

A fine operazione comparira' un messaggio di notifica

Con questo step **abbiamo preparato la micro SD** con il sistema operativo già configurato per Raspberry Pi e il programma OctoPrint già installato

:::caution
Se dopo la creazione della Micro SD vi viene richiesto di formattarla, ignoratelo: è solo la partizione linux che non viene riconosciuta da Windows
:::

### Configurazione WiFi
A questo punto, se non abbiamo un cavo di rete per collegare il raspberry a internet, bisogna **configurare il WiFi** in modo che al primo avvio sia tutto funzionante


Aprite con l’esplora risorse la micro SD, cercate il file *octopi-wpa-supplicant.txt* e apritelo con Notepad++ o Blocco Note (o qualunque altro editor di testo, **tranne word o wordpad!!!**)

[ ![Contenuto SD Card](/img/raspberry5.JPG) ](/img/raspberry5.JPG)

Aprite il file con notepad ( meglio notepad++ )

Cercate questa sezione:  
```## WPA/WPA2 secured```

in ssid="put SSID here"  mettete il nome della rete e in psk la vostra password e togliete un cancelletto per riga

**Prima:**

[ ![Setup Wifi Prima](/img/raspberry6.JPG) ](/img/raspberry6.JPG)

**Dopo:**

[ ![Setup Wifi Dopo](/img/raspberry7.JPG) ](/img/raspberry7.JPG)

Fatto questo, salvate il file, chiudete il notepad e potete smontare il drive micro-SD

Inserite la micro-SD nel Raspberry e accendetelo

### Prima Accensione

Ancora pochi passi prima di completare la installazione del nuovo octoprint

Per prima, cosa aprite *Putty* (installato precedentemente) e date come indirizzo octopi.local

[ ![Putty](/img/raspberry8.JPG) ](/img/raspberry8.JPG)

:::tip
Se non dovesse funzionare, usate uno scanner ip per trovare l'ip assegnato al vostro raspberry  

Ad esempio, potete usare [Advanced IP Scanner](https://www.advanced-ip-scanner.com/it/)
:::

Ci ritroveremo la richiesta di una userid e una password ( se verra fuori un alert, cliccate NO)

[ ![SSH Login](/img/raspberry9.JPG) ](/img/raspberry9.JPG)

Nella console, inserire lo userid, che è "pi", e la password, che e' "raspberry", poi premere invio per accedere alla shell-command

:::tip
Mentre scrivete, non apparirà alcun carattere. Non vi preoccupate, non si e' rotta la Raspberry, e' una questione di sicurezza!
:::

Per prima cosa, cambiate la password: scrivete “passwd” e premete invio. Vi verrà chiesta la password attuale e poi la nuova password

```
pi@octopi:~ $ passwd
Changing password for pi.
Current password:
```


Ora completiamo la configurazione del nostro sistema operativo.

```pi@octopi:~ $ sudo raspi-config```

Il sistema chiedera di inserire la password del raspberry ( quella modificata poco fa) e vi farà partire il tool di configurazione.

[ ![Shell command](/img/raspberry10.JPG) ](/img/raspberry10.JPG)

Io qui non toccherei nulla, se non volete fare un bel upgrade del sistema operativo, sempre utile ma per il resto fatevi un giro tra i vari menù ma non cambiate nulla se non necessario

:::info

Comandi da inserire col terminale

Per vedere la version del sistema operativo:

```lsb_release -a```

Per aggiornare il raspberry all'ultima versione del sistema operativo:

```
sudo apt-get update
sudo apt-get upgrade
```

Per vedere la versione di octoprint installata:

```~/oprint/bin/octoprint --version```

Per far ripartire il servizio di Octoprint:

```sudo service octoprint restart```
:::

### Prima Configurazione Octoprint

Apriamo il nostro web browser e puntiamo a questo indirizzo:

```http://octopi.local```

Partira immediatamente il setup wizard

[ ![Setup Wizard](/img/raspberry11.JPG) ](/img/raspberry11.JPG)

Dopo avere premuto next, vi verra' chiesto se avete un vecchio backup, ma se siete qui non credo proprio, perciò premete **Next**

La schermata successiva vi chiedera' di creare uno used id ed una password, poi premete **Next**. Non fateli troppo semplici: ne va della vostra sicurezza

[ ![Credentials](/img/raspberry12.JPG) ](/img/raspberry12.JPG)

In questa schermata, la scelta dipende da voi: non cambia nulla a livello di configurazione, ma, visto che il software è gratis, aiutiamo gli sviluppatori scegliendo Enable Anonymous Usage Tracking

[ ![Shell command](/img/raspberry13.JPG) ](/img/raspberry13.JPG)


Qui dovete premere i pulsanti  "Test host & port" e "Test name resolution" per vedere se la stampante puo andare online e poi premete "Enable Connectivity Check", poi premete Next

[ ![Testing Connectivity](/img/raspberry14.JPG) ](/img/raspberry14.JPG)


Premete "Enable Plugin Blacklist Processing", per una questione di sicurezza, poi nuovamente Next

[ ![Plugins Blacklist](/img/raspberry15.JPG) ](/img/raspberry15.JPG)

Nella schermata successiva, se avete le misure della stampante inseritele, oppure andate avanti, si potranno inserire più in la'

Ora premete Next e Finish ( una letta veloce a cosa dice l'ultima pagina non sarebbe male) e la configurazione è completa!!! 🤩🤩🤩

Benvenuti su Octoprint

[ ![Octoprint](/img/raspberry16.JPG) ](/img/raspberry16.JPG)



Bene ora fai parte della famiglia di utenti Octoprint, nelle prossime sezioni tratteremo la configurazione della tua stampante, come connetterla, di tutte le funzionalità di octoprint e come installare e utilizzare i plug in migliori ( secondo il mio modesto parere), e di tutto quello che vi verrà in mente e ce lo farete sapere


