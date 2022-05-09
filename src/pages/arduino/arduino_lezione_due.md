---
title: Corso di Arduino - Lezione 2 - Impariamo a conoscere meglio l'Arduino Nano
slug: /arduino/arduino_lezione_due
hide_table_of_contents: true
description: Seconda lezione del corso di Arduino - Cominciamo ad avere una conoscenza piu' approfondita dell'Arduino Nano
keywords: ["3d printing", "flying bear", "flyingbear", "flying bear ghost", "flyingbear ghost", "flyingbear ghost 5", "flying bear ghost 5", "stampa 3d", "arduino", "microcontrollori", "arduino tutorial", "arduino lesson"]
image: /img/arduino/lezione1/arduinoVarious.webp
---
import DisplayAd from '../../components/displayAd'

import DisqusComments from '../../components/disqusComments'

# Corso di Arduino: Lezione 2 - Iniziamo  a conoscere meglio il nostro Arduino Nano
[![Flyingbear Ghost - Arduino Tutorial - Lesson 2 - Get to know better the Arduino Nano - Various Arduino board](/img/arduino/lezione1/arduinoVarious.webp)](/img/arduino/lezione1/arduinoVarious.webp)

## Uno vs Nano: un paragone

Dopo avere installato l' Arduino IDE, dobbiamo iniziare a capire a cosa andremo a collegarci e cosa andremo a programmare. Prima di fare tutto questo, dobbiamo iniziare a conoscere la nostra scheda **Arduino Nano**

Iniziamo a confrontarla con la scheda più famosa ed usata: l'**Arduino UNO**

| Nome                                                         | Microcontrollore     | Velocità CPU | Alimentazione d'ingresso | Dimensioni LxA (mm) | Porte Analogiche In/Out | Porte Digitali IO/PWM | Flash [kB] | USB    |
| :------------------------------------------------------------: | :--------------------: | :------------: | :------------------------: | :-------------------: | :-----------------------: | :---------------------: | :----------: | :------: |
| [Arduino Uno](https://www.arduino.cc/en/Main/ArduinoBoardUno) | ATmega328P           | 16 MHz       | 5 V / 7-12 V             | 68,6 x 53,4         | 6/0                     | 14/6                  | 32         | 2.0 B  |
| [Arduino Nano](https://www.arduino.cc/en/Main/ArduinoBoardNano) | ATmega168 ATmega328P | 16 MHz       | 5 V / 7-9 V              | 43,1 x 18,5         | 8/0                     | 14/6                  | 16 or 32   | Mini-B |

Facciamo subito attenzione a un aspetto: si parla di microcontrollore e non di microprocessore (tenete presente che il Raspberry Pi ha un microprocessore)

Come ho spiegato nella scorsa lezione, Raspberry e Arduino sono concettualmente diverse, e hanno ambiti di utilizzo diversi

La prima differenza è che il Raspberry ha un microprocessore, della ram, una memoria non volatile (hd, sd, etc) e Arduino invece, a prima vista, no

Questo perché il **microcontrollore** ha tutto integrato, pero': 
- la CPU ha potenza molto inferiore
- la memoria e' volatile e si parla di ordini di grandezza del Kbyte, non di Gigabyte...
- la ram e' dell'ordine di grandezza di alcuni Kbyte

Viste queste limitazioni, su Arduino non potremo mai installare un sistema operativo o fargli fare calcoli troppo complessi...

**Allora a cosa serve un Arduino???**

Il microprocessore di un Arduino e' molto efficiente, anche piu' di una Raspberry Pi, nell'eseguire un numero limitato di istruzioni, particolarmente la lettura e l'invio di segnali elettromagnetici, che poi sono quelli necessari ad attivare o leggere dati da un sensore

Su questo concetto si basa l'idea di sviluppo di Klipper (un noto firmware per stampanti 3D): affiancare una Raspberry Pi, che serve ad elaborare il gcode inviato dallo slicer, ad una scheda Arduino, deputata esclusivamente alla gestione dei motori passo passo

Per capire meglio questi concetti, vediamo nel dettaglio il Pin Out di una **scheda Arduino Nano** e **Arduino Uno**

<DisplayAd/>

### Arduino Nano

Vediamo nel dettaglio il Pin Out della scheda Arduino Nano dal sito ufficiale

[![Flyingbear Ghost - Arduino Tutorial - Lesson 2 - Get to know better the Arduino Nano - Arduino Nano pinout](/img/arduino/lezione2/pin-out-nano.webp)](/img/arduino/lezione2/pin-out-nano.webp)

Per chi mastica un pò di elettronica, salta subito alla vista che i pin possono essere configurati sia come input, per ricevere dati o tensioni, o output, cioè per inviarli

La configurazione dei pin va definita durante la fase di scrittura del nostro software

I pin, oltretutto, possono essere analogici (per collegarci un interruttore) o digitali o porte del microcontrollore, tutto sta a come decidiamo di usarle attraverso il software

Vediamo di aiutarvi meglio con questo altro disegno

[![Flyingbear Ghost - Arduino Tutorial - Lesson 2 - Get to know better the Arduino Nano - Arduino Nano pinout bigger image](/img/arduino/lezione2/Pinout-of-Arduino-Nano_638x600.webp)](/img/arduino/lezione2/Pinout-of-Arduino-Nano_638x600..webp)

Questo disegno descrive piu' esplicitamente il tipo di pin del nostro Arduino Nano

Se volete vedere il disegno dei pin che ho trovato più esaustivo in internet date una occhiata a questo: 

[![Flyingbear Ghost - Arduino Tutorial - Lesson 2 - Get to know better the Arduino Nano - Another Arduino Nano pinout](/img/arduino/lezione2/pin-out-nano-2.webp)](/img/arduino/lezione2/pin-out-nano-2.webp)

### Arduino Uno

Per completezza vi mostro pure i pin out dell'Arduino UNO, soprattutto per chi non se la sente di pagare quindici euro per una scheda Arduino Nano e ha una scheda Arduino Uno nel cassetto

[![Flyingbear Ghost - Arduino Tutorial - Lesson 2 - Get to know better the Arduino Nano - Another Uno](/img/arduino/lezione2/Arduino-Uno.webp)](/img/arduino/lezione2/Arduino-Uno.webp)

Questa scheda ha 14 I/O (nput/Output) digitali e 6 I/O, mentre l'**Arduino Nano** ha 14 I/O digitali e 8 I/O analogici 

Non fatevi trarre in inganno dalla grandezza della scheda: questa ha meno GPIO (General Purpose Input Output, che vuol dire che stiamo parlando di periferiche generiche per la' gestione degli input e degli output), ma è centinaia di volte piu facile da maneggiare e avrete un mondo intero di espansioni con cui usarla

:::tip
Le espansioni per gli arduino vengono solitamente chiamati **shield**, mentre per la Raspberry vengono chiamati **HAT**(Hardware Attached on Top)
:::

Se vogliamo essere più esaustivi, ma solo per presa visione (non serve capire tutti i pin usati e come usarli...), date un'occhiata a questo disegno

[![Flyingbear Ghost - Arduino Tutorial - Lesson 2 - Get to know better the Arduino Nano - Another Uno](/img/arduino/lezione2/arduino-uno-pin2.webp)](/img/arduino/lezione2/arduino-uno-pin2.webp)

### Per concludere

Cosa ci è servita vedere tutte queste immagini ?  Ad oggi nulla, ma se un domani vorrete camminare con le vostre gambe, dovrete sapere quanti pin avete a disposizione e come usarli: lo scopo del nostro corso è anche questo, oltre che annoiarvi con disegni che, ora come ora, per molti di voi non hanno senso

<DisplayAd/>

## Iniziamo a programmare

Per la verità non saremmo ancora pronti, ma una lezione unicamente di teoria farebbe addormenterebbe chiunque, quindi ora vedremo il nostro primo programma, che può girare su tutte le board Arduino esistenti, perché usa i pin comuni a tutte le schede

Andremo ad **accendere e spegnere un led**, per ora potremo usare quello integrato nella scheda Arduino che fa riferimento al **PIN 13**, ma, se ne avete uno a disposizione, potete collegarlo anche su uno dei vari Pin della scheda 

In questo caso, ricordatevi comunque che un circuito elettrico e i **LED** luminosi devono essere protetti da una **resistenza** che limiti **la quantità di corrente che fluisce attraverso di esso**, altrimenti si brucia! 

:::info
Per dirla piu' facilmente, pensate a questa limitazione come il rubinetto dell'acqua: se non ci fosse, riceveremmo l'acqua con la massima pressione possibile, rendendo di fatto inutilizzabile il rubinetto! Lo stesso avviene con la corrente: dove non trova ostacoli (la resistenza di cui abbiamo parlato poco fa'), la corrente passa con il massimo potenziale dal quale viene generata
:::

Per capire come dimensionare la resistenza da usare per non bruciare i led, dovremo ricorrere alla **legge di Ohm**, pero' tratteremo l'argomento piu' avanti, non in questa lezione

:::tip
Potete pensare al **potenziale**, definito con la lettera **V**, come la **pressione** dell'acqua, mentre la **corrente**, definita con la lettera **I**, puo' essere paragonata alla quantita' del gettito di acqua
::: 

Cercando di semplificarci la vita, per questo primo esempio utilizzeremo il LED saldato direttamente sulla scheda. Ciò è possibile perché lo stesso Arduino integra una resistenza in modo tale da evitare che il led si bruci

Prima di passare alla programmazione vera e propria, volevo mostrarvi un oggetto per me molto importante per creare circuiti con Arduino: la **bread board** (o **basetta**)

La breadboard e' una piastra per creare prototipi senza usare il saldatore e la piastra mille fori. Se vi interessa sapere come funziona, chiedetelo e faremo una leziona bonus su questo oggetto, e soprattutto spiegherò come creare prototipi digitali delle vostre creazioni con [Tinkercad](https://www.tinkercad.com/), e questi due esempi sono fatti apposta con questo software, dove vi mostro come collegare un led esterno con la breadboard e senza

**Esempio di connessione LED senza breadboard**

[![Flyingbear Ghost - Arduino Tutorial - Lesson 2 - Get to know better the Arduino Nano - Arduino LED wiring](/img/arduino/lezione2/connessionearduinoled1.webp)](/img/arduino/lezione2/connessionearduinoled1.webp)

Connessione Arduino con led e breadboard

[![Flyingbear Ghost - Arduino Tutorial - Lesson 2 - Get to know better the Arduino Nano - Arduino LED wiring](/img/arduino/lezione2/connessioneArduinoled2.webp)](/img/arduino/lezione2/connessioneArduinoled2.webp)

Se invece mettete il led senza resistenza, si accende ma il simulatore vi segnalerà un over load, perchè la corrente che passa è maggiore di quella che potrebbe reggere il led

[![Flyingbear Ghost - Arduino Tutorial - Lesson 2 - Get to know better the Arduino Nano - Arduino LED wiring without resistor](/img/arduino/lezione2/arduinoledsenzaresistenza.webp)](/img/arduino/lezione2/arduinoledsenzaresistenza.webp)

Per concludere questa pappardella, ecco l'interfaccia del simulatore di circuiti elettronici di Tinkercad

[![Flyingbear Ghost - Arduino Tutorial - Lesson 2 - Get to know better the Arduino Nano - Tinkercad Circuit Simulator](/img/arduino/lezione2/esempio-circuito-arduino.webp)](/img/arduino/lezione2/esempio-circuito-arduino.webp)

Per la cronaca: questo sarebbe un semaforo

## E ora programmiamo veramente

In realtà il programma lo avete visto la settimana scorsa nella prima lezione, ma ora lo rivediamo, in una forma più grezza e primitiva. Noi vogliamo accendere un led e basta

``` C++ code
void setup()
{
  pinMode(13, OUTPUT);

// qui dico che il pin 13 (che è pure il pin che abilito per usare il led integrato sulla scheda)
// deve essere un pin di output, cioè che e' un pin al quale posso inviare 
// una tensione di corrente necessaria per accendere il led
}

void loop()
{
  digitalWrite(13, HIGH);

// qui dico il  pin 13 deve avere uscita HIGH, cioè deve inviare una tensione 
// se invece scrivo LOW non invia alcuna tensione e il LED si spegne

}
```

:::info
Questo programma inizializza il pin numero 13 come output e, ad ogni riavvio del loop (ciclo), invia una tensione positiva su quel pin, che, passando nel LED, poi lo fa illuminare
In questo caso, il pin rimarra' sempre acceso (non abbiamo specificato l'istruzione per non inviare nessun segnale, quindi il led non si spegnera' mai)
:::

Adesso approfondiamo il comando **digitalWrite (pin, status)** partendo da questo esempio

``` C++ code
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
```

:::info
Questo programma inizializza il pin numero 13 come output e, ad ogni riavvio del loop (ciclo), esegue una serie di istruzioni

Queste istruzioni sono una sequenza di segnali positivi e nulli (HIGH e LOW) sul pin, che faranno accendere e spegnere il LED

Il comando **delay** indica al microcontrollore di mettere in pausa l'esecuzione del programma, in questo caso per 1000 millisecondi (cioe' un secondo), per poi passare all'esecuzione dell'istruzione successiva
:::

Ma ora vediamo una versione più corta, perché tenete conto avete sempre kbyte di memoria e non megabyte, perciò più il programma che scriviamo è corto, meno spazio occupera', meglio sara'

Ora rendiamolo più compatto, nel frattempo impareremo un altro comando

[![Flyingbear Ghost - Arduino Tutorial - Lesson 2 - Get to know better the Arduino Nano - Tinkercad Circuit Simulator - Blink LED with loop](/img/arduino/lezione2/programmazione-1.webp)](/img/arduino/lezione2/programmazione-1.webp)

Ecco il listato per chi vuole provare, ma è pigro a scrivere

``` C++ code
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

Peccato che non possa mettere animazioni, senno' vedreste il vostro led lampeggiare ogni secondo

Abbiamo appena introdotto una delle colonne portanti della programmazione: il **ciclo for**

Un ciclo permette di specificare quante volte ripetere l'istruzione o le istruzioni racchiuse tra parentesi graffe. Una volta terminato il ciclo, il programma continua ad eseguire le istruzioni successive

:::tip Sintassi del ciclo for

Dobbiamo prima specificare una variable (count), che fungera' da contatore per il ciclo, per ora inizializzata col valore 1

Ad ogni ripetizione del ciclo, il firmware controllera' se il valore della variable count e' inferiore a 6 (come specificato nella seconda istruzione del ciclo for, pero' potremmo settare questo valore con qualunque cifra vogliamo). Se il valore di count e' inferiore a 6, il programma aumentera' il valore di questa variabile (count++) di una unita', poi eseguira' le istruzioni. Una volta terminate le istruzioni, il controllo ricominicia daccapo, fin quando il valore di count non e' minore di 6, quindi quando il valore di count e' esattamente 6

Quando questa condizione si verifica, il ciclo termina
:::

<DisplayAd/>

## Per concludere la lezione di oggi

Volevo spiegarvi il funzionamento dei comandi che abbiamo introdotto oggi, cioè:

- **pinMode**: pinmode("id del pin che vogliamo utilizzare", "selezionare se è un input oppure un output");

- **digitalWrite** : digitalwrite ("id del PIN che vogliamo cambiare lo stato", "dichiarare lo stato cioe high or low") 

- **delay**: delay("quanti millisecondi deve fermarsi ed attendere prima di continuare" )

-  **for**: istruzione dove fa un determinato computo per un determinato numero di volte fino a quando la condizione di controllo è vera, ma lo spiegheremo bene più in avanti

**Prima di lasciarvi eccovi un semplice gioco: Trova le differenze.**

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

Uno funzionerà, l'altro no. Perche'??? 

Un piccolo aiuto: nella programmazione la sintassi è fondamentale!

La prossima lezione sarà proprio sulla sintassi e sul perché dobbiamo inserire i comandi **void setup()** e **void loop()**

Senza questi concetti non andremo avanti, ma volevo darvi del materiale su cui riflettere e al limite provare sul simulatore di circuiti. 

:::tip
essendo i linguaggi di programmazione nati in paesi anglosassoni, la "{" e "}" sono  molto importanti, e sono visibili sulle tastiere,  e perciò anche se non le vedete sulle vostre tastiere italiane le potete comunque inserire con la combinazione di tasti **"ALTGR+SHIFT+[ oppure ]"**.
:::

<DisqusComments
  slug="/arduino/arduino_lezione_due"
  articleId="13"
  title="Arduino_Tutorial_Lezione_2"
/>