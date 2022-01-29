---
title: Guida al bltouch
slug: /bltouch
hide_table_of_contents: true
description: Approfondimento su bl touch e 3d touch, lezioni teoriche e file per i supporti per Flyingbear Ghost, Artillery Genius ed Eryone ER-20
keywords: ["3d printing", "flying bear", "flyingbear", "flying bear ghost", "flyingbear ghost", "flyingbear ghost 5", "flying bear ghost 5", "stampa 3d", "bltouch", "bl touch", "3d touch", "artillery genius", "eryone er-20"]
---

import Tabs from '@theme/Tabs';

import TabItem from '@theme/TabItem';

Autori: ZeroPX, Nick_IT & ReneG

## Bltouch - Introduzione {#bltouch-introduzione}
[![Bltouch Flyingbear Ghost 3d Printer](/img/bltouch/bltouchReneCompleto.webp)](/img/bltouch/bltouchReneCompleto.webp)

Prima di parlare di come installare il bltouch (oppure 3d touch o qualche altra diavoleria del genere, che poi, alla fine, sono tutti sensori di livellamento), vediamone l'utilita' e le differenze tra i vari tipi di sensori

In tutte le stampanti 3D, la precisione e' uno dei requisiti fondamentali per un buon uso: con la tecnologia di stampa FDM (quella usata dalle stampanti consumer con i filamenti) viene rilasciato un materiale fuso da un ugello (nozzle) che si deposita su un piatto e raffreddandosi, strato dopo strato, creano l'oggetto. Come potrete immaginare, se l'ugello deve depositare questo materiale fuso su un piatto, la distanza deve essere sempre la stessa, perciò il piatto deve essere livellato nel miglior modo possibile

Per livellare il piatto ci sono diversi sistemi: il piu' comune e' di aggiustare l'altezza del piatto con 4 manopole, una per ogni angolo, oppure e' possibile usare dei **sistemi di livellamento automatico** (ABL auto bed leveling), tramite i quali il piatto verra' livellato in modo molto accurato senza troppi sforzi manuali. 

:::warning
Attenzione!!! Questa funzionalita' non elimina tutti i mali, ci deve gia' essere una parvenza di livellamento del piatto, questi sistemi non manuali possono compensare un dislivello di alcuni mm e non di cm tra un angolo e l'altro del piatto
:::

Il sensore di livellamento  e' un sistema di correzione della distanza dell'ugello dal piatto tramite la misurazione di diversi punti sul piatto stesso, creando una mappa in 3d del piatto dove saranno evidenziate le varie differenze della distanza ottimale dall'ugello al piatto

[![Mesh from BL Touch](/img/bltouch/mesh_piatto_1.webp)](/img/bltouch/mesh_piatto_1.webp)

Dall'esempio qui sopra potete vedere che ci sono alcune parti concave e altre convesse, percio', durante la stampa, l'ugello verra' sempre portato alla stessa distanza dal piatto affinche' questi dislivelli siano compensati dalla stampante

Maggiori sono i punti misurati, maggiore sara' la precisione 

Solitamente si fa un mesh di 3x3, cioe' 9 misurazioni (per capirci, e' come dividere il piatto sull'asse y in tre parti uguali e sull'asse x in 3 parti uguali e le intersezioni saranno i punti di misurazione del piatto) ma io solitamente preferisco una misurazione di 5x5, cioe 25 misurazione sul piatto

## Vari tipi di sensori di livellamento per stampanti 3D

Esistono diverse tecnologie alla base del sensore di livellamento: 

- induttivi 
- capacitivi
- infrarossi

In questo articolo, pero', ne vedremo solo un tipo: quelli ad **effetto Hall** (se volete vedere un domani quelli induttivi regalatemi una prusa, accetto pure la Mini! 😁)

:::info Effetto Hall

[I sensori ad effetto Hall](https://it.wikipedia.org/wiki/Effetto_Hall) determinano la vicinanza di un oggetto rilevando la presenza di campi magnetici statici

I sensori di livellamento automatico del letto utilizzano sensori ad effetto Hall in modo meccanico: un piolo viene esteso e retratto tramite magneti

Prima della misurazione, il piolo viene abbassato e poi, quando incontrera' il piatto, si spostera' verso l'alto, cambiando internamente  un campo elettrico nel dispositivo

Questo cambiamento viene rilevato dal sensore con una precisione di circa 0,01 mm

In quanto sensore fisico, il dispositivo BLTouch non ha alcuna restrizione per i materiali delle piastre di costruzione compatibili
:::

## Che modello scegliere

Prima di entrare nel dettaglio sul vedere come funziona il BL touch su stampanti come la **Eryone ER-20**, [Er-20](https://amzn.to/3tYafdF) [Link Aliexpress](https://s.click.aliexpress.com/e/_9zCyDv), oppure la [Genius pro](https://amzn.to/3IzgyZl) [link Aliexpress](https://s.click.aliexpress.com/e/_ANAeKT), oppure la [Ghost 5](https://www.banggood.com/custlink/GvvEnikywN), solo per citarne alcune, vediamo cosa ci offre il mercato per capire che modello scegliere

:::tip Link per le stampanti
<Tabs>
  <TabItem value="apple" label="Ghost 5">
    <ul>
      <li>
        <a href="https://s.click.aliexpress.com/e/_AC1URZ">Flyingbear Ghost 5 - Aliexpress</a>
      </li>
      <li>
        <a href="https://www.banggood.com/custlink/GvvEnikywN">Flyingbear Ghost 5 - Bangood</a>
      </li>
    </ul>
  </TabItem>
  <TabItem value="orange" label="Genius">
    <ul>
      <li>
        <a href="https://s.click.aliexpress.com/e/_A8mPHp">Artillery Genius - Aliexpress</a>
      </li>
      <li>
        <a href="https://amzn.to/3u4ebd9">Artillery Genius - Amazon IT</a>
      </li>
    </ul>
  </TabItem>
  <TabItem value="banana" label="Er20">
    <ul>
      <li>
        <a href="https://s.click.aliexpress.com/e/_ArP3m7">Eryone ER-20 - Aliexpress</a>
      </li>
      <li>
        <a href="https://amzn.to/3H7NQyo">Eryone ER-20 - Amazon IT</a>
      </li>
    </ul>
  </TabItem>
</Tabs>
:::

Per queste tre macchine, vista la differenza tra le teste di stampa e il tipo di piatto che usano (che potrebbe essere in pei, vetro, microforato, oppure in vibranio), meglio non usare un sensore di livellamento ad induttanza

Dovremo quindi usare, come descritto in precedenza, un sensore ad "Effetto Hall". A questo punto le scelte possono essere principalmente due

:::tip Link per bltouch e 3dtouch
<Tabs>
  <TabItem value="bltouch" label="Bl Touch">
    <ul>
      <li>
        <a href="https://s.click.aliexpress.com/e/_AC1URZ">BL Touch Antclabs - Aliexpress</a>
      </li>
      <li>
        <a href="https://amzn.to/3KMxCgq">BL Touch Antclabs - Amazon</a>
      </li>
    </ul>
  </TabItem>
  <TabItem value="3dtouch" label="3D Touch">
    <ul>
      <li>
        <a href="https://s.click.aliexpress.com/e/_AAEwaP">3D Touch Makerbase - Aliexpress</a>
      </li>
      <li>
        <a href="https://amzn.to/3u6U8dX">3D Touch Makerbase - Amazon IT</a>
      </li>
    </ul>
  </TabItem>
</Tabs>
:::

## BL Touch
[![BL Touch](/img/bltouch/bltouch.webp)](/img/bltouch/bltouch.webp)


Secondo  il produttore originale, che e' coreano, la sonda BLTouch "e' un sensore di livellamento automatico per stampanti 3D in grado di misurare con precisione l'inclinazione della superficie del letto"

**Vantaggi**
- Compatibile con molti tipi di stampanti 
- Molto supportato dalla comunity
- facile da configurare in Marlin
- e' tra i più precisi

**Svantaggi**

- Molto più costoso del 3D Touch, e questa differenza di prezzo e' legittimata dalla qualita' del prodotto

- E' uno dei sensori di livellamento con il consumo maggiore di corrente, percio', se avete spremuto l'alimentatore della stampante fino all'ultimo milliwatt, ci dovrete pensare bene (dovreste pensarci comunque perché un alimentatore  che lavora al 100% avra' una vita breve e tortuosa)

## 3D Touch

[![3D Touch](/img/bltouch/3dtouch.webp)](/img/bltouch/3dtouch.webp)

Per dirla breve, il 3D Touch e' semplicemente un BL touch copiato dai cinesi o taiwanesi (Makerbase e' di Taiwan), ed e', ovviamente, quello che uso io. Anche il 3d Touch e' un sensore per il livellamento automatico del piano di stampa, ed e' composto da un elettromagnete ed un perno di pressione

Si caratterizza per la sua elevata precisione, mentre il prodotto e' anche facile da usare. Ciò e' dovuto, tra l'altro, all'autotest intelligente

**Vantaggi**

- Meno costoso del BL Touch, fondamentale per la mia scelta finale
- compatibile con molti tipi di stampanti
- molto supportato dalla comunity
- facile da configurare in Marlin
- tra i più precisi, pero' comunque meno del BL Touch

**Svantaggi**

- Consumo non indifferente di corrente, siamo sui 15mA, che non e' cosi' poco

## Come configurare il BL Touch (o 3D Touch)

Ora si che inizia il bello, tenete presente che per ogni stampante avra' il suo adattatore, anzi, **ogni testa avra' il particolare adattatore!**


:::tip Supporti per il BL Touch
<Tabs>
  <TabItem value="blTouchGhost" label="Ghost 5"><a href="">Supporto per la testa stock della Ghost, disegnato da ReneG</a></TabItem>
  <TabItem value="blTouchGenius" label="Artillery Genius"><a href="https://www.thingiverse.com/thing:4560281">Supporto per la testa stock della Artillery Genius</a></TabItem>
  <TabItem value="blTouchSidewinder" label="Artillery Sidewinder X1"><a href="https://www.thingiverse.com/thing:3620056">Supporto per la testa stock della Artillery Sidewinder X1</a></TabItem>
</Tabs>
:::

Ora iniziamo a conoscere due termini molto importanti per il montaggio del BL-Touch:
- z-offset 
- probe

Tenete presente che state per montare una aggiunta alla vostra testa di stampa, e questo la stampante lo deve sapere per due motivi: in primis per usare la nuova funzionalita' e secondo, perche' deve sapere dove e' il sensore rispetto all'ugello, per poter ricostruire una matrice dei punti che e' andata a misurare per capire dove ci sono dei dislivelli rispetto al piano di stampa, e questo e' il probe

Inoltre, il Bl-Touch deve essere montato in modo che non dia fastidio durante la fase di stampa, per evitare che si vada a scontrare con le stampe e le faccia fallire, perciò il sensore, una volta retratto, deve essere più in alto rispetto al punto piu vicino al piano di stampa, che e' l'ugello. Questa differenza misurata sull'asse Z si chiama **Z Offset**

Detta in parole povere lo Z-offset e' la **distanza tra la posizione del perno quando tocca il letto di stampa e triggera la sonda, e il nozzle, sull'asse Z (in altezza)**

[![bl touch z offset](/img/bltouch/z-offset.webp)](/img/bltouch/z-offset.webp)

Quando il nozzle arriva al punto di triggering, rifa' l'operazione una seconda volta per trovare un valore piu preciso, poi passa al punto sucessivo

Quando comincia la procedura di campionamento, a seconda del tipo di stampante, il piatto si abbassa o la testa si alza per fare estendere il pin completamente e lasciare un po' di spazio per non far sbattere il pin contro il piatto

A quel punto, la testa si muove nella posizione di homing (che puo' essere definita tramite firmware) ed il piatto comincia ad alzarsi lentamente (nel caso della Ghost 5, mentre la testa si abbassa nel caso della Artillery Genius o della Eryone ER-20) fin quando il pin non innesca il grilletto (trigger) del bltouch. A questo punto verra' rifatta  l'operazione una seconda volta, per trovare un valore piu preciso e poi passare al punto sucessivo

La macchina registrera' quindi il **valore attuale della posizione dell'asse Z**, che verra' quindi salvato in memoria come lo zero

I valori del probe e dello Z-offset vanno prima calcolati e poi inseriti nel firmware attraverso marlin, oppure attraverso i comandi G-code. Noi vedremo in seguito solo la seconda procedura

Il numero di misurazioni e' determinato nel firmware Marlin. Per il momento, assumiamo che la griglia sia 3x3, quindi la sequenza sara' come quella illustrata qui sotto:

[![bl touch probing grid](/img/bltouch/bltouchGrid.webp)](/img/bltouch/bltouchGrid.webp)

:::note
Il punto 1 rappresenta l'area sinistra anteriore del piatto, il punto 9 l'area destra posteriore del piatto
:::

Una volta completata la procedura, la stampante avra' in memoria una serie di misurazioni, una griglia 3x3, che riportera' **il discostamento sull'asse z di ciascuno punto della griglia dall'origine**, che sarebbe l'altezza dell'asse z quando la sonda raggiunge lo z offset

Per spiegare meglio: lo zero, l'origine, e' il punto in cui la sonda viene innescata. **Se la sonda viene innescata per un valore di z piu' elevato dell'origine, vuol dire che il piatto e' basso; viceversa, se il valore di z e' piu' basso, vuol dire che il piatto e' troppo attaccato**

## La mesh e le sue rappresentazioni

Per chiarire meglio il concetto espresso qui sopra, andiamo a vedere una mappa generata da Repetier Host, che rappresenta la nostra mesh salvata


|   | 0 | 1 | 2 |
|---|---|---|---|
| 0 | +0.035  | -0.028  | -0.091 |
| 1 | +0.018  | -0.018  | -0.053 |
| 2 | +0.002  | -0.006  | -0.012 |


Questi numeri rappresentano il discostamento dallo zero del piatto e sono calcolati tramite la differenza del valore di z nello zero del piatto e quello della z in un determinato punto del piatto quando la sonda viene triggerata durante il campionamento

Per visualizzarli meglio e per farci un'idea del livellamento del piatto, possiamo utilizzare un paio di strumenti

Il primo e' un sito web gratuito, [lockspace.ue](http://lokspace.eu/3d-printer-auto-bed-leveling-mesh-visualizer/), che consente di inserire i dati della mesh pari pari come vengono forniti da repetier per visualizzarli

Questo e' un esempio di visualizzazione, il tipo sta fuori di testa e si e' fatto una mesh 12x12

[![bl touch probing samples](/img/bltouch/bedLevellingMeshVisualizer.webp)](/img/bltouch/bedLevellingMeshVisualizer.webp)

Se invece avete octoprint installato, c'e' un plugin che permette di visualizzare il livellamento che si chiama... bhe, ovviamente [Bed Level Visualizer](https://plugins.octoprint.org/plugins/bedlevelvisualizer/)!!!

## Memorizzare e richiamare la mesh

Il gcode per attivare il campionamento e' **G29**

Una volta lanciato, la testa fara' prima un homing su Z, poi X ed Y. Completato l'homing, passera' a campionare la mesh

:::tip
Se questa procedura viene effettuata tramite Repetier Host, nell'output potrete visualizzare i valori rilevati. Questo tipo di informazione e' perfetta per determinare il livellamento del piatto, apportando eventualmente delle modifiche alla calibrazione
:::

Per immagazzinare la mesh in memoria, basta inviare il gcode **M500**

Per assicurarsi che i dati della mesh siano stati salvati in memoria, inviare **M503**

## Campionamento tramite gcode iniziale

Per avere risultati piu' precisi, e' possibile effettuare il campionamento della bed level mesh prima di ogni stampa

In questo caso, il comando **G29** va inviato **subito dopo** aver inviato il gcode per l'homing, **G28**

:::warning
Il campionamento viene salvato in memoria, ma non nella eeprom!!!

Il gcode di homing, **G28**, che e' praticamente obbligatorio in qualunque gcode di partenza, resetta la mesh, quindi il campionamento viene annullato e le misurazioni devono essere effettuate un'altra volta!
:::

Se invece siete sicuri del livellamento del vostro piatto, potete caricare la mesh salvata nella eeprom (sempre che l'abbiate salvata...) tramite il gcode **M420 S1;**, da inserire rigorosamente dopo il comando di homing

:::tip

Se non volete caricare la mesh dalla memoria, ma volete misurare ogni volta il livellamento del piatto, per evitare che il nozzle riscaldato lasci in giro delle tracce di filamento durante il campionamento, riscaldate prima il piatto, poi lanciate il *G29**, poi riscaldate l'ugello

Di seguito un gcode iniziale per Ideamaker:

```
M220 S100 ;Reset Feedrate

M190 S{temperature_heatbed}

G28 ;Home
M420 S1;
;G29 ;Calibration

G1 X0 Y0 F2000; Move to X0, Y0

M109 S{temperature_extruder1} T0; Wait for nozzle to reach temp

;Code for nozzle cleaning and flow normalization
G92 E0 ;Reset Extruder
G1 Z2.0 F3000 ;Move Z Axis up
G1 X10.4 Y20 Z0.2 F5000.0
G1 X10.4 Y170.0 Z0.2 F1500.0 E15
G1 X10.1 Y170.0 Z0.2 F5000.0
G1 X10.1 Y40 Z0.2 F1500.0 E30

G92 E0 ;Reset Extruder
G1 Z2.0 F3000 ;Move Z Axis up
```

:::

In questo caso, va disabilitato il riscaldamento sia del piatto che del nozzle, che vanno abilitati tramite gcode come mostrato sopra

## Dove scaricare il progetto {#dove-scaricare-il-progetto}

Per ora il file e' disponibile da scaricare direttamente da [qui](/stl/BLTOUCH_NO_SCREW.stl), seguira' un progetto dettagliato su thingiverse

## Cablatura del BL Touch
Coming Soon

## Firmware
Coming Soon
