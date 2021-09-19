---
title: Multi Boot con Raspberry
slug: /raspberry/multiboot
---

## Premessa

Non tutti vogliono spendere dei soldi per acquistare un raspberry, le solite motivazioni sono:

* Ma io non lascio mai la stampa incustodita, sono sempre in casa quando stampo
* Ma io ho già il computer, perché ne devo prendere un altro
* Ma io ..... Ma io

E se vi dicessi che una volta acquistato il raspberry lo potreste usare per più lavori?

E la cosa bella e' che non dovrete avere una memoria Micro-sd per ogni sistema operativo, ma con una sola Micro-SD, potrete avere il vostro bel octoprint, oppure un emulatore di Commodore 64, o di tutti i vecchi video game di una volta, e vi assicuro sono sempre i migliori

Un'altra buona idea sarebbe quella di creare la funzionalità NAS sul raspberry, in accoppiata con octoprint, oppure stand alone, se ci interessa non avere sempre questa funzionalità (lo vedremo in futuro come fare, cosi da poter scaricare su chiavetta USB o hard disk esterno i nostri lavori in 3D, oppure le registrazioni di una telecamera in casa)

Inoltre, se voleste fare prove su Linux, ma avete paura di metterci mano, ecco che potrete crearvi una copia del vostro sistema operativo Linux preferito, sempre stesso hardware, stessa microsd, ma un ambiente Linux diverso dove sbizzarrirsi

Oggi parleremo di creare una memoria **Multi-Boot**,  dove siete voi a scegliere cosa deve fare il vostro Raspberry all'accensione e, se non sceglierete nulla, partirà il sistema operativo di default (*che è Octoprint, vero????*)

## Materiale Occorrente

* Raspberry PI 3B oppure 4
* Tastiera e mouse usb 
* Joystick (volete giocare con la tastiera???)
* SD da 64 Giga: i giochi occupano spazio, e, se non sono i giochi, i vari sistemi operativi che potrete installare, tipo Ubuntu, Kali (a qualcuno è venuto in mente Mr. Robot?), oppure mediaplayer
* [Raspberry PI Imager](https://www.raspberrypi.org/software/) 
* [Berryboot](https://sourceforge.net/projects/berryboot/)

Adesso armatevi di santa pazienza: i vari sistemi operativi devono essere scaricati, perciò ci vorrà tempo

## Iniziamo

Cominciamo col parlare di **BerryBoot**. Esistono anche altre soluzioni, ma, dopo le prove effettuate, ho reputato questo il migliore per semplicità e per creazioni di nuove immagini customizzate. Fossimo tutti esperti, le guide non servirebbero...
BerryBoot e' un bootloader, piuttosto che un installatore. Questa leggera differenza significa che è ottimizzato per eseguire più sistemi operativi

BerryBoot richiede di scaricare un file dal link qui sopra ed utilizzare il Raspberry PI Imager per copiarla su una scheda SD formattata. Per la installazione dei nuovi sistemi operativi, dovrai assicurarti che il tuo Raspberry Pi sia online per scaricare i sistemi operativi scelti, oppure collegare una penna usb **formattata in FAT 32** con la immagine che vorrai caricare, o recuperarla dal proprio NAS

:::danger
Le immagini non sono le solite che trovate online, devono essere "**trattate**" prima di poterle installare, per questo ho gia' creato un'immagine customizzata di Octoprint, da utilizzare immediatamente

Se vi interessa sapere come si creano le immagini, fatecelo sapere
:::

Per prima cosa, scaricate l'immagine che vi interessa da [qui](https://www.dropbox.com/sh/ix1wvrs30j5ztcm/AAAwG7jvsUimc-nZrv3TQX8Wa/raspberry_pi_multiboot_images?dl=0&subfolder_nav_tracking=1), poi, dopo aver lanciato Berryboot, scegliete **Use custom** 

[ ![BerryBoot use custom](/img/multiboot1.png) ](/img/multiboot1.png)

Appena creata la immagine sulla vostra SD, inseritela nel raspberry, collegatela a un mouse e una tastiera e un monitor e accendete il tutto

La prima schermata che troverete sarà questa:

[ ![BerryBoot Welcome](/img/multiboot2.jpg) ](/img/multiboot2.jpg)

Scegliete *Wifi* oppure *Wired*, e, se ci sono problemi di schermo, scegliete enable oppure disable overscan

Se sceglierete wifi, il sistema farà una veloce scansione delle reti Wifi disponibili e vi chiederà a quale collegarvi molto presto 

:::caution
Scegliete la giusta Wifi Country, non perché non vada, ma perché alcune nazioni usano frequenze e potenze che in Italia non sono presenti, e oltre al fatto che non potete usarle perché il vostro Router non le usa, non sareste nel giusto
:::

Configurate anche la tastiera, scegliendo il layout preferito

L'ultima riga serve per controllare se il settaggio della tastiera è giusto, provate se volete essere certi che la tastiera è configurata correttamente

Nella schermata successiva vi verra chiesto di confermare la connessione che avete e come volete configurarla (sta foto fa schifo ndZ)

[ ![BerryBoot Connessione](/img/multiboot3.png) ](/img/multiboot3.png)

A questo punto vi verra chiesto di formattare la scheda per far partire l'installazione

Scegliete mmcblk0, che è la SD card, e aspettate la fine della formattazione

[ ![BerryBoot Format SD](/img/multiboot4.jpg) ](/img/multiboot4.jpg)

Una volta terminata, vi verra presentata la schermata di selezione del sistema operativo

[ ![BerryBoot Select OS](/img/multiboot5.jpg) ](/img/multiboot5.jpg)

Se andate su **Add OS**, potrete installare sistemi opeativi con cui vorrete cimentarvi

Vi suggerisco **Raspios**

Se volete altri sistemi operativi, potete scaricarli dal loro sito e poi procedere con la conversione in un formato compatibile con BerryBoot, ad esempio:

* **Kali**

  Chi non vuole essere Neo o Elliot,  Mr Robot o Darlene per le signorine ( chi non lo conosce non merita di scaricare Kali)

* **Retropie**

  Preparate un joystick usb, oppure quelli della Xbox o PS4, e tornate ad essere bambini giocando a fantastici giochi della vostra infanzia o della infanzia dei vostri papà

* **Octoprint**

  Questa immagine non esiste ufficialmente, ma la potete scaricare e trasformare il vostro raspberry in un server di stampa fenomenale ( altre info le trovate qui)

Per questo tutorial, scarichiamo RaspiOS, vedremo per gli altri piu avanti

## Avvio

Dopo avere scelto il sistema operativo da installare, completate la procedura di installazione e, dopo il riavvio, potrete scegliere fra tanti, ma uno alla volta

Per usare un sistema operativo customizzato da noi dovete tenere premuto il tasto su **Add Os**. Verrà fuori la funzione **Copy OS from USB Stick**

[ ![BerryBoot Copy OS from USB Stick](/img/multiboot6.jpg) ](/img/multiboot6.jpg)

Troverete delle versioni customizzate per essere usate su BerryBoot nell'area apposita

Le versioni fino ad ora pronte sono:

* [Octopint](https://www.dropbox.com/sh/ix1wvrs30j5ztcm/AAD1cI80owdBObkl2RpwGh0pa/raspberry_pi_multiboot_images/octoprint0.18.img?dl=0)

* [RetroPie](https://www.dropbox.com/sh/ix1wvrs30j5ztcm/AADsh5eRcQIXhRoiJU4X1WHPa/raspberry_pi_multiboot_images/retropie-converted.img?dl=0)

* [Kali](https://www.dropbox.com/sh/ix1wvrs30j5ztcm/AAA3N7HxR0At0_PHf5sSediVa/raspberry_pi_multiboot_images/kali.img?dl=0)

Per ora la guida è terminata, se avete dubbi o suggerimenti siete pregati di inviarli
