---
title: Mks Wifi Plugin
slug: /slicer/cura/mkswifi
---

Per utilizzare la funzione del trasferimento dei file tramite Wifi, e' necessario installare un plugin

Purtroppo, questo plugin e' disponibile solo con Cura

L'unica alternativa per il trasferimento dei file tramite wifi e' possedere una raspberry pi con octoprint (per maggiori informazioni, andate nella [sezione apposita](/docs/raspberry/introduzione/))

## Installazione {#installazione}

Esistono due maniere per installare il plugin:

1. Scaricarlo direttamente dal marketplace di Cura

2. Scaricare la versione piu' recente da [github](https://github.com/Jeredian/mks-wifi-plugin) ed inserirla nella cartella dei plugin

### Marketplace {#marketplace}

Una volta aperto Cura, cliccare sul pulsante in alto a destra per aprire il marketplace

[ ![Cura Marketplace](/img/marketplaceButton.png) ](/img/marketplaceButton.png)

Si aprira' una finestra nella quale ci sono tutti i plugin disponibili. Scorrete verso il basso fino a trovare Mks Wifi Plugin

[ ![Mks Wifi Plugin Marketplace](/img/mksWifiPlugin.png) ](/img/mksWifiPlugin.png)

Dopo aver cliccato sull'icona del plugin, si aprira' un'altra finestra, dalla quale cominciare l'installazione

[ ![Mks Wifi Plugin Install](/img/installMks.png) ](/img/installMks.png)

Dopo aver cliccato sul pulsante per installare, confermate tutti i passaggi successivi e riavviate Cura


### Github {#github}

Ogni tanto capita che lo sviluppatore del plugin abbia introdotto dei bugfix o delle migliorie, pero' la versione piu' aggiornata non sia ancora disponibile nel marketplace.

Per installare la versione piu' recente, occorre scaricare il codice da github

Nel browser, inserite il link riportato nella sezione Installazione. Una volta caricata la pagina, cliccate sul pulsante Code e, successivamente, su Download ZIP

[ ![Mks Wifi Github](/img/mksGithub.png) ](/img/mksGithub.png)

Una volta scaricato lo zip, estraetelo e copiate TUTTA LA CARTELLA **mks-wifi-plugin-develop** nella cartella dove sono contenuti i plugin

:::tip
Per trovare la cartella dei plugin, aprite il menu di cura e cliccate su **Open configuration folder**

[ ![open configuration folder](/img/openConfigurationFolder.png) ](/img/openConfigurationFolder.png)

Aprite la sotto cartella **plugin** e copiateci dentro la cartella appena estratta
:::

Stesso discorso dell'installazione dal marketplace, riavviate Cura dopo questa operazione


### Configurare il plugin {#configurare-il-plugin}

Innanzitutto, assicurarsi che la stampante sia accesa e connessa alla stessa rete wifi del computer sul quale e' installato Cura

Cliccate su Manager Printers

Noterete che c'e' un nuovo bottone per configurare il plugin Mks

[ ![mks wifi button](/img/mksWifiButton.png) ](/img/mksWifiButton.png)

Cliccateci sopra, selezionate l'indirizzo della maccchina ed ora dovreste vedere un nuovo pannello, tramite il quale controllare la stampante via wifi

### Non vedo nessun bottone!!! {#non-vedo-nessun-bottone}

Questo e' un bug noto

Per ovviare a questo problema, aprite la cartella dei plugin come illustrato precedentemente, poi navigate nella cartella plugins, aprite la cartella MksWifiPlugin, un'altra volta la sotto cartella MksWifiPlugin

[ ![mks wifi plugin folder](/img/mkswifiPluginFolder.png) ](/img/mkswifiPluginFolder.png)


In quella cartella, individuate il file **plugin.json** 

[ ![mks wifi json](/img/mkswifiJson.png) ](/img/mkswifiJson.png)

Apritelo con un editor di testo (come, ad esempio, blocco note) e cambiate il valore di **maximum_cura_version** dal valore attuale alla versione installata di cura (per esempio, 4.10.0)

[ ![mks wifi json modificato](/img/mkswifiJsonToChange.png) ](/img/mkswifiJsonToChange.png)

Salvate, riavviate Cura e adesso dovreste vedere il bottone per collegarsi


:::info
Ringraziamo RALOCIN per averci fornito gli screenshot
:::
