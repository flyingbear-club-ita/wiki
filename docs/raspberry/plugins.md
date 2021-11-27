---
title: Plugins per Octoprint
slug: /raspberry/octoprint-plugins
---
import DisplayAd from '../../src/components/displayAd'
import ArticleAd from '../../src/components/articleAd'
import FacebookLink from '../../src/components/facebookLink'

<DisplayAd/>

## Premessa {#premessa}

Per spiegarvi meglio l'utilità dei plug in in octoprint, vediamo il nostro raspberry con Octoprint come una semplice automobile: utile per svolgere i nostri lavori e andare in giro, ma come sarebbe se avesse anche gli optional, fosse più comoda, avesse l'aria condizionata o il navigatore per portarci più velocemente a destinazione?

Ecco, i plugin sono dei miglioramenti della nostra bella automobile

Ad oggi ci sono 227 plug in ufficiali per octoprint (esistono anche plugin personalizzati, ma questo è un altro discorso, e pure pericoloso, perché non sono controllati da nessuno, se non dagli autori)

Oggi ne vedremo solo alcuni, i migliori per me, poi il mio giudizio è personale

Se non vi va di leggere, andate a vedervi il [video su youtube](https://www.youtube.com/watch?v=n4Lk35F1wP8&t=259s&pp=sAQA)

**Se avete altri plugin da consigliare, fateci sapere!!!**

## Come si installa un plugin {#come-si-installa-un-plugin}

Prima di dire quali sono i migliori plug in, è importante capire come installarli

L’installazione dei singoli plugin è un’operazione molto semplice. Octoprint, come molti altri programmi per le stampanti, ha un proprio store per i plugin

* Per arrivare al menu clicchiamo sulla chiave inglese sulla barra in alto
  
  [ ![Chiave Inglese](/img/chiaveInglese.PNG) ](/img/chiaveInglese.PNG)

* Nel menu sulla sinistra scegliamo **Plugin Manager**

  [ ![Plugin Manager](/img/foto1.jpg) ](/img/foto1.jpg)


* Scorriamo in basso la lista dei plugin, poi clicchiamo in alto a destra sul pulsante **Get More**,

  [ ![Get More](/img/foto2.PNG) ](/img/foto2.PNG)

Ora abbiamo la lista dei plug-in, e nel campo **Search** andremo a digitare il nome di quello che cerchiamo. Una volta trovato, clicchiamo su **Install** ed il gioco è fatto

  [ ![Install](/img/foto3.PNG) ](/img/foto3.PNG)

<DisplayAd/>

## I migliori plugin! {#i-migliori-plugin}

export const PluginInfo = ({children, title}) => (
  <div
    style={{
      backgroundColor: '#64d4ed',
      borderRadius: '5px',
      color: '#000000',
      padding: '30px',
      margin: '10px',
    }}>
    <h2 style={{
        color:'#fff'
    }}>{title}</h2>
    {children}
  </div>
);

Ecco a voi una selezione dei migliori plug in per utilizzare al meglio Octoprint

<PluginInfo title="Octoprint-FilamentManager">

  [ ![Filament Manager](/img/filamentManager.PNG) ](/img/filamentManager.PNG)

Ottimo tool per vedere quanto cavo usiamo per una stampa, il costo della stampa e quanto cavo resta nella bobine (se diamo le giuste misure quando inseriamo la bobina la prima volta)

Utile per sapere in anticipo se il cavo rimasto nella bobina ci potrà far finire la stampa oppure no

</PluginInfo>

<ArticleAd/>

<PluginInfo title="Display Layer Progress">

Semplicissimo plugin che va a sopperire ad una mancanza di Octoprint, come dicevamo prima i plug in servono per migliorare il nostro bel programma, cioè quella di informarci costantemente dell’altezza di stampa attuale
</PluginInfo>

<ArticleAd/>

<PluginInfo title="AstroPrint">

Plugin secondo me **indispensabile**

Gestione delle stampanti 3D da remoto senza mettere in pericolo la nostra rete o senza usare VPN, la versione FREE gestisce 2 stampanti

Da remoto, possiamo vedere la telecamera della stampante (istantanea di una foto), stampare da Thingiverse o da una libreria in octoprint stessa 

Inoltre possiamo fare lo slicing di modelli STL

</PluginInfo>

<ArticleAd/>

<PluginInfo title="OctoPrint-PrettyGCode">

Il plugin Pretty GCode è un eccellente visualizzatore di modelli 3D

Fai clic sul tuo file GCode e guardalo renderizzare davanti ai tuoi occhi. Ruota, ingrandisci e rileva i problemi con i tuoi file GCode prima di stampare 

Pretty GCode esegue anche il rendering dei comandi arc
</PluginInfo>

<ArticleAd/>

<PluginInfo title="Octolapse">

**Uno dei migliori programmi di time lapse disponibili**

Una miriade di possibilità di scelte, una miriade di ottimizzazioni della telecamera, una modalita per fare quasi tutto in automatico per gli scansafatiche come me

</PluginInfo>

<ArticleAd/>

<PluginInfo title="OctoPrint-Dashboard">

Visualizzazione delle informazioni sulle stampe in corso su una dashboard pulita e visivamente organizzata, che corrisponde al tema dell'interfaccia utente di OctoPrint

La dashboard funziona con PrintTimeGenius e DisplayLayerProgress per stime accurate del tempo e dati sui livelli 

Troverai anche alcuni pulsanti di controllo del lavoro (ad esempio avvio/arresto) e un widget webcam opzionale
</PluginInfo>

<ArticleAd/>

<PluginInfo title="PrintTimeGenius">

Questo plug-in è molto valido per una una funzione gia' presente in octoprint, ma che viene gestita meglio

I tempi calcolati da questo plug-in sono molto più precisi, perchè viene effettuata una analisi del gcode, ricalcolata a ogni cambio layer. In questo modo i calcoli sono più precisi e gli aggiustamenti sono evidenti solo nella prima parte

Da usare
</PluginInfo>

<ArticleAd/>

<PluginInfo title="Octopod">

Uno dei miei preferiti, non si scarica da octoprint ma dallo store del vostro smartphone, e potete gestire nel modo piu completo possibile la vostra stampante 3d dalla vostra LAN e, se avete una VPN, da ogni angolo del mondo

Da avere
</PluginInfo>

<ArticleAd/>

<PluginInfo title="Bed Level Visualizer">

Se hai un sensore BLtouch  sulla tua macchina, allora Bed Level Visualizer dovrebbe essere uno dei primi plugin che installi sul tuo server Octoprint

[ ![Bed Level Visualizer](/img/bedLevelVisualizer.png) ](/img/bedLevelVisualizer.png)

</PluginInfo>

<ArticleAd/>

<PluginInfo title="Telegram">

Il plugin Telegram è uno dei miei plugin preferiti quando si tratta di monitorare le stampe con OctoPrint

Dopo aver configurato il plugin di Telegram, potrai “chattare” con la tua stampante con una serie di comandi: potresti "chiederti" di inviarti lo stato corrente della stampa incluso uno screenshot dalla webcam o di avvisarti quando una stampa è terminata

Davvero utile!

<a href="https://plugins.octoprint.org/plugins/telegram/" style={{color:"#ff0000"}}>Link Plugin Telegram</a>

</PluginInfo>

<ArticleAd/>

<PluginInfo title="Resource Monitor">

Dalla schermata non avete bisogno di presentazioni: non solo la stampante deve essere sottocontrollo, ma anche il raspberry e con questo tool potrete farlo senza problemi

[ ![Resource Monitor](/img/resourceMonitor.jpg) ](/img/resourceMonitor.jpg)

</PluginInfo>

<ArticleAd/>

<PluginInfo title="BL Touch">

Se hai una sonda BLTouch installata sulla tua stampante 3D, ti consiglio di installare il plug-in BLTouch per OctoPrint

Con questo plugin ottieni alcuni pulsanti che ti consentono di controllare la sonda BLTouch sulla tua stampante, eseguire un autotest, eseguire la calibrazione  e anche rilasciare l'allarme se vi è qualche problema

<a href="https://plugins.octoprint.org/plugins/BLTouch/" style={{color:"#ff0000"}}> Link Plugin BL Touch</a>


</PluginInfo>

<FacebookLink link="https://www.facebook.com/hashtag/raspberrypi?__gid__=600126627631693"/>

<DisplayAd/>