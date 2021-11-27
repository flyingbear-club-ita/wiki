---
title: Octoprint su Raspberry Pi Zero 2w
slug: /raspberry/pi_zero_2w
keywords: ["stampa 3d", 3d printing", "flying bear", "flyingbear", "flying bear ghost", "flyingbear ghost", "flyingbear ghost 5", "flying bear ghost 5", "stampa 3d", "raspberry pi", "raspberry pi zero w", "raspberry pi zero w 2", "raspberry pi octoprint"]
description: Guida a come configurare Octoprint su Raspberry Pi Zero 2W per la Flying Bear Ghost
---

import DisplayAd from '../../src/components/displayAd'
import ArticleAd from '../../src/components/articleAd'
import FacebookLink from '../../src/components/facebookLink'

<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>

<DisplayAd/>

:::tip
Articolo scritto da **Nick_it**
:::

## Premessa {#premessa}

Prima di iniziare a capire se è possibile installare octoprint su un Raspberry Zero 2w (**spoiler: la risposta è si, ma non aspettatevi tutta la flessibilità di un Raspberry 4 o di un 3B**), iniziamo a parlare delle specifiche tecniche delle varie schede:

<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>

<DisplayAd/>

## Confronto: <br/> Raspberry Pi Zero 2W vs 4 vs 3B

### Specifiche Raspberry Zero 2w 

[ ![images zero 2w](/img/raspberry/pizerow2/images_zero_2w.jpg) ](/img/raspberry/pizerow2/images_zero_2w.jpg)
- SoC Broadcom BCM2710A1, quad-core a 64 bit (Arm Cortex-A53 a 1GHz)
- 512 MB SDRAM LPDDR2 
- LAN wireless IEEE 802.11b/g/n a 2,4 GHz, Bluetooth 4.2, BLE
- 1 porta USB 2.0 con OTG
- 1 porta micro-usb per la alimentazione ( 5 volt 3 watt consigliato)
- Uscita mini HDMI
- Connettore GPIO a 40 pin compatibile alla specifica HAT
- Slot per scheda MicroSD

### Specifiche Tecniche Raspberry 4

[ ![Raspberry-Pi-4-nuove-caratteristiche](/img/raspberry/pizerow2/Raspberry-Pi-4-nuove-caratteristiche.jpg) ](/img/raspberry/pizerow2/Raspberry-Pi-4-nuove-caratteristiche.jpg)


- Processore 1.5GHz quad-core 64-bit ARM Cortex-A72 CPU ( about 3x performance)
- 1GB, 2GB o 4GB di LPDDR4 SDRAM
- Gigabit Ethernet
- Dual-band 802.11ac wireless rete
- Bluetooth 5.0
- 2 porte USB 3.0 e 2 porte USB 2.0
- 1 porta usb c per la alimentazione ( 5volt 3 watt consigliato)
- Supporto dual monitor, con risoluzione fino a 4K
- Supporto per monitor analoigico
- VideoCore VI Graphics supporta OpenGL ES 3.x
- 4Kp60 hardware decode di HEVC video
- Slot per scheda micro-sd

### Specifica Raspberry 3B plus

[ ![3b plus photo](/img/raspberry/pizerow2/3b_plus_photo.jpg) ](/img/raspberry/pizerow2/3b_plus_photo.jpg)


- Broadcom BCM2837B0 Quad Core Cortex-A53 a 1.4 GHz, 32 kB L1 e 512 kB L2
- Broadcom VideoCore IV Dual Core a 400 MHz
- 1GB LPDDR2 a 900 MHz
- Ethernet 10/100/1000
- WiFi b/g/n 2.4/5 GHz, Bluetooth 4.2 + Bluetooth Low Energy
- microSD, HDMI 1.4 CEC, Jack 3.5 mm, 4×USB 2.0
- CSI Camera Connector, DSI Display Connector, GPIO header 40-pin
- Dimensioni: 85 x 56 x 17 mm

<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>

<DisplayAd/>

### In realta'... ne manca una...

In realta si potrebbe usare un quarto prodotto: il Raspberry P400

- **SoC**: Broadcom BCM2711 quad-core Cortex-A72 (ARM v8) 64-bit SoC @ 1.8GHz

- **Memoria**: 4GB LPDDR4-3200

- Connettività
  - Dual-band (2.4GHz and 5.0GHz) IEEE 802.11b/g/n/ac wireless
  - Bluetooth 5.0, BLE
  - LAN Gigabit Ethernet
  - 2 × USB 3.0 e 1 × USB 2.0
  - Header 40-pin GPIO orizzontale
  - 2 × micro HDMI ports (supporta sino a 4K60)

- H.265 (4Kp60 decodifica); H.264 (1080p60 decodifica, 1080p30 codifica); OpenGL ES 3.0

- **Scheda microSD** per l'installazione del sistema operativo e la memorizzazione dei dati

- Tastiera compatta a 78- o 79 tasti (dipende dalla variante regionale) integrata

- 5V DC tramite connettore USB

- Temperatura operativa: da 0°C a +50°C

- **Dimension**i: 286 mm × 122 mm × 23 mm

[ ![Raspberry Pi P400](/img/raspberry/pizerow2/raspberry-pi-400.jpg) ](/img/raspberry/pizerow2/raspberry-pi-400.jpg)

Vedo questo raspberry come il modello perfetto per chi non vuole avere a che fare con schede con componenti all'aria o che debbano mettere mano a saldatori. Un po completo a meno di 100 euro, dove potrete gestire la vostra bella stampante 3d, o giocare con i retro-games oppure cosa non meno importante dare ai vostri figli un desktop dove scrivere o navigare collegato alla TV in cameretta, e cosa da poco fargli imparare ad usare linux, e fidatevi chi lo conosce avra una marcia in piu nel mondo del lavoro un domani.

Ma ne voglio parlare meglio se mai il nostro caro Admin trovera mai uno spazio per la recensione dei prodotti non necessariamente collegati alla stampa 3D.

<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>

<DisplayAd/>

### Aspetti comuni delle 3 (o 4 )  schede
[ ![GPIO Pins](/img/raspberry/pizerow2/gpiopinsv3-300x289.png) ](/img/raspberry/pizerow2/gpiopinsv3-300x289.png)

Ce ne sono anche altri, ma cercateli voi, se no dove è lo spirito di ricerca e di studio? 

E poi andremmo fuori contesto e inizierebbero a tagliare l'articolo come farebbe Edward mani di forbice quando vede una aiuola

### Differenze tra le varie schede

Quella che salta al mio occhio e' una velocità diversa della CPU o della GPU, che pero' non influisce sulla operabilità del sistema Raspbian con Octoprint installato

Quello che mi fa pensare e' la dotazione di RAM, veramente poca al giorno d'oggi: Octoprint può essere installato, pero' risparmierei risorse solo per lui, non installerei interfacce grafiche o altri applicativi, e ci penserei pure un paio di volte ai plug in da installare 

<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>

<ArticleAd/>

Poi una singola porta USB, avremmo bisogno di un hub se volessimo collegare un telecamera USB e la stampante

Inoltre, 3 watt per una schedina del genere mi fanno pensare alla necessita' di un dissipatore, e poi alimentatori da 3 Watt, di certo non potrete usare quello del vostro telefono android da tanto al chilo

Mi spiace pure che sia sparito il ricevitore ad infrarossi, dal vecchio modello, e questo è un vero peccato

### Giudizio finale

:::tip
Ma quindi si puo' installare Octoprint su una Raspberry Pi Zero 2W???
::: 

Si può installare, ma non pensate di avere a che fare con un raspberry 4 dimagrito, **qui parliamo di 2 schede diverse**

Se il raspberry 4 poteva essere forse troppo solo per comandare octoprint, qui ci sta giusto, ma non esageriamo come se fossimo a casa dei parenti durante le vacanze di natate al cenone, potremmo degradare le prestazioni della scheda e iniziare ad avere fallimenti di stampre e daremmo la colpa al povero cavo USB

<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>

<DisplayAd/>

## Materiale occorrente

- [Memoria micro-SD per inserire il sistema operativo](https://amzn.to/3nsCnSy), suggerita 64 giga, e più è veloce meglio è

- [Hub USB per collegare la stampante 3d e la telecamera](https://amzn.to/3FsaOit)

- [Alimentatore usb da 3 watt 5 Volt](https://amzn.to/3nsHJxn)

- Raspberry PI Zero 2 W starter kit. Vi suggerisco lo Starter Kit cosi avrete gia tutto l'occorrente tra cui una memoria a 16 Giga (anche se e' meglio averne una piu grande), l'adattatore per collegare il tutto a un HUB usb (per collegare stampante ed eventuale telecamera), il case, l'adattatore per usare la telecamera raspberry ecc. Trovate di seguto la lista completa

  Kit content: Raspberry Pi Zero 2 W Official Case (with flex cable for camera board and 3 lids) Header GPIO 2×20 HDMI- mini HDMI adapter USB adapter cable Official USB micro-A cable 1m red Heatsink Official 16 GB MicroSD (Raspberry Pi OS preinstalled) + SD adapter

  [Link per acquistare su Amazon](https://amzn.to/3Hwjjeh)


## E ora installiamo

Ma se siete arrivati qui, allora andiamo avanti a parlare dell'installazione del sistema operativo e di octoprint

Come spiegato in precedenti guide ed articoli è possibile installare diversi sistemi operativi,ma ora vedremo solo l'installazione di Raspberry PI os a 32 Bit

:::tip

*Perchè avete 512 mega di RAM, ai 64 bit pensateci da quando avrete i 4 giga di ram in su.*
:::


Per il momento, ci focalizzeremo sulla combinazione piu' semplice, che consiste in una distro basata su Raspbian, ma che contiene gia' octoprint

### Software da installare/scaricare

- [Putty](https://www.putty.org/), per connettersi tramite ssh alla raspberry senza dover collegarla ad uno schermo
- Il [software per caricare e creare  l'immagine sulla micro sd](https://downloads.raspberrypi.org/imager/imager_latest.exe)
- Raspberry Pi, senno' non sareste qui 
- Micro sd card (almeno 8 Gb)
- Cavo Usb
- un'ora del vostro tempo

<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>

<ArticleAd/>

### Preparare la scheda Micro-SD

Bene, per prima cosa dobbiamo preparare la scheda micro sd e installare il sistema operativo contenente OctoPrint

Dopo avete installato **Raspberry Pi-Imager**, inserite la scheda micro SD con l'adattatore nel PC e aprite  il software appena installato.


[ ![rasp 1](/img/raspberry/pizerow2/rasp_1.PNG) ](/img/raspberry/pizerow2/rasp_1.PNG)


Avrete questa come prima schermata, ora dovrete scegliere il sistema operativo da installare.

[ ![rasp 2](/img/raspberry/pizerow2/rasp_2.PNG) ](/img/raspberry/pizerow2/rasp_2.PNG)


Come potete vedere ci sono diversi sistemi operativi che potete installare in modo molto semplice e quasi in automatico.

[ ![rasp 3](/img/raspberry/pizerow2/rasp_3.PNG) ](/img/raspberry/pizerow2/rasp_3.PNG)

Andiamo nella sezione Other General purpose OS

[ ![rasp 4](/img/raspberry/pizerow2/rasp_4.PNG) ](/img/raspberry/pizerow2/rasp_4.PNG)

Ed ecco finalmente il nostro Octopi, il sistema opearivo basato su Raspberry OS che ha installato l'ultima versione di Octoprint

<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>

<ArticleAd/>

[ ![rasp 5](/img/raspberry/pizerow2/rasp_5.PNG) ](/img/raspberry/pizerow2/rasp_5.PNG)

Scegliamo l'unica selezione disponibile e andiamo avanti.

[ ![rasp 6](/img/raspberry/pizerow2/rasp_6.PNG) ](/img/raspberry/pizerow2/rasp_6.PNG)

Ora dovremmo scegliere su quale scheda micro sd vogliamo installare il sistema operativo.

[ ![rasp 7](/img/raspberry/pizerow2/rasp_7.PNG) ](/img/raspberry/pizerow2/rasp_7.PNG)

Io ho inserito la mia scheda micro sd su un adattore micro-sd to USB e l'ho collegata al mio laptop

La scegliamo e andiamo avanti

[ ![rasp 8](/img/raspberry/pizerow2/rasp_8.PNG) ](/img/raspberry/pizerow2/rasp_8.PNG)

Qui invece ci avverte che la micro-sd verra cancellata, e noi diciamo di si e andiamo avanti

[ ![rasp 9](/img/raspberry/pizerow2/rasp_9.PNG) ](/img/raspberry/pizerow2/rasp_9.PNG)

Ora sta scrivendo i dati sulla scheda micro-sd, la pazienza è la virtù dei forti e di quelli che non hanno netflix per passare il tempo nella attesa. Anche un caffe' nell'attesa va bene

[ ![rasp 10](/img/raspberry/pizerow2/rasp_10.PNG) ](/img/raspberry/pizerow2/rasp_10.PNG)

Ora siete pronti a entrare nel magico mondo di octoprint e di linux..........

Con questo step **abbiamo preparato la micro SD** con il sistema operativo già configurato per Raspberry Pi e il programma OctoPrint già installato

:::danger

Se dopo la creazione della Micro SD vi viene richiesto di formattarla, ignoratelo: è solo la partizione linux che non viene riconosciuta da Windows

:::

### Configurazione WiFi

A questo punto, se non abbiamo un cavo di rete per collegare il raspberry a alla nostra rete e non vogliamo collegare un monitor HDMI con una tastiera e un mouse, bisogna **configurare il WiFi** in modo che al primo avvio sia tutto funzionante

Aprite con l’esplora risorse la micro SD, cercate il file *octopi-wpa-supplicant.txt* e apritelo con Notepad++ o Blocco Note (o qualunque altro editor di testo, **tranne word o wordpad!!!**)

[![Contenuto SD Card](/img/raspberry5.JPG)](/img/raspberry5.JPG)

Aprite il file con notepad ( meglio notepad++ )

Cercate questa sezione:
`## WPA/WPA2 secured`

in ssid="put SSID here" mettete il nome della rete e in psk la vostra password e togliete un cancelletto per riga

**Prima:**

[![Setup Wifi Prima](/img/raspberry6.JPG)](/img/raspberry6.JPG)

**Dopo:**

[![Setup Wifi Dopo](/img/raspberry7.JPG)](/img/raspberry7.JPG)

Fatto questo, salvate il file, chiudete il notepad e potete smontare il drive micro-SD

Inserite la micro-SD nel Raspberry e accendetelo

<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>

<ArticleAd/>

## Prima Accensione

Ancora pochi passi prima di completare la installazione del nuovo octoprint

Per prima, cosa aprite *Putty* (installato precedentemente) e date come indirizzo octopi.local

[![Putty](/img/raspberry8.JPG)](/img/raspberry8.JPG)

:::tip

Se non dovesse funzionare, usate uno scanner ip per trovare l'ip assegnato al vostro raspberry

Ad esempio, potete usare [Advanced IP Scanner](https://www.advanced-ip-scanner.com/it/)

:::

Ci ritroveremo la richiesta di una userid e una password ( se verra fuori un alert, cliccate NO)

[![SSH Login](/img/raspberry9.JPG)](/img/raspberry9.JPG)

Nella console, inserire lo userid, che è "pi", e la password, che e' "raspberry", poi premere invio per accedere alla shell-command

:::tip

Mentre scrivete, non apparirà alcun carattere. Non vi preoccupate, non si e' rotta la Raspberry, e' una questione di sicurezza!
:::

Per prima cosa, cambiate la password: scrivete “passwd” e premete invio. Vi verrà chiesta la password attuale e poi la nuova password

```undefined
pi@octopi:~ $ passwd
Changing password for pi.
Current password:
```

Copy

Ora completiamo la configurazione del nostro sistema operativo.

```
pi@octopi:~ $ sudo raspi-config
```

Il sistema chiedera di inserire la password del raspberry ( quella modificata poco fa) e vi farà partire il tool di configurazione.

[![Shell command](/img/raspberry10.JPG)](/img/raspberry10.JPG)

Io qui non toccherei nulla, se non volete fare un bel upgrade del sistema operativo, sempre utile ma per il resto fatevi un giro tra i vari menù ma non cambiate nulla se non necessario

<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>

<ArticleAd/>

:::info

Comandi da inserire col terminale

Per vedere la version del sistema operativo:

```
lsb_release -a
```

Per aggiornare il raspberry all'ultima versione del sistema operativo:

```undefined
sudo apt-get update
sudo apt-get upgrade
```

Copy

Per vedere la versione di octoprint installata:

```
~/oprint/bin/octoprint --version
```

Per far ripartire il servizio di Octoprint:

```
sudo service octoprint restart
```
:::

## Prima Configurazione Octoprint

Apriamo il nostro web browser e puntiamo a questo indirizzo:

```
http://octopi.local
```

Partira immediatamente il setup wizard

[![Setup Wizard](/img/raspberry11.JPG)](/img/raspberry11.JPG)

Dopo avere premuto next, vi verra' chiesto se avete un vecchio backup, ma se siete qui non credo proprio, perciò premete **Next**

La schermata successiva vi chiedera' di creare uno used id ed una password, poi premete **Next**. Non fateli troppo semplici: ne va della vostra sicurezza

[![Credentials](/img/raspberry12.JPG)](/img/raspberry12.JPG)

In questa schermata, la scelta dipende da voi: non cambia nulla a livello di configurazione, ma, visto che il software è gratis, aiutiamo gli sviluppatori scegliendo Enable Anonymous Usage Tracking

[![Shell command](/img/raspberry13.JPG)](/img/raspberry13.JPG)

Qui dovete premere i pulsanti "Test host & port" e "Test name resolution" per vedere se la stampante puo andare online e poi premete "Enable Connectivity Check", poi premete Next

<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>

<ArticleAd/>

[![Testing Connectivity](/img/raspberry14.JPG)](/img/raspberry14.JPG)

Premete "Enable Plugin Blacklist Processing", per una questione di sicurezza, poi nuovamente Next

[![Plugins Blacklist](/img/raspberry15.JPG)](/img/raspberry15.JPG)

Nella schermata successiva, se avete le misure della stampante inseritele, oppure andate avanti, si potranno inserire più in la'

Ora premete Next e Finish ( una letta veloce a cosa dice l'ultima pagina non sarebbe male) e la configurazione è completa!!! 🤩🤩🤩

Benvenuti su Octoprint

[![Octoprint](/img/raspberry16.JPG)](/img/raspberry16.JPG)

Bene ora fai parte della famiglia di utenti Octoprint, ma per collegare la vostra stampante andate a leggervi la sezione successiva,  e sempre nella nostra wiki troverete utili informazioni per installare la vostra stampante Artilleri genius pr..... Ehm no la vostra Ghost la migliore stampante del mondo, i plug in migliori da scegliere per la stampante e soprattuto tanti consigli utili per usarla al meglio.


<FacebookLink link="https://www.facebook.com/hashtag/raspberrypi?__gid__=600126627631693"/>

<DisplayAd/>