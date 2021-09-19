---
title: Temp Tower Ideamaker
slug: /slicer/ideamaker/temptower
---

Fare una temp tower in Ideamaker e' semplicissimo

Cominciamo con l'importare il modello della temp tower

[ ![Importa la temp tower](/img/tempTowerImportata.png) ](/img/tempTowerImportata.png)

Questo modello va dai 220 ai 190 gradi (temperature tipiche del PLA) ed ogni sezione e' di cinque millimetri. Per avere dei cambi di temperatura uniformi, settiamo l'altezza degli strati a 0.2mm. Questo vuol dire che, per ogni sezione, ci saranno 25 strati (0.2mm x 25 = 5mm)

Adesso andiamo a modificare le impostazioni del profilo di slicing

Per fare cio', clicchiamo sulla terza icona dall'alto nella parte sinistra dello schermo, il triangolo dentro il cerchio, e poi sull'ingranaggio accanto al nome del profilo

[ ![Apri le impostazioni dello slicer](/img/apriImpostazioniProfilo.png) ](/img/apriImpostazioniProfilo.png)

:::tip
L'altezza del layer puo' essere modificata dalla schermata principale di Ideamaker, richiamando il menu illustrato in figura, o nelle impostazioni del profilo di slicing
:::

Una volta aperte le impostazioni, muoviamoci nella sezione della temperatura

[ ![Temperature Tab](/img/temperatureTab.png) ](/img/temperatureTab.png)

Nella sezione Primary Extruder in alto, inseriamo la temperatura dalla quale vogliamo far iniziare la temp tower (nel nostro caso, 220)

:::caution
Questo passo e' molto importante, la temperatura iniziale potrebbe non essere sovrascritta dal temperature control, falsando cosi' i risultati
:::

Attiviamo il temperature control, spuntando la casella come mostrato in figura, e apriamo il tab dell'hotend

[ ![Temperature Control](/img/temperatureControl.png) ](/img/temperatureControl.png)

La temperatura del primo stato va settata a 220

Adesso aggiungiamo un'altra temperatura

Nella sezione **Layer**, inseriamo 1 + 25 = 26 --> questo e' il numero dello strato al quale vogliamo cambiare temperatura

Nella sezione **Temperature**, inseriamo la seconda temperatura desiderata, 215 nel nostro caso, perche' vogliamo utilizzare decrementi di cinque gradi

Una volta finito di inserire questi dati, cliccate su Add Temperature

La temperatura, adesso e' aggiornata nella lista di destra, col corrispettivo strato

[ ![Add Temperature](/img/secondTemperature.png) ](/img/secondTemperature.png)

Procedete nella stessa maniera per tutti gli strati, fin quando non ottenete una lista del genere

[ ![Temperature List](/img/temperatureList.png) ](/img/temperatureList.png)

Adesso basta salvare il profilo e procedere allo slicing, la temp tower e' pronta!