---
title: Firmware
slug: /firmware
---

In questa pagina puoi recuperare il firmware per la stampante e le procedure di verifica ed aggiornamento del firmware in uso.

## Verifica della versione attualmente installata
1. Dal menu principale della stampante tocca l'icona "Tool"
2. Tocca l'icona "About"
3. Troverai la versione del firmware indicata nella riga "Mainboard version"

## Procedura di aggiornamento
1. Scarica il file compresso del firmware
2. Estrai il file appena scaricato
3. Collega la microSD della stampante al PC/Mac
4. **Fai un backup dei file contenuti sulla microSD della stampante**
5. Copia l'intero contenuto (file e cartelle) all'interno della microSD
6. *Opzionale: Se in passato hai effettuato delle modifiche al file di configurazione "robin_nano35_cfg.txt", ricorda di inserire le stesse nel nuovo file, con lo stesso nome, che troverai nella cartella del nuovo firmware*
7. Spegni la stampante (se accesa)
8. Inserisci la microSD nella stampante
9. Riaccendi la stampante
10. Attendi il caricamento del nuovo firmware
11. Concluso l'aggiornamento sullo schermo della stampante visualizzerai il menu iniziale

**Attenzione: non spegnere per nessun motivo la stampante durante la procedura di aggiornamento!!!**

## Aumentare la velocita' di stampa
Il firmware stock limita la velocita' della stampante, che puo' raggiungere accelerazioni piu' elevate

Questa limitazione e' la causa principale della discrepanza tra i tempi stimati da cura e quelli effettivi di stampa

Per rimuovere le limitazioni, sostituire i seguenti valori nel robin_nano_cgf.txt ed aggiornare il firmware come descritto nella sezione Primi Passi


```
 >DEFAULT_X_MAX_FEEDRATE        300    #XÖáÄ¬ÈÏËÙ¶È (mm/s)
 >DEFAULT_Y_MAX_FEEDRATE        300    #YÖáÄ¬ÈÏËÙ¶È (mm/s)
 >DEFAULT_Z_MAX_FEEDRATE        5    #ZÖáÄ¬ÈÏËÙ¶È (mm/s)
 >DEFAULT_E0_MAX_FEEDRATE    100    #EÖáÄ¬ÈÏËÙ¶È (mm/s)
 >DEFAULT_E1_MAX_FEEDRATE    70    #EÖáÄ¬ÈÏËÙ¶È (mm/s)
 >DEFAULT_X_MAX_ACCELERATION    1000    #XÖáÄ¬ÈÏ×î´ó¼ÓËÙ¶È (change/s) change = mm/s
 >DEFAULT_Y_MAX_ACCELERATION    1000    #YÖáÄ¬ÈÏ×î´ó¼ÓËÙ¶È (change/s) change = mm/s
 >DEFAULT_Z_MAX_ACCELERATION    200    #ZÖáÄ¬ÈÏ×î´ó¼ÓËÙ¶È (change/s) change = mm/s
 >DEFAULT_E0_MAX_ACCELERATION    80000    #EÖáÄ¬ÈÏ×î´ó¼ÓËÙ¶È (change/s) change = mm/s
 >DEFAULT_E1_MAX_ACCELERATION    1000    #EÖáÄ¬ÈÏ×î´ó¼ÓËÙ¶È (change/s) change = mm/s
 >DEFAULT_ACCELERATION        1000    #X,Y,Z,E ´òÓ¡Ê±µÄÄ¬ÈÏ¼ÓËÙ¶È
 >DEFAULT_RETRACT_ACCELERATION    3000    #X,Y,Z,E »Ø³éÄ¬ÈÏ¼ÓËÙ¶È
 >DEFAULT_TRAVEL_ACCELERATION    1000    #X,Y,Z ·Ç´òÓ¡Ê±µÄÄ¬ÈÏ¼ÓËÙ¶È
 >DEFAULT_MINIMUMFEEDRATE    0.0    #Ä¬ÈÏ×îÐ¡ËÙ¶È
 >DEFAULT_MINSEGMENTTIME        20000    #»º´æ¿ÕÊ±£¬Ò»¸öÒÆ¶¯ËùÐèµÄ×îÐ¡Ê±¼ä(µ¥Î»ms). 
 >DEFAULT_MINTRAVELFEEDRATE    0.0    #
```

## Versioni firmware disponibili

### Ultima Versione
[https://cdn.discordapp.com/attachments/748683783053508608/765342649254281256/Ghost_5_firmware_V5-8.zip FlyingBear Ghost 5 v5.8]

[https://drive.google.com/file/d/1vDnWWdbUTEPOXtujBzZlqj_kYj7JfvA9/view?usp=drivesdk Flying Bear Ghost 4S/5 - V3.5.1]

### Versioni precedenti
[https://mega.nz/file/eSJjxaTI#JxVVNFDUrNq81HcS4XBuU9win8FDVtE-zTfRjMibIr8 Flying Bear Ghost 4S - V3.3]

[https://mega.nz/file/LTBXFICC#BSS9NieEZ_wKpGZhmtdu53qSCL3aKAt4C2mj3HF57tA Flying Bear Ghost 4S - V3.1]

[https://mega.nz/file/PDBXRYxZ#GvwkgY8vtL3-vpMNp3M9hTMODYWC7_Uf6s0ftMhUoXc Flying Bear Ghost 4S - V3]

[https://mega.nz/file/nWY31SKC#02tis-dXOA0T-f3d91e1os5ZQaT_qf-2zK_8AtFIhZc Flying Bear Ghost 4S - V2]

## Link utili
[https://youtu.be/YxKrXQ3jQcA Video-guida "Ghost 4S Firmware Upload Flying Bear" su YouTube]
