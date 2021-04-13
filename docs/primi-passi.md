---
title: Primi Passi
slug: /
---
## Software
Il firmware, cioè il programma che fa funzionare la stampante, è installato nella memoria della scheda madre, contenuta nella base. 

Può essere aggiornato molto facilmente tramite la scheda microSD fornita con la stampante.

Un primo consiglio che possiamo darvi è di aggiornare immediatamente la stampante con il più recente firmware, da scaricare [[Firmware|qui]]: conterrà diversi bugfix e vi eviterà problemi di compatibilità con le guide su questa Wiki e con le ultime versioni di cura (il nostro slicer preferito)

Per prima cosa, effettuare un backup della scheda (passo facoltativo, se non vi importa niente del contenuto, che, di default, dovrebbe essere il file di config per il firmware e i file stl e gcode della vite e del bullone).

Una volta copiato il contenuto della scheda in una cartella di vostra preferenza:
1. Scaricate il firmware;
2. Scompattatelo in una cartella che terrete come backup per sicurezza;
3. Copiatene il contenuto nella microSD;
4. Rimuovete il dispositivo USB;
5. Inserite la scheda nella stampante (attenzione: la scheda va inserita capovolta rispetto a come si inserisce nell'adattatore!);
6. Spegnere (se accesa) e accendere la stampante.

Una volta accesa, comparirà il logo della Flying Bear e poi una barra di progresso, che indicherà lo stato dell'installazione del firmware.
(inserire qui schermata dell'upgrade del firmware)

Completata questa operazione, vi si presentarà il menu. Siete un passo più vicini alla vostra prima stampa con la Flying Bear Ghost!
Non fatevi tentare dallo smanettare con il menu: 
1. Prendete subito la microSD;
2. Estraetela;
3. Inseritela nel computer;
4. Scaricate il file robin_nano35_cfg.cur (controllare nome ed estensione);
5. Apritelo e salvatelo come robin_nano35_cfg.txt (''shortcut: F2 per Ubuntu, Enter per macOS'').

Questo file contiente tutti i principali parametri della stampante. Cambiare un valore in questo file permette di modificare quel valore sul firmware installato.

Vediamo come e cosa cambiare:


Aprite il file robin_nano35_cfg.txt che avevate creato prima, apritelo con il vosto editor preferito. Cercate le seguenti linee e cambiate il parametro corrispondente (sempre almeno uno spazio tra la parola in maiuscolo ed il valore corrispondente. più spazi non contano)

(tradurre i commenti? Ci pensa NicVee)

### Lingua
 #Language setting 
 > cfg_language_type 7 # Language selection 2 - English 3 - Russian 7 - Italiano

### Sicurezza
 > HEATER_0_MINTEMP 5 # It is recommended to set exactly 5 (not -5) to avoid overheating if the sensor 
 > HEATER_1_MINTEMP 5 # It is recommended to set exactly 5 (not -5 ) in order to avoid overheating in the event of a sensor breakdown 

 > THERMAL_PROTECTION_PERIOD 30 # Polling time for thermal protection, seconds 
 > THERMAL_PROTECTION_HYSTERESIS 10 # Change in degrees C 
 > WATCH_TEMP_PERIOD 30 # Polling time for thermal protection, seconds 
 > WATCH_TEMP_INCREASE 	2
 > THERMAL_PROTECTION_BED_PERIOD 30 # Poll time for thermal protection, seconds 
 > THERMAL_PROTECTION_BED_HYSTERESIS 3 # Change in degrees C 
 > WATCH_BED_TEMP_PERIOD 60 # Poll time for thermal protection, seconds 
 > WATCH_BED_TEMP_INCREASE 2 # Change 

### Wifi 
 > CFG_WIFI_AP_NAME # name of WiFi, write before # 
 > CFG_WIFI_KEY_CODE # password WiFi, write before #

Inserire come in foto in CFG_WIFI_AP_NAME # il nome della vostra Wi-Fi e in CFG_WIFI_KEY_CODE # la Password di accesso al Wi-Fi.

### Calibrazione PID
ATTENZIONE!!! La calibrazione del PID deve essere sempre supervisionata: la temperatura dell'estrusore potrebbe salire troppo, se dovesse superare la temperatura desiderata del 15%, SPEGNERE SUBITO la stampante

Il PID e' un algoritmo di controllo per la temperatura del letto e del nozzle. Se ti trovi ad avere a che fare con fluttuazioni della temperatura, potresti avere bisogno di calibrare il PID.

Come si fa?
La prima cosa da fare e' scaricare un programma che sia in grado in mandare gcode alla stampante. 

Il nostro preferito e' repetier host (inserire link qui)

Prima di lanciare repetier host, connetti la stampante alla porta usb del computer tramite il cavo allegato (quello blu, da un lato usb, dall'altro usb type B), e assicurati che la stampante sia stata riconosciuta dal computer. 

Per i sistemi *nix, come '''Ubuntu''' e '''macOS''', non c'e' bisogno di fare niente, basta collegare il cavo

Per '''Windows''', a volte potrebbe essere necessario installare il [http://www.cesareriva.com/release/wp-content/uploads/2011/02/usb_serial_converter_ch340_windows_x64_drivers.zip driver Ch341]

Sempre per Windows, per verificare che la stampante sia connessa:
 1) Cercare ed aprire "Pannello di Controllo"
 2) scorrere la lista dei dispositivi
 3) cercare la stampante (non so come e' riconosciuta, qualche anima pia fornisca questa indicazione piu' screenshot)

In entrambi i casi, adesso potete lanciare repetier host

[da qui in poi non ho screenshots]
Appena lanciato, il programma non riconosce automaticamente la stampante, bisogna selezionare la porta di comunicazione (inserire qui l'informazione trovata prima dal Pannello di Controllo - COMXX) e il baudrate (115200)

Se la porta di comunicazione e' stata selezionata correttamente, il tasto "connetti" si attivera'. Cliccaci sopra

A questo punto, dovreste vedere un po' di log scorrere. Se vi da' fastidio il m105, che e' semplicemente un ping per la stampante, potete disabilitarlo navigando in "Preferences" e selezionando "remove temperature requests from log"

Prima di cominciare la calibrazione, bisogna riscaldare il nozzle, portandolo alla temperatura solitamente utilizzata (200/210 nella maggior parte dei casi), ed accendere la ventola

Il gcode per accendere la ventola e':
 M106 S255

Una volta raggiunta la temperatura desiderata, in alto a destra, nella sezione "Manage", troverete una sezione per inserire il gcode (inserire screenshot qui).
Il comando da inserire e' questo:
 M303 E0 S210 C8; 

 '''M303''' indica l'inizio del pid tuning
 '''E0''' rappresenta l'hotend da calibrare (la ghost ne ha solo uno, di default)
 '''S210''' rappresenta la temperatura scelta, se si stampa, per esempio, a 200, usare S200
 '''C8''' rappresenta il numero di cicli da effettuare, 8 e' il valore raccomandato per i firmware basati su Marlin

Questo comando inizia la sequenza di calibrazione del PID per l'estrusore.

Osservate il log: ad un certo punto, compriranno dei messaggi simili a questi:
 20: 44: 36.845: PID Autotune finished! Put the last Kp, Ki and Kd constants from below into Configuration.h 
 20: 44: 36.849: #define DEFAULT_Kp XX.XX 
 20: 44: 36.849: #define DEFAULT_Ki X.XX 
 20: 44: 36.853: #define DEFAULT_Kd XX. XX

Dove ci sono le XX, li' troverete i valori dopo la calibrazione

Adesso prendete questi valori e inseriteli nel file robin_nano35_cfg.txt nelle seguenti righe:
 > PIDTEMPE 1 # Mode 1: PID; 0: bang-bang 
 > DEFAULT_Kp 11.14 # P value 
 > DEFAULT_Ki 0.72 # I value 
 > DEFAULT_Kd 43.09 # D value 

La prima riga cambia il sistema di regolazione della temperatura da bang bang a PID

Nella seconda, terza e quarta riga, inserire i valori appena trovati con repetier host

Come al solito, caricare il file robin_nano35_cfg.txt sulla SD, inserire la scheda nella stampante, spegnere e riaccendere.

Voila', il PID dell'estrusore e' calibrato!

La calibrazione del PID del tavolo riscaldato e' analoga, pero' c'e' una modifica da fare nel file di config

Siccome il PID e' disabilitato di default, nel robin_nano3_cfg.txt bisogna modificare:

 PIDTEMPBED   0

in
 
 PIDTEMPBED 1

Una volta aggiornato il firmware (tramite robin_nano3_cfg.txt), il gcode da utilizzare e' il seguente:

 M303 E-1 S70 C8; 

n.b.
S70 rappresenta la temperatura scelta. Se si stampa solitamente col tavolo a 60, sostituire S70 con S60

=== [[#Quinto punto calibrazione|Quinto punto calibrazione]] ===
È possibile aggiungere un punto ulteriore di calibrazione (a scelta dell'utente) nell'intefaccia (quattro di standard)
A cosa serve un punto per la calibrazione? Lo vedremo dopo (riscrivere, fa schifo)
Suggerimento: i primi quattro punti vanno bene, le coordinate sono giuste, il quinto punto dovrebbe essere centrale, modificare con coordinate del centro

 >cfg_point_number 5
 >cfg_point1:30,30						
 >cfg_point2:235,30
 >cfg_point3:235,190
 >cfg_point4:30,190
 >cfg_point5:125,105

Una volta terminate queste modifiche, salvare il file.
Svuotate la SD card di tutti i contenuti, copiate solo il file robin_nano35_cfg.txt, inserite la SD card nella stampante, spegnete e riaccendete.
A questo punto, il software dovrebbe essere aggiornato con le impostazioni più recenti

## Hardware

Un primo passo imprescindibile dopo l'assemblamento della stampante è la calibrazione del piatto.

Per una spiegazione in italiano, guardate il [https://www.youtube.com/watch?v=mcPsrpu8TCE&t=368s video di overVolt su YouTube]

Per farla perfetta, guardate [https://www.youtube.com/watch?v=_EfWVUJjBdA questo video su YouTube]Più avanti aggiungeremo una traduzione italiana al video

## Considerazioni finali
La stampante, così com'è, dovrebbe già andare bene e produrre stampe di buona qualità.

Per chi non si accontenta della buona qualità, ci sono le altre sezioni..
