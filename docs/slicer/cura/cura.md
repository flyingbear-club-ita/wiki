---
title: Informazioni
slug: /slicer/cura
description: Ultimaker Cura, the most popular slicer
keywords: ["cura", "ultimaker", "ultimaker cura", "3d printing", "flyingbear", "flying bear", "flyingbear ghost", "slicer", "slicing"]
image: /img/Ultimaker_cura.png
---

Lo slicer piu' diffuso tra i membri della community, contiene gia' le impostazioni per la flyingbear ghost (dalla 4.6.0 quello per la 4s, dalla 4.8.0 quello per la 5)

Cura ha un **plugin per controllare la stampante FlyingBearGhost 5 tramite WiFi** (che funziona se avete connesso la stampante alla vostra rete wifi di casa) 

Non è potente come octoprint o altri, ma permette di fare operazioni di base come mandare i file gcode (che vengono salvati sulla scheda SD) e avviare la stampa appena sono stati trasferiti, vedere/cancellare/stampare di nuovo dei file gcode già presenti sulla SD, mandare dei comandi Gcode, vedere le temperature e dare dei comandi di movimento degli assi

Si chiama **MKS WiFi Plugin** ed è possibile scaricarlo dal marketplace di Cura (lo store dei plugin interno al programma stesso)

FlyingBear ha alcuni video su youtube tra cui il [video dove mostra la configurazione di questo plugin](https://www.youtube.com/watch?v=cTkhWAsnMXE&t=420s)  (la versione più vecchia, ma è la stessa cosa).

:::tip
Qui trovate alcuni link interessanti

*  [I migliori plugin di cura](https://all3dp.com/2/5-must-have-cura-plugins)
*  [Settaggi per stampare miniature al meglio](https://www.youtube.com/watch?v=AqEWl51s9Rw)
*  [Come rimuovere lo stringing](https://youtu.be/_QRb54zVPfQ)
:::
## Installazione e primo avvio {#installazione-e-primo-avvio}

Per prima cosa, andate sul sito del produttore di cura, ultimaker, a [questo link](https://ultimaker.com/it/software/ultimaker-cura), e cliccate su scarica gratuitamente

Vi si aprira una nuova finestra, scegliete la versione adatta al vostro sistema operativo ​e attendete con pazienza il termine del download

[ ![link download](/img/cura/link_download.webp) ](/img/cura/link_download.webp)


:::danger
Se avete una vecchia versione di Cura, verrà disinstallata e se non avete un backup pederete le impostazioni. Fatevi **sempre** un backup delle impostazioni

Per farlo, dovete avete un account utimaker e da li', nel vostro profilo nel cloud, potrete inviare il vostro backup o richiamare un vostro restore

[ ![backup cura](/img/cura/backup_cura.webp) ](/img/cura/backup_cura.webp)

Da qui potete fare il backup prima di installare la nuova versione e fare il restore dopo averla installata.


:::

Ora avviate l'installazione del software e lasciate tutte le impostazioni standard

[ ![inizio installazione cura](/img/cura/install_cura_inizio.webp) ](/img/cura/install_cura_inizio.webp)
  
Accettiamo i termini della licenza e continuamo, lasciando tutte le impostazioni di default, fino al termine dell'installazione

[ ![termine installazione cura](/img/cura/termine_installazione.webp) ](/img/cura/termine_installazione.webp)

Dopo aver premuto **Chiudi**, il programma partira immediatamente, e, dopo il caricamento, avremo la schermata iniziale di Cura

[ ![schermata iniziale](/img/cura/prima_schermata_di_cura.webp) ](/img/cura/prima_schermata_di_cura.webp)


Premiamo il bottone **Per iniziare**. Ci verra' presentato il contratto di licenza e alcune autorizzazioni su materiali e/o stampanti, piu' altri parametri anonimi utili per statistiche e loro marketing interno (*devono mangiare pure loro, non credete?!?*) che dobbiamo accettare se vogliamo utilizzare il software

[ ![licenza](/img/cura/licenza.webp) ](/img/cura/licenza.webp)


Ora arriviamo ad una parte importante: la registrazione del nostro account

Secondo me, andrebbe fatto anche solo per backup e sincronizzazione delle impostazioni se abbiamo piu' pc, percio' o accediamo, o creiamo un nuovo utente, oppure, con la selezione **salta**, lasciamo perdere

Se volete potete farlo in un secondo momento, ma io vi raccomando di farlo

[ ![registrazione](/img/cura/registrazione.webp) ](/img/cura/registrazione.webp)


## Configurazione stampante {#configurazione-stampante}

Siamo arrivati alla configurazione della stampante 

:::info
Anche se la Ghost 5 ha il wifi, dovete aggiungerla come **stampante non di rete**, perchè questa funzione è dedicata alle stampanti Ultimaker (*con la  gloria e il regalare il proprio lavoro non si mangia, non credete?*)
:::

[ ![scelta stampanti](/img/cura/scelta_stampanti.webp) ](/img/cura/scelta_stampanti.webp)


La schermata successiva riguarda le impostazioni della macchina, vi suggerisco per ora di lasciarle cosi come sono

[ ![parametri macchina](/img/cura/parametri_macchina.webp) ](/img/cura/parametri_macchina.webp)
  
Siamo arrivati alla fine, ora verranno presentate le novità se volete le potrete vedere con il tasto **avanti**, oppure **salta**  per terminare la prima configurazione, poi premiamo **fine**

[ ![fine setup](/img/cura/fine_setup.webp) ](/img/cura/fine_setup.webp)
