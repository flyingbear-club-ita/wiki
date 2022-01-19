---
title: Parliamo di ugelli
description: Ugelli per le stampanti 3d - Larghi, stretti, fini, tozzi, chi piu' ne ha, piu' ne metta! Breve illustrazione sulle proprieta' fisiche e meccaniche degli ugelli 
slug: ugelli
authors: nick_it
tags: [flyingbear ghost, flyingbear, flying bear, flying bear ghost, stampa 3d, 3d printing, ugelli, nozzle]
image: /img/blog/ugelli/nozzle.webp
hide_table_of_contents: true
---

import DisplayAd from '../../src/components/displayAd'
import ArticleAd from '../../src/components/articleAd'

import DisqusComments from '../../src/components/disqusComments'

Prima di tutto dobbiamo capire l'importanza di un nozzle o, come si traduce in italiano, **ugello**

Consideriamo la stampante 3D come una penna,  esistono le penne da 30 centesimi, e le penne che costano centinaia di euro

Si, potrebbe essere il brand della penna a determinare il prezzo (come per ogni dispositivo), ma anche la qualità della penna stessa, e di certo una penna da 100 euro avra' una punta migliore di una da 1 euro

**Consideriamo la punta della penna l'ugello  della stampante 3D**

Esistono vari materiali con cui può essere prodotta, e più la punta è fina, più preciso sara' il tratto, ma ci vorra' di piu a colorare un'area, perche' ci vorranno piu' passaggi

Ora con questo piccolo esempio abbiamo introdotto i 2 concetti fondamentali del nozzle:
- il materiale in cui è costruito
- il diametro del foro di uscita

<!--truncate-->

## Informazioni tecniche

L'ugello (io preferisco il termine italiano invece di nozzle, ndN) è la parte meccanica della stampante 3D che estrude il filamento. Conduce l'energia termica fornita dalla cartuccia riscaldante e blocca il filamento, sciogliendolo

Sulla base di queste informazioni, si può presumere che tre caratteristiche principali siano parte integrante del design di un ugello: 
- le sue dimensioni (come vedremo più avanti esistono più modelli di nozzle come V5, V6, Volcano ad esempio) 
- il materiale (molto importante da qui si determina che materiali può estrudere e a quali temperature) 
- il diametro del foro di uscita (che determina la qualità in fatto di dettagli della stampa)

Più grande è l'ugello, maggiore è la massa e la superficie disponibile per trasferire il calore al filamento, rendendo questo processo più efficace e capace di velocita' di estrusione più elevate. La conduzione termica riguarda anche il materiale dell'ugello, poiché ogni materiale conduce energia in modo diverso in base alle sue proprietà

Infine, il diametro interno dell'ugello influisce sulla quantità di plastica estrusa al secondo, proprietà nota come flusso, che determina anche la velocita' massima di estrusione. Il diametro interno si riferisce anche alla precisione del pezzo finale: diametri più piccoli consentono di stampare strati e pareti più sottili

In sintesi, tutte e tre le caratteristiche degli ugelli possono avere un grande impatto sul tempo impiegato dalla parte per la stampa e sulla qualità dell'oggetto finale. Di solito si deve raggiungere un compromesso tra questi due fattori

Nella continuazione della guida, analizzeremo ciascuno di questi aspetti separatamente, e consiglierò degli ugelli compatibili per le stampanti più usate (cioè quelle che ho io 😁): Ghost 5, Artillery Genius pro ed Eryone er20

<DisplayAd/>

## Diametro ugello

[![scatola di ugelli](/img/blog/ugelli/Nozzle-Box.webp)](/img/blog/ugelli/Nozzle-Box.webp)

Gli ugelli delle stampanti 3D sono disponibili in diversi diametri, solitamente da 0,1 a 2,0 mm

Il diametro di un ugello determina anche la possibile altezza dello strato e quindi, indirettamente, la velocità di stampa e la qualita' della stampa stessa. I valori di altezza massima dello strato non devono superare l'80% del diametro dell'ugello, ad esempio **un ugello da 0,4 mm ha un'altezza massima dello strato consigliata di 0,32 mm**

Le formule da utilizzare per determinare la altezza massima e minima di uno strato stampato sono:

```
Altezza massima dello strato = 3/4 diametro dell'ugello

Altezza minima dello strato = 1/4 diametro dell'ugello
```

Per capire meglio come scegliere il diametro dell'ugello, una stampa molto piccola e con molti particolari preferiremmo stamparla con un foro di uscita da 0.2 mm, mentre per un pezzo grossolano, magari un portapenne cubico, potremmo usare nozzle più grandi, tipo 0.8mm, diminuendo cosi' i tempi di esecuzione

Guardate questi esempi fatti con cura: lo stesso oggetto stampato con 3 tipi di nozzle differenti da 0.25mm, 0.4mm, 0.8 mm

**Esempio di stampa con Nozzle da 0.8 mm**

[![Esempio di stampa con nozzle da 0.8mm](/img/blog/ugelli/cattura08.webp)](/img/blog/ugelli/cattura08.webp)

Con un nozzle da 0.8 mm il tempo di stampa sarebbe di 1 ora e 42 minuti

**Esempio di stampa con Nozzle da 0,4 mm**

[![Esempio di stampa con nozzle da 0.4mm](/img/blog/ugelli/cattura04.webp)](/img/blog/ugelli/cattura04.webp)

Con un nozzle da 0.4m,m cioè quello usato di default dalla maggior parte delle stampanti, il tempo di stampa sarebbe di 4 ore e 30 minuti

**Esempio di stampa con Nozzle da 0,25 mm**

[![Esempio di stampa con nozzle da 0.25mm](/img/blog/ugelli/cattura025.webp)](/img/blog/ugelli/cattura025.webp)

Con un nozzle da 0.25 mm, il tempo di stampa sarebbe di 10 ore e 57 minuti.

:::info
Come potete ben capire, più grande e' il diametro del nozzle, maggiore e' la velocita', ma, di conseguenza, minore sarà la risoluzione, quindi la qualita dell'oggetto stampato
:::

### Materiali degli ugelli

[![nozzle](/img/blog/ugelli/nozzle.webp)](/img/blog/ugelli/nozzle.webp)

A causa della loro funzione, gli ugelli hanno bisogno essere costruiti di un materiale con uno scambio termico elevato (in poche parole, deve passare la maggiore quantita' di calore possibile dalla capsula riscaldante all'ugello) e sono realizzati con metalli diversi, in parte per una questione di costi e in parte perchè, dovendo "trattare" filamenti diversi, devono avere caratteristiche diverse 

Di conseguenza, ugelli diversi possono influenzare il processo di stampa per quanto riguarda il flusso, la resistenza per l'estrusione del materiale e la temperatura, perchè materiali diversi hanno una conducibilità diversa, percio', in fase di preparazione del modello da stampare, bisogna settare temperature di estrusione diverse

Ad esempio, se con un ugello in ottone possiamo usare per un determinato materiale 200 gradi, con un ugello in acciaio inox la nuova temperatura da usare sarà di 251 gradi

Inoltre, poiché ci sono filamenti che hanno proprietà abrasive, che sono solitamente materiali in PLA o ABS con aggiunta di fibre di legno o con miscela di polveri metalliche, e che quindi possono consumare alcuni tipi di metalli piu "teneri" più velocemente rispetto ad altri, la selezione del materiale dell'ugello deve essere oculata in base a quello che si vuole stampare

Di seguito elenchiamo diversi materiali con cui vengono attualmente prodotti gli ugelli ed i loro relativi vantaggi e svantaggi. Alla fine potremo avere una panoramica completa sui vari tipi di ugelli e quali sono i loro campi di applicazione migliori

<ArticleAd/>

### Ugelli in ottone

[![ugello in ottone](/img/blog/ugelli/ottone.webp)](/img/blog/ugelli/ottone.webp)

L'ottone è il materiale più comunemente usato per gli ugelli per la stampa 3D
Può raggiungere la temperatura di stampa massima di 300 gradi
Questo materiale offre un'eccellente conducibilità di calore a un costo relativamente basso, ed e' per questo che viene montato di default sulla maggior parte delle stampanti di uso hobbistico che vediamo in giro. Tuttavia, durante la lavorazione di filamenti abrasivi,  come ad esempio filamenti PLA o ABS con fibre di legno, carbonio o metallo, un ugello in ottone si consuma molto rapidamente e diventa impreciso a causa della usura interna e del foro di uscita

[Esempi di ugelli in ottone di qualita' per la Ghost 5](https://amzn.to/3KjRYNE)

[Esempi di ugelli in ottone di qualita' per la Genius Pro](https://amzn.to/3FyQFHh)

<ArticleAd/>

### Ugelli rivestiti
[![ugello rivestito](/img/blog/ugelli/rivestito.webp)](/img/blog/ugelli/rivestito.webp)

Per proteggere i materiali relativamente teneri di un ugello standard dall'abrasione eccessiva e per ridurre l'attrito tra il filamento e l'ugello, sono disponibili ugelli in ottone con un rivestimento in nichel o in cromo

Oltre alla migliore resistenza ai graffi, alle abrasioni e un minore attrito al passaggio del filamento fuso, il rivestimento dell'ugello in ottone aumenta notevolmente anche la resistenza alla temperatura e, mediamente (perche' esistono leghe diverse con diverse caratteristiche), la temperatura massima dell'ugello può arrivare dai 450 ai 550 gradi

:::warning
questo non vuol dire che questo ugello è progettato per i filamenti abravisi, anche lui si consumerà, ma sempre meno velocemente di un ugello in ottone standard
:::

[Esempi di ugelli di qualità con rivestimento per la ghost 5](https://amzn.to/34YwENN)

[Esempi di ugelli di qualità con rivestimento per la Genius Pro](https://amzn.to/3roR4a7)

<ArticleAd/>

### Ugelli in acciaio

[![ugello in acciaio](/img/blog/ugelli/acciaio.webp)](/img/blog/ugelli/acciaio.webp)

L'acciaio è un altro materiale molto popolare per gli ugelli, perché offre una resistenza all'usura leggermente migliore rispetto agli ugelli in ottone
Per capire la differenza con gli ugelli rivestiti, bisogna comprendere la composizione della lega che riveste l'ugello, percio potrebbe essere sia uguale come superiore o inferiore
Inoltre, l'acciaio impedisce alla plastica fusa di attaccarsi alle superfici dell'ugello e di contaminare la stampa con il piombo, come spesso accade con gli ugelli in ottone. Per comprendere meglio l'importanza di questa caratteristica dobbiamo sapere che l'ottone, una lega di rame e zinco, per migliorare le sue caratteristiche ad alte temperature e migliorare la resistenza all'usura, impiega, oltre ai materiali sopraindicati, anche il piombo (questo tipo di ottone si chiama ottone secco)

Per questo gli ugelli in acciaio (inox e temperato) sono quindi più adatti per stampare oggetti che andranno a contatto con gli alimenti

:::danger
Questo non vuol dire che se tu hai un ugello di acciaio potrai stampare le posate per i tuoi figli, perché nella stampa 3D FDM (fused deposition modeling), che è quella che si usa solitamente, la stampa viene fatta layer dopo layer, strato dopo strato, e, in base alla dimensione dell'ugello (fate riferimento al capitolo precedente), tra due layer ci sarà sempre uno spazio: in questo spazio possono, anzi, prolifereranno batteri
C
onsiderate questo esempio: quando un piatto di porcellana o un bicchiere e' venato, si suggerisce di non usarlo più perche in quella venatura, venendo a mancare lo strato di resina che elimina la porosita' della porcellana, e' un   ottimo posto per il proliferare di batteri. Per completare il discorso, si potrebbero (condizionale) stampare oggetti per alimenti o sicuri per i bambini più piccoli, che mettono in bocca tutto, ma si dovrebbe usare un ugello in acciaio, con la dimensione dell'ugello la più piccola possibile, cosi da rendere i vari strati del layer piu uniformi, e inoltre aggiungere a stampa finita una resina particolare che, oltre a rendere piu liscia la stampa, si deposita nelle insenature, non dando la possibilità ai batteri di depositarsi (pippone finito...)
:::

L'acciaio consente di lavorare una gamma più ampia di filamenti, ma non è consigliato se si utilizzano frequentemente i filamenti abrasivi. E come detto prima l'acciaio ha inoltre una minore conducibilità termica rispetto all'ottone, perciò **alzate la temperatura delle vostre stampe di 15 gradi almeno**

[Esempi di ugelli di qualità in acciaio per la ghost 5](https://amzn.to/3qAy1dY)

[Esempi di ugelli di qualità in acciaio per la Genius Pro](https://amzn.to/33HXV6d)

<ArticleAd/>

### Ugelli in acciaio temprato

[![ugello in acciaio temprato](/img/blog/ugelli/temperato3.webp)](/img/blog/ugelli/temperato3.webp)

Gli ugelli in acciaio temprato sono  molto utili per la stampa 3D in quanto sono abbastanza resistenti ad un uso frequente di materiali abrasivi, molto di più dell'acciao inox o degli ugelli in materiale composito, e fino a 15 volte più resistenti dell'ottone, e offrono letteralmente anni di utilizzo senza necessita' di essere sostituiti Tuttavia, questo materiale ha una conduttività termica ancora inferiore rispetto ai materiali precedenti, e, poiché la superficie interna dell'ugello non è liscia come altri materiali, ciò può comportare un flusso di stampa non uniforme e percio' una qualita di stampa finale inferiore

[Esempi di ugelli di qualità in acciaio temprato per la Ghost 5](https://amzn.to/3I8372o)

[Esempi di ugelli di qualità in acciaio temprato per la Genius Pro](https://amzn.to/3nzbmMW)

<ArticleAd/>

### Ugelli in rubino
[![ugello con punta in rubino](/img/blog/ugelli/rubino.webp)](/img/blog/ugelli/rubino.webp)

Gli ugelli con la punta in rubino sono tra gli ugelli più costosi per le stampanti 3D. Solitamente questi ugelli non sono altro che ugelli in ottone, con o senza rivestimento, che hanno un rubino (sintetico) sulla punta
In base al materiale utilizzato, o il rivestimento, si può arrivare ad una temperatura di 550 gradi
Si usa un rubino  perché il foro può essere realizzato in modo molto preciso, molto piu' preciso che facendo lo stesso foro ad un materiale metallico

La punta in rubino dell'ugello fornisce un'ulteriore resistenza all'usura, particolarmente utile durante la lavorazione di filamenti speciali. Rispetto agli altri tipi di ugelli, l'ugello rubino è il più costoso

[Esempi di ugelli di qualità con punta in rubino per la Ghost5](https://amzn.to/3ntvZuc)

[Esempi di ugelli di qualità con punta in rubino per la Genius Pro](https://amzn.to/3Kk2x3B)


## Conclusione

Prima di concludere, gli ugelli per la Eryone ER20 sono gli stessi della Ghost, e vorrei che fosse chiaro che un ugello da 100 euro sarà necessariamente diverso da uno da 3,50 euro. La qualità dei materiali usati, la qualità costruttiva,  necessaria per garantire che i fori di ingresso e uscita siano concentrici, e anche il foro sia perfettamente circolare e non più grande o più piccolo di quanto dichiarato. Affidatevi a marchi conosciuti per la loro serietà e avrete la certezza di avere un prodotto durevole e che soddisferà le vostre esigenze


:::info Aggiornamento

Visto l'interesse dell'argomento trattato, abbiamo deciso di inserirlo pure nell'area wiki, con delle aggiunte che sono certo vi faranno piacere

Prima di tutto, uscira' un articolo sui materiali più adatti a ogni tipo di ugello nella nostra lista

Poi punteremo ad aumentare i link degli ugelli che abbiamo inserito nell'articolo originale, parleremo di modelli particolari, o molto più performanti riguardo ai modelli standard, e come usare e pulire i vari ugelli (non credo vogliate buttare via centinaia di euro perche avete usato una procedura che per l'ugello in ottone va bene ma quello in rubino no...)

Buona lettura, e stay tuned riguardo le novità
:::

<DisqusComments
  slug="/blog/ugelli"
  articleId="8"
  title="Ugelli"
/>
