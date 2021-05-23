---
title: Temp Tower Cura
slug: /slicer/cura/temptower
---

Per migliorare la qualita' di stampa, sia in termini di stringing che di rimozione delle imprecisioni nella stesura degli strati, la prima cosa da fare e' conoscere bene il materiale col quale si sta lavorando e, di conseguenza, cambiare i parametri in base ai risultati di determinati test

Il test piu' semplice e di piu' facile interpretazione e' la temp tower

Una temp tower e' un modello stl con una geometria ben definita, che permette di osservare i risultati del cambio di temperatura dell'ugello

Il concetto della temp tower e' semplice: ci sono diversi livelli di una ben determinata altezza, per ogni livello, attraverso l'uso del gcode, possiamo cambiare la temperatura dell'ugello per ognuno di questi livelli, ottenendo un riscontro fisico delle prestazioni del materiale a diverse temperature

Le temp tower piu' comuni sono le seguenti:

[Temp Tower](https://www.thingiverse.com/thing:2493504)
[Temp Tower Clip](https://www.thingiverse.com/thing:3547428)

Alcune temp tower sono direttamente in formato gcode, ma questo e' un procedimento sconsigliato, perche' vuol dire che, ad esempio, la distanza di retrazione e' gia' impostata, mentre e' preferibile testare il materiale con le impostazioni che poi verranno utilizzate in fase di stampa

Come si realizza una temp tower?
Per prima cosa, scegliere un modello da scaricare da Thingiverse ed aprirlo con Cura

[ ![importa temp tower](/img/importaTempTower.png) ](/img/importaTempTower.png)

Se la temp tower viene importata ruotata, posizionarla verticalmente, perche' il cambio di temperatura occorrera' sull'asse delle Z

[ ![ruota temp tower](/img/rotateTempTower.png) ](/img/rotateTempTower.png)

Nell'esempio ho importato una temp tower con le didascalie per temperature da 190 a 220, range tipico del PLA (quella del secondo link qui sopra)

Una volta importato e ruotato il modello, aprire il menu Extensions, selezionare post processing e, infine, modificare g-code

[ ![Menu Extensions](/img/towerUpward.png) ](/img/towerUpward.png)

Si aprira una finestra, nella quale si dovra' selezionare Add Script e scegliere, tra la lista di opzioni, Change At Z

[ ![Menu Extensions](/img/changeAtz.png) ](/img/changeAtz.png)

Una volta selezionato Change At Z, sulla sinistra si aprira' una schermata di configurazione del cambiamento richiesto.

La mia temp tower ha gli strati di esattamente 5mm, quindi il cambio avverra', con questa temp tower, a 5mm. Con temp tower diverse, questo valore dovra' essere modifcato

Tra le varie opzioni, selezionare Temperatura Estrusore 1, poi inserire un valore pari a TEMPERATURA_INIZIALE - 5 Nel mio caso, il valore da inserire e' 215 (220 - 5)

[ ![Change Temp](/img/changeTemp.png) ](/img/changeTemp.png)

Dopo il primo script, aggiungerne altri, fino ad arrivare alla temperatura desiderata, sempre andando a scalare di cinque gradi in cinque gradi, aggiornando l'altezza di 5mm in 5mm

[ ![Final script](/img/finalScript.png) ](/img/finalScript.png)

:::caution
Nella foto, l'altezza non e' aggiornata!
:::

Una volta terminato, cliccare su chiudi nel lato basso a destra della finestra

Accanto al bottone per far partire lo slicing, comparira' una nuova icona, che rappresenta la presenza di uno o piu' script da incorporare nel gcode durante lo slicing

[ ![Script Icon](/img/scriptIcon.png) ](/img/scriptIcon.png)

Gli ultimi due passi da fare sono settare l'altezza dello strato e la temperatura inziale

Per la temperatura iniziale, assicurarsi che sia la stessa del valore piu' alto della temp tower

Per l'altezza dello strato, controllare che lo strato sia un divisore dell'altezza dei livelli

Adesso avviate lo slicing e lanciate la stampa


:::tip Come si legge una temp tower?

Semplice: basta dare un'occhiata al risultato e vedere quale impostazione si avvicini di piu' al risultato desiderato.

I parametri piu' comuni, comunque, sono omogeneita delle pareti, fusione degli strati, pendenze e, nel caso di alcune torri, stringing.

Per alcuni di questi parametri, non esistono criteri oggettivi, a volte sara' necessario scegliere la temperatura in base al tipo di stampa che si intende fare
:::