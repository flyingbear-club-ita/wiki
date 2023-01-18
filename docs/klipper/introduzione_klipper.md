---
title: Introduzione a klipper
slug: /klipper/introduzione
keywords: ["stampa 3d", 3d printing", "flying bear", "flyingbear", "flying bear ghost", "flyingbear ghost", "flyingbear ghost 5", "flying bear ghost 5", "stampa 3d", "flyingbear ghost firmware", "klipper", "klipper firmware"]
description: Introduzione all'innovativo firmware per la stampa 3d, Klipper
---

import DisplayAd from '../../src/components/displayAd'
import FacebookLink from '../../src/components/facebookLink'

<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>

Per anni, il miglior firmware open source disponibile sul mercato e' stato Marlin: vista la sua longevita' (e' stato creato nel 2011 per le stampanti Ultimaker) ed il supporto della community, e' normale che la stragrande maggioranza delle stampanti sul mercato ne monti una qualche versione (per esempio, il firmware stock della Ghost e' basato su Marlin 1, mentre quelli rilasciati dalla community, che permettono di abilitare bl touch, linear advance ed altre funzionalita', sono basati su Marlin 2)

Il problema maggiore di Marlin e' che, su schede un po' obsolete, tipo le vecchie schede a 8 bit, che le Ender montavano di fabbrica fino a poco tempo fa', fatica un po', dovendo svolgere compiti diversi:

- leggere il gcode dalla SD

- convertire il gcode in istruzioni per la stampante

- gestire motori, ventole, cartuccia riscaldante, termistore, etc.

Tutte queste operazioni si possono tradurre in milioni di operazioni che la scheda madre deve eseguire, tra l'altro in un brevissimo lasso di tempo. Su schede ad 8 bit, la limitata capacita' computazionale comporta non poter sfruttare al meglio le potenzialita' della stampa 3d

Proprio per superare questo limite, nel 2016 e' comparsa la prima version di Klipper, basata su un semplice concetto: spostare l'intensita' del carico di lavoro su microprocessori piu' performanti, come, ad esempio, quello di una **raspberry pi, tipicamente a 32 o 64 bit,** delegando al microcontrollore il solo compito di inviare gli impulsi elettrici che controllano la stampante

:::info
Le Ghost, dalla 4s in poi, montano tutte schede madri stock a 32 bit. Il distacco tra i due firmware, Marlin e Klipper, si e' andato sempre piu' assottigliando , grazie al supporto per schede a 32 bit introdotto con la versione 2 di Marlin
:::

Il grande vantaggio che si ha con Klipper e' sicuramente l'avere a disposizione un piccolo computer basato su Linux, sul quale avere piu' potere computazionale, quindi servizi di controllo della stampante o monitoring molto piu' potenti (un esempio sopra tutti: spaghetti detector, il plugin per octoprint che rileva una stampa fallita e blocca il processo di stampa), pero' ci sono alcune peculiarita' che lo rendono una alternativa da prendere seriamente in considerazione

### Configurazione
I file di configurazione di Klipper sono dei semplici file di testo, molto piu' comprensibili del codice sorgente di Marlin

Il vantaggio principale, rispetto a Marlin, e' la possibilita' di cambiare uno o piu' parametri direttamente in questi file di testo, riavviare Klipper ed avere i valori aggiornati, senza la necessita' di flashare un'altra volta la stampante

### algoritmi di pressure advance ed input shaping
Simile al linear advance, l'algoritmo di pressure advance regola dinamicamente il flusso per ottenere superfici e angoli piu' precisi

L'input shaping, invece, e' un sistema di controllo per calcolare la risonanza della macchina e delle cinghie, che e' il principale responsabile per quelle strane righe sulle stampe che sembrano un'eco: questo fenomeno si chiama ghosting

Utilizzare l'input shaping vuol dire poter aumentare di parecchio la velocita' di stampa senza notare riduzioni nella qualita'

### Interfaccia Web & Controllo remoto
Klipper puo' essere paragonato, in parte, a Octoprint: la gestione della stampante avviene quasi interamente tramite interfaccia web (salvo nel caso in cui si abbia uno schermo connesso con KlipperScreen)

E' possibile quindi controllare la stampante da qualunque dispositivo con accesso web connesso alla stessa rete domestica alla quale e' connessa la stampante

### Portabilita'
Controllare una stampante con klipper puo' essere fatto nei piu' svariati modi: l'importante e' avere un dispositivo in grado di far girare una versione di Linux

Per questo motivo, gli utenti non sono limitati ad utilizzare una raspberry pi, ma possono utilizzare i piu' svariati dispositivi, tra cui cloni della raspberry pi, mini pc e addirittura telefoni android
 

## Mi conviene installare Klipper???

Purtroppo non esiste una risposta ben precisa: secondo noi, rimane piu' una scelta che una necessita'

Non vi aspettate che Klipper sia la soluzione a tutti i vostri problemi: se le stampe vi vengono da schifo, continueranno a venirvi da schifo, se non calibrate la stampante

Personalmente, non posso che raccomandarlo: essendo io uno smanettone, mi trovo spesso a fare cambiamenti al firmware, a modificare parametri. Con Klipper e' questione di secondi: i cambiamenti possono essere verificati immediatamente, senza bisogno di ricompilare il firmware e flasharne una nuova versione

Ovviamente la gestione della stampante da remoto rappresenta un'esperienza completamente diversa, con monitoraggio dei parametri e possibilita' di montare una videocamera e registrare time lapse. Sebbene esistano gia' soluzioni disponibili (come il gia' citato octoprint o beeprint (notaDiPaolo: inserire i link qui))


## Prima di cominciare ad installare Klipper
L'ordine da seguire per le guide successive sara' determinato dal tipo di hardware a disposizione

Abbiamo precedentemente parlato del fatto che Klipper sia compatibile con qualunque dispositivo in grado di far girare Linux, pero', fino a poco tempo fa', l'hardware preferito per far girare Klipper era la **Raspberry Pi** (dalla versione 3 in poi). Purtroppo, a causa della scarsita' di silicio a livello mondiale (nota: ricontrollare questa affermazione), la reperibilita' delle Raspberry Pi e' crollata, fino a far raggiungere i prezzi, precedentemente abbordabili per tutte le tasche, oltre le centinaia di euro

Per questo, parecchi produttori si sono gia' organizzati per fornire delle alternative economiche alla Raspberry Pi per far girare Klipper. Vista la moltitudine di alternative, ci concentreremo solo su due prodotti:

- Raspberry Pi, perche' probabilmente, se siete degli smanettoni, ne avete almeno una in giro per casa
- MKS Pi, la soluzione della MKS (la casa produttrice della scheda madre della Ghost e di altre valide alternative) per far girare Klipper

Per la guida su come installare su raspberry, seguite [questo link](https://flyingbearghost.com)

Per la guida su come installare su mks pi, seguite [questo link](https://flyingbearghost.com)
