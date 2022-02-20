---
title: Testa compatta
slug: /upgrades/testa_compatta
keywords: ["stampa 3d", 3d printing", "flying bear", "flyingbear", "flying bear ghost", "flyingbear ghost", "flyingbear ghost 5", "flying bear ghost 4s", "flyingbear ghost firmware", "flyingbear ghost upgrade"]
description: Soluzione compatta e leggera per una testa con convogliatore incluso per la Flyingbear Ghost 4s
hide_table_of_contents: true
---

import DisplayAd from '../../../src/components/displayAd';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import ResponsivePlayer from '../../components/videoPlayer'

# Testa compatta - Flyingbear Ghost 4s

<Tabs>
  <TabItem value="author" label="Autore">
    nyx_nk
  </TabItem>
  <TabItem value="machine" label="Macchina">
    Flyingbear Ghost 4s
  </TabItem>
  <TabItem value="difficulty" label="Difficolta'">
    Media
  </TabItem>
  <TabItem value="Scopo" label="Scopo">
    Alleggerisce il peso, incorpora testa e fan duct
  </TabItem>
</Tabs>

## Descrizione

Lo scopo di questo componente destinato alla Flyingbear Ghost 4S e' compattare e alleggerire la testa di stampa (da 220g a 140g) e migliorare il raffreddamento

Sostanzialmente fonde il [duct progettato ormai quasi un anno fa'](https://flyingbearghost.com/stl/convogliatore5015_4s/Flying_Bear_Ghost_4S_FAN5015_edit5_.STL)  e il case originale in alluminio della testa di stampa. Nel processo di unione si e' cercato di mantenersi fedeli alle geometrie originali del lamierino e migliorare (rispetto al duct precedente, che prevede una ventola verticale) il flusso d'aria, andando ad inclinare l'imbocco della ventola di 10°, cosi' da ridurne le perdite di carico nel condotto, senza però rischiare impatti con il telaio della stampante

Questa configurazione, a differenza di altre gia' presenti su thingiverse, consente di collocare la ventola in una posizione tale da permettere la chiusura frontale del box di stampa

Inoltre sono state fatte delle simulazioni CFD che confermano una maggiore efficienza rispetto al modello precedente e persino rispetto al [duct realizzato da SIBMAKER](https://www.thingiverse.com/thing:4764623). E' stato anche fatto un confronto reale (adattando il pezzo di SIBMAKER alla 4S) per conferma

Lato Posteriore  | Vista in Sezione | Lato Anteriore  
:----------:|:------------:|:-----------:
[![](/img/upgrades/testa_compatta/testa_compatta_cad_1.webp)](/img/upgrades/testa_compatta/testa_compatta_cad_1.webp)|  [![](/img/upgrades/testa_compatta/testa_compatta_cad_2.webp)](/img/upgrades/testa_compatta/testa_compatta_cad_2.webp)|  [![](/img/upgrades/testa_compatta/testa_compatta_cad_3.webp)](/img/upgrades/testa_compatta/testa_compatta_cad_3.webp)

<DisplayAd/>

## Dettagli tecnici

Per quanto riguarda la realizzazione, si consiglia di stampare il pezzo in PETG (o materiali più resistenti termicamente), imponendo supporti solo a contatto con il piano, essendo il resto autoportante. La cosa importante e' evitare supporti nel condotto interno, che risulterebbero difficili da rimuovere

[![Flyingbear Ghost 4s - Testa Compatta - Cura](/img/upgrades/testa_compatta/testa_compatta_cura.webp)](/img/upgrades/testa_compatta/testa_compatta_cura.webp)

In alternativa, si può realizzare con stampante a resina per una migliore finitura superficiale che, oltre alla resa estetica, riduce l'"aderenza" del flusso d'aria e, di conseguenza, le turbolenze, migliorandone quindi le performance

Per la stampa a resina si suggerisce il posizionamento con le facce frontali perpendicolari al piatto di stampa, ricordandosi, prima dello slicing, di eliminare i supporti all'interno del condotto che risulterebbero, anche in questo caso, problematici da rimuovere

[![Flyingbear Ghost 4s - Testa Compatta - Chitubox 1](/img/upgrades/testa_compatta/testa_compatta_chitubox_1.webp)](/img/upgrades/testa_compatta/testa_compatta_chitubox_1.webp)

[![Flyingbear Ghost 4s - Testa Compatta - Chitubox 2](/img/upgrades/testa_compatta/testa_compatta_chitubox_2.webp)](/img/upgrades/testa_compatta/testa_compatta_chitubox_2.webp)

Una volta terminata la stampa in resina, si suggerisce di eliminare i segni dei supporti nella parte sottostante tramite carta abrasiva

Il risultato finale è quello a seguire

[![Flyingbear Ghost 4s - Testa Compatta - stampata, fronte](/img/upgrades/testa_compatta/testa_compatta_stampata_1.webp)](/img/upgrades/testa_compatta/testa_compatta_stampata_1.webp)

[![Flyingbear Ghost 4s - Testa Compatta - stampata, retro](/img/upgrades/testa_compatta/testa_compatta_stampata_2.webp)](/img/upgrades/testa_compatta/testa_compatta_stampata_2.webp)

## STL

Potete scaricare l'stl [qui](/stl/testa_compatta/Ghost_4S_fan-head.STL)

<DisplayAd/>

## Video Montaggio
<ResponsivePlayer
  src="/video/testa_compatta/montaggio_testa_compatta.mp4"
/>
