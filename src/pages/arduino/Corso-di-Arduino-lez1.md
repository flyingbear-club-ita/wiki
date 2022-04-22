# Corso di Arduino

## ![arduino various](E:\articoli\Corso Arduino da iniziare\arduino various.JPG)

## Perché un altro corso?

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

  

- Oppure potremmo scriverlo cosi:

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

Molto più corto !!!!!!!!!!

Tenete presente che una scheda Arduino nano ha 2K di memoria, più il codice è ottimizzato più potrete aggiungere feature nel vostro software.

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

 Arduino ha un **processore integrato comprensivo di periferiche** (entrate, uscite e interfacce), perciò rende il prodotto oriented verso applicazioni elettroniche. Inoltre ha l'ambiente di sviluppo basato sull'hardware che fornisce un'interfaccia di programmazione con diverse librerie già pronte, che facilitano notevolmente la programmazione. questo ambiente l'IDE (visto che è scritto in Java) è multipiattaforma e si presenta quindi allo stesso modo su Windows, Linux e macOS. Perciò non c'è da meravigliarsi che venga usato per la prototipizzazione o nell'insegnamento, come andremo a fare noi vertendo questo corso sulla costruzione di un **ROBOT**. Un altro vantaggio di Arduino, è che può lavorare in sinergia con il Raspberry, anche se spesso vengono visti come concorrenti però in realtà  funzionano in modo completamente diverso, e se vogliamo complementare.

### Svantaggi nell'usare l'hardware Arduino

Primo e più grave svantaggio di usare hardware Arduino compatibile o per meglio scriverlo clonato a basso costo da produttori cinesi e in vendita presso e-commerce cinesi. Nei driver che davano loro per collegarsi all'Arduino IDE  poteva esserci esserci dentro di tutto tra cui codici malevoli, cosa realmente successa nel 2014. Se non volete spendere i soldi per degli arduino originali, almeno usate marchi conosciuti come Elegoo su amazon ad esempio https://www.amazon.it/Elegoo-Scheda-Microcontrollore-ATmega328P-Arduino/dp/B0716S43Q2/ref=sr_1_1_sspa?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=39Q6IZEZMXB97&keywords=elegoo%2Barduino%2Bnano&qid=1649060919&s=pc&sprefix=elegoo%2Barduino%2Bnan%2Ccomputers%2C94&sr=1-1-spons&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExVUlGU0VHWURRUjMzJmVuY3J5cHRlZElkPUEwODE4OTk3M1ROMUE2STNaSERJRSZlbmNyeXB0ZWRBZElkPUEwODMwNDA4MTNPWEY0MzVTU005RyZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU&th=1 un ulteriore svantaggio di Arduino si trova nella portabilità, non esiste una standardizzazione di Input, output o del microprocessore utilizzato. Questo viene mitigato dalle librerie e dall'IDE di programmazione, ma non risolto del tutto. Inoltre n el momento in cui la versione standard delle schede deve essere ampliata tramite interfacce aggiuntive e funzioni I/O, l'hardware consente un upgrade la maggior parte delle volte semplice tramite le cosiddette shields (ne parleremo più approfondatemene più avanti nel corso, ma per una breve introduzione fate affidamento a questa pagina http://playground.arduino.cc/Main/SimilarBoards#goShie) tuttavia l'uso di questi moduli aggiuntivi ad esempio per il collegamento Ethernet, un buzer, il Wi-Fi,un emettitore ad ultrasuoni, ma anche un emettitore ad infrarossi  e un ricevitore sempre ad infrarossi,  la funzione LED e altri fa aumentare velocemente la complessità e i costi del progetto. Ma ora basta teoria, vi starete annoiando e se non avete preso ancora un caffe o un dolcetto per chi non lo beve ancora e per Paolo, andate a farlo, perché iniziamo a smanettare sul Pc ed ad installare l'interfaccia IDE per la programmazione delle schede Arduino. Non vi preoccupate con la teoria torneremo presto nella seconda lezione del corso.

### Installiamo l'IDE 

Dopo spero la meritata pausa caffe, dolcetto, entrambi o quello che volete, eccoci arrivati alla installazione dell' Arduino IDE.

Dovete andare su questo indirizzo https://www.arduino.cc/en/software e scaricate l'ultima versione disponibile, in questo momento la 1.8.19. Vedrete che sulla destra ci sono le diverse versioni disponibili, sconsiglio la versione microsoft app, ma solo per la gestione futura dei debug, e andate a scaricare il pacchetto.

![download ide](E:\articoli\Corso Arduino da iniziare\immagini lez 1\download ide.PNG)

Scelta la versione corretta per il vostro pc, andiamo avanti ( oggi ci concentreremo sulla versione per Windows, se volete anche come fare le installazioni su altri sistemi operativi, vi prego di segnalarcelo).

- Facciamo doppio click sulla icona del programma che vogliamo installare e proseguiamo

  ![step-1-ide](E:\articoli\Corso Arduino da iniziare\immagini lez 1\step-1-ide.PNG)



- Premiamo "**I Agree**" e andiamo avanti

  ![step-2-ide](E:\articoli\Corso Arduino da iniziare\immagini lez 1\step-2-ide.PNG)

- lasciamo le impostazioni di default e premiamo "**next**"

  ![step-3-ide](E:\articoli\Corso Arduino da iniziare\immagini lez 1\step-3-ide.PNG)

- lasciamo anche qui le impostazioni di default e partiamo con la installazione premendo il pulsante "**Install**"

![step-4-ide](E:\articoli\Corso Arduino da iniziare\immagini lez 1\step-4-ide.PNG)

- Lasciamogli continuarela installazione

  ![step-5-ide](E:\articoli\Corso Arduino da iniziare\immagini lez 1\step-5-ide.PNG)

- A un certo punto vi verrà chiesto di installare un driver, accettate senza problemi e se volete rendete sempre attendibile i driver da "Arduino srl" cosi da velocizzare l'installazione.

  ![step-6-ide](E:\articoli\Corso Arduino da iniziare\immagini lez 1\step-6-ide.PNG)

- Eccovi l'installazione terminata, premiamo "**Close**" per completarla.

- Ora avrete una bella icona verde sul vostro desktop e nel vostro "start menu", proviamo a premerla. Ed eccoci al caricamento dell'IDE di arduino

   ![step-7-ide](E:\articoli\Corso Arduino da iniziare\immagini lez 1\step-7-ide.PNG)

- Se riceverete al primo accesso,  alcune segnalazioni da parte di Windows Defender, **consentite l'accesso**, sono solo l'apertura delle porte di comunicazione verso la periferiche Arduino.

  ![step-8-ide](E:\articoli\Corso Arduino da iniziare\immagini lez 1\step-8-ide.PNG)

- Ed eccoci nella nostra bella interfaccia di **Arduido IDE**

  ![step-9-ide](E:\articoli\Corso Arduino da iniziare\immagini lez 1\step-9-ide.PNG)

- Immagino che siete tutti curiosi, beh, vi lascio ancora una operazione da compiere, aggiorniamo le librerie. 

- Andate su strumenti e gestione librerie e vi verrà aperta una nuova finestra

  ![step-10-ide](E:\articoli\Corso Arduino da iniziare\immagini lez 1\step-10-ide.PNG)

- Qui trovate tutte le maggiori librerie per gli **shield**, ma questo a noi non interessa, lo vedremo più avanti ( ma una occhiata non ve la vieta nessuno), noi ora siamo interessati ad aggiornarle le librerie.

  ![step-11-ide](E:\articoli\Corso Arduino da iniziare\immagini lez 1\step-11-ide.PNG)

- Vi verrà mostrata una finestra aggiuntiva, se volete aggiungere altre librerie collegate a questa,  selezionate quello che reputate più giusto, e se siete novelli selezionate solo la libreria che avete chiesto di aggiornare.

  ![image-20220404112756115](C:\Users\nk\AppData\Roaming\Typora\typora-user-images\image-20220404112756115.png)



### Conclusioni

Per il primo contatto con il mondo Arduino, direi che possiamo fermarci qui, la prossima lezione sarà si più interessante, ma anche più complessa a causa della spiegazione dei Pin-out e di un pò di teoria su Arduino.
