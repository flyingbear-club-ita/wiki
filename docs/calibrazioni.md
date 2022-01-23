---
title: Calibrazioni
slug: /calibrazioni
keywords: ["3d printing", "flying bear", "flyingbear", "flying bear ghost", "flyingbear ghost", "flyingbear ghost 5", "flying bear ghost 5", "stampa 3d", "calibration", "hotend", "heath bed"]
---
import DisplayAd from '../src/components/displayAd'
import ArticleAd from '../src/components/articleAd'
import FacebookLink from '../src/components/facebookLink'

## Piano di stampa {#piano-di-stampa}
La calibrazione del piano di stampa rientra nelle calibrazioni essenziali da effettuare

Inizialmente può sembrare una procedura complicata ma con questi semplici passi potrai ottenere una calibrazione semplice ed efficiente.

1. Chiudere (stringere) le 4 molle del piano a fine corsa
2. Regolare la vite di fine corsa del piano "Z" in modo tale da ottenere uno spazio tra punta e ugello di 2mm. 
:::tip
Come misura di riferimento puoi usare la brugola in dotazione, la seconda più piccola
:::
3. Iniziare usando la funzione "leveling" della stampante
4. Usare il foglio in dotazione o un foglio A4 per calibrare tutti e 4 i punti. Tra ugello e foglio dev'essere presente un leggero attrito

<ArticleAd/>

### Consigli per una buona calibrazione {#consigli-per-una-buona-calibrazione}
* Riscaldare il piano a 60°C durante tutto il processo di calibrazione
* Ripetere la calibrazione 4/5 volte
* Tra una calibrazione e l’altra portare tutti gli assi in "home"
* Pulire il piano di stampa con alcool isopropilico

### Verifica del livellamento del piatto {#verifica-del-livellamento-del-piatto}
Dopo aver livellato, per avere un riscontro dei risultati ottenuti si puo' stampare un file di calibrazione

[Livellamento Piatto - Autore: Wolf](https://www.thingiverse.com/thing:4678933/files)

:::tip
Il file va stampato molto lentamente, intorno ai 20mm/s, cosi' da poter eventualmente intervenire, per risolvere evidenti problemi di livellamento, girando le manopole sotto al piatto
:::

Una volta stampato, o proprio durante la stampa, e' possibile valutare la qualita' del livellamento confrontando la stesura del primo layer con la tabella qui sotto

<p align = "center">
<img src = "/img/calibration/plate/bedLevelExample.webp"/>
</p>
<p align = "center">
Esempi di livellamento - Credits <a href="https://43dprint.org/">43dprint.org</a>
</p>

*Un ringraziamento a Magnas per aver realizzato la guida*

<DisplayAd/>

## Calibrazione PID {#calibrazione-pid}
:::danger
La calibrazione del PID deve essere sempre supervisionata: la temperatura dell'estrusore potrebbe salire troppo, se dovesse superare la temperatura desiderata del 15%, SPEGNERE SUBITO la stampante
:::

Il PID e' un algoritmo di controllo per la temperatura del letto e del nozzle. Se ti trovi ad avere a che fare con fluttuazioni della temperatura, potresti avere bisogno di calibrare il PID

Come si fa?
La prima cosa da fare e' scaricare un programma che sia in grado in mandare gcode alla stampante. 

Il nostro preferito e' [Repetier Host](https://www.repetier.com/)

Prima di lanciare RH, connetti la stampante alla porta usb del computer tramite il cavo allegato (quello blu, da un lato usb, dall'altro usb type B), e assicurati che la stampante sia stata riconosciuta dal computer 

Per i sistemi *nix, come **Ubuntu** e **macOS**, non c'e' bisogno di fare niente, basta collegare il cavo

Per **Windows**, a volte potrebbe essere necessario installare il [driver CH34X](/files/CH34x_Install_Windows_v3_4.zip)

Sempre per Windows, per verificare che la stampante sia connessa:
 1. Cercare ed aprire "Pannello di Controllo"
 2. scorrere la lista dei dispositivi
 3. cercare la stampante

<ArticleAd/>

In entrambi i casi, adesso potete lanciare repetier host

Appena lanciato, il programma non riconosce automaticamente la stampante, bisogna selezionare la porta di comunicazione 

[ ![Settings Repetier Host](/img/calibration/repetierHost/impostazioni_rh.webp) ](/img/calibration/repetierHost/impostazioni_rh.webp)

Se la porta di comunicazione e' stata selezionata correttamente, il tasto "connetti" si attivera'. Cliccateci sopra

[ ![Home Repetier Host](/img/calibration/repetierHost/home_rh.webp) ](/img/calibration/repetierHost/home_rh.webp)

A questo punto, dovreste vedere un po' di log scorrere. 

:::tip
Se vi da' fastidio il m105, che e' semplicemente un ping per la stampante, potete disabilitarlo navigando in "Preferences" e selezionando "remove temperature requests from log"
:::

Per dare i comandi Gcode alla stampante andare nel flag Controlli Manuali
[ ![Controlli Manuali Repetier Host](/img/calibration/repetierHost/controlli_manuali.webp) ](/img/calibration/repetierHost/controlli_manuali.webp)

### Calibrazione PID Blocco riscaldante {#calibrazione-pid-blocco-riscaldante}
Prima di cominciare la calibrazione, bisogna riscaldare il nozzle, portandolo alla temperatura solitamente utilizzata (200/210 nella maggior parte dei casi), ed accendere la ventola

Il gcode per accendere la ventola e':
 ```
 M106 S255
 ```

Una volta raggiunta la temperatura desiderata, in alto a destra, nella sezione "Manage", troverete una sezione per inserire il gcode (inserire screenshot qui).
Il comando da inserire e' questo:
 ```
 M303 E0 S210 C8; 
 ```
:::info
 **M303** indica l'inizio del pid tuning
 
 **E0** rappresenta l'hotend da calibrare (la ghost ne ha solo uno, di default)
 
 **S210** rappresenta la temperatura scelta, se si stampa, per esempio, a 200, usare S200
 
 **C8** rappresenta il numero di cicli da effettuare, 8 e' il valore raccomandato per i firmware basati su Marlin
:::

<ArticleAd/>

Questo comando inizia la sequenza di calibrazione del PID per l'estrusore

Osservate il log: ad un certo punto, compriranno dei messaggi simili a questi:
```
 20: 44: 36.845: PID Autotune finished! Put the last Kp, Ki and Kd constants from below into Configuration.h 
 20: 44: 36.849: #define DEFAULT_Kp XX.XX 
 20: 44: 36.849: #define DEFAULT_Ki X.XX 
 20: 44: 36.853: #define DEFAULT_Kd XX. XX
```

Dove ci sono le XX, li' troverete i valori dopo la calibrazione

Per aggiornare i valori ci sono due opzioni:

#### Tramite robin_nano35_cfg.txt {#tramite-robin_nano35_cfgtxt}
Prendete questi valori e inseriteli nel file robin_nano35_cfg.txt nelle seguenti righe (i valori riportati sono solo esemplificativi):
 ```
  PIDTEMPE 1 # Mode 1: PID; 0: bang-bang 
  DEFAULT_Kp 11.14 # P value 
  DEFAULT_Ki 0.72 # I value 
  DEFAULT_Kd 43.09 # D value 
```


La prima riga cambia il sistema di regolazione della temperatura da bang bang a PID

Nella seconda, terza e quarta riga, inserire i valori appena trovati con repetier host

Come al solito, caricare il file robin_nano35_cfg.txt sulla SD, inserire la scheda nella stampante, spegnere e riaccendere

<ArticleAd/>

#### Tramite Repetier Host
Nella finestra per l'inserimento del gcode, inviare il seguente comando, sostituendo i valori ottenuti (i valori riportati sono solo esemplificativi):

```
M301 P24.36 I1.39 D106.76
```

Questo comando cambia i valori del PID, quindi la stampante e' gia' aggiornata. Questi valori, pero', non sono stati salvati nella EEPROM (la memoria persistente della scheda madre), una volta spenta la stampante, questi valori verranno resettati a quelli precedenti

Per rendere le modifiche permanenti, usare il seguente comando:

```
M500
```

Una volta lanciato, per controllare che i valori siano stati salvati correttamente, usare il seguente comando:
```
M503
```

Nel terminale dovrebbero comparire i valori attuali dei parametri del PID, che dovrebbero combaciare con quelli appena inseriti


**Voila', il PID dell'estrusore e' calibrato!**

<DisplayAd/>

### Calibrazione PID Piatto
La calibrazione del PID del piatto e' analoga, pero' c'e' una modifica da fare nel file di config

Siccome il PID e' disabilitato di default, nel robin_nano3_cfg.txt bisogna modificare:
```
 PIDTEMPBED   0
```
in
```
 PIDTEMPBED 1
```
Una volta aggiornato il firmware (tramite robin_nano3_cfg.txt), il gcode da utilizzare e' il seguente:
```
 M303 E-1 S70 C8; 
```

:::tip
**S70** rappresenta la temperatura scelta. Se si stampa solitamente col tavolo a 60, sostituire S70 con S60
:::

Finita la procedura di calibrazione, i valori saranno riportati in output come per il blocco riscaldante

Cosi' come per il blocco riscaldante, per aggiornare i valori ci sono due opzioni:

#### Tramite robin_nano35_cfg.txt
Prendete questi valori e inseriteli nel file robin_nano35_cfg.txt nelle seguenti righe (i valori riportati sono solo esemplificativi):
 ```
 >DEFAULT_bedKp			52.63
 >DEFAULT_bedKi			9.75
 >DEFAULT_bedKd			71.01
```

Nella prima, seconda e terza riga, inserire i valori appena trovati con repetier host

Come al solito, caricare il file robin_nano35_cfg.txt sulla SD, inserire la scheda nella stampante, spegnere e riaccendere

<ArticleAd/>

#### Tramite Repetier Host {#tramite-repetier-host}
Nella finestra per l'inserimento del gcode, inviare il seguente comando, sostituendo i valori ottenuti (i valori riportati sono solo esemplificativi):

```
M304 P824.78 I154.89 D1097.99
```

Questo comando cambia i valori del PID, quindi la stampante e' gia' aggiornata. Questi valori, pero', non sono stati salvati nella EEPROM (la memoria persistente della scheda madre), una volta spenta la stampante, questi valori verranno resettati a quelli precedenti

Per rendere le modifiche permanenti, usare il seguente comando:

```
M500
```

Una volta lanciato, per controllare che i valori siano stati salvati correttamente, usare il seguente comando:
```
M503
```

Nel terminale dovrebbero comparire i valori attuali dei parametri del PID, che dovrebbero combaciare con quelli appena inseriti


**Voila', il PID del piatto e' calibrato!**

<DisplayAd/>

## Step {#step}

A volte, vi sarà capitato di vedere delle imprecisioni nelle superfici delle vostre stampe, tipo grumi di plastica, oppure una distribuzione non omogenea del filamento

Questo problema potrebbe essere dovuto all'estrusore, il meccanismo che porta il filamento dalla spola all'hotend

Il motore dell'estrusore è posizionato internamente al lato posteriore della stampante, sorretto dall'ingranaggio dell'estrusore, sempre posizionato nel pannello posteriore, ma esternamente

Il motore (Nema17) ha, di default, 200 steps per rivoluzione: per compiere un giro completo, fa duecento "scatti", con un angolo per step di 1.8 gradi

Gli step per millimetro di un motore sono, invece, il numero di step che il motore dovrà compiere per percorrere la distanza di un millimetro

Il valore di default della Ghost è 400, il che vuole dire che, per muoversi di un millimetro, il motore dovrà compiere due rotazioni

Purtroppo, non tutti i componenti sono uguali, quindi, per regolarizzare il flusso o i movimenti sugli assi, è necessaria una calibrazione

<ArticleAd/>


### Estrusore {#estrusore}
In questo caso, è necessario l'utilizzo di Repetier Host(RH) (spiegato nella sezione Primi Passi) 

Connettere la stampante col cavo USB, aprire RH, assicurasi che la stampante sia connessa e muoversi nella sezione per inviare comandi GCode

Adesso che tutto è pronto lato software, andiamo a vedere cosa fare con l'hardware

Il primo passo da fare è estrarre il filamento dall'ugello, se presente. Far ritirare il filo completamente

Una volta rimosso il filamento, estrarre il tubo di teflon dall'estrusore, rimuovendo la fascetta (se presente) e premendo verso il pezzo di plastica del connettore

Ricaricare il filamento, stavolta fino a quando non esce appena dall'estrusore. Con le tronchesi, tagliare il filamento a filo con il connettore

A questo punto, inviare, tramite RH, i seguenti comandi Gcode:
```
 M302 P1; Disabilita la protezione termale dell'estrusore
 G92 E0; Riposiziona l'origine dell'estrusore nella posizione attuale
 G1 E280 F800; Estrude 280 mm di filamento
```
Adesso bisogna misurare la lunghezza del filamento estruso con un righello

Per calcolare gli step reali, utilizzare la seguente formula:
`400 * (280/x)  ==> x = lunghezza misurata`

400 è il numero di step di default

Se, per esempio, avessimo misurato 265, la formula qui sopra sarebbe:

  `400 * (280/265)`

Una volta calcolato il nuovo valore, bisogna aggiornarlo

Per la procedura tramite robin_nano35_cfg.txt, cercare:

**DEFAULT_E0_STEPS_PER_UNIT**

<ArticleAd/>


Sostituire il valore di default con il valore ottenuto dalla formula, aggiornare il firmware col nuovo valore

Per aggiornare il valore degli step tramite gcode, basta inviare il seguente comando:

```
M92 EXX.X
```

Dove XX.X rappresenta il valore degli step/mm calcolato

Per immagazzinare il valore in memoria, completare la procedura lanciando il gcode:
```
M500
```

:::tip
È ampiamente consigliato fare delle stampe di prova prima e dopo la calibrazione, per comparare i risultati

Consigliati:
- [calicat](https://www.thingiverse.com/thing:1545913)
- [benchy](https://www.thingiverse.com/thing:763622)
- [calibrationCube](https://www.thingiverse.com/thing:1278865)
:::


<DisplayAd/>

### Assi {#assi}
Stampare elementi con incastri e' una delle cose piu' problematiche della stampa 3d: a causa di espansione del materiale e/o inaccuratezze nel modello originale (per esempio, una errata tolleranza)

Per raggiungere risultati precisi al centesimo di millimetro, anche gli assi hanno bisogno di una calibrazione, che si puo' fare tramite un semplice cubetto da stampare ed un calibro centesimale

Prima di cominciare, scarichiamo il file di test da qui:

[Cubetto di calibrazione 20x20](https://www.thingiverse.com/thing:1278865)

:::tip
In alternativa, potete anche lanciare il vosto CAD preferito e farvelo da soli
:::

Una volta stampato il cubetto, prendiamo nota degli step di ciascun asse

Quelli di default per la Ghost sono riportati nella tabella qui sotto

|  X  |  Y  |  Z   |
| --- |  -- |  --  |
| 80  |  80 | 400  |


In alternativa, potete inviare il gcode **M503** (per esempio tramite repetier host)

Dall'output potete estrapolare la seguente riga:

```
M92 X__ Y__ Z___ E__
```

Dove i valori rappresentano, rispettivamente, i passi dell'asse X, Y, Z e dell'estrusore

Una volta stampato il cubetto, andiamo a misurare ciascun asse

:::info
Il cubetto del link e' molto utile per identificare quale asse si sta misurando
Se il calibro punta verso la faccia con la X, allora si sta misurando l'asse X, e via dicendo
:::

[ ![3d printing - Flyingbear Ghost - X axis steps calibration - before](/img/calibration/axis/xBeforeCalib.webp) ](/img/calibration/axis/xBeforeCalib.webp) [ ![3d printing - Flyingbear Ghost - Y axis steps calibration - before](/img/calibration/axis/yBeforeCalib.webp) ](/img/calibration/axis/yBeforeCalib.webp) [ ![3d printing - Flyingbear Ghost - Z axis steps calibration - before](/img/calibration/axis/zBeforeCalib.webp) ](/img/calibration/axis/zBeforeCalib.webp)


Adesso andiamo ad applicare una proporzione per rispondere alla domanda "Se con XX step ottengo XX mm, quanti step devo avere per ottenere il mio valore atteso, cioe' 20mm?"

```
step_attuali : valore_misurato = step_ottimali : valore_atteso
```

che si traduce nella formula finale:
```
step_ottimali = (step_attuali * valore_atteso)/valore_misurato
```

Nel caso delle misure in foto, avremo:

```
(80 * 20mm) / 20.14mm = 79.4

(80 * 20mm) / 20.09mm = 79.6

(400 * 20mm) / 20.26mm = 394.8
```

Adesso possiamo aggiornare gli step sulla stampante

Con il firmware originale, basta aggiornare i valori nel robin_nano_cfg.cur (come descritto precedentemente, flashando la stampante con il solo file di config)

In alternativa, e' possibile settare gli step tramite i comandi gCode (da lanciare uno alla volta!)

```
M92 X79.4

M92 Y79.2

M92 Z394.8

```

Per salvare i valori sulla EEPROM, invire il comando:

```
M500
```

<ArticleAd/>

Adesso andiamo a leggere i valori degli step per assicurarci che tutto sia a posto con il gcode **M503**

Se tutto e' a posto, siamo pronti a stampare il cubetto un'altra volta e a misurare i nuovi valori

[ ![3d printing - Flyingbear Ghost - X axis steps calibration - after](/img/calibration/axis/xAfterCalib.webp) ](/img/calibration/axis/xAfterCalib.webp) [ ![3d printing - Flyingbear Ghost - Y axis steps calibration - after](/img/calibration/axis/yAfterCalib.webp) ](/img/calibration/axis/yAfterCalib.webp) [ ![3d printing - Flyingbear Ghost - Z axis steps calibration - after](/img/calibration/axis/zAfterCalib.webp) ](/img/calibration/axis/zAfterCalib.webp)

Come si puo' vedere dalle immagini, il risultato e' uno scarto di:
- +0.03 sull'asse X, a fronte di uno scarto di +0.14 precedentemente
- +0.02 sull'asse Y, a fronte di uno scarto di +0.09 precedentemente
- -0.07 sull'asse Z, a fronte di uno scarto di +0.26 precedentemente

<DisplayAd/>

<FacebookLink link="https://www.facebook.com/hashtag/calibrazioni?__gid__=600126627631693"/>