---
title: Introduzione al Raspberry
slug: /raspberry/introduzione
---

**Autore: Nick_it**

La mia idea di wiki non è scopiazzare  in giro 4 informazioni per il neofita, ma creare un punto dove potere andare a confrontare le proprie idee con quelle di altri 
in relazione di alcune argomentazioni

Si, il neofita userà le guide per risolvere i propri problemi, ma dopo si scorderà di questa area, e io vorrei evitare questo

Invece la mia idea (in realtà è di tutti quelli del nostro gruppo ), è quella di farla crescere, anche con il vostro aiuto, vostri suggerimenti e vostre correzioni

In questa guida parleremo di come scegliere la miglior Raspberry Pi in relazione a cosa volete fare, a come installare il sistema operativo e il software di gestione 
della stampante ( octoprint, repetier server o klipper)

Dopo passeremo ai plug in per migliorare la gestione della stampante, e, mia idea, espandere l'uso del raspberry con argomenti non direttamente collegati alla stampa
3d, come vpn server dal raspberry, controllo di un rilevatore di fumo con spegnimento automatico della stampante, oppure tutto quello che vi puo venire in mente

Visto che mi devo guadagnare la pagnotta e pagare i miei innumerevoli vizi, non aspettatevi un nuovo contributo al giorno, ma aggiornamenti regolari e spesso si

## Un po' di storia

Prima di parlare di raspberry, vorrei dire 2 parole su quello che secondo me ha dato ispirazione al raspberry, cioè il progetto arduino

Lo so, non sono direttamente in concorrenza, e, se volessimo dirla tutta, potrebbero lavorare assieme (come, ad esempio, nel caso della raspberry e stampanti 3D), ma il concetto alla base della nascita del progetto Arduino e' che ha piantato il seme per la nascita del progetto Raspberry

Per chi è curioso (e se siete qui lo dovete essere di natura), spiegherò poi brevemente le differenze e gli usi delle due schede in questione

Le prime concezioni del Raspberry Pi (il nome raspberry, cioè lampone, riprende l'idea di grandi società di informatica che utilizzavano nei loro loghi e nomi frutti, mentre PI vuol fare riferimento a python, perché l'idea iniziare era di includere un interprete python), sono datate 2006 e si basavano sul micro controllore ATMEGA644 ( usando come punto di partenza la scheda arduino uscita l'anno prima), ma si decise di creare un microcomputer all in one invece di usare un semplice micro controllore, e  si costituì un gruppo di insegnanti, accademici e appassionati di computer per concepire un oggetto capace di incoraggiare i bambini, fornendo  loro know-how e ispirazione

Questo perché nella nuova idea che stava prendendo forma si voleva creare un computer a basso costo per dare uno strumento che potesse essere usato nelle scuole e dare un prodotto per accedere al mondo informatico con un costo accessibile a tutti. Infatti, sin dalla nascita, ci fu l'inclusione di una porta HDMI, una porta video composito (per usare il televisore di casa analogico, ricordatevi che siamo nei primi anni 2000) e le periferiche usb stavano prendendo campo per la connessione di tastiera e mouse

Raspberry Pi come la conosciamo oggi  nasce ufficialmente nella seconda metà del 2011. Nell'agosto di quell'anno, infatti, furono realizzate e presentato al pubblico le prime dieci schede prototipo

Il 19 febbraio 2012 la Raspberry Foundation mise a disposizione un proof of concept di un'immagine disco caricabile su SD Card per produrre un sistema operativo preliminare. L'immagine si basava su Debian 6.0 (quanti bei ricordi!!! L'iso era soprannominata  **Squeeze**,  con vari brower utility e strumenti di programmazione)

Vista la scarsita di schede raspberry  sul mercato, a causa dell'enorme successo del progetto e per prendere confidenza con il sistema, l'immagine  poteva anche girare sull'emulatore QEMU, permettendo di emulare Raspberry Pi su varie altre piattaforme

Nel luglio del 2012 la Raspberry Pi Foundation promosse lo sviluppo di una particolare versione di Raspbian chiamata **RetroPie** dedicata al retrogaming ( che bei ricordi!), poiché includeva diversi emulatori che giravano sotto linux di varie console ed home computer

La fondazione rilasciò nel 2016 altre versioni derivate da famose distribuzioni linux dell'epoca, e  nello stesso anno venne prodotto un sistema operativo basato su Debian, che venne poi chiamato Raspbian e che viene usato per la maggiore ancora adesso, perché l'unico supportato direttamente dalla Raspberry Pi Foundation

:::info
Crediti

Wikipedia, Raspberry foundation, chiacchere da bar ( non i bar che pensate voi)
:::

## Versioni della Raspberry PI

Ad oggi siamo arrivati alla versione 4 dell'hardware, ma in passato le versioni precedenti erano diversificate da modello A e modello B

Ulteriori informazioni verranno aggiunte piu' tardi


## Perché usare una Raspberry Pi

Una delle cose che più si desidera una volta presa dimestichezza con la propria stampante 3d è quella di pilotarla da remoto, grazie a diversi software molto potenti e al tempo stesso facili da usare e free

Stiamo parlando di **OctoPrint** e **Repetier Host**, che consentono di pilotare da remoto la propria stampante, gestendo una moltitudine di parametri. Di seguito vedremo come installarli e l'uso sia del programma che dei relativi plug-in con raspberry, per avere un sistema che, tramite un’interfaccia web su computer, o telefonino, magari anche via Internet, ci permetta di **gestire e monitorare i processi di stampa**, lo slicer e visualizzare con una webcam tutto ciò che sta accadendo sul piatto di stampa e dintorni, oppure spegnere la stampante da remoto. 

Essendo Raspberry un vero computer, non siete limitati solo a queste operazioni, ma vi si aprirà un mondo di soluzioni dove potrete utilizzare il vostro raspberry

## Cosa è Octoprint

OctoPrint è il principale e più diffuso **software open-source per il controllo remoto dei processi di stampa**, programmato in Phyton

Ciò che la rendo così famoso e diffuso è di certo il fatto che è **totalmente free**. OctoPrint è infatti un software totalmente open source e totalmente scalabile, grazie alla presenza di un sistema di plugins, ed è anche stabile e sicuro

Per maggiori approfondimenti, vi suggerisco di guardare l'area Plugins ((Work in progress), dove troverete quelli consigliati da noi e come configurarli

Tutte queste caratteristiche lo rendono lo strumento ideale per elevare il livello del nostro setup ed aggiungere la possibilità di controllo remoto a tutte quelle stampante che ne sono prive

## Come funziona Octoprint

OctoPrint **invia via USB alla stampante una serie di comandi** per gestire la stampa e riceve continuamente feedback sullo stato del processo: invece di caricare il nostro gcode su una scheda di memoria e inserirla nella stampante, adesso possiamo gestire il tutto da remoto, e addirittura integrare l’intero sistema con Cura, Ideamaker, Prusa Slicer e diversi client per comunicare con la stampante dal cellulare via Internet
