---
title: Calibrazioni
slug: /calibrazioni
---

## Calibrazione del piano di stampa 
La calibrazione del piano di stampa rientra nelle calibrazioni essenziali da effettuare. Inizialmente può sembrare una procedura complicata ma con questi semplici passi potrai ottenere una calibrazione semplice ed efficiente.

1 Chiudere (stringere) le 4 molle del piano a fine corsa:


2) Regolare la vite di fine corsa del piano "Z" in modo tale da ottenere uno spazio tra punta e ugello di 2mm. Tips and tricks: Come misura di riferimento puoi usare la brugola in dotazione, la seconda più piccola:

3) Iniziare usando la funzione "leveling" della stampante:

4) Usare il foglio in dotazione o un foglio A4 per calibrare tutti e 4 i punti. Tra ugello e foglio dev'essere presente un leggero attrito:

=== I consigli per una buona calibrazione ===
* Riscaldare il piano a 60°C durante tutto il processo di calibrazione;
* Ripetere la calibrazione 4/5 volte;
* Tra una calibrazione e l’altra portare tutti gli assi in "home";
* Pulire il piano di stampa con alcool isopropilico.

''Un ringraziamento a Magnas per aver realizzato la guida.''

== Calibrazione degli step ==

A volte, vi sarà capitato di vedere delle imprecisioni nelle superfici delle vostre stampe, tipo grumi di plastica, oppure una distribuzione non omogenea del filamento. 

Questo problema potrebbe essere dovuto all'estrusore, il meccanismo che porta il filamento dalla spola all'hotend.

Il motore dell'estrusore è posizionato internamente al lato posteriore della stampante, sorretto dall'ingranaggio dell'estrusore, sempre posizionato nel pannello posteriore, ma esternamente.

Il motore (Nema17) ha, di default, 200 steps per rivoluzione: per compiere un giro completo, fa duecento "scatti", con un angolo per step di 1.8 gradi.

Gli step per millimetro di un motore sono, invece, il numero di step che il motore dovrà compiere per percorrere la distanza di un millimetro.

Il valore di default della Ghost 4S è 400, il che vuole dire che, per muoversi di un millimetro, il motore dovrà compiere due rotazioni.

Purtroppo, non tutti i componenti sono uguali, quindi, per regolarizzare il flusso o i movimenti sugli assi, è necessaria una calibrazione


=== Estrusore ===
In questo caso, è necessario l'utilizzo di Repetier Host(RH) (spiegato nella sezione precendente). 

Connettere la stampante col cavo USB, aprire RH, assicurasi che la stampante sia connessa e muoversi nella sezione per inviare comandi GCode

Adesso che tutto è pronto lato software, andiamo a vedere cosa fare con l'hardware.

Il primo passo da fare è estrarre il filamento dall'ugello, se presente. Far ritirare il filo completamente.

Una volta rimosso il filamento, estrarre il tubo di teflon dall'estrusore, rimuovendo la fascetta (se presente) e premendo verso il pezzo di plastica del connettore.

Ricaricare il filamento, stavolta fino a quando non esce appena dall'estrusore. Con le tronchesi, tagliare il filamento a filo con il connettore.

A questo punto, inviare, tramite RH, i seguenti comandi GCode:

 M302 P1; Disabilita la protezione termale dell'estrusore
 G92 E0; Riposiziona l'origine dell'estrusore nella posizione attuale
 G1 E280 F800; Estrude 280 mm di filamento

Adesso bisogna misurare la lunghezza del filamento estruso. Prendere un righello, misurare la lunghezza del filamento

Adesso calcolare gli step reali con la seguente formula:

 400 * (280/x)  ==> x = lunghezza misurata


400 è il numero di step di default

Se, per esempio, avessimo misurato 265, la formula qui sopra sarebbe:

  400 * (280/265)


Una volta calcolato il nuovo valore, inserirlo nel file robin_nano35_cfg.txt.

Cercare:

 DEFAULT_E0_STEPS_PER_UNIT


Sostituire il valore di default con il valore ottenuto dalla formula, aggiornare il firmware col nuovo valore (documentato in un'altra sezione - aggiungere qui) 


N.B. È ampiamente consigliato fare delle stampe di prova prima e dopo la calibrazione, per comparare i risultati.

Consigliati calicat, benchy, calibrationCube
