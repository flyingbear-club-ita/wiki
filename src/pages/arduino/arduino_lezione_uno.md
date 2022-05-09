---
title: Corso di Arduino - Lezione 1 - Introduzione
slug: /arduino/arduino_lezione_uno
hide_table_of_contents: true
description: Prima lezione del corso di Arduino - Introduzione ai vari microcontrollori ed installazione dell'Arduino IDE
keywords: ["3d printing", "flying bear", "flyingbear", "flying bear ghost", "flyingbear ghost", "flyingbear ghost 5", "flying bear ghost 5", "stampa 3d", "arduino", "microcontrollori", "arduino tutorial", "arduino lesson"]
image: /img/arduino/lezione1/arduinoVarious.webp
---
import DisplayAd from '../../components/displayAd'

import DisqusComments from '../../components/disqusComments'


# Corso di Arduino: Lezione 1 - Introduzione delle varie schede, installazione dell'IDE
[![Flyingbear Ghost - Arduino Tutorial - Lesson 1 - Introduction - Various Arduino board](/img/arduino/lezione1/arduinoVarious.webp)](/img/arduino/lezione1/arduinoVarious.webp)

## Perché un altro corso?

Internet è piena di tutorial, corsi a pagamento o free, video, sulla famiglia delle schede Arduino, quindi perché ne vogliamo fare un altro???

E' la stessa domanda che mi sono posto anche io quando ho deciso e ho proposto di fare questo corso, potrei dire perché il nostro sarà diverso, sarà più completo, sarà adatto al nostri utenti, e forse un domani potrebbe anche essere cosi ma ora come ora il 99% del corso è ancora nella mia testa e non ha voglia di uscire come un nerd davanti alla playstation... 

La risposta non è semplice, ma cercherò di darla comunque:  non essendo un corso a cui abbiamo fissato dei paletti e dove abbiamo già deciso a prescindere cosa fare e cosa spiegare, lo renderemo  flessibile e seguirà le idee e i suggerimenti di dove vorranno andare gli utenti che lo seguiranno. Attenti, non voglio dire che salteremo di da un concetto all'altro senza insegnare nulla, seguendo le richieste e le mode come delle banderuole che cambiano direzione e noi obiettivi al cambiare del vento, ma solo che saremo attenti ai vostri suggerimenti e il corso lo costruiremo assieme a voi, lezione dopo lezione, e se servirà di fermeremo tutto il tempo necessario per spiegare e che siano chiare le nozioni fondamentali, perché senza una base solida non si può costruire nulla sopra, e soprattutto perché la mia regola fondamentale è non lasciare mai nessuno indietro e quando servirà fermarsi su alcuni concetti difficili da capire lo faremo, e se qualcuno si lamenterà perché non andiamo avanti veloci visto che il genio ha capito tutto, gli risponderò con estrema gentilezza, "levati dalle palle internet è piena di corsi", ma spero non dovremo mai arrivare a questo. Come ho detto prima lo scopo finale del corso lo conosco solo io, ma non ve lo dico (ma vi basta guardare la figura qui sotto per capirlo)

[![Flyingbear Ghost - Arduino Tutorial - Lesson 1 - Introduction - Otto Robot](/img/arduino/lezione1/otto-robot.webp)](/img/arduino/lezione1/otto-robot.webp)

Ora che lo avete capito tutti per cosa useremo la nostra bella scheda Arduino (in questo caso **Arduino nano**, ma ogni altra scheda Arduino che avete già disponibile può andare bene per iniziare)

<DisplayAd/>

E allora in un sito sulla stampa 3D cosa cavolo c'entra un robot? 

1. Bhe, i pezzi del robot si stampano con la stampante 3D (lo so, è tirata per i capelli...)

2. Un robot ha bisogno di input, output, di motori passo passo, proprio come la stampa 3D e noi vedremo come funzionano, anche per capire meglio come funziona la nostra stampante

3. Impareremo un po' di programmazione , pero' **non vedremo solo i linguaggi  di programmazione di Arduino**, ma anche alcuni esempi di **programmazione visuale** (*Un Linguaggio di Programmazione Visuale è un linguaggio che consente la programmazione tramite la manipolazione grafica degli elementi,  e non tramite sintassi scritta*), in poche parole uniremo diversi oggetti sullo schermo, ad esempio con un software chiamato **Scratch**, dove ogni oggetto è un insieme di istruzioni software che comanderà il microprocessore a compiere determinate azioni , e poi quando avremo capito come funziona, allora entreremo nel dettaglio

Ricordatevi di una cosa: potete conoscere la sintassi di un linguaggio di programmazione, ma, se non sapete programmare, non sapete come si monta un diodo LED, oppure non sapete cosa può fare la vostra scheda Arduino, farete poca strada, e di questa parte qui tratteremo nelle prime lezioni

### Esempio

Proviamo ad accendere e spegnare un led 5 volte (estratto di un programma solo per esempio)   

Sento gia i criticoni pronti a dire che non funziona, ma quello che voglio far capire è che ci sono diversi modi per fare un programma:

- Potremmo scriverlo cosi:

```arduino
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
```

  

Oppure potremmo scriverlo cosi:

  ```arduino
  void setup()
  {
    pinMode(13, OUTPUT);
   
  }
  
  void loop()
  {
    for (int count = 0; count < 6; count++) 
    // accendiamo il led
    digitalWrite(13, HIGH);
    delay(1000);
    // spegniamo il led
    digitalWrite(13, LOW);
    delay(1000);
                 
     }
  ```

:::tip
Nel primo caso, stiamo alternando l'istruzione per accendere il led a quella per spegnerlo per ben sei volte, ripetendo istruzioni che abbiamo gia' utilizzato

Nel secondo caso, invece, stiamo dicendo al compilatore di ottimizzare le risorse dichiarando un loop con le istruzioni che vogliamo ripetere. Il loop avviene per sei volte, accendendo e spegnendo il led

Molto più corto !!!!!!!!!!
:::

Tenete presente che una scheda Arduino nano ha 2K di memoria: più il codice è ottimizzato, più potrete aggiungere feature nel vostro software

### Concludendo la nostra prefazione

Spero di avervi fatto venire voglia di seguire questo corso, e ripeto suggerimenti e critiche sono sempre accetti, ma chi mi conosce sa che preferisco i suggerimenti :-)

Saranno due le schede Arduino (la **Arduino Nano** e la **Arduino Uno**) a cui ci rivolgeremo in questo corso, anche se  in realtà sarà solo la **Arduino nano**, in quanto la scheda migliore per poter creare un robot che non sia grande quanto un Gundam ad altezza naturale, ma quando è possibile cercherò di inserire anche la seconda, anche solo come paragone, o mostrare le differenze

<DisplayAd/>

## Parliamo di Arduino, iniziamo da un po di teoria e da cosa andremo a programmare

### Iniziamo

Partiamo subito a spiegare la differenza tra Raspberry e Arduino

- Raspberry è un **single board computer**, cioè in una singola scheda avete processore, porte usb, ram, porta video, porta di uscita audio, porte di I/O e slot per una memoria di massa dove installare il sistema operativo 

- Arduino è una scheda di sviluppo per microcontrollori. Cosa vuole dire??? Lo vedrete se continuerete nella lettura dell'articolo

### Cominciamo con un po' di teoria

Arduino non è una singola scheda che monta solo un singolo tipo di microprocessore, ma un ecosistema dove troveremo una miriade di schede adatte alle varie esigenze

Questo vuol dire che la programmazione sarà simile, ma mai uguale, tra le varie schede per il differente numero di input/output a disposizione ad esempio, ma di queste differenze forse ne parleremo più approfonditamente in un futuro articolo. Oggi vorrei presentarvi alcuni modelli  per darvi una idea di massima della vastità dell'ecosistema in cui stiamo entrando:

**Arduino Uno Rev 3**

[![Flyingbear Ghost - Arduino Tutorial - Lesson 1 - Introduction - Arduino Uno](/img/arduino/lezione1/arduinoUno.webp)](/img/arduino/lezione1/arduinoUno.webp)

<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" width="120px" height="240px" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=flyingbearc0c-21&language=it_IT&o=29&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B008GRTSV6&linkId=e5081fa99f2fe688217b0786aa128333">
</iframe>

La versione più comune di Arduino, ed è di questa scheda di cui la maggior parte delle persone parla quando ci si riferisce ad un Arduino. Per chi inizia ad entrare in questo mondo, è una scelta obbligata, ma non questa volta!

--- 

**Arduino nano**

[![Flyingbear Ghost - Arduino Tutorial - Lesson 1 - Introduction - Arduino Nano](/img/arduino/lezione1/arduinoNano.webp)](/img/arduino/lezione1/arduinoNano.webp)

<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" width="120px" height="240px" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=flyingbearc0c-21&language=it_IT&o=29&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B01MS7DUEM&linkId=48e9a2112125031e1e7a8e08dc78e21f">
</iframe>

Un ottimo compromesso tra dimensione e praticità. L'Arduino Nano è leggermente più grande dell'Arduino mini, ma monta già una usb per programmarlo oppure alimentarlo. Inoltre esiste nelle versioni a 3,3V e a 5V,che lo rendono versatile e forse il migliore compromesso fra le versioni confrontate in questo articolo

--- 

**Arduino Mega**

[![Flyingbear Ghost - Arduino Tutorial - Lesson 1 - Introduction - Arduino Mega](/img/arduino/lezione1/arduinoMega.webp)](/img/arduino/lezione1/arduinoMega.webp)

<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" width="120px" height="240px" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=flyingbearc0c-21&language=it_IT&o=29&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B071W7WP35&linkId=29f058c13c47e4cf89311ddb2839a156">
</iframe>

Il Mega è la seconda versione che si incontra più facilmente in giro della famiglia: il Mega è come un fratello maggiore di Arduino Uno, più grosso e massiccio e potente con un numero maggiore di I/O (input and output)

Questa scheda dispone inoltre di 15 output che possono gestire la PWM. Il segnale PWM (pulse width modulation, ovvero modulazione a larghezza di impulso) è un segnale digitale in cui il periodo dell’impulso a livello alto varia rispetto al periodo del segnale. Questo tipo di segnale permette di ottenere un segnale analogico variando il periodo dell’impulso.

--- 

**Arduino Leonardo**

[![Flyingbear Ghost - Arduino Tutorial - Lesson 1 - Introduction - Arduino Leonardo](/img/arduino/lezione1/arduinoLeonardo.webp)](/img/arduino/lezione1/arduinoLeonardo.webp)

<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" width="120px" height="240px" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=flyingbearc0c-21&language=it_IT&o=29&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B008A36R2Y&linkId=bb74910004ae8205859ea921ef2dbd4a"></iframe>

Leonardo è una scheda che dispone di 20 digitali pin di input/output (di cui 7 possono essere utilizzate come uscite PWM e 12 come ingressi analogici), un clock a 16 MHz, una connessione micro USB, un jack di alimentazione, un header ICSP e un pulsante di reset

Contiene tutto il necessario per supportare il microcontrollore, per collegarla a un computer con un cavo USB o alimentarla con un adattatore AC-DC o una batteria

Un’altra differenza importante è che il processore è dotato di comunicazione diretta USB, il che permette alla scheda di essere vista dal computer anche come una normale periferica (HID)

--- 

**Arduino DUE**

[![Flyingbear Ghost - Arduino Tutorial - Lesson 1 - Introduction - Arduino DUE](/img/arduino/lezione1/arduinoDue.webp)](/img/arduino/lezione1/arduinoDue.webp)


<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" width="120px" height="240px" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=flyingbearc0c-21&language=it_IT&o=29&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B00A6C3JN2&linkId=1ca33ea651d106c81ebae4e64cedb2d1"></iframe>

Il primo Arduino a 32 Bit, per ora vi basti sapere questo ma inutile parlare di questo prodotto se dobbiamo iniziare a scoprire le basi

---  

### I vantaggi di utilizzare Arduino

Arduino ha un **processore integrato comprensivo di periferiche** (entrate, uscite e interfacce), perciò rende il prodotto oriented verso applicazioni elettroniche. Inoltre ha l'ambiente di sviluppo basato sull'hardware che fornisce un'interfaccia di programmazione con diverse librerie già pronte, che facilitano notevolmente la programmazione

Questo ambiente, chiamato IDE (Integrated Development Environment) è multipiattaforma, visto che è scritto in Java, e si presenta quindi allo stesso modo su Windows, Linux e macOS

Non c'è quindi da meravigliarsi che venga usato per la prototipazione o nell'insegnamento, come andremo a fare noi vertendo questo corso sulla costruzione di un **ROBOT**

Un altro vantaggio di Arduino è che può lavorare in sinergia con il Raspberry, anche se spesso vengono visti come concorrenti, però in realtà funzionano in modo completamente diverso, e, se vogliamo, complementare

### Svantaggi nell'utilizzare Arduino

Primo e più grave svantaggio di usare hardware Arduino compatibile o, per meglio scriverlo, clonato a basso costo da produttori cinesi e in vendita presso e-commerce cinesi. 

Nei driver che davano loro per collegarsi all'Arduino IDE  poteva esserci esserci dentro di tutto tra cui codici malevoli, cosa realmente successa nel 2014

Se non volete spendere i soldi per degli arduino originali, almeno usate marchi conosciuti come Elegoo su Amazon, ad esempio

<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" width="120px" height="240px" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=flyingbearc0c-21&language=it_IT&o=29&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B0716S43Q2&linkId=89a16fbc5a401687d278fc7d9bdcc97b"></iframe>

Un ulteriore svantaggio di Arduino si trova nella portabilità: non esiste una standardizzazione di Input, output o del microprocessore utilizzato

Questo viene mitigato dalle librerie e dall'IDE di programmazione, ma non risolto del tutto

Inoltre, nel momento in cui la versione standard delle schede deve essere ampliata tramite interfacce aggiuntive e funzioni I/O, l'hardware consente un upgrade la maggior parte delle volte semplice tramite le cosiddette shields (ne parleremo più approfondatemene più avanti nel corso, ma per una breve introduzione fate affidamento [a questa pagina]( http://playground.arduino.cc/Main/SimilarBoards#goShie) 

Tuttavia l'uso di questi moduli aggiuntivi, come ad esempio un buzzer, il Wi-Fi, un emettitore ad ultrasuoni oppure un emettitore e ricevitore ad infrarossi, fa aumentare velocemente la complessità e i costi del progetto

Ma ora basta teoria, vi starete annoiando e se non avete preso ancora un caffe o un dolcetto, per chi non lo beve ancora e per ZeroPX, andate a farlo, perché iniziamo a smanettare sul Pc ed ad installare l'IDE per la programmazione delle schede Arduino

Non vi preoccupate: con la teoria torneremo presto nella seconda lezione del corso

<DisplayAd/>

## Installiamo l'IDE 

Dopo spero la meritata pausa caffe, dolcetto, entrambi o quello che volete, eccoci arrivati alla installazione dell' Arduino IDE

Dovete andare su [questo indirizzo](https://www.arduino.cc/en/software) e scaricare l'ultima versione disponibile, in questo momento la **1.8.19** 

Vedrete che sulla destra ci sono le diverse versioni disponibili, sconsiglio la versione microsoft app, ma solo per la gestione futura dei debug, e andate a scaricare il pacchetto

[![Flyingbear Ghost - Arduino Tutorial - Lesson 1 - Download IDE](/img/arduino/lezione1/download-ide.webp)](/img/arduino/lezione1/download-ide.webp)

Scelta la versione corretta per il vostro pc, andiamo avanti (oggi ci concentreremo sulla versione per Windows, se volete anche come fare le installazioni su altri sistemi operativi, vi prego di segnalarcelo)

Facciamo doppio click sulla icona del programma che vogliamo installare e proseguiamo

[![Flyingbear Ghost - Arduino Tutorial - Lesson 1 - Setup IDE - Step 1](/img/arduino/lezione1/step-1-ide.webp)](/img/arduino/lezione1/step-1-ide.webp)

Premiamo **I Agree** e andiamo avanti

[![Flyingbear Ghost - Arduino Tutorial - Lesson 1 - Setup IDE - Step 2](/img/arduino/lezione1/step-2-ide.webp)](/img/arduino/lezione1/step-2-ide.webp)

Lasciamo le impostazioni di default e premiamo "**next**"

[![Flyingbear Ghost - Arduino Tutorial - Lesson 1 - Setup IDE - Step 3](/img/arduino/lezione1/step-3-ide.webp)](/img/arduino/lezione1/step-3-ide.webp)

Lasciamo anche qui le impostazioni di default e partiamo con la installazione premendo il pulsante **Install**

[![Flyingbear Ghost - Arduino Tutorial - Lesson 1 - Setup IDE - Step 4](/img/arduino/lezione1/step-4-ide.webp)](/img/arduino/lezione1/step-4-ide.webp)

Lasciamogli continuarela installazione

[![Flyingbear Ghost - Arduino Tutorial - Lesson 1 - Setup IDE - Step 5](/img/arduino/lezione1/step-5-ide.webp)](/img/arduino/lezione1/step-5-ide.webp)

A un certo punto vi verrà chiesto di installare un driver, accettate senza problemi e se volete rendete sempre attendibile i driver da "Arduino srl" cosi da velocizzare l'installazione.

[![Flyingbear Ghost - Arduino Tutorial - Lesson 1 - Setup IDE - Step 6](/img/arduino/lezione1/step-6-ide.webp)](/img/arduino/lezione1/step-6-ide.webp)

Eccovi l'installazione terminata, premiamo "**Close**" per completarla

Ora avrete una bella icona verde sul vostro desktop e nel vostro "start menu", proviamo a premerla

Eccoci al caricamento dell'IDE di arduino

[![Flyingbear Ghost - Arduino Tutorial - Lesson 1 - Setup IDE - Step 7](/img/arduino/lezione1/step-7-ide.webp)](/img/arduino/lezione1/step-7-ide.webp)

Se riceverete al primo accesso alcune segnalazioni da parte di Windows Defender, **consentite l'accesso**: e' solo l'apertura delle porte di comunicazione verso la periferiche Arduino

[![Flyingbear Ghost - Arduino Tutorial - Lesson 1 - Setup IDE - Step 8](/img/arduino/lezione1/step-8-ide.webp)](/img/arduino/lezione1/step-8-ide.webp)

Ed eccoci nella nostra bella interfaccia di **Arduido IDE**

[![Flyingbear Ghost - Arduino Tutorial - Lesson 1 - Setup IDE - Step 9](/img/arduino/lezione1/step-9-ide.webp)](/img/arduino/lezione1/step-9-ide.webp)

Immagino che siete tutti curiosi, beh, vi lascio ancora una operazione da compiere: aggiorniamo le librerie

Andate su strumenti e gestione librerie e vi verrà aperta una nuova finestra

[![Flyingbear Ghost - Arduino Tutorial - Lesson 1 - Setup IDE - Step 10](/img/arduino/lezione1/step-10-ide.webp)](/img/arduino/lezione1/step-10-ide.webp)

Qui trovate tutte le maggiori librerie per gli **shield**, ma questo a noi non interessa, lo vedremo più avanti (un'occhiata non ve la vieta nessuno, eh), noi ora siamo interessati ad aggiornarle, le librerie

[![Flyingbear Ghost - Arduino Tutorial - Lesson 1 - Setup IDE - Step 11](/img/arduino/lezione1/step-11-ide.webp)](/img/arduino/lezione1/step-11-ide.webp)


Vi verrà mostrata una finestra aggiuntiva. Se volete aggiungere altre librerie collegate a questa, selezionate quello che reputate più giusto, e, se siete novelli, selezionate solo la libreria che avete chiesto di aggiornare

[![Flyingbear Ghost - Arduino Tutorial - Lesson 1 - Setup IDE - Step 11](/img/arduino/lezione1/step-12-ide.webp)](/img/arduino/lezione1/step-12-ide.webp)

<DisplayAd/>

## Conclusioni

Per il primo contatto con il mondo Arduino, direi che possiamo fermarci qui, la prossima lezione sarà si più interessante, ma anche più complessa a causa della spiegazione dei Pin-out e di un po' di teoria su Arduino

Come al solito, lasciateci un commento qui sotto e fateci sapere se vi e' piaciuto, vi ha fatto schifo (impossibile!!!) oppure non vi cambia niente

<DisqusComments
  slug="/arduino/arduino_lezione_uno"
  articleId="12"
  title="Arduino_Tutorial_Lezione_1"
/>