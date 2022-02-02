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

Oggi parleremo del router, che è il centro della vostra rete in tutti i sensi, perche' è dal router che i vostri apparati riceveranno gli ip, e sara' sempre il router ad instradare le comunicazioni verso l esterno e, dall'esterno,  i dati  che arrivano da internet verso il corretto apparato della nostra rete (anche con il nostro aiuto, si intende, attraverso le regole di routing e il forward delle porte)

Parlare del router è come parlare della luna: ci sono stati migliaia di altre persone prima di me ad averlo fatto, come filosofi, scienziati, poeti, fidanzati innamorati, e ogni uno di loro ha sempre avuto la sua idea

La stessa cosa vale per i router: c'è chi li sceglie in base a dove verranno montati ("caro, questo router è dello stesso colore del mobile", "Ma cara, questo va bene per la fibra noi abbiamo la adsl", "CARO ho detto questo router con questo colore va BENE!!!", "ok cara..."), oppure ci piace per l’enorme numero di antenne ("Babbo, Babbo, perche' hai preso il router con tutte queste antenne sporgenti?" "Figliolo, e' perche' mi ricorda tua madre!")

Ci sono anche quelli che lo scelgono in base alle loro necessita' guardando le caratteristiche, tipo: 

"ehi allora lo hai preso il router nuovo?"

"Ehm, non ancora, sto decidendo... sai, ne escono di nuovi ogni giorno...:

"da quanto lo stai cercando???"

 "2 anni..."

Vista l’immensita' di argomenti che possiamo trattare parlando di router, ho deciso di dividere questo articolo in 3 sezioni e 2 parti

Nella prima parte parleremo di router con firmware customizzato, che puo' essere **OPEN-WRT**, **DD-WRT**, **Project Tomato** (ormai mele, pere, frutti di bosco, lamponi e arance sono stati tutti presi come nomi ) o progetti similari, perche' possono essere installati in quasi tutti i router in circolazione, ma anche e soprattutto in quelli che non hanno più un supporto ufficiale o che sono fuori produzione. Inoltre, questi firmware hanno tutti delle community dietro, percio' sono sempre aggiornati. Tutti i progetti che presenteremo in questa sezione sono **free**, e, soprattutto, hanno un server VPN integrato e sono basati su LINUX o derivati. Si, anche altri router hanno dei  server VPN integrati ma io non posso provare tutti i router di questo mondo e farci dei tutorial 😑

Successivamente, andremo a vedere i router FritzBox, che sono i router che uso io, e fino a quando non ne trovero' di migliori continuero' ad usarli... 

:::warning
questi router non hanno il client vpn per pc con windows 11, non hanno la prioritizzazione dei pacchetti, e no, dare priorita' ad un pc non è dare priorita' a un protocollo, mica siamo nati ieri, e mancano anche altre feature che se ci fossero sarebbero una manna dal cielo….. 

maledetti... con quello che costano questi router...
:::

La terza parte si concentrera' su tutti gli altri modelli di router che hanno (e se non lo hanno non si devono permettere di essere chiamati router) la funzione di forward delle porte, che, messa in accoppiata con un raspberry pi (con installato octoprint per la stampante 3d, se no non capisco perche' siate in questo blog... 😬) ed un server VPN, ci consentira' di creare delle regole di instradamento per tutte le richieste effettuate verso la VPN

## Router Con Firmware customizzato

Premetto che questa sezione potrebbe occupare centinaia di pagine perche' stiamo cercando di entrare in un mondo fatto da centinaia do router diversi, da migliaia di modalita' di programmazione del firmware ognuna diversa dall'altra, dove ci sono moltissimi warning con scritte cubitali che vi dicono: "Se non fate attenzione a seguire passo passo la procedura, vi ritroverete con un bel sopramobile!!!" 

Non mi soffermero' nell'indicarvi come dovrete aggiornare il vostro router, ognuno è diverso, ma vi indichero' i link da andare a visitare per vedere **se il vostro router è compatibile** e **come si effettua il flash e si installa il nuovo firmware**

Prima di iniziare, pero', se non ve la sentite di fare fare questa operazione, ad esempio perchè state usando il modem dell'operatore oppure non trovate il vostro router nella lista degli apparati compatibili, o semplicemente pensate sia troppo complicato, avete a vostra disposizione due soluzioni: 

- acquistare un router che faccia questa operazione, ma attenzione: dovrete fare un forward di tutte le porte del modem router collegato ad internet al router con il server vpn integrato, e collegare tutti gli apparati al router nuovo (in parole povere, **usare il router collegato su internet come un semplice bridge**)

- comprare un bel raspberry, meglio se collegato alla vostra stampante 3d, e installarci sopra un server VPN con le porte del protocollo VPN inoltrate verso il raspberry, ma ne parleremo nelle prossime sezioni

I siti che vi suggeriro' sono essenzialmente tre, ed hanno la stessa funzione: quella di elencare i router compatibili con i propri firmware e mostrare la procedura di installazione di questo firmware

Questi firmware si basano su Linux e sono molto simili tra di loro

Per installare il firmware esistono quattro procedure di base, che pero' non potere scegliere voi: dovrete semplicemente seguire le informazioni che vi dara' il sito

### Quattro modi per installare OpenWrt

**Metodo 1**
tramite firmware con la funzione *aggiornamento firmware*

Apri la WebUI del tuo router con il tuo browser web e installa il file immagine del firmware di OpenWrt utilizzando l'opzione "Aggiornamento firmware". Il tuo dispositivo dovrebbe riavviarsi con OpenWrt installato.

NOTA: a volte il firmware di default del router ti consentira' solo di eseguire il flashing dei firmware firmati dal produttore stesso. In tal caso, non sarai in grado di installare OpenWrt utilizzando questo metodo. Tuttavia, per alcuni dispositivi i si puo passare per un firmware intermedio   che siano conformi ai firmware del produttore. Questo dovrebbe essere documentato nella pagina specifica del dispositivo per il tuo modello.

Metodo 2: tramite Bootloader e una porta Ethernet
La maggior parte dei router, forniscono possibilita' di di  bootloader integrate, tipo per riportare un router alle funzionalita' di default quando va male l'aggiornamento del firmware. Alcuni usano un client TFTP, altri un server TFTP, altri un client FTP, alcuni un server FTP, alcuni un server web e alcuni usano il protocollo XMODEM.

Prima di procedere è necessario capire quali di questi sistemi vengono implementati dal router e bisogna considerare che bisogna trovare l'indirizzo IP preimpostato del bootloader (non necessariamente identico all'indirizzo IP che il dispositivo ha dopo aver avviato il firmware originale!)
il protocollo usato e se il bootloader funge da client o da server
il numero di porta corretto
l'interfaccia a cui devi connetterti
un nome utente e una password di accesso (se necessaria)
''' Attenzione ''' la finestra di tempo che hai per entrare con il bootloader è molto breve dopo il riavvio del router.
Ma tutte queste informazioni sono date nella pagina del router dovete seguirle passo passo e vedrete che avrete un bel router fiammante o un nuovo sopramobile.

Metodo 2: tramite Bootloader e una porta seriale. Vale tutto quanto detto nella sezione precedente anche se il protocollo usato sara' l'X Modem, ma qui c'e' il rischio di dover saldare dei piedini sulla scheda madre percio' pensateci bene.
Metodo 4: tramite JTAG
Qui si usera' hardware esterno collegato sulla piastra madre, e qualche volta dovrete saldare pure i pin, lasciate perdere.

I tre firmware che andro' a presentare sono Open-WRT, DD-WRT, Tomato Firmware. I tre firmware sono in ordine di hardware supportato, e difficolta di installazione, esatto il firmware che supporta più hardware è quello che anche è il piu difficile da installare ( solo qualche volta la maggior parte dei firmware si installano come se facessi un upgrade).

### OPEN-WRT - DDD-WRT - TOMATO

<u>Ognuno  di questi 3 siti web  sono  descritti come una distribuzione Linux per dispositivi embedded</u>. Io adoro questa descrizione, in poche parole spiega tutto e ti fa aprire davanti un mondo di infinite possibilita'. La prima cosa da fare è visitare il  sito [https://ww.openwrt.org](https://www.openwrt.org) dove troverete il  l'elenco dei router supportati e delle relative immagini da scaricare.

![openwrt0](D:\articoli\introduzione rete\router\openwrt0.PNG)

Andiamo  in supported devices e vediamo ci sono dei warning, in base alla configurazione e alla memoria installata nel router, ma non fateci tanto caso, dovreste conoscere informazioni riguardo l'hardware del vostro router, ma soluzione migliore e veloce è quella di andare a vedere  se il vostro apparato è nella lista e vedere se vi dice se è aggiornabile e come.

![openwrt2](D:\articoli\introduzione rete\router\openwrt2.PNG)

Qui trovate uno stralcio della enorme lista di apparati dove potete installare questo firmware, e troverete quale dei 4 metodi sopra descritti dovrete utilizzare.

La stessa cosa vale per gli altri 2 siti:

- https://openwrt.org/
- https://www.linksysinfo.org/index.php



### Installazione Server VPN su fritzBox o similari.

Nota: 

Per Windows 11 funziona solo la versione client in tedesco ( maledetti!!!!! ), ma è molto facile di installare perchè il configuratore per il client, è in inglese e dovrete solo importare i file sul fritzbox e sul pc client.

Per le istruzioni della configurazione su PC si prega di seguire la pagina dell'assistenza https://it.avm.de/assistenza/banca-dati-informativa/dok/FRITZ-Box-7590/49_Configurare-la-connessione-VPN-al-FRITZ-Box-in-Windows-FRITZ-VPN/.



### Installazione sullo smartphone.

Qui invece voglio spendere 2 parole perchè credo verra' usato da chi vorra controllare il proprio octoprint o altro dispositivo in casa da remoto, ed è piu facile tirare fuori dalla tasca il proprio smartphone che il proprio pc ( si si l'ho ordinato pure io lo stream deck ma questo è un altro discorso ).



- Apriamo con un browser web la pagina di configurazione del nostro router

  

![router 1](D:\articoli\introduzione rete\router\router 1.PNG)

Note: come potete vedere qui non uso l'indirizzi standard consigliati da AVM per i fritz box, perchè questo è il router che sta in una locazione periferica e come avrete capito leggendo la documentazione ufficiale che vi avevo mandato il link precedentemente tutti gli apparati devono necessariamente usare <u>classi di IP diverse</u> tra di loro.

Percio' facciamo le cose per bene e andiamo sul nostro punto stella cioè il router dove accetteremo le connessioni di ingresso.

![router 2](D:\articoli\introduzione rete\router\router 2.PNG)

Sono entrato nel router dell'altra casa senza fare nulla perche i 2 router sono collegati in vpn, ho solo inserito il corretto ip address, e ora inseriamo la password cioe *************** ed entriamo.



![router 3](D:\articoli\introduzione rete\router\router 3.PNG)

- Capirete che la censura è necessaria perche ci tengo ai fatti miei, ma vi chiederete allora perche questa immagine, guardate il pallino verde su LAN-LAN è verde per indicare la connessione VPN tra i 2 apparati e ora guardate questa immagine 

  ![router 3b](D:\articoli\introduzione rete\router\router 3b.PNG)

- Mi sono collegato in VPN dal mio smartphone ed ecco che lui segnala che ha accettato la connessione e in questo momento è attiva. Ma ora creiamo una nuova connessione per un secondo eventuale apparato. Andiamo su internet/abilitazioni e selezioniamo il TAB VPN

  ![router 4](D:\articoli\introduzione rete\router\router 4.PNG)

- Volevo farvi notare il TAB DynDNS, è simile alla funzione DDNS, registratevi al servizio, e anche se siete dietro un altro router potrete sempre usare il server VPN di questo apparato. Ma torniamo a noi vedete il bottone Aggiungere connessione VPN, ecco cliccatelo.

  

![router 5](D:\articoli\introduzione rete\router\router 5.PNG)

- Scegliete la prima opzione e andate avanti

- Nella schermata successiva scegliete un utente esistente o createlo da zero

- Mettiamo l'utente lo create da ZERO questa è la schermata che dovete compilare, e diamo applica.

  ![router 6](D:\articoli\introduzione rete\router\router 6.PNG)

- Ora la nostra configurazione è pronta, il router è configurato, basta inserire i parametri sul nostro terminale Android o IOS.

![router 7](D:\articoli\introduzione rete\router\router 7.PNG)



![router 7a](D:\articoli\introduzione rete\router\router 7a.PNG)

- Ecco il riepilogo delle informazioni necessarie per creare la nostra bella VPN, ma volevo soffermarmi su alcuni punti:

  - Indirizzo Server, usate quello che vi viene consigliato ma se siete collegati ad un eventuale Router per accedere ad internet usate il hostname DDNS che avete creato che puntera' all'indirizzo pubblico. Quello generato da myfritz vi dara' l'indizzo che il router presentera' alla WAN del Fritz box.
  - Nelle selezioni dei profili da usare selezionate solo VPN non apriamo troppe porte verso esterno, tanto con la VPN entrerete lo stesso nel vostro router.
  - La chiave IPSEC è generata dal router non la potete modificare.
  - Per il resto Buona Fortuna.

  Qui un paio di link di Router Fritzbox che hanno questo servizio e che avete bisogno di uno nuovo potreste darci una occhiata.

FritzBox 7590 il modello che ho io https://amzn.to/3rJ8miy

FritzBox 7530 l'ho fatto acquistare a diversi amici, e si trovano tutti bene https://amzn.to/3KH0K8H



Non vi suggisco per ora modelli con il protocollo AX, ho letto di troppi problemi o se volete prenderli per un uso futuro per ora disattivate il protocollo Wifi AX. Il 7530AX costa meno della versione sprovvista percio' l'ho consigliato.

### Forward delle porte del router verso un apparato della rete interna

questa parte non doveva essere inclusa in questa sezione dell'articolo ma il sommo Paolo come un vecchio sensei dice "Se articolo meno  3000 parole è un tweet " e a lui non piace Twitter.

Ci sono diversi modi in base al vostro router, perche' ogni apparato ha la propria interfaccia grafica e le proprie procedure per aprire le porte di un router verso un apparato della rete interna. Potrei dirvi andate a cercavi il manuale o le istruzioni on-line, ma oggi vi mostrero' come si effettua questa operazione su i router piu famosi, ma non quelli che ho io perchè per i Fritzbox e un router con OpenWRT vi è gia la funzione di server vpn integrata. Prima di continuare ecco alcune spiegazioni di termini informatici:

- **TCP** : Transmission Control Protocol, è un protocollo di trasporto di livello 4 sul modello OSI, cosa vuole dire? Poco ma è importante nella scelta che noi andremo a fare, cercando di spiegarla in modo semplice, il protocollo TCP rende *affidabile* in linea teorica una connessione *non affidabile*   cosa significa non affidabile? Semplice internet non sappiamo che giri fanno i nostri pacchetti dati per arrivare a destinazione, questo protocollo ne tiene traccia e se serve puo richiedere la ritrasmissione del pacchetto, ma non approfondiamo troppo, altrimenti a qualcuno potrebbe venire mal di testa, di certo le conversazioni telefoniche o in video conferenza non sono fatte con questo protocollo.
- **UDP**: User Datagram Protocol anche lui un protocollo di trasporto di livello 4 sul modello OSI, ma a differenza del protocollo TCP non gestisce il riordinamento dei pacchetti ne' la ritrasmissione di quelli persi, ed è percio' generalmente considerato di minore affidabilita'. In compenso è molto rapido, non avendo necessita di attendere che arrivino altri pachetti ( time to live), percio' utile per le comunicazioni dove si voglia dare come priorita' la velocita della comunicazione, ad esempio voip o video conference.

Una volta eseguito l’accesso ala interfaccia web del router, cerchiamo la funzione inoltro porte nel router o port forwarding se è in inglese. In alcuni apparati si parla di Virtual server alla fine è sempre uguale. A questo punto dovremmo creare una regola inserendo il protocollo che vogliamo utilizzare (tcp, udp oppure both che sta per entrambi) inserire la porta che dove sappiamo arriveranno le richieste attraverso internet ( esempio la TCP 443 per la vpn o per il HTTPS ) e verso quale ip della rete interna girare queste richieste e la porta che dovremmo inoltrarle. Si la porta interna, è molto importante, vi faccio un esempio, il nostro router non puo usare la porta 443 perchè è gia impegnata per altri servizi, percio noi decidiamo che chi vorra usare il nostro servizio da internet dovra' dichiarare di usare la porta 444, e poi attraverso le regole di forwarding, inoltro la richiesta al mio server raspberry interno con il 192.168.0.10 porta 443.

Ma vediamo meglio i vari termini che troveremo nei nostri router: 

- **Porta interna**/**Porta esterna** ** oppure **Porta iniziale**/**Porta finale** :In questi campi dovrete inserire come porte esterna la porta TCP/UDP aperta su internet  e come porta interna la porta TCP o UDP usata dal server
- **IP destinazione** oppure **Indirizzo IP server** : Qui inserite l'indirizzo delal rete interna del vostro server o apparato di rete
- **Nome**: qui inserite un nome per ricordarvi su cosa riguarda la regola che avete appena creato
- **Protocollo** (o **tipo di porta**) – in questo campo potete decidere se insierire TCP o UDP o both se voelte che entrabi i protocolli possano transitare da questa porta.

Ma per capire meglio il tutto ecco alcuni esempi di forward delle porte con router famosi:

Ma per prima cosa avrete bisogno di user id e password del router e se non li avete mai cambiati questa lista vi servira' ( e servira' pure a me ad arrivare alle 3000 parole vero sensei Paolo){lista trovata su internet, io preferisco altri modi per trovarle}

**Device     Username   Password**

D-Link     admin        (lasciare vuoto)

Netgear     admin        password

Linksys     admin       admin

Asus       admin        admin

DrayTek    admin       admin

ZyXel      admin        1234

TP-Link     admin       admin

TRENDnet   admin       admin

Belkin       admin       (lasciare vuoto)

### ***Ecco alcuni esempi***

**Netgear**

![netgear big](D:\articoli\introduzione rete\router\netgear big.png)

![netgear big 2](D:\articoli\introduzione rete\router\netgear big 2.png)

- In entrambi i modelli di router dovete sempre andare nella sezione Advance setup.

**TP-LINK**

![tp-link big 1](D:\articoli\introduzione rete\router\tp-link big 1.jpeg)

![tp-link big 2](D:\articoli\introduzione rete\router\tp-link big 2.jpeg)

- Qui invece andate su Virtual server come mostrato nelle immagini

**Tim**

![tim big 1](D:\articoli\introduzione rete\router\tim big 1.jpg)

![tim big 2](D:\articoli\introduzione rete\router\tim big 2.jpg)

- Qui trovate i 2 modem della Tim con esempi di forward delle porte

**D-LINK**

![dlink big 1](D:\articoli\introduzione rete\router\dlink big 1.png)

![dlink big 2](D:\articoli\introduzione rete\router\dlink big 2.png)

- Qui trovate i passaggi per crearlo su un D-LINK

**Belkin**

![belkin ig 1](D:\articoli\introduzione rete\router\belkin ig 1.png)

![belkun big 2](D:\articoli\introduzione rete\router\belkun big 2.png)

- Vi chiederete ma chi cavolo è Belkin, pure io se non li avessi visti da Mediaword e Unieuro, e dite che non c'è nessuno che non li abbia comprati?

**Linksys o Cisco prima e Foxconn per gli amici)**

![linksys big 1](D:\articoli\introduzione rete\router\linksys big 1.png)

![linksys big 2](D:\articoli\introduzione rete\router\linksys big 2.png)

- Linksys, prima acquistata da Cisco e poi rivenduta a **<u>Foxconn</u>** in grassetto e sottolineato altrimenti non mi fanno piu entrare in cina, è nella stessa grande famiglia con Belkin e Wemo, percio non mi stupirei se trovassi interfacce web simili.



### Conclusioni

Ora che siete a conoscenza di come fare il forward delle porte, e le password standard dei router (tranquilli solo uno su 10 le cambia) potrete collegarvi la vostra bella playstation e fare un forward delle porte cosi vi collegherete al servizio PSN e giocare con la fibra da 2 terabyte al secondo. Ma mi raccomando chiedete prima il suo permesso....

La prima parte termina qui, presto ci sara' la seconda parte dove creeremo un Server VPN con il nostro bel Raspberry










