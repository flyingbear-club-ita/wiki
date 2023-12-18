---
title: Testa magnetica
slug: /upgrades/testa_magnetica
keywords: ["stampa 3d", 3d printing", "flying bear", "flyingbear", "flying bear ghost", "flyingbear ghost", "flyingbear ghost 5", "flying bear ghost 4s", "flyingbear ghost firmware", "flyingbear ghost upgrade", "flyingbear ghost printhead magnetic"]
description: Testa intercambiabile con magneti
hide_table_of_contents: true
---

import DisplayAd from '../../../src/components/displayAd';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import ResponsivePlayer from '../../components/videoPlayer'

# Testa magnetica - Flyingbear Ghost 5

<Tabs>
  <TabItem value="author" label="Autore">
    willysmitch
  </TabItem>
  <TabItem value="machine" label="Macchina">
    Flyingbear Ghost 5
  </TabItem>
  <TabItem value="difficulty" label="Difficolta'">
    Alta
  </TabItem>
  <TabItem value="Scopo" label="Scopo">
    Permette il cambio veloce della testa, direct drive
  </TabItem>
</Tabs>

## Descrizione

Ed ecco finalmente la testa che avete sempre desiderato! Non avendo ancora modificatoil file per l'E3DV6, potete farla solo con quella Stock (troverò del tempo per farvela se siete interessati) 

Dopo averle provate tutte (e aver fatto scendere tutti i santi e non dal cielo...), ho modificato, secondo me, la miglior testa in circolazione: quella magnetica! 

[![Flyingbear Ghost 5 - Magnetic Head - side](/img/upgrades/testaMagnetica/testaMagnetica4.webp)](/img/upgrades/testaMagnetica/testaMagnetica4.webp)

[![Flyingbear Ghost 5 - Magnetic Head - top](/img/upgrades/testaMagnetica/testaMagnetica5.webp)](/img/upgrades/testaMagnetica/testaMagnetica5.webp)

E' caldamente consigliato stampare la testa non con tutti i file originali, ma con la mia modifica: la forza di spinta tra estrusione e ritrazione potrebbe far staccare i magneti

## Lista dei componenti

- I pezzi da stampare indicati nella sezione Istruzioni
- [Due ventole 4010](https://s.click.aliexpress.com/e/_9QNxqD)
- [magneti cilindrici 4mm(diametro)x2mm(altezza)](https://amzn.to/3ZMUNNY)

## Istruzioni

Prima di cominciare, vi consigliamo di stampare [questo test](/stl/testa_magnetica/Magnets_Assembly_Test.stl), per capire se la vostra stampante sia in grado di produrre pezzi dimensionalmente accurati

[![Flyingbear Ghost 5 - Magnetic Head - magnets test](/img/upgrades/testaMagnetica/testMagneti.webp)](/img/upgrades/testaMagnetica/testMagneti.webp)

Se il test non va a buon fine, dovreste o ricalibrare la stampante, oppure cercare di compensare l'espansione orizzontale dei buchi tramite slicer

Una volta finita questa procedura, si potra' passare a stampare i pezzi della testa

I link da utilizzare sono due: 

- [modello principale - autore: Laker87](https://www.thingiverse.com/thing:4911026)
- [attacco per i magneti - autore: Laker87](https://www.thingiverse.com/thing:4920380/files)

Del primo link dovrete stampare quasi tutto **tranne**:
- i due attacchi, dei quali troverete gli stl qui sotto
- il **Fitting.stl**: il pezzo originale non tiene il tubicino, invece, per un buon fissaggio, è importante che tenga. L'unica cosa che dovrete fare è tagliare come in foto la parte nera del vostro fermo originale, in modo che non abbia problemi a entrare o uscire. Comunque non preoccupatevi: si riesce a schiacciare lo stesso e, dopo un po' di utilizzi, quel tubo non lo tirate comunque piu' fuori!

[![Flyingbear Ghost 5 - Magnetic Head - fitting](/img/upgrades/testaMagnetica/testaMagnetica7.webp)](/img/upgrades/testaMagnetica/testaMagnetica7.webp)
- lo **snap_big.stl**

Le parti da sostituire, invece, sono quelle qui sotto:
- il [modulo base della testa](/stl/testa_magnetica/Head_Base_Module_sistemato.stl), cioe' quello da sistemare sul carrello, al quale poi andremo ad attaccare la testa vera e propria
- L'attacco della testa, cioe' la parte che si stacca: potete scegliere tra [versione stock](/stl/testa_magnetica/Head_Main_Module_Stock_Thin_sistemata.stl) e [versione E3DV6](/stl/testa_magnetica/Head_Main_Module_E3DV6_Thin_modificata.stl)

<DisplayAd/>

Sfogliando le immagini, potete trovare delle indicazioni su come mettere i magneti sulla testa

Oltre ai file da stampare, ci sono anche gli step file, quindi, se ci sapete fare con fusion360, trovate anche le teste per l'E3DV6 da modificare

## Video del montaggio

Consigliamo sempre, prima di cominciare a lavorare, di preparare tutti i pezzi, cosi' da non dovere impazzire quando, sul piu' bello, non riuscite a capire dove sia finita quella vitina che serve a reggere tutto il progetto

[![Flyingbear Ghost 5 - Magnetic Head - bill of materials](/img/upgrades/testaMagnetica/testaMagnetica6.webp)](/img/upgrades/testaMagnetica/testaMagnetica6.webp)

Questo video si riferisce alla testa principale, quella senza i magneti. Per vedere come posizionare i magneti, riferirsi a [questa immagine per la parte superiore](https://cdn.thingiverse.com/assets/f5/be/33/24/13/featured_preview_Clipboard01.jpg) e [questa immagine per la parte inferiore](https://cdn.thingiverse.com/assets/01/5c/8f/da/0a/featured_preview_Clipboard02.jpg)

<ResponsivePlayer
  src="https://youtu.be/l19cONu0I5I"
/>

## Conclusione
La comodità di questa testa, oltre a essere compatta e leggera, è che, in caso di ostruzione, basta togliere una vite, staccare il cavetto e la testa si stacca! Niente piu brugole per smontare il mondo e perderci delle ore! 

Buon lavoro!
