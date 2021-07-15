---
title: Multiboot con Raspberry
slug: /raspberry/multiboot
---

## Premessa

Non tutti vogliono spendere dei soldi per acquistare un raspberry, le solite motivazioni sono:

- Ma io non lascio mai la stampa incustodita, sono sempre in casa quando stampo
- Ma io ho già il computer, perché ne devo prendere un altro
- Ma io ..... Ma io

E se vi dicessi che una volta acquistato il raspberry lo potreste usare per più lavori?

E la cosa bella e' che non dovrete avere una micro SD per ogni sistema operativo diverso, ma, con una sola micro SD, potrete avere il vostro bel octoprint, oppure un emulatore di Commodore 64, o di tutti i vecchi video game di una volta, e vi assicuro sono sempre i migliori

Un'altra buona idea sarebbe quella di creare la funzionalità NAS sul raspberry, in accoppiata con octoprint oppure stand alone, se ci interessa non avere sempre questa funzionalità (vedremo in futuro come fare, cosi' da poter scaricare su chiavetta USB o hard disk esterno i nostri lavori in 3D, oppure le registrazioni di una telecamera in casa)

Inoltre, se voleste fare prove su Linux, ma avete paura di metterci mano, ecco che potete crearvi una copia del vostro sistema operativo Linux preferito, sempre stesso hardware, stessa micro SD, ma un ambiente Linux diverso dove sbizzarrirvi

Oggi parleremo di creare una memoria **Multi-Boot**, dove siete voi a scegliere cosa deve fare il vostro Raspberry all'accensione (non scegliendo nulla, partirà il sistema operativo di default **è  Octoprint, vero????**

## Materiale Occorrente

* Raspberry PI 3B oppure 4
* Tastiera e mouse usb
* Joystick (che volete giocare con la tastiera???)
* micro sd da 64 Giga (i giochi occupano spazio, e, se non sono i giochi, i vari sistemi operativi che potrete installare tipo Ubuntu, Kali ( a qualcuno è venuto in mente Mr. Robot ?), oppure un mediaplayer)
* Raspberry PI Imager (https://www.raspberrypi.org/software/)
* Tanta santa pazienza: i vari sistemi operativi devono essere scaricati e sono voluminosi, ci vorrà tempo

## Iniziamo

Da come avrete capito dal materiale occorrente andremo a parlare di  BerryBoot. Esistono anche altre soluzioni, ma, dopo le prove effettuate, ho reputato questo il migliore per semplicità e per creazioni di nuove immagini customizzate

D'altronde, se fossimo tutti esperti, le guide non servirebbero

BarryBoot è un bootloader, piuttosto che un installatore. Questa leggera differenza significa che è ottimizzato per lanciare più sistemi operativi

BerryBoot richiede di scaricare un file, utilizzare Raspberry PI Imager per copiarla su una scheda SD formattata

Per la installazione dei nuovi sistemi operativi, dovrai assicurarti che il tuo Raspberry Pi sia online per scaricare i sistemi operativi scelti, oppure collegare una penna usb, formattata in FAT 32, con l'immagine che vorrai caricare

:::caution
Le immagini di cui parlo non sono le solite immagini che trovate online, devono essere trattata prima di poterle installare, per questo ho gia creato una immagine customizzata di Octoprint, da utilizzare immediatamente

Se vi interessa sapere come si creano le immagini fatecelo sapere
:::

Ma per darvi un aiutino, dovete scegliere **Use custom** 

[![](/img/multiboot1.png)](/img/multiboot1.png)

Appena creata l'immagine sulla vostra SD, inseritela nel raspberry, collegatela ad un mouse, una tastiera e un monitor e accendete il tutto

La prima schermata che troverete sarà questa:

[![](/img/multiboot2.jpg)](/img/multiboot2.jpg)


Scegliete **Wifi**, oppure **Wired**, e, se ci sono problemi di schermo, scegliete **Enable overscan**, oppure **Disable overscan**

Se scegliete wifi, il sistema farà una veloce scansione delle reti Wifi disponibili e vi chiederà a quale collegarvi 

:::tip
E' importante che scegliate la giusta **Wifi Country**, non perché non vada, ma perché alcune nazioni usano frequenze e potenze che in Italia non sono presenti, oltre al fatto che non potete usarle perché il vostro Router non le usa
:::

Configurate anche la tastiera, quasi certamente metterete IT

L'ultima riga, serve per controllare se il settaggio della tastiera è giusto, provate se volete essere certi che la tastiera sia configurata correttamente

Nella schermata successiva vi verra chiesto di confermare la connessione che avete, e come volete configurarla

[![](/img/multiboot3.png)](/img/multiboot3.png)

A questo punto, vi verra chiesto di formattare la scheda per far partire la installazione

[![](/img/multiboot4.jpg)](/img/multiboot4.jpg)

Scegliete **mmcblk0**, che è la vostra micro SD, e aspettate la fine della formattazione

A questo punto vi verra la schermata successiva,

![muo-diy-raspberrypi-berryboot-selectos-1](C:\Users\nk\Desktop\wiki\wiki\Multiboot\images\muo-diy-raspberrypi-berryboot-selectos-1.jpg)



Se andate su Add OS potrete installare i vostri sistemi opeativi con cui vorrete cimentarvi,

vi suggerisco questi:

- Raspios

  Se volete altri sistemi operativi potete scaricarli dal loro sito e poi procedere con la conversione in un formato compatibile con BarryBoot

  Ad esempio:

  

- Kali

  Chi non vuole essere Neo o Elliot,  Mr Robot o Darlin per le signorine ( chi non lo sa non merita di scaricare Kali)

- Retropie Preparate un joistick usb oppure quelli della Xbox e PS4 vanno piu che bene e tornate ad essere bambini giocando a fantastici giochi della vostra infanzia o della infanzia dei vostri papà

- Octoprint: questa immagine non esiste ufficialmente, ma la potete scaricare qui e trasformate il vostro raspberry in un server di stampa fenomenale ( altre info le trovate qui).

  Per oora scarichiamo RaspiOS, vedremo per gli altri piu avanti.

  

Dopo avere scelto il sistema operativo da installare, fatelo installare ,e dopo il riavvio  ne potrete scegliere tanti ma uno alla volta.

Per Usare un sistema operativo customizzato da noi dovete tenere premuto il tasto su **Add Os**, e verrà fuori la  funzione *Copy OS from USB Stick*

![IMG_7027](C:\Users\nk\Desktop\foto\IMG_7027.jpg)





Troverete delle versioni customizzate per essere usate su BarryBoot nell'area apposita.

Le versioni fino ad ora pronte sono:

Octopint

RetroPie

Kali.



Per ora la guida è terminata, se avete dubbi o suggerimenti siete pregati di inviarli.

Grazie.








