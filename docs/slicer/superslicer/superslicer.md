---
title: SuperSlicer - Installazione ed Introduzione
slug: /slicer/superslicer
keywords: ["stampa 3d", "3d printing", "flying bear", "flyingbear", "flying bear ghost", "flyingbear ghost", "flyingbear ghost 5", "flying bear ghost 5", "stampa 3d", "slicer", "slicer 3d printing", "superslicer", "superslicer flyingbear ghost", "superslicer flying bear ghost"]
description: Installazione e configurazione di SuperSlicer per stampanti Flying Bear Ghost 5 e Flying Bear Ghost 4s
---

import DisplayAd from '../../../src/components/displayAd'

import DisqusComments from '../../../src/components/disqusComments'

Autori: **Nick_it** & **ZeroPX**

## Premessa

Sembrera' una favoletta, pero', c'era un volta...

C'era una volta uno slicer open source, chiamato Slic3r, che era talmente tanto bello e talmente tanto potente e, soprattuto, open source, che un giorno arrivo' un magnate della stampa 3d che decise di farne un fork, cioe' prendere il codice disponibile e distaccarsene, continuando lo sviluppo di nuove funzionalita' per conto suo, polarizzandolo verso le sue stampanti (non molto affidabili ne' di successo...)

[ ![Josef Prusa - Credits: Barbora Lazarczykova](/img/superslicer/josefPrusa.jpg) ](/img/superslicer/josefPrusa.jpg)

Ovviamente, il software venne rinominato e lo sviluppo comincio' a rallentare, soprattutto per macchine diverse da quelle del magnate, vista la visibilita' globale e la necessita' di mantenere la propria reputazione intatta (fin qui, niente di male, eh... ci sta)

Come in tutte le storie, pero', la community si stufo' e, essendo il fork del progetto open source open source a sua volta, tutti insieme decisero di fare un fork del fork e chiamarlo **SuperSlicer** (**no, non useremo l'acronimo nel resto dell'articolo come facciamo solitamente...**)

Qual e' quindi la morale della favola???

Se avete usato prusa slicer, saprete usare sicuramente Super Slicer, ma questo non vuol dire che sono uguali o uno è una scopiazzatura dell'altro, diciamo che quelli che sviluppano SuperSlicer hanno preso tutto quello fatto di buono su Prusa Slicer e cercano di renderlo migliore, con progressi molto piu' frequenti e costanti

Ora che abbiamo fatto la lezioncina di storia, passiamo alla pratica

## Download e Installazione

Per prima cosa ti consiglio di visitare la [repository di SuperSlicer](https://github.com/supermerill/SuperSlicer)

Da lì, puoi scorrere verso il basso per leggere di più su cosa sia effettivamente SuperSlicer, chi vi contribuisce, ecc. 

[ ![Repository di Superslicer](/img/superslicer/uno.png) ](/img/superslicer/uno.png)

Per scaricare il software andate sulla destra su **Releases** e troverete tutte le versioni del software su tutte le piattaforme disponibili nella stessa pagina, scegliete quella che vi serve e scaricatela

[ ![Superslicer - Releases](/img/superslicer/due.png) ](/img/superslicer/due.png)

<DisplayAd/>

## Siamo pronti per il primo avvio

Dopo avere scaricato il software, la prima cosa che noterete è che non deve essere installato

Per me è positivo, adoro i software portabili, ma per altri potrebbe essere più problematico: dove metto la cartella, che chiavi di registro andrà a toccare la prima volta che si esegue, come lo disinstallo...

Bhe, non fatevi troppe domande: una volta che imparete ad usarlo non lo vorrete piu' lasciare e vedrete che non avrete voglia o necessita di disinstallarlo

Facciamolo partire con il doppio click sull'icona superslicer

Al primo avvio il software parà partire una schermata di setup dove andremo a scegliere la stampante eche andremo ad utilizzare, ed ecco la prima sorpresa, la Ghost non è nella lista.

<DisplayAd/>

## Configurare Superslice (e prusa slicer) per la Ghost

Dopo la schermata iniziale della procedura guidata, premete **Next**

[ ![Superslicer - Releases](/img/superslicer/tre.png) ](/img/superslicer/tre.png)

Si aprira' una schermata con delle pre-configurazioni per le stampanti piu' popolari. Ovviamente la Ghost non c'e', quindi occorre selezionare **Stampante personalizzata** (**Custom printer** se avete scelto la lingua inglese) e procedere alla schermata successiva cliccand su **Next**

[ ![Superslicer - Releases](/img/superslicer/quattro.png) ](/img/superslicer/quattro.png)

Inserite il nome della vostra stampante o qualsiasi nome che desiderate e premete **Next**

[ ![Superslicer - Releases](/img/superslicer/cinque.png) ](/img/superslicer/cinque.png)

Selezionate **Marlin** o qualsiasi altro tipo di firmware usate e andate avanti

:::tip
il firmware della ghost e' basato su marlin
:::

[ ![Superslicer - Releases](/img/superslicer/sei.png) ](/img/superslicer/sei.png)

Ora inseriamo i valori del piatto, quelli che vedete qui sono quelli che ho impostato in Cura:
- X: 230mm  
- Y: 210 mm 

[ ![Superslicer - Releases](/img/superslicer/sette.png) ](/img/superslicer/sette.png)

Nelle due schermate successive, dovrete impostare le temperature di default di piatto ed ugello e diametro del filamento e dimensioni dell'ugello. Lasciate tutto cosi' com'e' (ovviamente, a meno che non abbiate cambiato l'ugello...), e' comunque possibile cambiare questi valori in un secondo momento

[ ![Superslicer - Releases](/img/superslicer/otto.png) ](/img/superslicer/otto.png)

[ ![Superslicer - Releases](/img/superslicer/nove.png) ](/img/superslicer/nove.png)

Ora selezionate tutti i filamenti generici, poi li vedremo piu approfonditamente con esempi e un video esplicativo

[ ![Superslicer - Releases](/img/superslicer/dieci.png) ](/img/superslicer/dieci.png)

Per le scelte successive, lasciate i parametri di default e proseguite, fino ad arrivare alla schermata di lavoro, quella in cui si possono scegliere i parametri per lo slicing, vedere la preview, etc

<DisplayAd/>

## Area di lavoro

Innanzitutto c'e' da specificare che SuperSlicer ha tre modalita': Simple, Advanced ed Expert (anche se ancora non abbiamo capito la differenza tra Advanced ed Expert...)

In base alla scelta, verranno mostrate opzioni aggiuntive, che andremo a vedere piu' avanti

Vediamo ora la suddivisione dell'area di lavoro

[ ![Superslicer - Area di lavoro](/img/superslicer/advancedExpert.png) ](/img/superslicer/advancedExpert.png)

La prima selezione da fare riguarda la modalita', che potete trovare in alto a destra. Per ora rimaniamo con la modalita' Advanced, cosi' da poter vedere tutte le varie opzioni disponibili

In alto a sinistra ci sono tre tab diversi per determinare le impostazioni relative al modello selezionato, del filamento e della stampante

[ ![Superslicer - Slicing Parameters Tabs](/img/superslicer/superslicer_slicing_settings.png) ](/img/superslicer/superslicer_slicing_settings.png)


A sinistra invece ci sono delle icone per attivare alcune delle funzionalita' classiche, come lo spostamento o il ridimensionamento del modello, e funzioni molto interessanti:
- il posizionamento su una specifica faccia del modello
- il taglio del modello (per stampe piu' complesse, che altrimenti avrebbero bisogno di una marea di supporti)
- i supporti manuali "disegnati"
- la cucitura "disegnata"

[ ![Superslicer - Modifiers](/img/superslicer/superslicer_modifiers.png) ](/img/superslicer/superslicer_modifiers.png)

Al centro, ovviamente, c'e' il piatto, sul quale possiamo aggiungere un nuovo modello cliccando sul cubo col piu' ("+") dal menu sotto alle tab per lo slicing

[ ![Superslicer - Menu](/img/superslicer/superslicer_menu.png) ](/img/superslicer/superslicer_menu.png)

Sempre sulla destra, troviamo le configurazioni preimpostate dei parametri di slicing, della macchina e del filamento. Questi parametri sono gli stessi che trovate aprendo le tab in alto a sinistra, ma consentono una gestione piu' veloce dei vari profili tramite selezione con menu a tendina

[ ![Superslicer - Menu](/img/superslicer/superslicer_presets.png) ](/img/superslicer/superslicer_presets.png)

Se preferite modificare i parametri di slicing dalle tab, potete far collassare questo menu cliccando sul quadrato con le freccette proprio a sinistra di questa sezione

<DisplayAd/>

## Per Concludere

Ora potete caricare il vostro modello e fare esperimenti, a breve un video e un altro articolo per spiegarvi meglio le varie opzioni, come ottimizzare la stampa e migliorarla e come stampare

<DisqusComments 
 slug="/docs/slicer/superslicer"
 articleId="2" 
 articleTitle="Superlicer - Installazione ed Introduzione"
/>
