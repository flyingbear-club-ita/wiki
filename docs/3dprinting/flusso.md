---
title: Calibrazione Flusso
slug: /3dprinting/flusso
---

Calibrare il flusso e' importante per non andare fuori di testa quando si cercano i parametri ottimali per un nuovo filamento, quello col quale tutti stampano da dio, ma a te viene una mezza schifezza

Questo tipo di calibrazione viene fatta per trovare la corretta percentuale di materiale da estrudere, consente di rimuovere imperfezioni come blob (sovra estrusione) o buchi (sotto estrusione), oltre ad aumentare la qualita' delle zone con overhang molto vicino al limite prima di dover per forza utilizzare supporti (45 gradi)

Il test che consigliamo di utilizzare si puo' trovare facilmente su thingiverse

[Test Flusso](https://www.thingiverse.com/thing:3397997)

Questo test stampa solo quattro pareti, con due perimetri ciascuna

Una volta scaricato, aprite lo slicer che usate e caricate il file per il vostro ugello (esempio: per un ugello da 0.4, caricare 35x35_0.4mm_nozzle_flowrate_calibration.stl), poi cercate il parametro "line width" (larghezza della linea), o qualcosa di simile, nel vostro slicer preferito

Questo parametro determina la larghezza della linea estrusa dall'ugello (che puo' essere piu' grande o piu' piccola del diametro dell'ugello stesso)

Nell'esempio qui sotto, abbiamo settato una larghezza della linea di 0.4mm (solitamente questo e' il valore di default di tutti gli slicer per un ugello 0.4) 

Il secondo parametro importante e' il numero dei perimetri, che va settato a 2 (anche se non ce ne sarebbe bisogno: le pareti sono troppo sottili per avere piu' di due strati)

Il terzo parametro e' il flusso, che settiamo al valore di default, 100%

La temperatura scelta per questo test e' la piu' bassa tra quelle indicate dal fornitore, in questo caso 190 gradi

Adesso un po' di calcoli:

Moltiplicando la larghezza della linea per il numero dei perimetri, si ottiene uno spessore di 0.8mm, che e' il nostro valore atteso per lo spessore delle pareti stampate

Stampate il file, il risultato sara' come in figura

[ ![Prima stampa calcolo flusso](/img/primaStampaFlow.jpg) ](/img/primaStampaFlow.jpg)



Per trovare il valore corretto del flusso, bisogna prima misurare, col calibro con divisione 0.01, gli ultimi strati delle pareti, nel mezzo, una alla volta, come nelle figure


Primo Lato  | Secondo Lato | Terzo Lato  | Quarto Lato  
:----------:|:------------:|:-----------:|:------------:
[![](/img/beforeCalib1.jpg)](/img/beforeCalib1.jpg)|  [![](/img/beforeCalib2.jpg)](/img/beforeCalib2.jpg)|  [![](/img/beforeCalib3.jpg)](/img/beforeCalib3.jpg)|  [![](/img/beforeCalib4.jpg)](/img/beforeCalib4.jpg)



Come possiamo vedere, sono tutte completamente sballate.

Facciamo la media dei valori:

(0.90 + 0.90 + 0.88 + 0.91)/4 = 3.59/4 = 0.8975

Poi usiamo la seguente formula:

(valore atteso / valore medio misurato) * %flusso

Dalla quale troveremo:

(0.8 / 0.8975) * 100 = 0.8913 => il valore ottimale per il flusso e' 89%

Adesso ristampiamo il test coi parametri aggiornati e andiamo a misurare lo spessore delle pareti

[![](/img/afterCalib1.jpg)](/img/afterCalib1.jpg)
Primo Lato  | Secondo Lato | Terzo Lato  | Quarto Lato  
:----------:|:------------:|:-----------:|:------------:
[![](/img/afterCalib1.jpg)](/img/afterCalib1.jpg)  |  [![](/img/afterCalib2.jpg)](/img/afterCalib2.jpg)  | [![](/img/afterCalib3.jpg)](/img/afterCalib3.jpg)  |  [![](/img/afterCalib4.jpg)](/img/afterCalib4.jpg)


I valori misurati sono in linea, al centesimo di millimetro, con il valore atteso, la calibrazione del flusso adesso e' completa