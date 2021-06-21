---
title: Configurare la Ghost su octprint
slug: /configurazione_octoprint
---

**Autore: Nick_it**

Nelle precedenti sezioni abbiamo tralasciato la configurazione della stampante 3D, ora vediamo di sopperire a questa mancanza

Partendo dal menu' principale, dovete andare sulla chiave inglese in alto (menu configurazione)

Si aprirà una finestra con diverse opzioni che potremo andare a modificare

Vediamo le principali:

[ ![config ghost 4s and 5 su octoprint](/img/config1.jpg) ](/img/config1.jpg)

* **General**

  Lasciamo le impostazioni di default, lasciamo che sia Octoprint a trovare la migliore impostazione con la funzionalità Auto

* **Intervals & timeouts**

  Lasciamo anche qui le impostazioni standard
  
* **Firmware & protocol**

  Lasciamo anche qui le impostazioni standard
  
* **Behaviour**

  Lasciamo anche qui le impostazioni standard

A questo punto trasferiamoci su **printer profile**

[ ![printer profile](/img/config2.jpg) ](/img/config2.jpg)

Premiamo **add profile** (non avrete nessun profilo, se non quello standard)

[ ![profilo standard](/img/config3.jpg) ](/img/config3.jpg)


Nel campo **name** inseriremo il nome della stampante. Questo andra' ad influenzare il nome come verrà vista la stampante da Octoprint

Nel campo **Model** metteremo il modello della stampante ( usato principalmente da chi ha piu stampanti o printer farm)

Premete il tasto **Confirm** per salvare i cambiamenti

A questo punto la vostra stampate sarà aggiunta al profilo

[ ![bho](/img/config4.jpg) ](/img/config4.jpg)

Andiamo a modificarla:

* Premere la penna nella sezione **Action**

[ ![action](/img/config5.jpg) ](/img/config5.jpg)


* Selezioniamo **print bed & build volume** e modifichiamo questi parametri
    * **Width: 255mm**

    * **Depth: 210mm**

    * **Height: 210mm**

[ ![action](/img/config6.jpg) ](/img/config6.jpg)


Il resto lasciatelo come è

Ora andiamo su **Axes** e usiamo questo parametri

[ ![access](/img/config7.jpg) ](/img/config7.jpg)


Infine, su **hotend & extruder** usiamo questi parametri

[ ![hotendExtruder](/img/config8.jpg) ](/img/config8.jpg)

A questo punto la nostra stampante su octoprint è pronta.

Buona stampa a tutti!!!



*Come, che dite?* 

*Come si fa a stampare da cura o da ideamaker?*

*Vediamo nella prossima sezione.*
