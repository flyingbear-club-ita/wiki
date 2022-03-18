---
title: Open VPN server con Raspberry Pi
slug: /connessione_remota/vpn
description: Gestione remota di stampanti 3d - creare un server vpn con raspberry pi per controllare la Flyingbear Ghost da remoto
keywords: ["octoprint", "raspberry", "raspberrypi", "3d printing", "flyingbear", "flying bear", "flyingbear ghost", "iot", "open vpn", "pivpn"]
image: /img/router/logopivpn.webp
---

import DisplayAd from '../../src/components/displayAd';
import ResponsivePlayer from '../../src/components/videoPlayer';

# Open VPN server con Raspberry Pi

Articolo a cura di **Nick_IT**

## Introduzione
:::tip
Per i piu' pigri, ai quali non va di leggere sto papirone a cura di **Nick_IT**, c'e' anche una versione video dell'articolo, che potete trovare proprio qua sotto

<ResponsivePlayer
  src="https://youtu.be/7YLl8q76lAc"
/>
:::


Siamo arrivati alla conclusione di questo mini corso, e oggi parleremo di come gestire da remoto la nostra bella stampante collegata ad octoprint, senza doverci sobbarcare servizi esterni

Per chi non ha un raspberry con octoprint, [qui trovate un tutorial per l'installazione](/docs/raspberry/installazione_raspbian) e qui una [introduzione sul mondo raspberry](/docs/raspberry/introduzione) 

Inoltre, vi  consiglio queste schede raspberry, se siete interessati a scoprire questo affascinante mondo:

**Raspberry P4 8 Giga**
il modello attualmente piu' performante della famiglia Raspberry, forse anche troppo solo per installare octoprint (anche per gestire più stampanti) e un server VPN, ma chissa', un domani potreste volere aggiungere altri servizi

<iframe width="120px" height="240px" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=flyingbearc0c-21&language=it_IT&o=29&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B0899VXM8F&linkId=0ad8d79c62bd0c0a7fe1f8b93abdaaeb">
</iframe>


**Raspberry Pi 3B+**
Modello precedente, ma non meno utilizzabile. Fa le stesse cose del raspberry 4, ma costa la metà

<iframe width="120px" height="240px" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=flyingbearc0c-21&language=it_IT&o=29&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B00LPESRUK&linkId=1eaa8c0e4b2a2542c5c87723d46e3c24">
</iframe>

**Raspberry Pi Zero 2 W**
L'ultimo arrivato, costo gonfiato rispetto a quando era uscito, altrimenti sarebbe un bel prodotto

<iframe width="120px" height="240px" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=flyingbearc0c-21&language=it_IT&o=29&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B09KLVX4RT&linkId=36e8ec02cc164ee0368b632f26bb75a1">
</iframe>

## Ma a cosa serve una VPN

[![vpn diagram](/img/router/vpn-diagram.webp)](/img/router/vpn-diagram.webp)

Domanda forse inutile, ma se anche solo una persona leggendo questa parte dell'articolo capisse quanto possa essere utile una VPN al giorno d'oggi, potrei dire con orgoglio che le sere passate a scrivere questo articolo non sono state sprecate

La sicurezza delle reti pubbliche, o degli hotel, ma anche dei centri commerciali, o dall'aereoporto per accedere ad Internet lascia spesso a desiderare. Anche se pensate a offrire una sicurezza all'utilizzatore, sono vulnerabili riguardo le nostre informazioni private, che possono essere una password, oppure delle semplici chiacchierate che facciamo in chat con i nostri amici 

Si, lo so: sono criptate (illusi), ma anche se è criptata lascereste tutto quello che avete inviato e ricevuto dal telefono a uno sconosciuto che si è messo a recupere tutti i pacchetti dati che transitano dall'access point dove è collegato? 

E non solo: volete vedere la vostra telecamera in giardino o a casa, o volete vedere lo stato della vostra stampante 3D se vi da la possibilità di farlo o attraverso **Octoprint**? 

Una soluzione per sentirsi sicuri navigando in rete, anche quando si è in giro, è quella di impostare una propria **VPN** (Virtual Private Network, per gli amici)

Con una VPN potete avere accesso in modo criptato alla vostra rete locale da qualsiasi connessione Internet, oppure, se voleste (piu' avanti vedremo come si fa...), potreste collegarvi attraverso il vostro IP di casa mentre navigate o usate servizi di streaming (e sono certo che Dazn dal prossimo anno vorrà questo), oppure se siete fuori Europa e volete vedervi la partita in streaming  e potrete usare la vostra VPN home made, sui vostri pc, smartphone e tablet, anche conteporaneamente

Per la configurazione della vostra VPN avrete bisogno di:

- un Raspberry che svolga la funzione di server
- il software libero [PiVPN](https://www.pivpn.io/), una versione customizzata e otimizzata che vi permettera di creare un server OpenVPN

:::tip
Un'alternativa interessate a OpenVPN e' un server [WireGuard](https://www.wireguard.com/), che mi stuzzica molto perchè da alcuni test sembra molto più veloce di OpenVPN
:::

<DisplayAd/>

## Impostare una propria VPN: un quadro generale delle funzioni

la configurazione di un  server VPN in una rete locale (LAN) serve per creare un ingresso sicuro attraverso una connessione criptata dall’esterno

Essa rappresenta una rete di comunicazione virtuale **peer to peer** (punto-punto) tra il client vpn e il server vpn tramite un canale sicuro tra un client VPN e la vostra Home Network

Per gli apparati della rete, ogni richiesta passera' dal Server VPN, che la instraderà al destinatario corretto, ad esempio NAS o un stampante sia 3D che laser, oltre che utilizzare la connessione VPN per la navigazione online usando la connessione Internet della vostra rete locale. Per fare in modo che sia possibile tutto questo, il vostro raspberry deve essere costantemente acceso e connesso ad Internet e avere le corrette porte UDP e TCP del ruoter inoltrate (forward) verso il raspberry. Il raspberry svolge quindi la funzione di host per la rete virtuale privata.  L’accesso al vostro server VPN con un client connesso ad Internet, che si trova al di fuori della propria rete LAN privata, si verifica  tramite il cosiddetto **tunnel VPN.**

Questo tunnel VPN parte dal vostro client e termina nel vostro server VPN, quindi si estende lungo tutta la connessione Internet. Così il **tunnel è molto più sicuro rispetto alla media delle connessioni Internet pubbliche** e per gli hacker è perciò difficile intrufolarsi nel tunnel e carpire il suo traffico dati. Connettendosi ad una propria VPN, potete lavorare con dati sensibili anche nelle reti Wi-Fi pubbliche in modo molto sicuro (come nel caso dell’online banking).

## Creare un server VPN con il Raspberry Pi e OpenVPN: vantaggi

Creare un server VPN con Raspberry Pi è particolarmente consigliato per via dei suoi costi bassi, grazie ai prezzi di acquisto del Raspberry e dei suoi cloni ( prima o poi ne parlerò piu approfonditamente... Piccola chicca: esiste una scheda che si chiama Banana, ma non ha il form factor della banana! 😁) e di tutto il necessario

Inoltre, anche il consumo energetico per mantenere sempre in funzione il server rimane relativamente basso, anche di questo ne parleremo appena mi arriverà un cavo speciale dalla Cina

Tra i vari software per creare una propria VPN, il più famoso è **OpenVPN**: si tratta prima di tutto di un software gratuito e molto diffuso per i server VPN, che supporta una grande quantità di sistemi operativi (Windows, OS X, Android, iOS, Linux e altri). 

Noi, pero', andremo ad utilizzare **PiVPN**, che è sempre basato su OpenVPN, ma molto più semplice da configurare ed è ottimizzato per Raspberry Pi

## Che cosa serve per la configurazione di un server VPN sul Raspberry Pi?

Bene, dopo tanto parlare, iniziamo a mettere mano al nostro bel Raspberry

Ecco la lista del materiale che ci serve:

- Un Raspberry Pi (si consiglia il modello 3B o superiore)
- Una scheda Micro SD con installato il [sistema operativo Raspberry ed Octoprint](https://www.raspberrypi.org/downloads/raspbian/)
- Una connessione Internet flat per gli aggiornamenti, indifferente se con il cavo ethernet o la Wifi

Per connetterci, useremo una connessione SSH. Chi ha windows può usare Putty, io invece nel video collegato all'articolo uso il client SSH di Linux 

:::tip
Non sto qui a ripetere i passi per usare il SSH andate a vedere il video che ho creato e seguite le istruzioni che avevo dato a suo tempo durante la stesura dei primi articoli sul [Raspberry Pi](/docs/raspberry/installazione_raspbian#prima-accensione).
:::

<DisplayAd/>

## Inserire gli indirizzi IP statici

Per l’uso di un server VPN si consiglia di assegnare al Raspberry Pi un **indirizzo IP privato statico** nella rete locale, altrimenti il router con il forward delle porte non potrebbe collegarsi al server VPN e inviare i dati

Inoltre, la connessione ad Internet dispone solo di indirizzi IP dinamici pubblici, che cambia a intervalli di tempo regolari o a ogni riconnessione, e impedisce quindi la raggiungibilità continua del server allo stesso indirizzo. La soluzione migliore è di impostare un DDNS, che sarebbe un Dinamic DNS, servizio che si trova sia a pagamento che gratuito, che può essere aggiornato dal router o dal nostro stesso Raspberri Pi

## Installiamo il server VPN sul Raspberry Pi con PiVPN

Per prima cosa, come ho acennato prima, cambiamo l'ip del Raspberry

Attiviamo il DHCPCD, se non attivato

```
sudo service dhcpcd start
sudo systemctl enable dhcpcd
```

E rendiamo l'ip del raspberry statico  tramite il seguente comando:

```
sudo service dhcpcd status
```

Ora modifichiamo il nostro bel file dove diamo istruzioni riguardo le interfacce di rete

```
sudo nano /etc/dhcpcd.conf
```

Questo comando aprira' un editor di testo 

:::tip
**sudo** è il comando per attivare una modalità con privilegi

**nano** un semplice text editor ma molto valido per questi lavori

**/etc/dhcpcd.conf** è il percorso del file che dovremo andare a modificare
:::

Ora effettuate la configurazione dell’indirizzo IP fisso. Se il vostro  Raspberry Pi è connesso a alla rete interna con ethernet/cavo di rete, scrivete **interface eth0**; se invece la connessione avviene tramite WiFi, scrivete **interface wlan0**, sempre nell'editor

Per l’assegnazione di un indirizzo IP al Raspberry Pi utilizziamo  “**static ip_address=**“, seguito da **indirizzo IPv4 desiderato** e l’aggiunta **/24** (un’abbreviazione per dire che gli ip sono dal 192.168.0.1 al 192.168.10.254). Se, ad esempio, volete collegare il computer con l’indirizzo IP **192.168.10.2**, la riga deve essere:

```
static ip_address=192.168.10.2/24
```
:::warning
Fate attenzione che l'ip non sia incluso negli ip dinamici del router, fate in modo di escluderlo
:::

Infine dovete ancora stabilire l’indirizzo del vostro gateway e del Domain Name Server (solitamente entrambi corrispondono a quello del router). Il Raspberry Pi si rivolge all’indirizzo del gateway, se un indirizzo IP al quale vuole inviare qualcosa si trova al di là della propria rete

Nella prossima riga, per il gateway e per il DNS server si ricorre all’indirizzo **192.168.10.1**, che è il nostro router. In questo esempio, sto  utilizzando un cavo di rete per la connessione, quindi il contenuto del vostro file dovrebbe assomigliare a questo qui sotto:

```
interface eth0
static ip_address=192.168.10.2/24
static routers=192.168.10.1
static domain_name_servers=192.168.10.1
```

Salvate le modifiche premendo **CTRL + O** e confermate con il tasto invio. Con **CTRL + X** chiudete il file di configurazione.  Ora riavviamo il nostro Raspberry per rendere effettive le modifiche

```
sudo reboot
```

Il nostro Raspberry si sta riavviando, attendiamo qualche minuto e ricominciamo

## Preparazione del Raspberry Pi

Ora rientriamo nel nostro benamato Raspberry Pi con il client SSH, ma, prima di iniziare l'installazione di PiVPN, consiglio sempre di fare un update del nostro raspberry con i comandi:

```
sudo apt-get update
sudo apt-get upgrade
```

Nel caso in cui non abbiate ancora cambiato la password standard del vostro Raspberry Pi (nome utente: “Pi”; password: “Raspberry”), vi consiglio di cambiarla, altrimenti chiunque può avere accesso al sistema, sia in locale sia tramite accesso SSH. Usate il comando:

```
sudo raspi-config
```

e dal menu di configurazione cambiate la password

<DisplayAd/>


## Installare PiVPN 

Adesso aprite il terminale e inserite il comando

```
curl -L https://install.pivpn.io | bash
```

Attendiamo il download!

[![a1](/img/router/a1.webp)](/img/router/a1.webp)

Premiamo OK

[![a2](/img/router/a2.webp)](/img/router/a2.webp)

Premiamo ancora su ok 

[![a3](/img/router/a3.webp)](/img/router/a3.webp)

ed ancora ok. Il programma ci mostrerà la configurazione corrente del nostro raspberry e, se non vogliamo cambiare interfaccia puntando all'altro indirizzo, selezioniamo yes

[![a4](/img/router/a4.webp)](/img/router/a4.webp)

ci verra' chiesto ora di accettare e scegliere l'utente locale con il quale si potranno configurare gli accessi e gli utenti VPN

[![a6](/img/router/a6.webp)](/img/router/a6.webp)

Scegliamo il nostro utente di default e poi anche unico utente

[![a7](/img/router/a7.webp)](/img/router/a7.webp)

Ora ci verra' chiesto se attivare o meno gli aggiornamenti automatici; decidete voi, io lo faccio sempre, anche se, a rigor di logica, sempre meglio aspettare e decidere dopo se aggiornare o no

[![a8](/img/router/a8.webp)](/img/router/a8.webp)

[![a9](/img/router/a9.webp)](/img/router/a9.webp)

Solitamente selezioniamo il protocollo UDP

[![a10](/img/router/a10.webp)](/img/router/a10.webp)

Ora scegliamo la porta che intendiamo utilizzare per la connessione VPN, che dovrà poi essere la porta che apriremo sul router e messa in forward verso l'ip del nostro Raspberry Pi, cioè 192.168.10.2

[![a11](/img/router/a11.webp)](/img/router/a11.webp)

Confermiamo

[![a12](/img/router/a12.webp)](/img/router/a12.webp)

e lasciamo i parametri consigliato di default

[![a13](/img/router/a13.webp)](/img/router/a13.webp)

Qui dovremmo usare il servizio DNS, ma per ora è indifferente, lo andremo a modificare dopo

[![a14](/img/router/a14.webp)](/img/router/a14.webp)

Adesso bisogna scegliere a quale DNS appoggiarsi: io preferisco **openDNS** o **Google**

[![a15](/img/router/a15.webp)](/img/router/a15.webp)

selezionate **no** per la ricerca nel vostro dominio, 

[![a16](/img/router/a16.webp)](/img/router/a16.webp)

ed infine riavviamo il Raspberry, come da richiesta del software

[![a17](/img/router/a17.webp)](/img/router/a17.webp)

## Creare il file di configurazione per i client OpenVPN

Una volta riavviato il Raspberry Pi, rientriamo in SSH e iniziamo a giocare con i comandi per la creazione dell'utente. Eseguiamo il comando

```
pivpn add
```

questo comando serve per creare un file **.ovpn**, che dovrà essere installato nei nostri client  

Questo file contiene una chiave generata che viene utilizzata per accedere al nostro server VPN. Può essere utilizzato il medesimo file per ogni dispositivo, oppure puoi generarne diversi, uno per ogni client, con il comando **pivpn add**

Una volta lanciato il comando, ci verrà richiesto di inserire:

- **il nome dell'utente per il quale stiamo generando il file**: potete usare qualsiasi nome, restando nel campo della decenza, non fate come me...
- **password**: scegliete una password non tanto semplice

A questo punto, nella cartella **ovpns** che è stata creata nella directory /home/pi/ovpns, troveremo il file contenente le importazioni e le chiavi per la connessione al nostro server VPN. Questo file dovremo copiarlo con [FileZilla](https://filezilla-project.org/) 


```
pivpn add
```

questo comendo serve per creare un file .ovpn con il solo nome utente ma senza password (**sacrilegio!!!**) 


```
pivpn list
```

Questo comando serve per vedere la lista degli utenti creati

```
pivpn revoke
```

Questo comando ci mostrerà l'elenco dei certificati autorizzati e ci verra richiesto il nome di quello da revocare

Adesso scaricate il [client di windows](https://openvpn.net/index.php/open-source/downloads.html) per provare se funziona e, una volta importato il file appena creato, ti chiederà la password

A questo punto, dal server in qualsiasi momento potremo controllare i client connessi tramite il comando:

```
pivpn -c
```

che ci mostrerà l'elenco dei client connessi

Il file zip è ora pronto e potete trasferirlo dal Raspberry Pi al client (ad esempio tramite un programma SCP o SFTP) e lo impostate poi sul dispositivo del client. Adesso potete accedere con il dispositivo da qualsiasi connessione Internet alla rete locale collegata al client e alla sua connessione Internet

<DisplayAd/>

:::tip Angolo della conoscenza 
## Come funziona un DNS e di conseguenza un DDNS

Il DNS, stà per **Domain Name System**, ed è un meccanismo attraverso il quale conoscendo il nome di un nodo di un dominio, ad esempio casanuova.nick.it è possibile ottenere il corrispettivo indirizzo IP. E perchè è necessario questo? i pc e i router parlano attraverso gli indirizzi ip, che possiamo vedere come dei numeri telefonici, facciamo un esempio, sul nostro telefonino abbiamo il nome della persona che vogliamo contattare, e diciamo "Siri chiama Papà e siri Risponde Scusa non ho il numero del Papa, vuoi chiamare il pappa delle ragazze del lampione sotto casa tua, e alla fine disperato scrivi il nome da chiamare dalla rubrica, tu non stai usando quel nome per chiamare ma il numero, o in internet il l'ip number del server che vuoi contattare. Visto che nessuno ha una rubrica cosi grande da poter tenere gli indirizzi di tutti i server del mondo, quindi c’è bisogno di un sistema che traduca i nomi, che sono semplice da ricordare per gli umani (meno per le macchine), in relativi indirizzi.


## Risolvere i nomi in indirizzi

Cerchero di farvi un esempio pratico per cercaredi di essere piu chiaro: immagina che vuoi raggiungere il sito **flyingbearghost.com** – il cui indirizzo è 185.199.109.154, e mi raccomando vedete di raggiungerlo almeno 3 volte al giorno, perchè vi migliora la vita, *e una vistia al sito flyingbearghost.com al giorno toglie il becchino di torno*, dicevo per voi è semplice scrivere il nome sul vostro browser internet,  Mentre il vostro browser ha bisogno dell'indirizzo IP. Allora ecco che entra in gioco il sistema DNS, quando il nostro PC ha bisogno di collegarsi ad un sistema remoto invierà una richiesta al DNS con il nome che stà cercando, a quel punto il DNS gli restituirà l’indirizzo IP corrispondente così che la connessione possa avvenire. Il DNS è un sistema distribuito che mantiene il database mondiale di tutti gli indirizzi che compongono i vari siti o servizi su internet. I dns sono sono accentrati su un unico server o su un unico provider a sono  distribuiti nel mondo e sono responsabili per una porzione di questo immenso  database e se l’informazione non è contenuta al suo interno sa a quale server DNS deve rifare  la richiesta per ottenere la risposta. Dopo che la richeista ha finalmente trovato la risposta, questa informazione resterà per un certo periodo immagazzinata nella propria caches,  cosi da non doverla rifare se arriverà una seconda richiesta, ma queste informazioni immagazinate avranno una durata, che si chiama time to live, che scaduta obblighera il server DNS  a richiederla nuovamente se non è gestita direttamente da lui , ed  ecco su che basi si poggia il servizio DDNS ma questo o vedremo meglio dopo.

### **Funzionamento DNS**

[![DNS_schema](/img/router/DNS_schema.webp)](/img/router/DNS_schema.webp)

Vediamo di spiegare questo schema preso da Wikipedia, noi andiamo a cercare lìindirizzo ip del sito inglese di Wikipedia, per prima cosa dovremmo leggere l'indirizzo da sinistra verso destra, percio troviamo subito il suffisso .ORG, il che significa che quando faremo la richiesta al nostro dns server di default, che è solitmente quello del nostro provider, lui andra a fare la richesta a sua volta ( se non ha l'indirizzo nella propria caches)  ai server DNS che si occupano dei domini .ORG, a quale punto il server passera la richiesta ai server DNS che si occupano di wikipedia, e infine la richiesta verra completata perche si troverà dall'ultimo server DNS interpellato i server di wikipedia che usano la lingia inglese, e percio ex.wikipedia.org avra un indirizzo diverso di it.wikipedia.com

### E i server DDNS allora come fanno a funzionare?

Semplice, se il time to live è sempre a zero abblighiamo a richiedere sempre l'indirizzo ip al server che lo gestisce, percio anche se la nostra connessione fibra cambia IP la gente ci troverà sempre perchè noi in tempo reale aggiorneremo questo IP e chi inserira il nostro indirizzo per collegarsi troverà sempre l'ultimo indirizzo aggiornato.
:::