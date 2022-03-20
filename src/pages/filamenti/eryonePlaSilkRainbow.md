---
title: Eryone PLA Rainbow Silk - Review
slug: /filamenti/basicfilPlaRed
hide_table_of_contents: true
description: Test di stampa e recensione filamento Eryone Pla Rainbow Silk
keywords: ["3d printing", "flying bear", "flyingbear", "flying bear ghost", "flyingbear ghost", "flyingbear ghost 5", "flying bear ghost 5", "stampa 3d", "bltouch", "bl touch", "3d touch", "artillery genius", "eryone er-20", "eryone", "pla silk", "3d printing rainbow", "eryone pla silk"]
---

import Tabs from '@theme/Tabs';

import TabItem from '@theme/TabItem';

import DisplayAd from '../../../src/components/displayAd';

## Eryone PLA Rainbow Silk

**Autore: ZeroPX**

Come credo abbiate gia' capito dalle foto delle mie stampe, a me non interessa molto la stampa funzionale: preferisco molto di piu' realizzare oggetti decorativi, belli, che magari non servono a niente, ma che, quando li guardo, mi danno una sensazione di armonia e sono esteticamente piacevoli

Certo, e' bello avere un esercito di calicat tutti colorati, uno accanto all'altro, pero' nulla batte un singolo oggetto mastodontico, che risalti subito all'occhio, magari anche bello colorato

In questo caso, si potrebbe ricorrere alla postproduzione, ma io sono una capra a colorare, quindi ho deciso di cercare un'altra soluzione: un filamento che non abbia bisogno di essere colorato perche'... bhe, perche' e' gia' colorato!

I PLA rainbow sono perfetti per realizzare stampe lunghe ed esteticamente piacevoli, pero' mettetevi comodi: per realizzare una bella stampa con tanti cambiamenti di colore, dobbiamo per forza di cose scegliere modelli molto grandi, oppure aumentare di molto il riempimento, cosi' da riuscire a sfruttare tutta la porzione colorata, per poi passare a quella successiva

I filamenti Rainbow della Eryone sono tra i migliori sul mercato per quanto riguarda la lunghezza di ciascuna porzione e la varieta' di colori

Una bobina contiene 330 metri di filamento, con colori che cambiano ogni dieci metri (quindi, per una bobina intera, aspettatevi 33 cambiamenti di colore): per fare un paragone, il PLA rainbow della SUNLU cambia ogni sedici metri

La rotazione dei colori e' la seguente:

- Viola
- Rosso rame 
- Verde 
- Giallo sabbia 
- Blu porpora 
- Blu ghiaccio 
- Bronzo 
- Arancio 
- Rosso rosa 
- Viola chiaro

:::warning
Attenzione: non tutte le bobine sono fatte nella stessa maniera: alcune potrebbero cominciare da un colore, altre da un altro
:::

Sebbene il colore iniziale potrebbe non essere sempre lo stesso, quello che conta e' che la rotazione dei colori sara' sempre la stessa, consentendovi di prevedere la successione dei colori

## Dove acquistarlo
Il filamento della Eryone **Metal Lustre Silk Rainbow PLA** puo' essere acquistato su Amazon

<iframe width="120px" height="240px" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=flyingbearc0c-21&language=it_IT&o=29&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B08P4KQNKT&linkId=84ad1917bde0e7595bdf3a6f0238deff">
</iframe>

Oppure direttamente dal [sito della Eryone](https://eryone3d.com/products/metallic-silk-rainbow-pla?_pos=2&_sid=bd8f99e26&_ss=r&ref=flyingbearclub)

:::tip
usando il codice sconto **flyingbearclubita** durante il checkout dal sito della Eryone, otterrete uno **sconto del 10%** sull'acquisto di un qualsiasi filamento, tranne quelli in offerta!
:::

:::tip
Per ordini inferiori ai 35 dollari, viene applicata anche una tariffa di spedizione. Sopra ai 35 dollari, invece, la spedizione e' gratuita
:::

## Temp Tower
Per il test della temperatura, abbiamo usato il seguente modello:

[Temp Tower Clip](https://www.thingiverse.com/thing:3547428)

Nella fotografia qui sotto potete vedere i risultati, sia frontali che posteriori


Fronte  | Retro  
:----------:|:------------:
[![](/img/filamenti/eryone/rainbowSilk/eryoneRainbowTempTowerFront.webp)](/img/filamenti/eryone/rainbowSilk/eryoneRainbowTempTowerFront.webp)|  [![](/img/filamenti/eryone/rainbowSilk/eryoneRainbowTempTowerBack.webp)](/img/filamenti/eryone/rainbowSilk/eryoneRainbowTempTowerBack.webp)

La temp tower ci mostra che questo filamento si comporta molto bene a temperature piu' basse: 

- sopra ai 200 gradi si possono notare delle imperfezioni nelle superfici

- per il bridging, l'unica temperatura nella quale sembra non esserci un cedimento del materiale e' 190 gradi, con tutte le altre temperature che sembrano avere problemi con il raffreddamento 
- un po' di problemi con gli overhang alle temperature piu' elevate, che poi quasi scompaiono intorno ai 200 gradi, fino ad arrivare alla temperatura ottimale di 190 gradi, che presenta imperfezioni soltanto nell'angolo massimo di sbalzo
- Un filo di stringing rimane anche a 190 gradi, ma proveremo a ricalibrare la distanza e la velocita' di ritrazione in un test successivo


:::tip La temperatura migliore
La temperatura ottimale per questo filamento sembra essere **190 gradi**: poco stringing con una distanza di ritrazione di 5mm e velocita' di 50mm/s (questi parametri me li sono portati da un profilo precedente, funzionano bene, pero', per ottimizzare la ritrazione, andrebbe fatto un test per lo stringing - forse ce lo aggiungo in un'altra sezione); superfici uniformi; stampa degli angoli a sbalzo senza imperfezioni eclatanti
:::

Adesso che abbiamo stabilito la temperatura ottimale, andiamo ad effettuare il test del flusso

## Flusso

Il test e' stato effettuato usando questo progetto su thingiverse:

[Flow Test](https://www.thingiverse.com/thing:3397997)

Consiste nello stampare quattro pareti di un cubo, senza parte inferiore ne' superiore, per vedere la precisione della stampante nel depositare le linee

Il modello e' disegnato per contorni di due righe, quindi il valore atteso, con un nozzle da 0.4mm (quello di default della stragrande maggioranza delle stampanti, dalla Flyingbear Ghost alle Artillery, passando per le FlSun), sara', per ciascuna parete, 0.8mm

Premetto che la calibrazione del flusso e' un passo molto importante e che e' quasi sempre necessario alzarlo od abbassarlo (principalmente abbassarlo...), ma i risultati di questo test hanno dato esiti molto positivi:

Primo Lato  | Secondo Lato | Terzo Lato  | Quarto Lato  
:----------:|:------------:|:-----------:|:------------:
[![](/img/filamenti/eryone/rainbowSilk/eryoneRainbowFlow1.webp)](/img/filamenti/eryone/rainbowSilk/eryoneRainbowFlow1.webp)|  [![](/img/filamenti/eryone/rainbowSilk/eryoneRainbowFlow2.webp)](/img/filamenti/eryone/rainbowSilk/eryoneRainbowFlow2.webp)|  [![](/img/filamenti/eryone/rainbowSilk/eryoneRainbowFlow3.webp)](/img/filamenti/eryone/rainbowSilk/eryoneRainbowFlow3.webp)|  [![](/img/filamenti/eryone/rainbowSilk/eryoneRainbowFlow4.webp)](/img/filamenti/eryone/rainbowSilk/eryoneRainbowFlow4.webp)

Il test della calibrazione del flusso e' stato effettuato con il flusso al 100%, senza toccarlo ho ottenuto risultati quasi perfetti (uno scarto di 0.01mm non lo considero nemmeno...)

Un test del flusso del genere e' sintomo di filamento omogeneo e ben arrotolato, quindi il verdetto e' **PROMOSSO A PIENI VOTI!!!**

## Lo stress test: il calicat

Per analizzare come si comporta il filamento con una stampa un po' piu' complessa, abbiamo deciso di prendere in esame il mio modello preferito: il [calicat](https://www.thingiverse.com/thing:1545913)

Sebbene il modello non sembri, in apparenza, cosi' complessso, e' un ottimo banco di prova per vedere le prestazioni di un determinato profilo dello slicer associato ad un filamento


### Superfici lisce

Il calicat presenta superfici completamente lisce su tre lati su quattro. Questa caratteristica puo' essere assimilata a quella di un cubetto di calibrazione, pertanto potremo analizzare:

- la resa finale del filamento su superfici lisce
- la tensione delle cinghie
- il posizionamento della cucitura

Sebbene il calicat sia stato stampato con altezza del layer a 0.2mm, possiamo notare la brillantezza delle pareti, al netto di alcune piccole imperfezioni che comunque sono impercettibili ad occhio nudo, soprattutto su stampe piu' grandi (come potete vedere nella galleria qui sotto)


Frontale  | Destro | Posteriore  
:----------:|:------------:|:-----------:
[![](/img/filamenti/eryone/rainbowSilk/eryoneRainbowPlaSurface1.webp)](/img/filamenti/eryone/rainbowSilk/eryoneRainbowPlaSurface1.webp)|  [![](/img/filamenti/eryone/rainbowSilk/eryoneRainbowPlaSurface2.webp)](/img/filamenti/eryone/rainbowSilk/eryoneRainbowPlaSurface2.webp)|  [![](/img/filamenti/eryone/rainbowSilk/eryoneRainbowPlaSurface3.webp)](/img/filamenti/eryone/rainbowSilk/eryoneRainbowPlaSurface3.webp)

### Ritrazione
Cosi' come lo vedete, il calicat e' uscito dalla stampante: quattro filetti, quasi invisibili e comunque facili da rimuovere

Solitamente, le zone piu' colpite dallo stringing sono le gambe, lo spazio tra il corpo e la coda e le orecchie: in quei punti, il nozzle si sposta senza stampare, quindi, senza ritrazione, lascerebbe colare del filamento fuso

La giusta combinazione di temperatura, flusso e ritrazione ha prodotto risultati eccellenti, senza bisogno di alcuna postproduzione

[![Eryone PLA Rainbow Metal Lustre Silk - Retraction](/img/filamenti/eryone/rainbowSilk/eryoneRainbowPlaStringing.webp)](/img/filamenti/eryone/rainbowSilk/eryoneRainbowPlaStringing.webp)

### Overhang
Uno dei punti critici del calicat e' l'overhang della coda: un angolo a 45 gradi sempre piu' alto, che solitamente si usa per evidenziare carenze di raffreddamento

Sicuramente la doppia ventola ha influito molto, ma anche avere il flusso tarato bene e ridurre la velocita' delle superfici a 15mm/s ha aiutato ad ottenere risultati ottimi nella prima parte della coda, decenti (quindi non colanti) nella seconda meta' diagonale

:::tip
Se non avete la doppia ventola, provate a rallentare fino a 10mm/s
:::

[![Eryone PLA Rainbow Metal Lustre Silk - Overhang](/img/filamenti/eryone/rainbowSilk/eryoneRainbowPlaOverhang.webp)](/img/filamenti/eryone/rainbowSilk/eryoneRainbowPlaOverhang.webp)

### Bridging
Bridging solido, anche se su distanza limitata (parliamo di 1cm). Il filamento non ha ceduto, anzi, ha prodotto un bello strato sospeso abbastanza uniforme, che poi e' andato a costruire la base per quelli successivi

[![Eryone PLA Rainbow Metal Lustre Silk - Bridging](/img/filamenti/eryone/rainbowSilk/eryoneRainbowPlaBridging.webp)](/img/filamenti/eryone/rainbowSilk/eryoneRainbowPlaBridging.webp)

## Pezzi stampati con questo filamento


[![Eryone PLA Rainbow Metal Lustre Silk - Octopus](/img/filamenti/eryone/rainbowSilk/octopus.webp)](/img/filamenti/eryone/rainbowSilk/octopus.webp)

[STL Octopus Planter](https://www.thingiverse.com/thing:1957770)

[![Eryone PLA Rainbow Metal Lustre Silk - Unicorn](/img/filamenti/eryone/rainbowSilk/unicorn.webp)](/img/filamenti/eryone/rainbowSilk/unicorn.webp)

[STL Unicorn Holder](https://www.thingiverse.com/thing:4423957)

## Configurazione Macchina

Questi test sono stati effettuati con la seguente configurazione


- Macchina: Flyingbear Ghost 4s

- Estrusore: [Clone BMG Dual Driver Trianglelab](https://s.click.aliexpress.com/e/_ArwnG9)

- PTFE: [Clone Capricorn Trianglelab](https://s.click.aliexpress.com/e/_9Jt0dB)

- Superficie: [Piatto in PEI ruvido Energetic](https://s.click.aliexpress.com/e/_AXDwxu)

- BL Touch: si

- Testa: [Doppia ventola](https://s.click.aliexpress.com/e/_9JhKuV), [hotend trianglelab (nozzle compreso)](https://s.click.aliexpress.com/e/_ApePd3)

- Firmware: Marlin

## Configurazione Slicer

- Slicer: Ideamaker
- Temperatura Nozzle/bed: 200/60
- Velocita': 40mm/s
- Velocita' pareti (interne ed esterne): 30mm/s
- Velocita' riempimento: 60mm/s
- Accelerazione: 1000mm/s2
- Jerk: 10mm/s
- Flusso: 100%
- Velocita' Ritrazione: 50mm/s
- Distanza Ritrazione: 6.5mm
- Distanza minima per la ritrazione: 1.50mm
- Velocita' di ripartenza dopo una ritrazione: 50mm/s
- Strati solidi: 4, sia bottom che top
- Skirt: 15mm/s, due giri, 3mm di distanza
- Tempo minimo per strato: 10s
- Ventola attivata al 100% dal quarto strato
- Velocita' di bridging: 15mm/s

