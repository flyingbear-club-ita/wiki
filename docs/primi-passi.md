---
title: Primi Passi
slug: /
---
## Software
Il firmware, cioè il programma che fa funzionare la stampante, è installato nella memoria della scheda madre, contenuta nella base 

Può essere aggiornato molto facilmente tramite la scheda microSD fornita con la stampante

Un primo consiglio che possiamo darvi è di aggiornare immediatamente la stampante con il più recente firmware, da scaricare (link in fondo alla pagina): conterrà diversi bugfix e vi eviterà problemi di compatibilità con le guide su questa Wiki

Per prima cosa, effettuare un backup della scheda (passo facoltativo, se non vi importa niente del contenuto, che, di default, dovrebbe essere il file di config per il firmware e i file stl e gcode della vite e del bullone)

Una volta copiato il contenuto della scheda in una cartella di vostra preferenza:
1. Scaricate il firmware
2. Scompattatelo in una cartella che terrete come backup per sicurezza
3. Copiatene il contenuto nella microSD
4. Rimuovete il dispositivo USB
5. Inserite la scheda nella stampante (attenzione: la scheda va inserita capovolta rispetto a come si inserisce nell'adattatore!)
6. Spegnere (se accesa) e accendere la stampante

Una volta accesa, comparirà il logo della Flying Bear e poi una barra di progresso, che indicherà lo stato dell'installazione del firmware
[ ![Barra di progresso aggiornamento](/img/TFT_Update.jpg) ](/img/TFT_Update.jpg)


Completata questa operazione, vi si presentarà il menu. Siete un passo più vicini alla vostra prima stampa con la Flying Bear Ghost!
Non fatevi tentare dallo smanettare con il menu: 
1. Prendete subito la microSD
2. Estraetela
3. Inseritela nel computer
4. Scaricate il file robin_nano35_cfg.cur (controllare nome ed estensione)
5. Apritelo e salvatelo come robin_nano35_cfg.txt (*shortcut: F2 per Ubuntu, Enter per macOS*)

Questo file contiente tutti i principali parametri della stampante. Cambiare un valore in questo file permette di modificare quel valore sul firmware installato

Vediamo come e cosa cambiare:


Aprite il file robin_nano35_cfg.txt che avevate creato prima, apritelo con il vosto editor preferito. Cercate le seguenti linee e cambiate il parametro corrispondente (sempre almeno uno spazio tra la parola in maiuscolo ed il valore corrispondente. più spazi non contano)


### Lingua
 ```
 cfg_language_type 7 # Language selection 2 - English 3 - Russian 7 - Italiano
 ```

### Sicurezza
 ``` HEATER_0_MINTEMP 5 # It is recommended to set exactly 5 (not -5) to avoid overheating if the sensor 
 HEATER_1_MINTEMP 5 # It is recommended to set exactly 5 (not -5 ) in order to avoid overheating in the event of a sensor breakdown
 THERMAL_PROTECTION_PERIOD 30 # Polling time for thermal protection, seconds 
 THERMAL_PROTECTION_HYSTERESIS 10 # Change in degrees C 
 WATCH_TEMP_PERIOD 30 # Polling time for thermal protection, seconds 
 WATCH_TEMP_INCREASE 	2
 THERMAL_PROTECTION_BED_PERIOD 30 # Poll time for thermal protection, seconds 
 THERMAL_PROTECTION_BED_HYSTERESIS 3 # Change in degrees C 
 WATCH_BED_TEMP_PERIOD 60 # Poll time for thermal protection, seconds 
 WATCH_BED_TEMP_INCREASE 2 # Change 
```

### Wifi 
```
CFG_WIFI_AP_NAME # name of WiFi, write before # 
CFG_WIFI_KEY_CODE # password WiFi, write before #
```
Inserire come in foto il nome della vostra Wi-Fi e la password di accesso al Wi-Fi
![alt text](/img/wifi_config.png "wifi")

### Quinto punto calibrazione
È possibile aggiungere un punto ulteriore di calibrazione (a scelta dell'utente) nell'intefaccia (quattro di standard), per livellare il piatto anche al centro, oltre che negli angoli

Suggerimento: i primi quattro punti vanno bene, le coordinate sono giuste, il quinto punto dovrebbe essere centrale, modificare con coordinate del centro

```
 cfg_point_number 5
 cfg_point1:30,30						
 cfg_point2:235,30
 cfg_point3:235,190
 cfg_point4:30,190
 cfg_point5:125,105
```

La procedura di aggiornamento e' la solita


## Considerazioni finali
Prima di cominciare a stampare, passare alla pagina successiva, in cui ci sono tutte le calibrazioni necessarie