"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1771],{3905:function(e,a,r){r.d(a,{Zo:function(){return c},kt:function(){return m}});var t=r(67294);function i(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function n(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?n(Object(r),!0).forEach((function(a){i(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function l(e,a){if(null==e)return{};var r,t,i=function(e,a){if(null==e)return{};var r,t,i={},n=Object.keys(e);for(t=0;t<n.length;t++)r=n[t],a.indexOf(r)>=0||(i[r]=e[r]);return i}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)r=n[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=t.createContext({}),p=function(e){var a=t.useContext(s),r=a;return e&&(r="function"==typeof e?e(a):o(o({},a),e)),r},c=function(e){var a=p(e.components);return t.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var r=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=i,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||n;return r?t.createElement(g,o(o({ref:a},c),{},{components:r})):t.createElement(g,o({ref:a},c))}));function m(e,a){var r=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=d;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<n;p++)o[p]=r[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},37674:function(e,a,r){r.d(a,{Z:function(){return i}});var t=r(67294);class i extends t.Component{componentDidMount(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}render(){return t.createElement("div",{className:"displayAd",key:Math.random()},t.createElement("ins",{className:"adsbygoogle",key:Math.random(),style:{display:"block",textAlign:"center"},"data-ad-client":"ca-pub-3253384067482467","data-ad-slot":"5610548275","data-ad-format":"auto"}))}}},44429:function(e,a,r){r.d(a,{Z:function(){return i}});var t=r(67294);class i extends t.Component{constructor(e){super(e),this.link=e.link}render(){return t.createElement("div",{id:"facebookBanner"},t.createElement("img",{id:"facebookBannerIcon",src:"/resources/facebookIcon.svg"}),t.createElement("p",{id:"facebookBannerParagraph"},t.createElement("a",{id:"facebookLink",href:this.link,target:"_blank"}," Segui la conversazione su Facebook!")))}}},21698:function(e,a,r){r.r(a),r.d(a,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var t=r(83117),i=(r(67294),r(3905)),n=r(37674);r(44429);const o={title:"Installare klipper su Raspberry Pi",slug:"/klipper/installazione_raspberry",keywords:["stampa 3d",'3d printing"',"flying bear","flyingbear","flying bear ghost","flyingbear ghost","flyingbear ghost 5","flying bear ghost 5","stampa 3d","flyingbear ghost firmware","klipper","klipper firmware","installing klipper","raspberry pi klipper"],description:"Installare Klipper sulla Raspberry Pi"},l=void 0,s={unversionedId:"klipper/installazione_raspberry",id:"klipper/installazione_raspberry",title:"Installare klipper su Raspberry Pi",description:"Installare Klipper sulla Raspberry Pi",source:"@site/docs/klipper/installazione_raspberry.md",sourceDirName:"klipper",slug:"/klipper/installazione_raspberry",permalink:"/en/docs/klipper/installazione_raspberry",draft:!1,editUrl:"https://github.com/flyingbear-club-ita/wiki/tree/master/docs/klipper/installazione_raspberry.md",tags:[],version:"current",frontMatter:{title:"Installare klipper su Raspberry Pi",slug:"/klipper/installazione_raspberry",keywords:["stampa 3d",'3d printing"',"flying bear","flyingbear","flying bear ghost","flyingbear ghost","flyingbear ghost 5","flying bear ghost 5","stampa 3d","flyingbear ghost firmware","klipper","klipper firmware","installing klipper","raspberry pi klipper"],description:"Installare Klipper sulla Raspberry Pi"},sidebar:"docs",previous:{title:"Introduzione a klipper",permalink:"/en/docs/klipper/introduzione"},next:{title:"Kiauh",permalink:"/en/docs/klipper/kiauh"}},p={},c=[],u={toc:c};function d(e){let{components:a,...o}=e;return(0,i.kt)("wrapper",(0,t.Z)({},u,o,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("script",{async:!0,src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3253384067482467","data-overlays":"bottom",crossorigin:"anonymous"}),(0,i.kt)("p",null,"Sicuramente vi starete chiedendo quale sia l'hardware ottimo per fare girare Klipper su una Raspberry Pi. La risposta non ce l'abbiamo, pero' abbiamo testato Klipper sia su una Raspberry Pi 3B+ (1GB di RAM) che su una Raspberry Pi 4 (2GB di RAM) e possiamo affermare che gira egregiamente su entrambe, quindi prendete quella che vi capita o che avete sotto mano, senza pensare troppo a limitazioni tecniche (abbiamo letto in giro su internet che anche una Pi Zero 2W va bene per far girare Klipper...\ud83d\ude35\ud83d\ude35\ud83d\ude35)"),(0,i.kt)("p",null,"Prima di cominciare, assicuratevi di avere i seguenti componenti a portata di mano:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Raspberry Pi (a vostra scelta, come consigliato sopra)"),(0,i.kt)("li",{parentName:"ul"},"Alimentatore 5V 3A per la Raspberry Pi"),(0,i.kt)("li",{parentName:"ul"},"SD card da 32GB (anche di meno o di piu' va bene, pero' noi abbiamo testato con 32GB e sembra a posto)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://amzn.to/3DsvyrR"},"Cavo USB B - USB A")," (piu' corto e', meglio e', per evitare dispersioni ed interferenze)"),(0,i.kt)("li",{parentName:"ul"},"(opzionale) Schermo e tastiera da collegare alla Raspberry Pi dopo il primo avvio")),(0,i.kt)(n.Z,{mdxType:"DisplayAd"}),(0,i.kt)("p",null,"Una volta provvisti di tutto l'occorrente, andate a scaricare ",(0,i.kt)("a",{parentName:"p",href:"https://www.raspberrypi.com/software/"},"Raspberry Pi Imager")," per il vostro sistema operativo"),(0,i.kt)("p",null,"Imager serve a scrivere sulla SD una immagine, che poi, una volta inserita nella Raspberry Pi, provvedera' ad installare tutto il necessario per il sistema operativo della Pi"),(0,i.kt)("p",null,"Una volta scaricato ed installato il programma, lanciatelo:"),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:r(96199).Z}," ",(0,i.kt)("img",{alt:"Klipper - Imager Startup",src:r(61193).Z,width:"680",height:"457"})," ")),(0,i.kt)("p",null,"Dopo esservi assicurati di aver inserito la SD card nel computer, andate a selezionare il sistema operativo, cliccando su ",(0,i.kt)("strong",{parentName:"p"},"Operating System")),(0,i.kt)("p",null,"Tra le opzioni offerte, scegliete ",(0,i.kt)("strong",{parentName:"p"},"Raspberry Pi OS Lite (32-bit)")),(0,i.kt)("p",null,"Questo sistema operativo ci consente di ottimizzare le risorse della raspberry pi, non avendo una interfaccia grafica vera a proprio come quella di Windows, MacOSx od Ubuntu. Questo tipo di sistema operativo si chiama ",(0,i.kt)("strong",{parentName:"p"},"Headless"),", perche' consente l'accesso solo tramite terminale"),(0,i.kt)("p",null,"Una volta selezionato il sistema operativo, scegliete la SD card sulla quale volete installare l'immagine cliccando su ",(0,i.kt)("strong",{parentName:"p"},"Storage")),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"Assicuratevi di scegliere il drive giusto: una volta confermato il tutto, Imager procedera' alla formattazione della periferica selezionata, con conseguente perdita dei dati. Opzionalmente, prima di cominciare la procedura, effettuate un\nbackup del contenuto della SD")),(0,i.kt)("p",null,"Prima di iniziare la procedura di scrittuare dell'immagine, cliccate sull'icona con l'ingranaggio in basso a destra per aprire un nuovo menu', che vi consentira' di semplificare la procedura di configurazione della Raspberry Pi, evitandoci grossi mal di testa con la riga di comando"),(0,i.kt)("p",null,"Qui potete inserire:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"il nome col quale individuare la raspberry pi nella rete locale"),(0,i.kt)("li",{parentName:"ul"},"le credenziali per l'accesso tramite ssh"),(0,i.kt)("li",{parentName:"ul"},"le credenziali per l'accesso alla rete wifi")),(0,i.kt)(n.Z,{mdxType:"DisplayAd"}),(0,i.kt)("p",null,"Una volta inseriti tutti i dati, chiudete il menu e procedete all'installazione del sistema operativo sulla SD cliccando sul pulsante \"Write\". Mettetevi comodi, perche' la procedura di installazione dura un bel po'"),(0,i.kt)("p",null,"Alla fine dell'installazione (comparira' un messaggio), rimuovete la SD card, inseritela nella Raspberry Pi e accendetela"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Per la prima accensione, e' richiesto l'utilizzo di una tastiera e di uno schermo. Dopo il primo avvio, configureremo la Raspberry Pi per operare in modalita' ",(0,i.kt)("strong",{parentName:"p"},"headless"),", cioe' senza bisogno di tastiera e schermo: potremo accedere alla Raspberry Pi tramite SSH (secure shell), che andremo a spiegare piu' avanti")),(0,i.kt)("p",null,"Dopo aver acceso la Pi, dovrebbe comparire uno schermo con un quadrato colorato, poi, successivamente, una serie di stringhe che indicano il progresso nel processo di avvio della Pi. Una volta terminato il processo di avvio, dovrebbe venirvi richiesto di inserire le credenziali per il login: inserite quelle che avete specificato tramite imager"),(0,i.kt)("p",null,"A questo punto, dovreste essere entrati nella riga di comando (che, da adesso in poi, chiameremo shell, per comodita') della Raspberry Pi. Da qui potete inserire tutti i comandi, ma cominciamo da questo:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"sudo apt-get update && sudo apt-get upgrade")),(0,i.kt)("p",null,"Questo comando scarica ed installa tutti gli aggiornamenti del sistema operativo. Per completare l'operazione, premete ENTER (va fatto ogni volta che viene specificato un comando da inserire nella shell)"),(0,i.kt)("p",null,"Successivamente, inseriamo:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"sudo raspi-config")),(0,i.kt)("p",null,"Una volta digitato questo comando, premete enter ed inserite la vostra password"),(0,i.kt)("p",null,"Si aprira' un menu testuale"),(0,i.kt)("p",null,"In questo menu testuale, scegliete:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Expand file system - serve a garantire che tutto lo spazio sulla SD venga utilizzato"),(0,i.kt)("li",{parentName:"ol"},"System Options --\x3e Boot Auto Login --\x3e Console/Auto Login - questo serve a far partire la raspberry pi in modalita' headless, cioe' senza bisogno di immettere la password e di connettere schermo e tastiera")),(0,i.kt)("p",null,"Uscite dal terminale, inserite il comando:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ifconfig")),(0,i.kt)("p",null,"Dovreste vedere la configurazione di rete della Raspberry Pi e, di conseguenza, l'ip sulla vostra rete locale (che poi sara' quello che utilizzerete per accedere al server locale di klipper, ma di questo parleremo dopo). Notate pero' che, qualora l'aveste specificato precedentemente durante la creazione dell'immagine tramite imager, la raspberry pi dovrebbe gia' essere connessa alla vostra rete locale. Controllate, tramite qualunque programma di gestione del router, che la Pi sia visibile sulla rete locale, col nome di riferimento che le avete dato tramite Imager (nel mio caso, ghost.local)"),(0,i.kt)(n.Z,{mdxType:"DisplayAd"}),(0,i.kt)("p",null,"A questo punto, scrivete:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"sudo reboot now")),(0,i.kt)("p",null,"La raspberry pi si resettera' e potrete staccare tastiera e schermo"),(0,i.kt)("p",null,"Il passo successivo sara' quindi connettersi tramite SSH (non stiamo qui a parlarne, visto che il tema e' gia' stato ",(0,i.kt)("a",{parentName:"p",href:"/docs/raspberry/installazione_raspbian"},"abbondantemente trattato")," ed installare ",(0,i.kt)("strong",{parentName:"p"},"Kiauh"),", un tool per l'installazione dei vari software necessari per klipper"))}d.isMDXComponent=!0},96199:function(e,a,r){a.Z=r.p+"assets/files/klipper_imager_startup-310534c08576061b1b9603c035a8aaae.png"},61193:function(e,a,r){a.Z=r.p+"assets/images/klipper_imager_startup-310534c08576061b1b9603c035a8aaae.png"}}]);