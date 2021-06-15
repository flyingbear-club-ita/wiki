---
title: Calibrazioni
slug: /calibrazioni
---

## Piano di stampa 
La calibrazione del piano di stampa rientra nelle calibrazioni essenziali da effettuare

Inizialmente può sembrare una procedura complicata ma con questi semplici passi potrai ottenere una calibrazione semplice ed efficiente.

1. Chiudere (stringere) le 4 molle del piano a fine corsa
2. Regolare la vite di fine corsa del piano "Z" in modo tale da ottenere uno spazio tra punta e ugello di 2mm. 
:::tip
Come misura di riferimento puoi usare la brugola in dotazione, la seconda più piccola
:::
3. Iniziare usando la funzione "leveling" della stampante
4. Usare il foglio in dotazione o un foglio A4 per calibrare tutti e 4 i punti. Tra ugello e foglio dev'essere presente un leggero attrito

### Consigli per una buona calibrazione
* Riscaldare il piano a 60°C durante tutto il processo di calibrazione
* Ripetere la calibrazione 4/5 volte
* Tra una calibrazione e l’altra portare tutti gli assi in "home"
* Pulire il piano di stampa con alcool isopropilico

*Un ringraziamento a Magnas per aver realizzato la guida*

## Calibrazione PID
:::danger
La calibrazione del PID deve essere sempre supervisionata: la temperatura dell'estrusore potrebbe salire troppo, se dovesse superare la temperatura desiderata del 15%, SPEGNERE SUBITO la stampante
:::

Il PID e' un algoritmo di controllo per la temperatura del letto e del nozzle. Se ti trovi ad avere a che fare con fluttuazioni della temperatura, potresti avere bisogno di calibrare il PID

Come si fa?
La prima cosa da fare e' scaricare un programma che sia in grado in mandare gcode alla stampante. 

Il nostro preferito e' [Repetier Host](https://www.repetier.com/)

Prima di lanciare RH, connetti la stampante alla porta usb del computer tramite il cavo allegato (quello blu, da un lato usb, dall'altro usb type B), e assicurati che la stampante sia stata riconosciuta dal computer 

Per i sistemi *nix, come **Ubuntu** e **macOS**, non c'e' bisogno di fare niente, basta collegare il cavo

Per **Windows**, a volte potrebbe essere necessario installare il [driver CH341](http://www.cesareriva.com/release/wp-content/uploads/2011/02/usb_serial_converter_ch340_windows_x64_drivers.zip)

Sempre per Windows, per verificare che la stampante sia connessa:
 1. Cercare ed aprire "Pannello di Controllo"
 2. scorrere la lista dei dispositivi
 3. cercare la stampante

In entrambi i casi, adesso potete lanciare repetier host

Appena lanciato, il programma non riconosce automaticamente la stampante, bisogna selezionare la porta di comunicazione 

<!--
<a href="/img/impostazioni_rh.jpg" target="_blank">
  <img alt="Settings Repetier Host" src="img/impostazioni_rh.jpg" width="400"/>
</a>
-->
![alt text](/img/impostazioni_rh.jpg "Settings Repetier Host")


Se la porta di comunicazione e' stata selezionata correttamente, il tasto "connetti" si attivera'. Cliccateci sopra

<!--
<a href="/img/home_rh.jpg" target="_blank">
  <img alt="Home Repetier Host" src="/img/home_rh.jpg" width="400"/>
</a>
-->
![alt text](/img/home_rh.jpg "Home Repetier Host")

A questo punto, dovreste vedere un po' di log scorrere. 

:::tip
Se vi da' fastidio il m105, che e' semplicemente un ping per la stampante, potete disabilitarlo navigando in "Preferences" e selezionando "remove temperature requests from log"
:::

Per dare i comandi Gcode alla stampante andare nel flag Controlli Manuali

<!--
<a href="/img/controlli_manuali.jpg" target="_blank">
  <img alt="Controlli Manuali" src="/img/controlli_manuali.jpg" width="200" target="_blank"/>
</a>
-->

![alt text](/img/controlli_manuali.jpg "Controlli Manuali")


### Calibrazione PID Blocco riscaldante
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

#### Tramite robin_nano35_cfg.txt
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

#### Tramite Repetier Host
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


## Step

A volte, vi sarà capitato di vedere delle imprecisioni nelle superfici delle vostre stampe, tipo grumi di plastica, oppure una distribuzione non omogenea del filamento

Questo problema potrebbe essere dovuto all'estrusore, il meccanismo che porta il filamento dalla spola all'hotend

Il motore dell'estrusore è posizionato internamente al lato posteriore della stampante, sorretto dall'ingranaggio dell'estrusore, sempre posizionato nel pannello posteriore, ma esternamente

Il motore (Nema17) ha, di default, 200 steps per rivoluzione: per compiere un giro completo, fa duecento "scatti", con un angolo per step di 1.8 gradi

Gli step per millimetro di un motore sono, invece, il numero di step che il motore dovrà compiere per percorrere la distanza di un millimetro

Il valore di default della Ghost è 400, il che vuole dire che, per muoversi di un millimetro, il motore dovrà compiere due rotazioni

Purtroppo, non tutti i componenti sono uguali, quindi, per regolarizzare il flusso o i movimenti sugli assi, è necessaria una calibrazione


### Estrusore
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

Una volta calcolato il nuovo valore, inserirlo nel file robin_nano35_cfg.txt.

Cercare:

**DEFAULT_E0_STEPS_PER_UNIT**


Sostituire il valore di default con il valore ottenuto dalla formula, aggiornare il firmware col nuovo valore 

:::tip
È ampiamente consigliato fare delle stampe di prova prima e dopo la calibrazione, per comparare i risultati

*Consigliati calicat, benchy, calibrationCube*
:::

### Assi
*Coming soon*
