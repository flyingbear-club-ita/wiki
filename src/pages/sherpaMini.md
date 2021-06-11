---
title: Sherpa Mini
slug: /sherpamini
---
# Sherpa Mini

[![](/img/sherpaMini1.jpg)](/img/sherpaMini1.jpg)

## Dove scaricare il progetto
[https://www.thingiverse.com/thing:4878543](https://www.thingiverse.com/thing:4878543)


## Descrizione
Con questo progetto puoi trasformare la tua ghost da bowden in direct drive rendendola una bomba!

Ciò è possibile grazie all’utilizzo del progetto “sherpa mini” e ad un mount/adattatore disegnato da [Rodrigoson](https://www.thingiverse.com/Rodrigoson6), **autore di questa guida**

Estrusore ed adattore pesano, in totale, solo 121g!

Il beneficio di avere meno peso sulla testa consiste nel poter stampare piu' velocemente, sia per questioni di inerzia (e' piu' facile accelerare e frenare), sia in termini di ritrazione (piu' corte grazie al direct), mantenendo sempre una elevata qualita' di stampa

Inoltre, lo sherpa ha una coppia assurda, quindi avrete anche miglior controllo sul filamento

## Per passare al direct drive

1. togliere il bowden
2. svitare la vite M3 sinistra con la quale viene fissata la cinghia al carrello
3. Montare il mount sul carrello
4. Inserire nel punto 2 una vite M3 da 3 centimetri
5. Prendere il mount (adattatore dello sherpa, che in foto è color rame) e inserire due tasselli M3 aventi le seguenti misure (4mm di altezza, 5 mm di diametro esterno)

[![](/img/sherpaMini7.jpg)](/img/sherpaMini7.jpg)

6. per inserirli nei due fori utilizzare un saldatore (poggiare la punta sul tassello/dado, questo si riscalderà e scivolerà nel foro)
7. creare un piccolo bowden da inserire tra l'uscita dello Sherpa e l'entrata dell'hotend 

[![](/img/sherpaMini8.jpg)](/img/sherpaMini8.jpg)

Deve essere lungo 7 centimetri, va inserito fino in fondo all'hotend (quindi fate molta attenzione) mentre la porzione che esce va inserita nello sherpa. Alla base dello sherpa mini c'è un piccolo foro esagonale nel quale si incastra il bowden. La lunghezza del bowden di 7 centimetri è corretta solo per l'hotend stock (originale). Se avete un hotend differente è probabilmente necessario un bowden di lunghezza differente
8. mettere il fermo per tenere bloccato il tubicino bowden (a me è di colore blu perchè usò il Capricorn il quale da' meno problemi rispetto al bowden bianco originale)
9. inserire lo sherpa sul mount (adattatore), avvitare le due viti che andranno nei due tasselli
Mi raccomando non stringete troppo altrimenti i tasselli/dadi se ne vengono via
N.B: per fissare lo sherpa rimuovete un attimo la vite con la molla (quella che serve a far pressione sul filamento)
10. ora inserite il filamento, inserire la vite con la molla e stringete (non troppo eh !)

## Come montare lo Sherpa Mini

[Guida in formato pdf](https://github.com/Annex-Engineering/Sherpa_Mini-Extruder/blob/master/Build_Instructions/Sherpa_Mini_Assembly_Guide_r2.pdf)

[Video](https://www.youtube.com/watch?v=wRGUo1Vt49k)

:::caution
* L'albero della ruota bianca va tagliato di 1 millimetro (dalla parte corta !) e per far ciò potete stampare un [tool in Pla](https://github.com/Annex-Engineering/Sherpa_Mini-Extruder/tree/master/Assembly_Tools/Shaft_Grinding_Tool) nel quale inserire la ruota con l'albero, chiudete tutto con le viti e tagliate

[![](/img/sherpaMini2.jpg)](/img/sherpaMini2.jpg)

* Fate attenzione al grano che serve a fissare l'ingranaggio BMG sull'albero: stringete bene, altrimenti avrete problemi!
* Prima di fissare lo sherpa al mount, assicurarsi che il filamento scorra bene (cioè che si muovano tutti gli ingranaggi)
:::

## Collegamenti elettrici

Il motore utilizzato per lo sherpa mini (Nema 14 Ldo) ha un connettore di tipo Dupont femmina a 4 pin

I cavi sono dei seguenti colori: verde, blu, rosso, giallo

Voi dovete collegare questo connettore al connettore del cavetto che è attualmente è collegato al motore dell'estrusore della stampante (il motore che sta dietro il feeder trasparente). Il connettore del motore dell'estrusore della stampante è di tipo JST-PH 2.0 a 6 pin (i cavi sono comunque 4 e sulla ghost 5 sono tutti neri)
::tip
Puoi fare come me e comprare una prolunga, cioè un cavo Dupont maschio-femmina a 4 pin da AWG 24. Compra anche una crimpatrice che possa crimpare connettori JST-PH 2.0
:::
2) taglia il connettore dupont femmina della prolunga, spela i vavi e con una crimpatrice inserisci i connettori JST-PH 2.0

I collegamenti tra motore sherpa e connettore JST della stampante sono:
* Rosso --> pin1
* Verde --> pin3 
* Giall--> pin4 
* Blu --> Pin6

:::caution
Questi colori si riferiscono ai cavi che escono del motore, non dalla prolunga!
:::

Nel mio caso, la prolunga ha i seguenti colori: Bianco, Giallo, Verde, Rosso

Se avete una prolunga con gli stessi colori, i collegamenti sono cosi:

| Motore | Prolunga | Connettore |
| ------ | -------- | ---------- |
|  Blu   | Rosso    |   Pin 6    |
| Giallo | Bianco   |   Pin 4    |
| Verde  | Giallo   |   Pin 3    |
| Rosso  | Verde    |   Pin 1    |


La linguetta del connettore jst deve essere verso l'alto e i collegamenti iniziano a partire dal basso

:::caution
* guarda attentamente come è posizionato il connettore JST-PH 2.0 della stampante (quello che in origine era collegato al motore dell'estrusore)

* rispetta l'ordine dei collegamenti
:::

## Firmware

1. devi modificare la vref. Se hai un driver TMC2209, inserisci una vref tra 0.42 e 0.49 (Io ho impostato la vref a 0.479)
2. nel firmware originale devi modificare alcune linee di codice e sostituirle con queste:

```
INVERT_E0_DIR 1
DEFAULT_E0_STEPS_PER_UNIT 701
DEFAULT_E0_MAX_FEEDRATE 70 #E-axis default speed (mm/s)
DEFAULT_E0_MAX_ACCELERATION 1500 #E-axis default maximum acceleration (change/s) change = mm/s
DEFAULT_ACCELERATION 2000 #X,Y,Z,E The default acceleration when printing
DEFAULT_RETRACT_ACCELERATION 1000 #X,Y,Z,E Retraction default acceleration
DEFAULT_TRAVEL_ACCELERATION 2000 #X,Y,Z The default addition when not printing
DEFAULT_MINIMUMFEEDRATE 0.0 #Default minimum speed
DEFAULT_MINSEGMENTTIME 20000 #When the buffer is empty, the minimum time required for a move (unit: ms).
DEFAULT_MINTRAVELFEEDRATE 0.0 #
DEFAULT_EJERK 5.0 #Default E axis Jerk (mm/s)
```

Mi raccomando, non inserire queste linee di codice “ad minghiam” ma ognuno al suo posto

Non c’è nulla di nuovo, cambiano solo i valori. Tutto ciò che sta dopo “#” è un commento

## Valori Ritrazione

Ho inserito su Cura 4.8 una velocità di 40mm/s e una distanza di 0.6 mm, ma e' sempre consigliato fare dei test per trovare il settaggio perfetto, partendo da valori bassi (35mm/s e 0.4mm)

Non è necessario calibrare gli step/mm dell'estrusore

## LISTA DELLA SPESA

* [Motore LDO NEMA 14 36mm rotondo pancake motore LDO-36STH17-1004AHG/LDO-36STH20-1004AHG](https://it.aliexpress.com/item/4001346055973.html?spm=a2g0s.9042311.0.0.27424c4dW9i6zN)
* [Ingranaggi BMG](https://it.aliexpress.com/item/4000021186440.html?spm=a2g0s.9042311.0.0.27424c4dg7DpTW)
* [Prolunga Dupont 4 pin 24 AWG](https://it.aliexpress.com/item/4000272308899.html?spm=a2g0s.9042311.0.0.27424c4dg7DpTW)
* [Crimpatrice JST PH 2.0](https://it.aliexpress.com/item/1005001564937815.html?spm=a2g0s.9042311.0.0.27424c4dg7DpTW)
* [Tasselli/dadi da affogare a caldo nel mount e nello sherpa](https://www.amazon.it/gp/product/B08WLQKDZH/ref=ppx_yo_dt_b_asin_title_o01_s00?ie=UTF8&psc=1)
* [Viti M3 per lo sherpa](https://www.amazon.it/gp/product/B075RCRVH2/ref=ppx_yo_dt_b_asin_title_o01_s00?ie=UTF8&psc=1)
* Vite M3 da 3 centimetri

:::info
Su aliexpress ci sono alcuni venditori dai quali acquistare lo sherpa mini gia fatto, cioe' parti stampate, viti e motore
:::

## Consigli per la stampa dei componenti

**mount**

Potete stamparlo anche in PLA (layer 0.2mm e 50% di riempimento)

**sherpa mini**

stampatelo in ABS

[Qui](https://github.com/Annex-Engineering/Sherpa_Mini-Extruder/tree/master/STLs/FDM_STLs) trovate i file stl dello sherpa
