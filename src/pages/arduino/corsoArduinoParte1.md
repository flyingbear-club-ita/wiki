# Corso di Arduino

## ![arduino various](E:\articoli\Corso Arduino da iniziare\arduino various.JPG)

## Perchè un altro corso?

Internet è piena di tutorial, corsi a pagamento o free, video, su alla famiglia delle schede  Arduino, perché ne vogliamo fare un altro?

E' la stessa domanda che mi sono posto anche io quando ho deciso e ho proposto di fare questo corso, potrei dire perché il nostro sarà diverso, sarà più completo, sarà adatto al nostri utenti, e forse un domani potrebbe anche essere cosi ma ora come ora visto che il 99% del corso è ancora nella mia testa che non ha voglia di uscire come un nerd davanti alla playstation. La risposta non è semplice, ma cercherò di darla comunque:  non essendo un corso a cui abbiamo fissato dei paletti e dove abbiamo già deciso a prescindere cosa fare e cosa spiegare, lo renderemo  flessibile e seguirà le idee e i suggerimenti di dove vorranno andare gli utenti che lo seguiranno. Attenti,  non voglio dire che salteremo di da un concetto all'altro senza insegnare nulla, seguendo le richieste e le mode come delle banderuole che cambiano direzione e noi obiettivi al cambiare del vento, ma solo che saremo attenti ai vostri suggerimenti e il corso lo costruiremo assieme a voi,  lezione dopo lezione, e se servirà di fermeremo tutto il tempo necessario per spiegare e che siano chiare le nozioni fondamentali, perché senza una base solida non si può costruire nulla sopra, e soprattutto perché la mia regola fondamentale è non lasciare mai nessuno indietro e quando servirà fermarsi su alcuni concetti difficili da capire lo faremo, e se qualcuno si lamenterà perché non andiamo avanti veloci viso che il genio ha capito tutto, gli risponderò con estrema gentilezza, "levati dalle palle internet è piena di corsi", ma spero non dovremo mai arrivare a questo. Come ho detto prima lo scopo finale del corso lo conosco solo io, ma non ve lo dico ( ma vi basta guardare la figura qui sotto per capirlo. 

![otto-robot](E:\articoli\Corso Arduino da iniziare\otto-robot.png)

Ora che lo avete capito tutti cosa useremo la nostra bella  scheda Arduino ( in questo caso **Arduino nano**, ma ogni altra scheda Arduino che avete già disponibile può andare bene per iniziare). E allora in un sito sulla stampa 3D cosa cavolo centra un robot  ? 

- Bhe **primo** i pezzi del robot si stampano con la stampante 3D,  ( lo so è tirata per i capelli)

- **Secondo** un robot ha bisogno di input, output, di motori passo passo, proprio come la stampa 3D e noi vedremo come funzionano, anche per capire meglio come funziona la nostra stampante.

- **Terzo**, impareremo un po' di programmazione , ma   **non vedremo solo i linguaggi  di programmazione di Arduino**, ma anche alcuni esempi di **programmazione visuale** (*Un Linguaggio di Programmazione Visuale è un linguaggio che consente la programmazione tramite la manipolazione grafica degli elementi,  e non tramite sintassi scritta*), in poche parole uniremo diversi oggetti sullo schermo, ad esempio con un software chiamato **Scratch**, dove ogni oggetto è un insieme di istruzioni software che comanderà il microprocessore a compiere determinate azioni , e poi quando avremo capito come funziona, allora entreremo nel dettaglio. Ricordatevi di una cosa, potete conoscere la sintassi di un linguaggio di programmazione ma se non sapete programmare, non sapete come si monta un diodo LED oppure non sapete cosa può fare la vostra scheda Arduino farete poca strada, e di questa parte qui tratteremo nelle prime lezioni.

### Esempio

- Proviamo ad accendere e spegnare un led 5 volte (estratto di un programma solo per esempio)   sento gia i criticoni pronti a dire non funziona ma quello che voglio far capire è che ci sono diversi modi per fare un programma:

  - Oppure potremmo scriverlo cosi:

    ```arduino
    void  {
      // accendiamo il led
      digitalWrite(2, HIGH);
      delay(1000);
      // spegniamo il led
      digitalWrite(2, LOW);
        // accendiamo il led
      digitalWrite(2, HIGH);
      delay(1000);
      // spegniamo il led
      digitalWrite(2, LOW);
        // accendiamo il led
      digitalWrite(2, HIGH);
      delay(1000);
      // spegniamo il led
      digitalWrite(2, LOW);
        // accendiamo il led
      digitalWrite(2, HIGH);
      delay(1000);
      // spegniamo il led
      digitalWrite(2, LOW);
        // accendiamo il led
      digitalWrite(2, HIGH);
      delay(1000);
      // spegniamo il led
      digitalWrite(2, LOW);
        // accendiamo il led
      digitalWrite(2, HIGH);
      delay(1000);
      // spegniamo il led
      digitalWrite(2, LOW);
       }
    ```

  

- Oppure potremmo scriverlo cosi:

  ```arduino
  void loop() {
  
    for (int count = 1; count < 6; count++) 
    // accendiamo il led
    digitalWrite(2, HIGH);
    delay(1000);
    // spegniamo il led
    digitalWrite(2, LOW);
     }
  ```

Molto più corto !!!!!!!!!!

Tenete presente che una scheda arduino nano ha 2K di memoria, più il codice è ottimizzato piu potrete aggiungere feature nel vostro software.

### Concludendo la nostra prefazione

Spero di avervi fatto venire voglia di seguire questo corso, e ripeto suggerimenti e critiche sono sempre accetti, ma chi mi conosce sa che preferisco i suggerimenti :-)

Saranno   2 le  schede Arduino, la **Arduino Nano** e la **Arduino Uno**  a cui ci rivolgeremo in questo corso, anche se  in realtà sarà solo la **Arduino nano** in quanto la scheda migliore per poter creare un robot che non sia grande quanto un Gundam ad altezza naturale,  ma quando è possibile cercherò inserire anche la seconda anche solo come paragone, o mostrare le differenze.

### Parliamo di Arduino, iniziamo da un po di teoria e da cosa andremo a programmare

### Iniziamo

Partiamo subito a spiegare la differenza tra Raspberry e Arduino.

- Raspberry è un single board computer, cioè in una singola scheda avete processore, porte usb, ram, porta video, porta di uscita audio, porte di I/O e slot per una memoria di massa dove installare il sistema operativo 

- Arduino è una scheda di sviluppo per microcontrollori, cosa vuole dire? Lo vedrete se continuerete nella lettura dell'articolo.



### Cominciamo con un po' di teoria

Arduino non è una singola scheda che monta solo un singolo tipo di  microprocessore, ma un ecosistema dove troveremo una miriade di schede adatte alle varie esigenze. Questo vuol dire che la programmazione sarà simile ma mai uguale tra le varie schede per il differente numero di input/output a disposizione ad esempio, ma di queste differenze forse ne parleremo più approfonditamente in un futuro articolo. Oggi vorrei presentarvi alcuni modelli  per darvi una idea di massima della vastità dell'ecosistema in cui stiamo entrando:

- **Arduino Uno Rev 3**  https://amzn.to/3rJwNfI
  La versione più comune di Arduino, ed è di questa scheda di cui la maggior parte delle persone parla quando ci si riferisce ad un Arduino, per chi inizia ad entrare in questo mondo è una scelta obbligata, ma non questa volta.![arduino uno r3](E:\articoli\rasp vs arduino\arduino uno r3.png)

**Arduino nano**https://www.amazon.it/AZDelivery-Nano-Microcontroller-compatibile-Development/dp/B01MS7DUEM/ref=asc_df_B01MS7DUEM/?tag=googshopit-21&linkCode=df0&hvadid=279839786140&hvpos=&hvnetw=g&hvrand=11014276735626477807&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1008337&hvtargid=pla-423011792615&psc=1

Un ottimo compromesso tra dimensione e praticità. L'Arduino Nano,è leggermente più grande dell'Arduino mini,ma monta già una usb per programmarlo oppure alimentarlo. Inoltre esiste nelle versioni a 3,3V e a 5V,che lo rendono versatile e forse il migliore compromesso fra le versioni confrontate in questo articolo.







**Arduino Mega** https://amzn.to/3GXciCJ![arduino mega](E:\articoli\rasp vs arduino\arduino mega.png)

Il Mega è la seconda versione che si incontra più facilmente in giro della famiglia: il Mega è come un fratello maggiore di Arduino Uno, più grosso e massiccio e potente con un numero maggiore di I/O (input and output). Questa scheda dispone inoltre di 15 output  dei quali possono gestire la PWM. Il segnale PWM (pulse width modulation, ovvero modulazione a larghezza di impulso) è un segnale digitale in cui il periodo dell’impulso a livello alto varia rispetto il periodo del segnale. Questo tipo di segnale permette di ottenere un segnale analogico variando il periodo dell’impulso.

- ##### Arduino Leonardo https://amzn.to/3KEhFJ5

  ![leonardo](E:\articoli\rasp vs arduino\leonardo.png)

  Usato da un utente del nostro gruppo per costruirsi un joistick 3D [GitHub - FaqT0tum/Orbion_Space_Mouse: ORBION the OpenSource Space Mouse 3D](https://github.com/FaqT0tum/Orbion_Space_Mouse).

  Leonardo è una scheda che dispone di 20 digitali pin di input/output (di cui 7 possono essere utilizzate come uscite PWM e 12 come ingressi analogici), un clock a 16 MHz, una connessione micro USB, un jack di alimentazione, un header ICSP e un pulsante di reset. Contiene tutto il necessario per supportare il microcontrollore, per collegarla a un computer con un cavo USB o alimentarla con un adattatore AC-DC o una batteria.
  Un’altra differenza importante è che processore è dotato di comunicazione diretta USB, questo permette alla scheda di essere vista dal computer anche come una normale periferica.

  ##### Arduino DUE https://amzn.to/3KGQ5e8![arduino 2](E:\articoli\rasp vs arduino completato\arduino 2.png)

  Il primo Arduino a 32 Bit, per ora vi basti sapere questo ma inutile parlare di questo prodotto se dobbiamo iniziare a scoprire le basi.

###  

### I vantaggi sul perchè si usa Arduino

 Arduino ha un **processore integrato comprensivo di periferiche** (entrate, uscite e interfacce), perciò rende il prodotto oriented verso applicazioni elettroniche. Inoltre ha l'ambiente di sviluppo basato sull'hardware che fornisce un'interfaccia di programmazione con diverse librerie già pronte, che facilitano notevolmente la programmazione. questo ambiente l'IDE (visto che è scritto in Java) è multipiattaforma e si presenta quindi allo stesso modo su Windows, Linux e macOS. Perciò non c'è da meravigliarsi che venga usato per la prototipizzazione o nell'insegnamento, come andremo a fare noi vertendo questo corso sulla costruzione di un **ROBOT**

