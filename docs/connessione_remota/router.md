---
title: Parliamo di router
slug: /connessione_remota/router
description: Tutorial di introduzione alla gestione remota di stampanti 3d
keywords: ["octoprint", "raspberry", "raspberrypi", "3d printing", "flyingbear", "flying bear", "flyingbear ghost", "iot"]
image: /img/connessione_remota/iot.webp
---

import DisplayAd from '../../src/components/displayAd'

import DisqusComments from '../../src/components/disqusComments'

[ ![Iot](/img/connessione_remota/iot.webp) ](/img/connessione_remota/iot.webp)

**Autore: Nick_IT**

## Premessa

Oggi parleremo del router, che e' il centro della vostra rete in tutti i sensi, perche' e' dal router che i vostri apparati riceveranno gli indirizzi IP, e sara' sempre il router ad instradare le comunicazioni da e verso l'esterno, organizzando i dati  che arrivano da internet verso il corretto apparato della nostra rete (anche con il nostro aiuto, si intende, attraverso le regole di routing e il forward delle porte)

Parlare del router e' come parlare della luna: ci sono stati migliaia di altre persone prima di me ad averlo fatto, come filosofi, scienziati, poeti, fidanzati innamorati, e ogni uno di loro ha sempre avuto la sua idea

La stessa cosa vale per i router: c'e' chi li sceglie in base a dove verranno montati ("caro, questo router e' dello stesso colore del mobile", "Ma cara, questo va bene per la fibra noi abbiamo la adsl", "CARO ho detto questo router con questo colore va BENE!!!", "ok cara..."), oppure ci piace per l’enorme numero di antenne ("Babbo, Babbo, perche' hai preso il router con tutte queste antenne sporgenti?" "Figliolo, e' perche' mi ricorda tua madre!")

Ci sono anche quelli che lo scelgono in base alle loro necessita' guardando le caratteristiche, tipo: 

"ehi allora lo hai preso il router nuovo?"

"Ehm, non ancora, sto decidendo... sai, ne escono di nuovi ogni giorno...:

"da quanto lo stai cercando???"

 "2 anni..."

Vista l’immensita' di argomenti che possiamo trattare parlando di router, ho deciso di dividere questo articolo in 3 sezioni e 2 parti

<DisplayAd/>

Nella prima parte parleremo di router con firmware customizzato, che puo' essere **OPEN-WRT**, **DD-WRT**, **Project Tomato** (ormai mele, pere, frutti di bosco, lamponi e arance sono stati tutti presi come nomi ) o progetti similari, perche' possono essere installati in quasi tutti i router in circolazione, ma anche e soprattutto in quelli che non hanno più un supporto ufficiale o che sono fuori produzione. Inoltre, questi firmware hanno tutti delle community dietro, percio' sono sempre aggiornati. Tutti i progetti che presenteremo in questa sezione sono **free**, e, soprattutto, hanno un server VPN integrato e sono basati su LINUX o derivati. Si, anche altri router hanno dei  server VPN integrati ma io non posso provare tutti i router di questo mondo e farci dei tutorial 😑

Successivamente, andremo a vedere i router FritzBox, che sono i router che uso io, e fino a quando non ne trovero' di migliori continuero' ad usarli... 

:::warning
questi router non hanno il client vpn per pc con windows 11, non hanno la prioritizzazione dei pacchetti, e no, dare priorita' ad un pc non e' dare priorita' a un protocollo, mica siamo nati ieri, e mancano anche altre feature che se ci fossero sarebbero una manna dal cielo….. 

maledetti... con quello che costano questi router...
:::

La terza parte si concentrera' su tutti gli altri modelli di router che hanno (e se non lo hanno non si devono permettere di essere chiamati router) la funzione di forward delle porte, che, messa in accoppiata con un raspberry pi (con installato octoprint per la stampante 3d, se no non capisco perche' siate in questo blog... 😬) ed un server VPN, ci consentira' di creare delle regole di instradamento per tutte le richieste effettuate verso la VPN

<DisplayAd/>

## Router Con Firmware customizzato

Premetto che questa sezione potrebbe occupare centinaia di pagine perche' stiamo cercando di entrare in un mondo fatto da centinaia di router diversi, da migliaia di modalita' di programmazione del firmware ognuna diversa dall'altra, dove ci sono moltissimi warning con scritte cubitali che vi dicono: "Se non fate attenzione a seguire passo passo la procedura, vi ritroverete con un bel sopramobile!!!" 

Non mi soffermero' nell'indicarvi come dovrete aggiornare il vostro router, ognuno e' diverso, ma vi indichero' i link da andare a visitare per vedere **se il vostro router e' compatibile** e **come si effettua il flash e si installa il nuovo firmware**

Prima di iniziare, pero', se non ve la sentite di fare questa operazione, ad esempio perche' state usando il modem dell'operatore oppure non trovate il vostro router nella lista degli apparati compatibili, o semplicemente pensate sia troppo complicato, avete a vostra disposizione due soluzioni: 

- acquistare un router che faccia questa operazione, ma attenzione: dovrete fare un forward di tutte le porte del modem router collegato ad internet al router con il server vpn integrato, e collegare tutti gli apparati al router nuovo (in parole povere, **usare il router collegato ad internet come un semplice bridge**)

- comprare un bel raspberry, meglio se collegato alla vostra stampante 3d, e installarci sopra un server VPN con le porte del protocollo VPN inoltrate verso il raspberry, ma ne parleremo nelle prossime sezioni

I siti che vi suggeriro' sono essenzialmente tre, ed hanno la stessa funzione: quella di elencare i router compatibili con i firmware pubblicati e mostrare la procedura di installazione di detti firmware

Questi firmware si basano su Linux e sono molto simili tra di loro

Per installare il firmware esistono quattro procedure di base, che pero' non potete scegliere voi: dovrete semplicemente seguire le informazioni che vi dara' il sito

### Quattro modi per installare OpenWrt

**Metodo 1**

tramite firmware con la funzione **aggiornamento firmware**

Apri l'interfaccia web del tuo router con il tuo browser preferito ed installa il file immagine del firmware di OpenWrt, utilizzando l'opzione **Aggiornamento firmware**. Il tuo dispositivo dovrebbe riavviarsi con OpenWrt installato

:::note
A volte il firmware di default del router ti consentira' solo di flashare firmware firmati dal produttore stesso. In tal caso, non sarai in grado di installare OpenWrt utilizzando questo metodo. Tuttavia, per alcuni dispositivi si puo' passare per un firmware intermedio che sia conforme ai firmware del produttore. Questo dovrebbe essere documentato nella pagina specifica del dispositivo per il tuo modello
:::

**Metodo 2** 

tramite Bootloader e una porta Ethernet

La maggior parte dei router fornisce la possibilita' di avere bootloader integrati, per esempio per ripristinare le funzionalita' di default del router quando va male l'aggiornamento del firmware. Alcuni usano un client TFTP, altri un server TFTP, altri un client FTP, alcuni un server FTP, alcuni un server web e alcuni usano il protocollo XMODEM

Prima di procedere, pero', e' necessario capire quali di questi sistemi sono implementati dal router, poi bisogna considerare che e' necessario trovare: 
- l'indirizzo IP preimpostato del bootloader (non necessariamente identico all'indirizzo IP che il dispositivo ha dopo aver avviato il firmware originale!)
- il protocollo usato e se il bootloader funge da client o da server
- il numero di porta corretto
- l'interfaccia a cui devi connetterti
- un nome utente e una password di accesso (se necessaria)

:::warning
La finestra di tempo che hai per entrare con il bootloader e' molto breve dopo il riavvio del router

Tutte queste informazioni, fornite nella pagina del router, dovrete seguirle passo passo e vedrete che avrete un bel router fiammante, oppure un nuovo soprammobile
:::

**Metodo 3** 
tramite Bootloader e una porta seriale

Vale tutto quanto detto nella sezione precedente, anche se il protocollo usato sara' **l'X Modem**, ma qui c'e' il rischio di dover saldare dei piedini sulla scheda madre, percio' **pensateci bene**

**Metodo 4**

tramite JTAG

Qui si usera' hardware esterno collegato sulla piastra madre, e qualche volta dovrete saldare pure i pin, quindi lasciate perdere: troppo complicato...


I tre firmware che andro' a presentare sono **Open-WRT**, **DD-WRT** e **Tomato Firmware** 

I tre firmware sono in ordine di hardware supportato e difficolta' di installazione. Purtroppo, il firmware che supporta più hardware e' anche il piu' difficile da installare (solo qualche volta la maggior parte dei firmware si installano come se facessi un upgrade)

<DisplayAd/>

## OPEN-WRT - DDD-WRT - TOMATO

Questi firmware sono descritti come una **distribuzione Linux per dispositivi embedded**. Io adoro questa definizione: in poche parole spiega tutto e ti fa aprire davanti un mondo di infinite possibilita'

La prima cosa da fare e' visitare il sito di [openwrt](https://www.openwrt.org), dove troverete l'elenco dei router supportati e delle relative immagini da scaricare

[![OpenWRT - Home](/img/router/openwrt0.webp)](/img/router/openwrt0.webp)

Andiamo in **supported devices** e vediamo che ci sono degli avvertimenti, in base alla configurazione e alla memoria installata nel router, ma non fateci tanto caso: dovreste conoscere informazioni tecniche al riguardo dell'hardware del vostro router, ma la soluzione migliore e veloce e' quella di andare a vedere  se il vostro apparato e' nella lista e vedere se vi dice se e' aggiornabile e come

[![OpenWRT - Supported devices](/img/router/openwrt2.webp)](/img/router/openwrt2.webp)

Qui trovate uno stralcio della enorme lista di apparati dove potete installare questo firmware, e troverete quale dei 4 metodi sopra descritti dovrete utilizzare

La stessa cosa vale per gli altri 2 siti:

- [openWrt](https://openwrt.org/)
- [linksys](https://www.linksysinfo.org/index.php)

## Installazione Server VPN su fritzBox o similari

:::note
Per Windows 11 funziona solo la versione client in tedesco (maledetti!!!!! 🤬🤬🤬), ma e' molto facile da installare perche' il configuratore per il client e' in inglese, dovrete solo importare i file sul fritzbox e sul pc client
:::

Per le istruzioni della configurazione su PC si prega di seguire la [pagina dell'assistenza](https://it.avm.de/assistenza/banca-dati-informativa/dok/FRITZ-Box-7590/49_Configurare-la-connessione-VPN-al-FRITZ-Box-in-Windows-FRITZ-VPN/)

<DisplayAd/>

## Installazione sullo smartphone

Qui invece voglio spendere due parole, perche' credo verra' usato da chi vorra **controllare il proprio octoprint o altro dispositivo in casa da remoto**, ed e' piu facile tirare fuori dalla tasca il proprio smartphone che il proprio pc (si si l'ho ordinato pure io lo STEAM deck, ma questo e' un altro discorso...)

Per prima cosa, apriamo con un browser web la pagina di configurazione del nostro router

[![Fritzbox smartphone configuration](/img/router/router1.webp)](/img/router/router1.webp)
  
:::note
come potete vedere, qui non uso l'indirizzo standard consigliato da AVM per i fritz box, perche' questo e' il router che sta in una locazione periferica e, come avrete capito leggendo la documentazione ufficiale della quale vi avevo precedentemente mandato il link tutti gli apparati devono necessariamente usare **classi di IP diverse** tra di loro
:::

Percio' facciamo le cose per bene e andiamo sul nostro punto stella, cioe' il router dove accetteremo le connessioni di ingresso

[![Fritzbox smartphone configuration star point](/img/router/router2.webp)](/img/router/router2.webp)

Sono entrato nel router dell'altra casa senza fare nulla perche i due router sono collegati in vpn, ho solo inserito il corretto indirizzo IP, e ora inseriamo la password, cioe ***************, ed entriamo (Ah! pensavate vi dicessi la mia password, vero??? 🥸🥸🥸)

[![Fritzbox smartphone configuration Main Panel](/img/router/router3.webp)](/img/router/router3.webp)

Capirete che la censura e' necessaria perche ci tengo ai fatti miei, ma vi chiederete allora perche' questa immagine... Guardate il pallino verde su LAN-LAN: e' verde per indicare la connessione VPN tra i due apparati. Ora guardate questa immagine:

[![Fritzbox smartphone configuration Main Panel 2](/img/router/router3b.webp)](/img/router/router3b.webp)

Mi sono collegato in VPN dal mio smartphone ed ecco che lui segnala che ha accettato la connessione e in questo momento e' attiva

Ora creiamo una nuova connessione per un secondo eventuale apparato. Andiamo su internet/abilitazioni e selezioniamo il TAB VPN

[![Fritzbox smartphone VPN](/img/router/router4.webp)](/img/router/router4.webp)

:::tip
Volevo farvi notare il TAB DynDNS: e' simile alla funzione DDNS, registratevi al servizio, e anche se siete dietro un altro router potrete sempre usare il server VPN di questo apparato. 
:::

Adesso cliccate sul bottone per aggiungere la connessione VPN

[![Fritzbox smartphone Add VPN](/img/router/router5.webp)](/img/router/router5.webp)

Scegliete la prima opzione e andate avanti

Nella schermata successiva scegliete un utente esistente o createlo da zero

Supponendo vogliate creare un utente da ZERO, questa sotto e' la schermata che dovete compilare. Successivamente clicchiamo su **Applica**

[![Fritzbox smartphone VPN New user](/img/router/router6.webp)](/img/router/router6.webp)

Ora la nostra configurazione e' pronta, il router e' configurato, basta inserire i parametri sul nostro terminale Android o IOS

[![Fritzbox smartphone VPN Add phone](/img/router/router7.webp)](/img/router/router7.webp)

[![Fritzbox smartphone VPN Add phone](/img/router/router7a.webp)](/img/router/router7a.webp)

Ecco il riepilogo delle informazioni necessarie per creare la nostra bella VPN, ma volevo soffermarmi su alcuni punti:

  - **Indirizzo Server**: usate quello che vi viene consigliato, ma, se siete collegati ad un eventuale Router per accedere ad internet, usate il hostname DDNS che avete creato che puntera' all'indirizzo pubblico. Quello generato da myfritz vi dara' l'indirizzo che il router presentera' alla WAN del Fritz box
  - Nelle selezioni dei profili da usare, **selezionate solo VPN**: non apriamo troppe porte verso esterno, tanto con la VPN entrerete lo stesso nel vostro router
  - La **chiave IPSEC e' generata dal router**, non la potete modificare
  - Per il resto, **Buona Fortuna**


Qui un paio di link di Router Fritzbox che hanno questo servizio e, se avete bisogno di un nuovo router, potreste darci un'occhiata

Il modello che ho io e' il **FritzBox 7590**, decisamente ottimo

<iframe width="120px" height="240px" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=flyingbearc0c-21&language=it_IT&o=29&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B074G5Z1PQ&linkId=e3ce141cd6ca249837e5435f28ef9718"></iframe>

Il **FritzBox 7530** l'ho fatto acquistare a diversi amici, e si trovano tutti bene

<iframe width="120px" height="240px" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bfc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=flyingbearc0c-21&language=it_IT&o=29&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B09969QRJ5&linkId=a1ada033f93e8cd8ffc957e8d47eecfe"></iframe>

Non vi suggerisco per ora modelli con il protocollo AX, ho letto di troppi problemi...

Se proprio volete prenderli per un uso futuro, per ora disattivate il protocollo Wifi AX. Il 7530AX costa meno della versione sprovvista percio' l'ho consigliato

<DisplayAd/>

## Forward delle porte del router verso un apparato della rete interna

Questa parte non doveva essere inclusa in questa sezione dell'articolo, ma il sommo ZeroPX, come un vecchio sensei, dice:

[![ZeroPX Yoda](/img/router/yodaZero.webp)](/img/router/yodaZero.webp)

Per aprire le porte di un router verso un apparato della rete interna ci sono diversi modi. Questo è dovuto al fatto che ogni router ha la propria interfaccia grafica e le proprie procedure. Potrei dirvi:"andate a cercarvi il manuale o le istruzioni on-line", ma oggi vi mostrero' come si effettua questa operazione con i router piu' famosi, ma non quelli che ho io, perche' per i Fritzbox e un router con OpenWRT vi e' gia la funzione di server vpn integrata. Prima di continuare ecco alcune spiegazioni di termini informatici:

- **TCP** : Transmission Control Protocol, e' un protocollo di trasporto di livello 4 sul modello OSI, cosa vuole dire? Poco ma e' importante nella scelta che noi andremo a fare, cercando di spiegarla in modo semplice, il protocollo TCP rende **affidabile** in linea teorica una connessione **non affidabile**. Cosa significa non affidabile? Semplice: su Internet non sappiamo che giri fanno i nostri pacchetti dati per arrivare a destinazione; questo protocollo ne tiene traccia e, se serve, puo' richiedere la ritrasmissione del pacchetto, ma non approfondiamo troppo, altrimenti a qualcuno potrebbe venire mal di testa. Di certo, le conversazioni telefoniche o in video conferenza non vengono effettuate usando questo protocollo
- **UDP**: User Datagram Protocol, anche lui un protocollo di trasporto di livello 4 sul modello OSI, ma a differenza del protocollo TCP non gestisce il riordinamento dei pacchetti ne' la ritrasmissione di quelli persi, ed e' percio' generalmente considerato di minore affidabilita'. In compenso e' molto rapido, non avendo necessita di attendere che arrivino altri pachetti (time to live), percio' utile per le comunicazioni dove si voglia dare come priorita' la velocita della comunicazione, ad esempio VOIP o video conference

Una volta eseguito l’accesso alla interfaccia web del router, cerchiamo la funzione inoltro porte nel router (**port forwarding** se in inglese). In alcuni apparati si parla di Virtual server, ma alla fine e' sempre uguale

A questo punto dovremo creare una regola inserendo il protocollo che vogliamo utilizzare (tcp, udp oppure both che sta per entrambi), poi inserire la porta da dove sappiamo arriveranno le richieste dall'esterno, attraverso Internet (per esempio, la TCP 443 per la vpn o per HTTPS) e verso quale indirizzo IP della rete interna instradare queste richieste e la porta appropriata a cui dovremo inoltrarle. Quale porta interna usare e' molto importante, vi faccio un esempio: il nostro router esposto a Internet (quale router, quello esposto a Internet, ho dato per scontanto di sì) non puo' usare la porta 443 perche' e' gia impegnata per altri servizi, percio noi decidiamo che chi vorra' usare il nostro servizio attraverso Internet dovra' dichiarare di usare la porta 444, e poi, attraverso le regole di forwarding, inoltro la richiesta al mio server raspberry interno con indirizzo IP 192.168.0.10 sulla porta 443

Ma vediamo meglio i vari termini che troveremo nei nostri router: 

- **Porta interna**/**Porta esterna** ** oppure **Porta iniziale**/**Porta finale**: in questi campi dovrete inserire come porte esterna la porta TCP/UDP aperta su internet  e come porta interna la porta TCP o UDP usata dal server
- **IP destinazione** oppure **Indirizzo IP server** : qui inserite l'indirizzo della rete interna del vostro server o apparato di rete
- **Nome**: qui inserite un nome per ricordarvi cosa riguarda la regola che avete appena creato
- **Protocollo** (o **tipo di porta**) – in questo campo potete decidere se inserire TCP o UDP, o entrambi, se volete che entrambi i protocolli possano transitare da questa porta

Probabilmente adesso sarete un bel po' confusi...

Per capire meglio il tutto, ecco alcuni esempi di forward delle porte con router famosi. Ma, per prima cosa, avrete bisogno di user id e password del vostro router per accedere alle pagine di configurazione spiegate finora. Se non li avete mai cambiati o usati questa lista vi servira' (e servira' pure a me ad arrivare alle 3000 parole, vero sensei ZeroPX???)

:::tip
Questa lista e' stata trovata su internet, io preferisco altri modi per trovarle... 🐱‍💻

Nessun router e' stato maltrattato per la creazione di questa lista
:::


|   | Device   | Username | Password         |
|---|----------|----------|------------------|
| 1 | D-Link   | admin    | (lasciare vuoto) |
| 2 | Netgear  | admin    | password         |
| 3 | Linksys  | admin    | admin            |
| 4 | Asus     | admin    | admin            |
| 5 | DrayTek  | admin    | admin            |
| 6 | ZyXel    | admin    | 1234             |
| 7 | TP-Link  | admin    | admin            |
| 8 | TRENDnet | admin    | admin            |
| 9 | Belkin   | admin    | (lasciare vuoto) |

<DisplayAd/>

## Alcuni esempi di port forwarding

**Netgear**

[![Port Forwarding - Netgear](/img/router/netgearbig.webp)](/img/router/netgearbig.webp) [![Port Forwarding - Netgear 2](/img/router/netgearbig2.webp)](/img/router/netgearbig2.webp)

In entrambi i modelli di router dovete sempre andare nella sezione Advance setup

**TP-LINK**

[![Port Forwarding - TP-Link](/img/router/tplik.webp)](/img/router/tplik.webp)

[![Port Forwarding - TP-Link 2](/img/router/tplink2.webp)](/img/router/tplink2.webp)

Qui invece andate su Virtual server come mostrato nelle immagini

**Tim**

[![Port Forwarding - Tim](/img/router/timbig1.webp)](/img/router/timbig1.webp)

[![Port Forwarding - Tim 2](/img/router/timbig2.webp)](/img/router/timbig2.webp)

Qui trovate i 2 modem della Tim con esempi di forward delle porte

**D-LINK**

[![Port Forwarding - dlink](/img/router/dlinkBig1.webp)](/img/router/dlinkBig1.webp)

[![Port Forwarding - dlink 2](/img/router/dlinkbig2.webp)](/img/router/dlinkbig2.webp)

Qui trovate i passaggi per crearlo su un D-LINK

**Belkin**

[![Port Forwarding - belkin](/img/router/belkinG1.webp)](/img/router/belkinG1.webp)

[![Port Forwarding - belkin 2](/img/router/belkinBig2.webp)](/img/router/belkinBig2.webp)

Vi chiederete chi cavolo e' Belkin.. Pure io, se non li avessi visti da Mediaword e Unieuro, e dite che non c'e' nessuno che non li abbia comprati???

**Linksys (o Cisco prima, poi Foxconn)**

[![Port Forwarding - linksys](/img/router/linksysBig1.webp)](/img/router/linksysBig1.webp)

[![Port Forwarding - linksys 2](/img/router/linksysbig2.webp)](/img/router/linksysbig2.webp)

Linksys, prima acquistata da Cisco e poi rivenduta a **Foxconn** (in grassetto e sottolineato, altrimenti non mi fanno piu entrare in Cina...), e' nella stessa grande famiglia con Belkin e Wemo, percio non mi stupirei di trovare interfacce web simili

<DisplayAd/>

## Conclusioni

Ora che siete a conoscenza di come fare il forward delle porte, e le password standard dei router (tranquilli solo uno su 10 le cambia), potrete collegarvi la vostra bella Playstation e fare un forward delle porte, cosi vi collegherete al servizio PSN per giocare con la fibra da 2 terabyte al secondo. Ma, mi raccomando: chiedete prima il permesso del proprietario del router...

La prima parte termina qui, presto ci sara' la seconda parte dove creeremo un Server VPN con il nostro bel Raspberry


<div class="disclaimer">
  <sub>
    <p>Le informazioni contenute in questo articolo sono solo a scopo informativo, gli autori e i proprietari non vogliono incoraggiare nessun atto di pirateria informatica</p>
    <p>Qualsiasi riproduzione del materiale contenuto in questa pagina e' consentita, <strong>a patto di citarne la fonte</strong></p>
    <p>Questa pagina potrebbe contenere link sponsorizzati</p>
  </sub>
</div>


<DisqusComments
  slug="/docs/connessione_remota/router"
  articleId="9"
  title="Connessione_remota_router"
/>
