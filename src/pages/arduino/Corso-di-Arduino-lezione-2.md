# Corso di Arduino:

## Lezione 2 iniziamo  a conoscere meglio il nostro Arduino nano.

Dopo avere installato l' Arduino IDE, dobbiamo iniziare a capire a cosa andremo a collegarci e cosa andremo a programmare. Prima di fare tutto questo, dobbiamo iniziare a conoscere la nostra scheda **Arduino Nano**. Iniziamo a confrontarla con la scheda più famosa ed usata, cioè la **Arduino UNO**. 

| Nome                                                         | Microcontrollore     | Velocità CPU | Alimentazione d'ingresso | Dimensioni LxA (mm) | Porte Analogiche In/Out | Porte Digitali IO/PWM | Flash [kB] | USB    |
| ------------------------------------------------------------ | -------------------- | ------------ | ------------------------ | ------------------- | ----------------------- | --------------------- | ---------- | ------ |
| [Arduino Uno](https://www.arduino.cc/en/Main/ArduinoBoardUno) | ATmega328P           | 16 MHz       | 5 V / 7-12 V             | 68,6 x 53,4         | 6/0                     | 14/6                  | 32         | 2.0 B  |
| [Arduino Nano](https://www.arduino.cc/en/Main/ArduinoBoardNano) | ATmega168 ATmega328P | 16 MHz       | 5 V / 7-9 V              | 43,1 x 18,5         | 8/0                     | 14/6                  | 16 or 32   | Mini-B |

Facciamo subito attenzione a un aspetto, si parla di microcontrollore e non di microprocessore, tenete presente che il Raspberry ha un microprocessore.

Come ho spiegato nella scorsa lezione, Raspberry e Arduino sono concettualmente diverse, e hanno ambiti di utilizzo diversi, e vediamo la prima differenza è che il Raspberry ha un microprocessore, della ram una memoria non volatile (hd, sd, etc) e Arduino invece a prima vista no. Questo perché il **microcontrollore** ha tutto integrato, ma per la CPU con una potenza molto inferiore, con una memoria volatile che si parla di Kbit e non di Gigabit, e una ram di solo alcuni Kbit. Perciò su Arduino non potremo mai installare un sistema operativo, non potremo mai fargli fare calcoli complessi, ma l'esecuzione di calcoli già elaborati da un pc, ed per farvi capire meglio, la base dell'idea di sviluppo di Klipper ( un noto firmware per stampanti 3D) è appunto affiancare ad una scheda Arduino reputata per la gestione dei motori passo passo un hardware più potente come una scheda Raspberry o un generica computer board all in one. Per capire meglio questi concetti vediamo nel dettaglio il Pin Out di una **scheda Arduino Nano** e **Arduino Uno**.

#### Arduino Nano

Vediamo nel dettaglio il Pin Out della scheda Arduino Nano

![pin-out.nano](E:\articoli\Corso Arduino da iniziare\Immagini-Lez-2\pin-out.nano.PNG)

Questo è il pin out del sito ufficiale, e per chi mastica un pò di elettronica salta subito alla vista che i pin per collegare i nostri motori, oppure interruttori, possono essere in per ricevere dati o tensioni, o out cioè per inviarli, e questo lo decidiamo noi in fase di scrittura del nostro software e possono essere analogici ( collegarci un interruttore) o digitali o porte del microcontrollore, tutto sta a come decidiamo di usarle attraverso la scritta del software. Vediamo di aiutarvi meglio con questo altro disegno

![Pinout-of-Arduino-Nano_638x600](E:\articoli\Corso Arduino da iniziare\Immagini-Lez-2\Pinout-of-Arduino-Nano_638x600.jpg)

Cosa cambia dal disegno prima, poco spiega pure la componentistica e sopratutto mostra come funziona la nostra scheda Arduino in default mode, cioè come viene usata nel 95% dei casi per i progetti. Per spiegarla in parole povere I pin possono essere programmati come interfacce di I/O oppure come porte del microcontrollore.

Se vol![pin-out.nano-2](E:\articoli\Corso Arduino da iniziare\Immagini-Lez-2\pin-out.nano-2.PNG)ete vedere il disegno dei pin che ho trovato più esaustivo in internet date una occhiata a questo: 



#### Arduino Uno

Per completezza vi mostro pure i pin out dell'Arduino UNO sopratutto per che non se la sente di pagare 15 euro per una scheda Arduino nano è ha una scheda Arduino Uno nel cassetto.

![Arduino-Uno](E:\articoli\Corso Arduino da iniziare\Immagini-Lez-2\Arduino-Uno.PNG)

Questa scheda ha 14 I/O digitali e 6 I/O analogici in confronto della nano che ha 14 I/O digitali e 8 I/O analogici, non fatevi trarre in inganno dalla grandezza della scheda, questa ne ha di meno, ma è centinaia di volte piu facile da maneggiare e avrete un mondo intero di espansioni con cui usarla. Se vogliamo essere più esaustivi, ma solo per presa visione, non serve capire tutti i pin usati e come usarli, date una occhiata a questo disegno

![arduino-uno-pin2](E:\articoli\Corso Arduino da iniziare\Immagini-Lez-2\arduino-uno-pin2.PNG)

#### Per concludere

Cosa ci è servita vedere tutte queste immagini ?  Ad oggi nulla, ma se un domani vorrete camminare con le vostre gambe dovrete sapere quanti pin avete a disposizione e come usarli, e lo scopo del nostro corse è anche questo oltre che annoiarvi con disegni che ora come ora per molti di voi non hanno senso.

### Iniziamo a programmare

Per la verità non saremmo ancora pronti, ma tutta una lezione di teoria addormenterebbe anche un toro in calore, ora vedremo il nostro primo programma che può girare su tutte le board Arduino esistenti perché usa i pin in comune a tutte le schede. Andremo ad accendere un led, per ora potremmo usare quello integrato nella scheda Arduino che fa riferimento al **PIN 13**, ma se ne avete uno potete collegarlo anche sui vari Pin della scheda, anche se non sarebbe troppo pulita come operazione, e ricevero gli anatemi di tutti quelli che conoscono un po' di elettronica, perché in realtà noi andiamo a comporre quanto semplice e piccolo che sia, un circuito elettrico, e I **LED** luminosi devono essere protetti dalla **resistenza** limitatrice che limiti **la quantità di corrente che fluisce attraverso di esso**, altrimenti si brucia! Per essere più semplici vedete questa limitazione come il rubinetto dell'acqua, se non ci fosse, alla fine un interruttore è una resistenza con valore infinito, riceveremmo l'acqua alla massima gittata possibile e diventerebbe inutilizzabile. Ma noi per questo primo esempio, collegheremo il LED direttamente alla scheda Arduino Nano. Ciò è possibile perché lo stesso Arduino integra una resistenza in modo tale da evitare che il led si bruci. Ora dovremmo capire come dimensionare le resistenza da usare per non bruciare i led, e questo lo vedremo ahimè dando una occhiata alla legge **la legge di Ohm.** Ma non oggi non vi preoccupare. Ma prima di passare alla programmazione vera e propria, volevo mostrarvi un oggetto per me molto importante per creare circuiti con Arduino, è la bridge board, una piastra che ora non sto a spiegare ottima per creare prototipi senza usare il saldatore e la piastra mille fori. Se vi interessa sapere come funziona, chiedetelo e faremo una leziona bonus su questo oggetto, e soprattutto spiegherò come creare prototipi digitali delle vostre creazioni con Thinkercad, e questi 2 esempi sono fatti apposta con questo software, dove vi mostro come collegare un led esterno con la bridge board e senza.

Esempio di connessione LED senza bridge board

![connessione arduino led 1](E:\articoli\Corso Arduino da iniziare\Immagini-Lez-2\connessione arduino led 1.png)

Connessione Arduino con led e bridge board

![connessione Arduino led 2](E:\articoli\Corso Arduino da iniziare\Immagini-Lez-2\connessione Arduino led 2.png)



e invece mettete il led senza ressitenza, si accende ma il simulatore vi segnalerà un over load perchè la corrente che passa è maggiore di quella che potrebbe reggere il led.

![arduino led senza resistenza](E:\articoli\Corso Arduino da iniziare\Immagini-Lez-2\arduino led senza resistenza.PNG)

Per concludere questa pappardella ecco l'interfaccia del simulatore di circuiti elettronici si thinkercad.

![esempio-circuito-arduino](E:\articoli\Corso Arduino da iniziare\Immagini-Lez-2\esempio-circuito-arduino.PNG)

Per la cronaca questo sarebbe un semaforo.

#### E ora programmiamo veramente.

In realtà il programma lo avete visto la settimana scorsa nella lezione uno ma ora lo rivediamo, in una forma più grezza e primitiva. Noi vogliamo accendere un led, e basta.

// C++ code
//
void setup()
{
  pinMode(13, OUTPUT);

// qui dico che il pin 13 ( che è pure il pin che abilito per usare il led integrato sulla scheda )

// deve essere un pin di output cioè che io invio il consenso o per dirla più semplice 

 // chiudo il circuito e invio una tensione di corrente necessaria per accendere il led

}

void loop()
{
  digitalWrite(13, HIGH);

// qui dico il  pin 13 deve avere uscita HIGH cioè deve inviare una tensione 

// se invece scrivo LOW non invia alcuna tensione e il LED si spegne.

}

**approfondiamo il comando digitalWrite (pin, status)**

Vediamo questo esempio per spiegare meglio questo concetto con un altro esempio

// C++ code
//
void setup()
{
  pinMode(13, OUTPUT);
}

void loop()

   {
      // accendiamo il led
      digitalWrite(13, HIGH);
      delay(1000);
      // spegniamo il led
      digitalWrite(13, LOW);
  	  delay(1000);
        // accendiamo il led
      digitalWrite(13, HIGH);
      delay(1000);
      // spegniamo il led
      digitalWrite(13, LOW);
  	  delay(1000);
        // accendiamo il led
      digitalWrite(13, HIGH);
      delay(1000);
      // spegniamo il led
      digitalWrite(13, LOW);
        // accendiamo il led
      digitalWrite(13, HIGH);
      delay(1000);
      // spegniamo il led
      digitalWrite(13, LOW);
  	  delay(1000);  
        // accendiamo il led
      digitalWrite(13, HIGH);
      delay(1000);
      // spegniamo il led
      digitalWrite(13, LOW);
  	  delay(1000);      
      // accendiamo il led
      digitalWrite(13, HIGH);
      delay(1000);
      // spegniamo il led
      digitalWrite(13, LOW);
}

Scusate la lunghezza del programma ma serve per farci capire come funziona il comando, ripetendolo 6 volte alla fine credo capiremo il suo funzionamento. Ma ora vediamo una versione più corta, perché tenete conto avete sempre kbyte di memoria e non megabyte e perciò più è corto il programma che stiamo scrivendo meglio è. Perciò rendiamolo più compatto e nel frattempo impareremo un altro comando

![programmazione-1](E:\articoli\Corso Arduino da iniziare\Immagini-Lez-2\programmazione-1.PNG)

Ecco il listato per chi vuole provare ma è pigro a scrivere// C++ code
//
void setup()
{
  pinMode(13, OUTPUT);

}

void loop()
{
  for (int count = 1; count = 6; count++) 
  // accendiamo il led
  digitalWrite(13, HIGH);
  delay(1000);
  // spegniamo il led
  digitalWrite(13, LOW);
  delay(1000);
   }

Peccato che non possa mettere animazioni se no vedreste il vostro led lampeggiare ogni secondo

### Per concludere la lezione di oggi:

Volevo spiegarvi il funzionamento dei comandi che abbiamo introdotto oggi, cioè:

- **pinMode**: pinmode("id del pin che vogliamo utilizzare", "selezionare se è un input oppure un output");

- **digitalWrite** : digialwrite ("id del PIN che vogliamo cambiare lo stato", "dichiarare lo stato cioe high or low") 

- **delay**: delay("quanti millisecondi deve fermarsi ed attendere prima di continuare" )

-  **for**: istruzione dove fa un determinato computo per un determianto numero di volte fino a quando la condizione di controllo è vera, ma lo spiegheremo bene più in avanti. 

  **Ma prima di lasciarvi eccovi un semplice gioco: Trova le differenze.**

**Esempio 1**:

```arduino
void setup()
{
  pinMode(13, OUTPUT);
 
}

void loop()
{
  for (int count = 1; count < 6; count++) 
  // accendiamo il led
  digitalWrite(13, HIGH);
  delay(1000);
  // spegniamo il led
  digitalWrite(13, LOW);
  delay(1000);
               
   }
```



**Esempio 2**

```arduino
void setup()
{
  pinMode(13, OUTPUT);
 
}

void loop()
{
  for (int count = 1; count < 6; count++) 
  // accendiamo il led
  digitalWrite(13, HIGH);
  delay(1000);
  / spegniamo il led
  digitalWrite(13, LOW);
  delay(1000);
               
   }
```

Uno funzionerà, l'altro no, questo perché nella programmazione la sintassi è molto importante se non fondamentale. Ecco la prossima lezione sarà sulla sintassi e sul perché dobbiamo inserire i comandi **void setup()** e **void loop()**. Senza questi concetti non andremo avanti, ma volevo darvi del materiale su cui riflettere e al limite provare sul simulatore di circuiti. Piccolo suggerimento bonus, essendo i linguaggi di programmazione nati in paesi anglosassoni, la "{" e "}" sono  molto importanti, e sono visibili sulle tastiere,  e perciò anche se non le vedete sulle vostre tastiere italiane le potete comunque inserire con la combinazione di tasti **"ALTGR+SHIFT+[ oppure ]"**.

