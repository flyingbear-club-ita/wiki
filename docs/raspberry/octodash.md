---
title: Octodash
slug: /raspberry/octodash
---

## Premessa

Ciao a tutti, questo articolo, sarà un po diverso dal solito, perchè da oggi vorrei introdurre un nuovo metodo di divulgazione: oltre al presente articolo, preparerò un [video su youtube](https://www.youtube.com/watch?v=3Z_DiOsfn0Y&t=259s&ab_channel=FlyingbearClubIta), per rendere più semplice e di più immediata comprensione le procedure o le guide che andremo a pubblicare

Iniziamo oggi con l'installazione di Octodash, per la gestione di octoprint direttamente dallo schermo di un raspberry

Prima di spiegarvi come è fatto, voglio farvi capire perchè l'ho fatto e perchè potrebbe esservi utile

Le stampanti 3D sono ancora dei una via d mezzo di prodotti tra l'artigianale e un prodotto industriale, con parti molto calde, ugello o piatto, cavi in vista, parti in movimento

Anche la procedura della stampa non è semplicissima: creare il modello, metterlo su supporto di memoria e poi collegare questo supporto alla stampante e procedere dal menu della stampante della stampa del modello

Per i più fortunati, c'e' la possibilita' di mandare la stampa via Wifi, ma allora non prendereste nemmeno un raspberry per octoprint

Il mio desiderio di creare questo sistema è nato dal fatto che se mia figlia volesse stampare un pezzo, non deve fare nulla se non toccare lo schermo del raspberry (deve essere touch, ma di questo ne parleremo più avanti), scegliere il progetto da stampare, tornare quando è finito e prendere il pezzo fatto. Nulla e nessuno vi vieta di usare Octopod ( Vedremo in un prossimo video a cosa serve e come usarlo), per monitorare la stampa da remoto. Lo so Lo so, perché non la stampate direttamente da remoto? 

Perché mi piace vedere la soddisfazione di mia figlia che è riuscita a stampare, senza il mio supporto (almeno ufficialmente), quello che voleva

## Materiale occorrente

* Raspberry 3A, 3B, 4B (vedrete, presto uscirà un modello 4A!)

  Altri modelli potrebbero funzionare, ma sono sconsigliati

* Schermo touch

  Ne esistono diversi in commercio, collegabili via mHDMI, o flat interno, da 3,5 pollici, 5 pollici, 7,5 pollici, 8 pollici ecc ecc. E' possibile anche incassarli in un chassis  

  [ ![Schermo TFT](/img/immagineZero.png) ](/img/immagineZero.png)

* Driver per lo schermo touch (variano in base al modello di chermo scelto)
  
  :::tip
  Certamente non scegliete uno schermo se non avete alcuna informazione riguardo i driver da utilizzare
  :::

* [**Octoprint**](https://octoprint.org/download/)

* [**Raspberry Pi Imager**](https://www.raspberrypi.org/software/) oppure [**Balena Etcher**](https://www.balena.io/etcher/)

* [**Putty**](http://www.putty.org)

  :::tip
  Scaricate questo software solo se lavorate con Windows, per linux e mac os esiste già il client ssh abilitato di default, altrimenti, se siete pigri, potete scaricarlo anche per Mac/os o Linux
  :::

## Installazione

Se siete novizi sulla installazione di una immagine del raspberry su scheda Micro SD, vi suggerisco di seguire [questa mia guida](/docs/raspberry/installazione_raspbian) e poi riprendere dal punto successivo

Dopo avere completato l'installazione e  la configurazione di Octoprint (come riferimento usate il video girato come supporto, oppure il link precedente), una buona cosa da fare è quella di aggiornare il raspberry all'ultima versione software disponibile

A questo punto, aprite putty e connettetevi alla raspberry usando **octopi.local** come indirizzo, come illustrato in foto

  [ ![Connessione tramite Putty](/img/putty01.PNG) ](/img/putty01.PNG)

:::tip
Se non funzionasse, usate netscan o altri programmi di scansione di rete per trovare l'indirizzo ip del rapspberry, ma questa casistica e' molto improbabile

Io dovro usare un nome diverso, perchè nella mi rete esiste gia un Raspberry con quel nome e sono troppo pigro per cambiarlo
:::

Solo durante la prima connessione, comparira' una finestra che vi chiedera' se siete sicuri di volere entrare nel server

![Putty Security alert](/img/putty02.PNG)

Una volta confermato l'accesso, inseriamo le credenziali per il login:

```
Login: pi

Password: raspberry
```

[ ![Credenziali Login](/img/putty03.PNG) ](/img/putty03.PNG)



Nota: è normale che non vediate la password mentre digitate.

Dopo avere inserito login e password eccovi la prima finestra con un cursore che non aspetta altro che gli digitiate dei comandi (oh, che bevi vecchi tempi le righe di comando...)

[ ![Terminale raspberry](/img/putty05.PNG) ](/img/putty05.PNG)

E ora iniziamo a inserire i comandi che ci servono. Cominciamo con:

```sudo apt update```

Vi verra chiesto la password e voi inserite raspberry

[ ![Update](/img/putty06.PNG) ](/img/putty06.PNG)

Nell'output del terminale vedrete delle righe scorrere, lasciatelo fare fino a quando non finisce e poi inserite il secondo comando:

```sudo apt full-upgrade```

Anche qui lasciatelo lavorare e se vi fa qualche domanda rispondete sempre con Y

Appena finito, fategli fare un bel reboot con

```sudo reboot```

Ora aspettate un paio di minuti che si riavvi e rientrate con putty come avete fatto prima

A questo punto ci sono diverse correnti di pensiero: la mia è di installare prima i driver video, poi vedere cosa cavolo succede

:::tip
Se avete uno schermo collegato all'hdmi, non dovrete seguire questi passi, o almeno seguite quelli del produttore dello schermo. io seguo questi che gestiscono lo schermo meglio dei driver del mio produttore di schermi, che essendo molto poco costoso non ci avranno perso troppo tempo a preparare dei driver decenti
:::

## Installazione driver schermo (Facoltativo, varia in base a produttore)

Questi che sto per usare sono driver generici, non forniti dal produttore del mio schermo, ma funzionano, e mi sembrano pure meglio, perciò vado avanti con questi

Per prima cosa, scarichiamo la repository dei driver che useremo tramite terminale:

```git clone https://github.com/waveshare/LCD-show.git```

Successivamente, cambiamo i permessi di lettura della cartella:

```chmod -R 755 LCD-show```

:::info
se mai vi interesasse un corso ultra rapido e ultra semplice per capire le basi di linux, basta chiedere
:::

Entriamo nella cartella dove abbiamo scaricato i driver

```cd LCD-show```

[ ![Cartella Drivers](/img/putty07.PNG) ](/img/putty07.PNG)

 e scriviamo:
 
 ```chmod +x LCD35-show```

Cambiamo i permessi del file:

```sudo ./LCD35-show```

Ora installiamo il programma che abilita il nostro driver e speriamo bene. Il raspberry si riavverà da solo, andate a dare uno sguardo al vostro schermo, dovreste vedere questa immagine:

[ ![Display](/img/display1.jpg) ](/img/display1.jpg)


## Configurazione

Dopo il riavvio, la connessione cadra', quindi rientrate nel raspberry con putty

A me non piace come è orientato il display, perciò userò questo comando per girare lo schermo:

```sudo ./LCD35-show 180```

e dopo l'ennesimo riavvio possiamo andare avanti

Ora facciamo una modifica per migliore la leggibilità del nostro display

```
sudo nano /boot/config.txt
```

Si aprira' un editor di testo nel terminale. Andate fino in fondo e modficate la riga qui sotto come descritto


```
hdmi_cvt=800 533 60 6 0 0 0
```

Per salvare e chiudere l'editor di testo, premete Ctrl-O e poi CTRL-X

Ora entriamo nel tool di configurazione del raspberry, 

```sudo rasp-config```

Vi ritroverete in questa schermata, un consiglio di farci un giro ve lo dò, fate attenzione a cosa toccate, ma cosa più importante vedete cosa potete fare.

[ ![Raspi Config](/img/putty08.PNG) ](/img/putty08.PNG)

Per prima cosa, anche se è opzionale, abilitate il server VNC in questo modo:

* Andate sulla terza opzione ( **interface Options**)

  [ ![Raspi Config Interface options](/img/putty09.PNG) ](/img/putty09.PNG)


* Abilitate queste opzioni:

  P1 Camera - per abilitare la web cam, opzionale

  P3 VNC - per gestire da remoto la vostra interfaccia di OctoDash

  [ ![Raspi Config Enable connections](/img/putty10.PNG) ](/img/putty10.PNG)


Dopo avere attivato ( nel caso di vnc installato e attivato) questi servizi, abilitiamo il login automatico, senza dover inserire tutte le volte user id e password

Andate in System option ( prima opzione) e selezionate **s5 Boot/Auto Login**, poi selezionate **B2 Console Autologin**

[ ![Auto Login](/img/putty11.PNG) ](/img/putty11.PNG)

Dopo l'ennesimo riavvio, siamo pronti ad installare Octodash

## Installazione Octodash

Rientriamo con putty nel nostro raspberry e usiamo questo comando:

```bash <(wget -qO- https://github.com/UnchartedBull/OctoDash/raw/main/scripts/install.sh)```

Copiatelo tutto, parentesi comprese, e, quando ve lo richiederà, inserite la password del raspberry, dopo di cio' non toccate più nulla per lungo tempo

[ ![Installazione Octodash](/img/octodash00.PNG) ](/img/octodash00.PNG)

Finita l'installazione, vi verra' richiesto di fare delle selezioni

[ ![Configurazione Octodash](/img/octodash01.PNG) ](/img/octodash01.PNG)

Io, ad esempio, ho scelto questi plugin:

[ ![Plugin Octodash](/img/octodash02.PNG) ](/img/octodash02.PNG)


Per selezionare, usate la freccia e poi lo spazio, poi invio per continuare e confermare

[ ![Installazione Plugin Octodash](/img/octodash04.PNG) ](/img/octodash04.PNG)

Per tutte le prossime richieste, confermate sempre ed aspettate la fine dell'installazione, poi il vostro raspberry si riavviera'

Secondo la procedura ufficiale, andate a vedere lo schermo del vostro raspberry, e se vedete che funziona tutto, cavoli, che fortuna, non so come abbiate fatto 😀!!! 

Se invece avete lo schermo pieno di istruzioni ed errori, siete al mio stesso punto la prima volta. Dopo aver analizzato i log, ho scoperto dei punti mancanti che ho riempito con queste altre istruzioni

```
sudo apt-get install libgtk-3-0 xserver-xorg xinit x11-xserver-utils
```

Dice che non serve, ma sempre meglio una installazione in piu', poi riavviate con **sudo reboot** e rientrate con putty e lanciate il comando:

```
sudo apt-get install git build-essential xorg-dev xutils-dev x11proto-dri2-dev
```

Riavviate e rientrate con putty, poi scrivete:

```

$ sudo apt-get install libltdl-dev libtool automake libdrm-dev
```

Riavviate e rientrate con putty (un'altra volta!!!), poi inserite i seguenti comandi, uno per uno:

```
$ git clone https://github.com/ssvb/xf86-video-fbturbo.git
$ cd xf86-video-fbturbo
$ autoreconf -vi
$ ./configure --prefix=/usr
$ make
```

Fregatevene se vedete degli errori o warning, è tutto normale

Continuate con:

```
$ sudo make install
$ sudo cp xorg.conf /etc/X11/xorg.conf
```

Riavviate e rientrate con putty (ormai sarete esperti!)

E poi...........

[ ![Schermata iniziale Octodash](/img/setup1.PNG) ](/img/setup1.PNG)


Ecco cosa comparira sul vostro schermo e su VNC da remoto ( ricordate che vi ho fatto installare il servizio)

E ora passiamo alla configurazione, ma questo sarà argomento di un secondo articolo, altrimenti vi ritrovo o morti o che avete cambiato guida 20 pagine fa'!

A Dopo!!!
