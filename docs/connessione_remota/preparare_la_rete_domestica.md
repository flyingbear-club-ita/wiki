---
title: Introduzione
slug: /connessione_remota/introduzione
description: Tutorial di introduzione alla gestione remota di stampanti 3d
keywords: ["octoprint", "raspberry", "raspberrypi", "3d printing", "flyingbear", "flying bear", "flyingbear ghost", "iot"]
image: /img/connessione_remota/iot.webp
---
import DisplayAd from '../../src/components/displayAd'

import DisqusComments from '../../src/components/disqusComments'

[ ![Iot](/img/connessione_remota/iot.webp) ](/img/connessione_remota/iot.webp)

**Autore: Nick_IT**

## Premessa

Stavo iniziando a scrivere un articolo sul blog relativo ai cacciaviti elettrici di Xiaomi (ne ho 3 differenti...), ma, come tutte le cose per le quali non sono pagato, se non mi piace, faccio fatica a farle...
In questo caso, la scintilla non è ancora scoccata, ma mi è venuto in mente una serie di articoli sulla connessione dei nostri apparati verso il mondo esterno, anche solo per monitorarli, gestirli o solo per fare i fighi con i propri amici ("guarda! posso controllare la mia stampante 3d e il mio incisore laser da remoto!!!")

Per prima cosa, partiremo dalla vostra infrastruttura di rete domestica (non conoscendo la vostra, userò la mia e spiegherò il perché di certe scelte), poi parleremo di come proteggere, o meglio ancora, come non esporre il proprio fianco a male intenzionati, o bricconcelli, perché basta veramente poco perché il 90% della gente che naviga su internet solo per fare danni non possa raggiungervi

Se gli articoli susciteranno interesse da parte vostra, parleremo in modo più approfondito di VPN e, dulcis in fundo (ma qui sono ancora un po' scettico...) su come possiate testare voi stessi se i vostri apparati sono sicuri o meno (**solo i vostri mi raccomando!!!**)

<DisplayAd/>

## Preparazione dell'infrastruttura di rete domestica

L'infrastruttura di rete domestica, o, piu' semplicemente, "LAN domestica" (LAN = Local Area Network), è quell'infrastruttura, wireless o cablata, che permette a dispositivi come:
- stampanti 
- cellulari 
- accessori Smart (lampadine o interruttori smart da mettere sulla prese di corrente, etc.), tra cui i vari
- home assistants, come alexa oppure l'hub di google
- telecamere di sicurezza  
- computer
- cellulari 
- console videogiochi
- televisori Smart 
- **stampanti 3D**  

di connettersi tra di loro e ad Internet 

Una volta era di appannaggio soprattutto aziendale, oramai è di largo uso anche nelle nostre case

Per questioni di comodità e per non voler mettere all'aria tutta la casa per far passare dei cavi, si usa un router Wi-Fi per la connessione ad Internet  di tutti gli apparati e si è già in presenza di una semplice rete locale. Se la casa ha un conformazione strana, è troppo grande, oppure è a più piani, si può ovviare al problema inserendo dei ripetitori, o, meglio ancora, (ne parleremo più approfonditamente in un prossimo articolo), potremmo usare una **rete MESH**, dove tante antenne vengono viste dagli apparati in casa come una singola rete, salvaguardando eventuali interferenze di segnale dati da apparati Wi-Fi non sincronizzati tra di loro

## Passiamo ad un esempio pratico

Dopo tanta teoria, utile per capire come funziona la nostra rete di casa (ma ne avremo molta di più quando ci dedicheremo più approfonditamente alla configurazione, monitoring e gestione della nostra rete wifi)

Fino a quando potrò non vi darò informazioni riguardo i miei apparati, perchè questo vuole essere un articolo tecnico, e non una mera marchetta verso un prodotto oppure un altro, e poi molto di quello che sto per descrivervi può essere gestito da un firmware [**OpenWRT**](https://openwrt.org/), che puo' essere installato sulla maggior parte dei router in circolazione oppure che non sono più aggiornati dai relativi produttori 

:::danger
Qui voglio aprire una parentesi per me molto importante: **un router non aggiornato è un pericolo per voi e la vostra home lan**, perchè ogni giorno vengono scoperte vulnerabilità e modi di bucare un router, ma i produttori aggiornano solo le versioni recenti (solo pochi aggiornano dispositivi fuori produzione), e basta veramente poco a lasciare il vostro IP a un sito fraudolento, oppure a un forum dove avete scritto un messaggio,  oppure lasciare in giro il vostro dinamic dns nick name che usate per vedere da remoto la vostra stampante 3D, e il rischio di ricevere visite indesiderate e danni è molto alto
:::

Spiegheremo, in futuro, le varie metodologie di protezione, ad esempio eccovi uno spoiler: non scegliete router sconosciuti, oppure andare a fare visita al loro sito della assistenza e guardate quando è stata l'ultima volta che hanno rilasciato un update del firmware, oppure affidatevi a un firmware Linux come OpenWrt, che è free e costantemente aggiornato dalla community

Io ho un paio di router con questo tipo firmware, tra cui quello con batteria inclusa che uso quando sono il trasferta per lavoro per collegarmi alla rete di casa (cosi Dazn, oppure gli altri streamer vedono che ho piu client che si collegano da un IP solo 😁), o collegare tutti i miei apparati su internet dalla mia Wi-Fi senza rischiare che la gente si faccia i cavoli miei

**Non mi parlate di client VPN**: ne ho uno pure io installato sul mio telefono e tablet, ma la comodità di avere la Fibra a casa, almeno la sfrutto meglio, oppure non devo passare per servizi di terzi se voglio gestire i miei apparati, e per finire visto che lavoro davanti al pc gia' 8 ore al giorno, alla sera è piu facile collegare un **router alla rete dell'hotel e tutti i miei apparati sono già collegati al mio router senza dovere per ognuno di essi ripetere la procedura di connessione, per chi viaggia credo abbia già capito cosa intendo**

Ma la mia rete di casa non usa un router con OpenWrt installato! Vedremo poi perchè quando parleremo in modo approfondito dei router e della loro configurazione

<DisplayAd/>

## La mia rete

Io da un po di tempo lavoro in smart working, ma, visto che odio la confusione e le distrazioni, ho deciso di andare a lavorare nel mio vecchio appartamento, che ora è disabitato

Purtroppo, dall'altra casa ogni minuto mi contattano perche' la stampante non funziona, che S** Q (non gli faccio pubblicità per quanto pago a quei ladri...), che non funziona questo e quello...

Per me la soluzione piu logica è unire la rete dove lavoro con la rete di casa mia attraverso una VPN

[ ![Infrastruttura di rete](/img/connessione_remota/infrastrutturaRete.webp) ](/img/connessione_remota/infrastrutturaRete.webp)

La VPN (Virtual Private Network) mi consente di gestire le mie stampanti, sia quella a getto di inchiostro che quelle 3D da un appartamento all'alto, oppure dalla camera di un hotel verso ognuno dei due appartamenti, come se fossero una singola rete, **senza inviare dati in chiaro i fatti miei attraverso Internet**

Per la verità, il veicolo di trasmissione è sempre internet, ma le comunicazioni sono punto-punto cioè io mi collego con il mio router in hotel, alla mia rete di casa, la mia rete di casa è collegata a sua volta all'altro appartamento ( **vedetelo, voi che usate le stampanti 3D in resina in box o nella casa di campagna perchè puzzano, oppure perche' ve lo ha ordinato il vostro boss e non arriva internet un bel router 4G e siete a posto**)

In questo modo sono nella mia rete di casa, con tutti i dati criptati, e se parliamo dei vari servizi di streaming usando la rete di casa per uscire ufficialmente mi potrei evitare diversi problemi in futuro


## Conclusioni

Spero di avervi dato alcune idee da implementare voi stessi, o da approfondire, vi prego di scriverlo nei commenti qui sotto

ll prossimo articolo sarà come gestire il router nella vostra rete interna e poi andremo a vedere come gestire le connessioni verso il mondo esterno o a creare una rete come ho descritto sopra

Tranquilli: essendo un blog di stampa 3D non mancheranno le soluzioni per collegare e gestire le nostre stampanti in remoto!

<DisqusComments
  slug="/docs/connessione_remota/introduzione"
  articleId="7"
  title="Connessione_remota_introduzione"
/>
