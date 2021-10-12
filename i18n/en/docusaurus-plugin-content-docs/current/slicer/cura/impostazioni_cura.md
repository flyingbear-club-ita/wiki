---
title: Create a new profile
slug: /slicer/cura/profilo_stampa
description: Ultimaker Cura Profili
keywords: ["cura", "ultimaker", "ultimaker cura", "3d printing", "flyingbear", "flying bear", "flyingbear ghost", "slicer", "slicing", "plugins", "cura plugins", "profile", "pla", "petg"]
image: /img/Ultimaker_cura.png
sidebar_label: Create a new profile
---

## Creazione di un nuovo profilo

Bene, ora che Cura è pronto, direi di iniziare a modificare i paramenti del materiali che andremo a utilizzare modificando la temperatura di fusione, il diametro del filamento e altre impostazioni che vedremo passo dopo passo

Andiamo a conoscere il menu di cura, o almeno quello standard

[ ![spiegazione menu cura](/img/spiegazione_menu_cura.png) ](/img/spiegazione_menu_cura.png)

Si, ci sono altri menu, ma per ora concentriamoci sul secondo

Qui potremo decidere il materiale che andremo a stampare e il diametro dell'ugello (nozzle, per chi ha la versione in inglese) installato sulla stampante

:::tip
Piccolo appunto sugli ugelli: 
* minore è il diametro dell'ugello, maggiore è la precisione e la qualità, ma aumentano anche i tempi di stampa
* maggiore è il diametro, maggiore è la velocità, ma a discapito della qualità 

Se dovete stampare un parallelepipedo vuoto come porta penne, vi potrebbe andare bene un ugello da 0.8 mm, mentre se volete stampare oggetti precisi come miniature, si parte da ugelli con diametro da 0.4mm fino ad arrivare a 0.2mm, o anche meno
:::

Andiamo sul menu materiali e ugello 

[ ![menu materiali cura](/img/menu_materiali.png) ](/img/menu_materiali.png)

Come potete notare, c'e' una sezione per la gestione materiali

Aprendola, vedrete una serie di materiali pre-impostati. Aggiungiamo dei nuovi materiali, per esempio la bobina del PLA e del PET-G

Essendo il PLA un materile piu facile da stampare, potremo lasciare le impostazioni di default e cambiare solo la temperatura di estrusione e la temperatura del piano di stampa

Se volete vedere la procedura passo passo vi lascio al [video che trovate sul nostro canale youtube](https://www.youtube.com/watch?v=9IEw2POQBPA&ab_channel=FlyingbearClubIta)

[ ![lista materiali cura](/img/lista_materiali.PNG) ](/img/lista_materiali.PNG)

Questi valori sono dati dal produttore, oppure dalla solita e imprescindibile temp tower, da fare ogni volta che usate una nuova bobina

Stessa cosa per i parametri dei profili

Scegliete il profilo che preferite, oppure lo standard, se non sapete costa state facendo

[ ![profili_1](/img/profili_1.PNG) ](/img/profili_1.PNG)

Ora premete il tasto duplica ed inserite il nome che volete dare al profilo

[ ![profili_2](/img/profili_2.PNG) ](/img/profili_2.PNG)

Ora siamo pronti a modificare il profilo per le nostre esigenze

Andate a cliccare il menu a tendina con i vari profili
 
[ ![modifica_impostazioni](/img/modifica_impostazioni.png) ](/img/modifica_impostazioni.png)

Lo vedete che c'è pure il vostro profilo appena creato???

Selezioniamolo e iniziamo a lavorarci

:::info
Presto ci sarà una guida e un video riguardo a tutte le impostazioni che possiamo modificare in cura, ma oggi vi darò solo le indicazioni per quelli piu importanti e per la stampa su PET-G, perche per il PLA sono sufficenti quelli di default
:::

Se vedete una schermata come quella qui in basso, andate su personalizza

[ ![profili_3](/img/profili_3.PNG) ](/img/profili_3.PNG)

Dovreste vedere una schermata come questa:

[ ![profili_4](/img/profili_4.PNG) ](/img/profili_4.PNG)


## Settaggi PLA

Ora vedremo le voci da modificare per avere una buona qualità di stampa con il PLA

**Temperatura ugello**

190-210°C, da determinare in base alle caratteristiche del cavo o alla stampa di una temp tower

**Temperatura del piatto di stampa** 

55-70°C,  sempre in base al piatto che avete. Per esempio, il vetro avrà bisogno di una temperatura di 5 gradi superiore al piatto microforato, ma questo lo determinate attraverso le vostre esperienze e vari test

**Velocità di stampa**

50-60 mm/s, sempre in base alla stampante che avete e alla vostra esperienza

**Velocità di stampa del primo strato** 

30 mm/s

**Distanza di retrazione**

6 mm per configurazioni Bowden, 2-3 mm per configurazioni direct 

**Velocità di ritrazione**

50-55 mm/s

**Modalità Combing**

Attivare **Non nel rivestimento** o **nel riempimento**

**Velocità della ventola di raffreddamento**

100%

**Velocità di raffreddamento dello strato iniziale**

0%

**Adesione**

Brim 

**Larghezza falda**

5-6 mm

## Settaggi PET-G

Adesso tocca al PET-G

Per prima cosa, ricordate il plug in relativo all'offset di Z, usiamo e mettiamo un bel 0,1. Questo serve per lasciare piu' spazio al PETG

[ ![z offset](/img/offset_z.PNG) ](/img/offset_z.PNG)


Ora vediamo tutti gli altri parametri importanti


**Temperatura ugello**

210-245 °C  in base al filamento, ricordasi sempre di fare la temp tower, invece di affidarsi al caso!

**Temperatura del piatto di stampa** 

70°

**Velocità di stampa**

30-40mm/s

**Velocità di stampa del primo strato** 

15mm/s

**Distanza di retrazione**

6 mm per configurazioni Bowden, 2-3 mm per configurazioni direct 

**Velocità di ritrazione**

40-45 mm/s

**Modalità Combing**

Attivare **Non nel rivestimento** o **nel riempimento**

**Velocità della ventola di raffreddamento**

50%, o addirittura niente raffreddamento, per permettere agli strati di fondersi meglio e aumentare la rigidita' della stampa

La regola e' la seguente:

* Minore ventilazione, più robustezza e meno definizione
* Maggiore ventilazione, più definizione e meno robustezza 

**Velocità di raffreddamento dello strato iniziale**

0%

**Adesione**

Brim 

**Larghezza falda**

5-6 mm


## Risoluzione problemi

Ora come bonus alcune informazioni dettate dall'esperienza su eventuali problemi di stampa

Nonostante l'ottima qualità, il petg o il PLA non sono  esenti da alcuni problemi che possono avvenire in fase di stampa

Uno tra i più frequenti è lo stringing, ossia quei filamenti che si vengono a creare durante la stampa durante i movimenti dell’ugello

Si tratta di un problema abbastanza diffuso ed è dovuto al filamento sciolto che rimane sulla punta dell’ugello e che cola via mentre l’ugello si muove sul piano di stampa

Il motivo per cui nel petg filamento questo fenomeno sia più evidenziato à dovuto alla struttura intrinseca del materiale, che fonde a temperature molto alte, agevolando dunque la formazione di questi fili

Il miglior modo per risolvere il problema è modificare la retrazione

Non volendo fare [l'apposito test](https://www.thingiverse.com/thing:2080224), andate a trovare il valore ottimo empiricamente aumentando la distanza di 1 mm e la velocita' di 5 mm/s, fino a quando non si raggiunge il risultato ottimale

Anche aumentare la Travel Speed può essere di aiuto. Provare aumentando a step di 10 mm/s fino ad ottenere il miglior risultato

Un altro problema in cui si inciampa molto spesso con il petg o PLA è quello della **sovraestrusione**

Si tratta di materiale che viene estruso in esubero creando dunque problemi nel risultato finale

Per ovviare a questo tipo di problema, la prima cosa da fare è banale quanto importante: verificare di aver selezionato il giusto materiale nello slicer

Un altro parametro molto importante da verificare è il **flusso (flow)**, all’interno del pannello del materiale

Questo valore viene espresso in percentuale e, di base, è settato al 100% 

Riducendo questa percentuale si avrà modo di intervenire sulla quantità di filamento estruso in modo da poter correggere i problemi di sovraestrusione

Si sugerisce di calcolarlo il flusso giusto **per ogni filamento, anche se della stessa marca, ma di colore diverso**, attraverso una semplice calbrazione, che potete trovare [qui](/docs/3dprinting/flusso)

Se l'oggetto non attacca bene, controllate con la calibrazione del piatto se l'ugello estrude alla giusta altezza (se non sapete calibrare il piatto vi faccio le mie congratulazioni per essere arrivati a questo punto dell'articolo ma vi dico pure di cambiare hobby), oppure controllate che sul piano di stampa non ci sia polvere, sporcizia, unto o impronte: il grasso della pelle, così come i prodotti di pulizia, possono compromettere l’aderenza

Usate sempre alcol denaturalizzato e uno straccio pulito o un tovagliolo. Se non vi piace il rosa dell'alcol, lasciatelo una bella giornata sotto al sole, vedrete diventerà bianco

## Conclusioni

Come sempre, spero che questa guida vi sia piaciuta, e sia stata utile

Come tutte le cose certamente può essere migliorata eapprofondita, ditecelo cosi da poter provvedere

In allegato a questa guida vi è un video sul nostro canale in YouTube, ma viaggiano su 2 canali paralleli, alcune cose approfondite qui sono solo accennati sul video e viceversa, dateci un'occhiata
