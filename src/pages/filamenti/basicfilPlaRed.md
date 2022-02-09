---
title: Basicfil PLA - Review
slug: /filamenti/basicfilPlaRed
hide_table_of_contents: true
description: Test di stampa e recensione filamento Basicfil PLA, bobine da 500g, colori rosso, giallo, verde, arancione
keywords: ["3d printing", "flying bear", "flyingbear", "flying bear ghost", "flyingbear ghost", "flyingbear ghost 5", "flying bear ghost 5", "stampa 3d", "bltouch", "bl touch", "3d touch", "artillery genius", "eryone er-20"]
---

import Tabs from '@theme/Tabs';

import TabItem from '@theme/TabItem';

import DisplayAd from '../../../src/components/displayAd';

## Basicfil PLA Red

**Autore: ZeroPX**

Per me, lo spazio e' sempre un problema: avere un sacco di bobine ingombranti da 1Kg potrebbe tranquillamente generare discussioni che, inevitabilmente, porterebbero al divorzio

In casa vigeva un tacito accordo per mantenere la pace: una bobina finita, una nuova in arrivo

Questo pero' voleva dire che il numero di colori con i quali stampare i miei adorati gattini si e' sempre limitato a rimanere sotto alla doppia cifra

Quando ho trovato le bobine della Basicfil da 500g, sono impazzito: piu' o meno con lo spazio di una bobina da 1Kg, potevo raddoppiare il numero dei colori a disposizione!

Mi ci sono subito fiondato!!!

Ma come si stampa questo PLA della Basicfil??? Il gioco vale la candela??? 500g stanno intorno ai 13 euro, che vuol dire 26 euro al chilogrammo, un bel po' di piu' dei prezzi di sunlu ed eryone (salvo sconti e promozioni...), nemmeno comparabile ai 10 euro al chilogrammo per acquisti in massa di filamento GST3D

Bhe, ovviamente potreste credere alla mia parola, pero' forse e' sempre meglio andare a guardarsi un po' di test, per avere dei riferimenti oggettivi da commentare

## Temp Tower
Per il test della temperatura, abbiamo usato il seguente modello:

[Temp Tower Clip](https://www.thingiverse.com/thing:3547428)

Nella fotografia qui sotto potete vedere i risultati (mettere anche la foto della temp tower da dietro, possibilmente a fianco di quella davanti)


<!-- [![Basicfil PLA Red - Temp Tower](/img/filamenti/basicfil/plaRed/tempTower1.webp)](/img/filamenti/basicfil/plaRed/tempTower1.webp) -->

<div style={{margin:"10px"}}>
<a href="/img/filamenti/basicfil/plaRed/tempTower1.webp" target="_blank">
    <img style={{float: "left", marginRight: "30px", height:"100%"}} src="/img/filamenti/basicfil/plaRed/tempTower1.webp"/>
</a>

La temp tower ci mostra che questo filamento si comporta abbastanza bene in tutto il range delle temperature fornite (220-190):

- bridging abbastanza solido, anche alle temperature piu' alte 
- un po' di problemi con gli overhang alle temperature piu' elevate, che poi quasi scompaiono intorno ai 200 gradi, fino ad arrivare alla temperatura ottimale di 195 gradi, che presenta zero imperfezioni
- stringing presente fino a 210 gradi, che pero' non si presenta piu' dalla temperatura successiva, 205 gradi

</div>

<div style={{clear:"both"}}/>

:::tip La temperatura migliore
La temperatura ottimale per questo filamento sembra essere **195 gradi**: niente stringing con una distanza di ritrazione di 5mm e velocita' di 50mm/s (questi parametri me li sono portati da un profilo precedente, funzionano bene, pero', per ottimizzare la ritrazione, andrebbe fatto un test per lo stringing - forse ce lo aggiungo in un'altra sezione)
:::

Adesso che abbiamo stabilito la temperatura ottimale, andiamo ad effettuare il test del flusso

## Flusso

Il test e' stato effettuato usando questo progetto su thingiverse:

[Flow Test](https://www.thingiverse.com/thing:3397997)

Consiste nello stampare quattro pareti di un cubo, senza parte inferiore ne' superiore, per vedere la precisione della stampante nel depositare le linee

Il modello e' disegnato per contorni di due righe, quindi il valore atteso, con un nozzle da 0.4mm (quello di default della stragrande maggioranza delle stampanti, dalla Flyingbear Ghost alla artillery, passando per le FlSun), sara', per ciascuna parete, 0.8mm

Qui sono stato veramente colpito dal risultato, pero', invece di stare qui a blaterare, preferisco farvi vedere i risultati:

Primo Lato  | Secondo Lato | Terzo Lato  | Quarto Lato  
:----------:|:------------:|:-----------:|:------------:
[![](/img/filamenti/basicfil/plaRed/flow1.jpg)](/img/filamenti/basicfil/plaRed/flow1.jpg)|  [![](/img/filamenti/basicfil/plaRed/flow2.jpg)](/img/filamenti/basicfil/plaRed/flow2.jpg)|  [![](/img/filamenti/basicfil/plaRed/flow3.jpg)](/img/filamenti/basicfil/plaRed/flow3.jpg)|  [![](/img/filamenti/basicfil/plaRed/flow4.jpg)](/img/filamenti/basicfil/plaRed/flow4.jpg)

**IN-CRE-DI-BI-LE!!!**

Il test della calibrazione del flusso e' stato effettuato con il flusso al 100%, senza toccarlo ho ottenuto risultati quasi perfetti (uno scarto di 0.01mm non lo considero nemmeno...)

Questa e' la prima volta che mi capita un risultato del genere, sintomo di filamento omogeneo e ben arrotolato

### Lo stress test: la benchy

Per analizzare come si comporta il filamento con una stampa un po' piu' complessa, abbiamo deciso di prendere in esame la famosa barchetta, la [3dBenchy](https://www.thingiverse.com/thing:763622)

Questa barchetta rappresenta una ottima stampa di test perche' e' stata disegnata tenendo a mente tutte le caratteristiche che interessano in una stampa

Andiamo a vederle una per una


### Chiglia

La chiglia della benchy e' una ampia superficie liscia, con un angolo a sbalzo che, in alcuni punti, raggiunge i 45 gradi di inclinazione, che rappresentano il punto critico per stampare parti senza supporti

La chiglia e' importante per determinare se:
- le cinghie sono ben tese
- il flusso e' calibrato bene, sia nelle superfici liscie che negli angoli a sbalzo
- la ventilazione e' sufficiente a raffreddare il filamento, particolarmente negli angoli a sbalzo

A parte alcune sbavature, probabilmente dovute piu' ad un problema di slicer che del filamento o della stampante, il pla red della basicfil si e' comportato molto bene

Innanzitutto, con il flusso calibrato al 100%, non si nota alcun problema negli angoli a 45 gradi. Qualora ci fossero problemi, si noterebbe del filamento pendente, come in figura (mettere la figura della benchy di qualcuno della community, ricordarsi di dare credito)

### La cabina

La cabina e' importante per capire quanto stringing ci possa essere: e' composta da quattro colonnine, piu' o meno equidistanti, per cui, durante la stampa, finito lo strato di una colonnina, ci deve essere una ritrazione ed un viaggio, superiore ai limiti standard della maggior parte degli slicer, che equivale a 1.5mm (nel mio profilo, il parametro Minimal Travel of Retraction e' impostato a questo valore. Attenzione: questo e' il nome del parametro in ideamaker, in cura si chiama bla bla bla, in superslicer ble ble ble)

Il risultato e' ottimo: non c'e' traccia di stringing ne' di altri artefatti (tipo filetti che sporgono dalle pareti esterne), come blob

(inserire immagine qui)


### Il fondo
Il fondo e' essenziale per individuare problemi di livellamento: troppo distante, le linee saranno molto visibili; troppo schiacciato, le lettere non saranno nitide

Putroppo il piatto in PEI non consente di apprezzare in pieno il livellamento perfetto (ottenuto principalmente grazie all'ausilio del bltouch...), ma possiamo vedere che non c'e' separazione tra le linee e la scritta sul fondo e' facilmente leggibile, anche nei punti piu' piccoli

(inserire immagine qui)

### Superfici
parlare dei top layer, menzionare che le strisce sono frutto dello zhop non attivato, ma tanto sti cazzi dello zhop

### Forma dei buchi

### Accuratezza dimensionale

Un sacco di foto con i paragoni con i valori attesi


## Dove comprare questo filamento



## Configurazione

Questi test sono stati effettuati con la seguente configurazione


Macchina: Flyingbear Ghost 4s

Estrusore: Clone BMG Dual Driver Trianglelab

PTFE: Clone Capricorn Trianglelab

Superficie: Piatto in PEI ruvido

BL Touch: si

Testa: Doppia ventola, hotend trianglelab (nozzle compreso)

Firmware: Marlin

magari devo pensare ad un bel formato visivo per la configurazione