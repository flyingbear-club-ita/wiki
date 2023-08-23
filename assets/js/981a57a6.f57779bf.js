"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4809],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=i,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||n;return a?r.createElement(f,o(o({ref:t},c),{},{components:a})):r.createElement(f,o({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,o=new Array(n);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<n;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},65030:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return n},metadata:function(){return l},toc:function(){return p}});var r=a(83117),i=(a(67294),a(3905));const n={title:"Installare Octoprint",slug:"/raspberry/installazione_raspbian"},o=void 0,l={unversionedId:"raspberry/installare_raspbian",id:"raspberry/installare_raspbian",title:"Installare Octoprint",description:"Autore: Nick_it",source:"@site/docs/raspberry/installare_raspbian.md",sourceDirName:"raspberry",slug:"/raspberry/installazione_raspbian",permalink:"/docs/raspberry/installazione_raspbian",draft:!1,editUrl:"https://github.com/flyingbear-club-ita/wiki/tree/master/docs/raspberry/installare_raspbian.md",tags:[],version:"current",frontMatter:{title:"Installare Octoprint",slug:"/raspberry/installazione_raspbian"},sidebar:"docs",previous:{title:"Introduzione al Raspberry",permalink:"/docs/raspberry/introduzione"},next:{title:"Configurare la Ghost su octprint",permalink:"/docs/raspberry/configurazione_octoprint"}},s={},p=[{value:"Installazione e prima configurazione",id:"installazione-e-prima-configurazione",level:2},{value:"Preparare la scheda SD",id:"preparare-la-scheda-sd",level:3},{value:"Configurazione WiFi",id:"configurazione-wifi",level:3},{value:"Prima Accensione",id:"prima-accensione",level:3},{value:"Prima Configurazione Octoprint",id:"prima-configurazione-octoprint",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Autore: Nick_it")),(0,i.kt)("h2",{id:"installazione-e-prima-configurazione"},"Installazione e prima configurazione"),(0,i.kt)("p",null,"Come spiegato precedentemente \xe8 possibile installare diversi sistemi operativi, ora ne vediamo alcuni e a grandi linee"),(0,i.kt)("p",null,"Li vedremo tutti, ma abbiate un po di pazienza \ud83d\ude01"),(0,i.kt)("p",null,"Per il momento, ci focalizzeremo sulla combinazione piu' semplice, che consiste in una distro basata su Raspbian, ma che contiene gia' octoprint"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Materiale occorrente"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.putty.org/"},"Putty"),", per connettersi tramite ssh alla raspberry senza dover collegarla ad uno schermo"),(0,i.kt)("li",{parentName:"ul"},"la ",(0,i.kt)("a",{parentName:"li",href:"https://octoprint.org/download/"},"distribuzione customizzata Octoprint")),(0,i.kt)("li",{parentName:"ul"},"Il ",(0,i.kt)("a",{parentName:"li",href:"https://etcher.io/"},"software per caricare l'immagine sulla micro sd")),(0,i.kt)("li",{parentName:"ul"},"Raspberry Pi, modello 3B o superiore"),(0,i.kt)("li",{parentName:"ul"},"Micro sd card (almeno 8 Gb)"),(0,i.kt)("li",{parentName:"ul"},"Cavo Usb "),(0,i.kt)("li",{parentName:"ul"},"un'ora del vostro tempo"))),(0,i.kt)("h3",{id:"preparare-la-scheda-sd"},"Preparare la scheda SD"),(0,i.kt)("p",null,"Bene, per prima cosa dobbiamo preparare la scheda micro sd e installare il sistema operativo contenente OctoPrint"),(0,i.kt)("p",null,"Dopo avete installato ",(0,i.kt)("strong",{parentName:"p"},"Balena Etcher"),", inserite la scheda micro SD con l'adattatore nel PC e aprite qualunque programma usiate per formattare una memoria (SD Card Formatter su Windows, Disks su Ubuntu, etc)"),(0,i.kt)("p",null,"Nel campo \u201cVolume Label\u201d inserite un nome pertinente, come ad esempio \u201coctoprint\u201d"),(0,i.kt)("p",null," Lasciate tutte le impostazioni di default e premete \u201cFormat\u201d"),(0,i.kt)("p",null,"Aprite ora Balena Etcher, Comparir\xe0 una finestra con tre passi da configurare"),(0,i.kt)("p",null,"Come prima cosa dove vi chiede \u201cSelect Image\u201d selezionate il file .zip che avete scaricato dal sito di Octoprint "),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:a(19270).Z}," ",(0,i.kt)("img",{alt:"Balena etcher start",src:a(47599).Z,width:"805",height:"511"})," ")),(0,i.kt)("p",null,"Successivamente, alla voce \u201cSelect Drive\u201d selezionate il supporto micro SD "),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:a(64383).Z}," ",(0,i.kt)("img",{alt:"Select Drive",src:a(34759).Z,width:"808",height:"502"})," ")),(0,i.kt)("p",null,"Una volta terminate queste due operazioni, ",(0,i.kt)("strong",{parentName:"p"},"premete su \u201cFlash!\u201d")),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:a(11470).Z}," ",(0,i.kt)("img",{alt:"Balena etcher Flash",src:a(68693).Z,width:"807",height:"511"})," ")),(0,i.kt)("p",null,"L\u2019operazione durer\xe0 qualche minuto, mostrandovi questa schermata"),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:a(96418).Z}," ",(0,i.kt)("img",{alt:"Balena etcher Finito",src:a(97372).Z,width:"302",height:"516"})," ")),(0,i.kt)("p",null,"A fine operazione comparira' un messaggio di notifica"),(0,i.kt)("p",null,"Con questo step ",(0,i.kt)("strong",{parentName:"p"},"abbiamo preparato la micro SD")," con il sistema operativo gi\xe0 configurato per Raspberry Pi e il programma OctoPrint gi\xe0 installato"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Se dopo la creazione della Micro SD vi viene richiesto di formattarla, ignoratelo: \xe8 solo la partizione linux che non viene riconosciuta da Windows")),(0,i.kt)("h3",{id:"configurazione-wifi"},"Configurazione WiFi"),(0,i.kt)("p",null,"A questo punto, se non abbiamo un cavo di rete per collegare il raspberry a internet, bisogna ",(0,i.kt)("strong",{parentName:"p"},"configurare il WiFi")," in modo che al primo avvio sia tutto funzionante"),(0,i.kt)("p",null,"Aprite con l\u2019esplora risorse la micro SD, cercate il file ",(0,i.kt)("em",{parentName:"p"},"octopi-wpa-supplicant.txt")," e apritelo con Notepad++ o Blocco Note (o qualunque altro editor di testo, ",(0,i.kt)("strong",{parentName:"p"},"tranne word o wordpad!!!"),")"),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:a(95435).Z}," ",(0,i.kt)("img",{alt:"Contenuto SD Card",src:a(70945).Z,width:"789",height:"596"})," ")),(0,i.kt)("p",null,"Aprite il file con notepad ( meglio notepad++ )"),(0,i.kt)("p",null,"Cercate questa sezione:",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"## WPA/WPA2 secured")),(0,i.kt)("p",null,'in ssid="put SSID here"  mettete il nome della rete e in psk la vostra password e togliete un cancelletto per riga'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Prima:")),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:a(90467).Z}," ",(0,i.kt)("img",{alt:"Setup Wifi Prima",src:a(83417).Z,width:"229",height:"191"})," ")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Dopo:")),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:a(74019).Z}," ",(0,i.kt)("img",{alt:"Setup Wifi Dopo",src:a(99371).Z,width:"153",height:"111"})," ")),(0,i.kt)("p",null,"Fatto questo, salvate il file, chiudete il notepad e potete smontare il drive micro-SD"),(0,i.kt)("p",null,"Inserite la micro-SD nel Raspberry e accendetelo"),(0,i.kt)("h3",{id:"prima-accensione"},"Prima Accensione"),(0,i.kt)("p",null,"Ancora pochi passi prima di completare la installazione del nuovo octoprint"),(0,i.kt)("p",null,"Per prima, cosa aprite ",(0,i.kt)("em",{parentName:"p"},"Putty")," (installato precedentemente) e date come indirizzo octopi.local"),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:a(62834).Z}," ",(0,i.kt)("img",{alt:"Putty",src:a(61981).Z,width:"610",height:"540"})," ")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Se non dovesse funzionare, usate uno scanner ip per trovare l'ip assegnato al vostro raspberry  "),(0,i.kt)("p",{parentName:"admonition"},"Ad esempio, potete usare ",(0,i.kt)("a",{parentName:"p",href:"https://www.advanced-ip-scanner.com/it/"},"Advanced IP Scanner"))),(0,i.kt)("p",null,"Ci ritroveremo la richiesta di una userid e una password ( se verra fuori un alert, cliccate NO)"),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:a(21326).Z}," ",(0,i.kt)("img",{alt:"SSH Login",src:a(94615).Z,width:"824",height:"522"})," ")),(0,i.kt)("p",null,'Nella console, inserire lo userid, che \xe8 "pi", e la password, che e\' "raspberry", poi premere invio per accedere alla shell-command'),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Mentre scrivete, non apparir\xe0 alcun carattere. Non vi preoccupate, non si e' rotta la Raspberry, e' una questione di sicurezza!")),(0,i.kt)("p",null,"Per prima cosa, cambiate la password: scrivete \u201cpasswd\u201d e premete invio. Vi verr\xe0 chiesta la password attuale e poi la nuova password"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pi@octopi:~ $ passwd\nChanging password for pi.\nCurrent password:\n")),(0,i.kt)("p",null,"Ora completiamo la configurazione del nostro sistema operativo."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"pi@octopi:~ $ sudo raspi-config")),(0,i.kt)("p",null,"Il sistema chiedera di inserire la password del raspberry ( quella modificata poco fa) e vi far\xe0 partire il tool di configurazione."),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:a(61537).Z}," ",(0,i.kt)("img",{alt:"Shell command",src:a(78385).Z,width:"800",height:"783"})," ")),(0,i.kt)("p",null,"Io qui non toccherei nulla, se non volete fare un bel upgrade del sistema operativo, sempre utile ma per il resto fatevi un giro tra i vari men\xf9 ma non cambiate nulla se non necessario"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Comandi da inserire col terminale"),(0,i.kt)("p",{parentName:"admonition"},"Per vedere la version del sistema operativo:"),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"lsb_release -a")),(0,i.kt)("p",{parentName:"admonition"},"Per aggiornare il raspberry all'ultima versione del sistema operativo:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"sudo apt-get update\nsudo apt-get upgrade\n")),(0,i.kt)("p",{parentName:"admonition"},"Per vedere la versione di octoprint installata:"),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"~/oprint/bin/octoprint --version")),(0,i.kt)("p",{parentName:"admonition"},"Per far ripartire il servizio di Octoprint:"),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"sudo service octoprint restart"))),(0,i.kt)("h3",{id:"prima-configurazione-octoprint"},"Prima Configurazione Octoprint"),(0,i.kt)("p",null,"Apriamo il nostro web browser e puntiamo a questo indirizzo:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"http://octopi.local")),(0,i.kt)("p",null,"Partira immediatamente il setup wizard"),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:a(30251).Z}," ",(0,i.kt)("img",{alt:"Setup Wizard",src:a(68811).Z,width:"1857",height:"961"})," ")),(0,i.kt)("p",null,"Dopo avere premuto next, vi verra' chiesto se avete un vecchio backup, ma se siete qui non credo proprio, perci\xf2 premete ",(0,i.kt)("strong",{parentName:"p"},"Next")),(0,i.kt)("p",null,"La schermata successiva vi chiedera' di creare uno used id ed una password, poi premete ",(0,i.kt)("strong",{parentName:"p"},"Next"),". Non fateli troppo semplici: ne va della vostra sicurezza"),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:a(76740).Z}," ",(0,i.kt)("img",{alt:"Credentials",src:a(95930).Z,width:"1232",height:"835"})," ")),(0,i.kt)("p",null,"In questa schermata, la scelta dipende da voi: non cambia nulla a livello di configurazione, ma, visto che il software \xe8 gratis, aiutiamo gli sviluppatori scegliendo Enable Anonymous Usage Tracking"),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:a(60464).Z}," ",(0,i.kt)("img",{alt:"Shell command",src:a(36418).Z,width:"1232",height:"828"})," ")),(0,i.kt)("p",null,'Qui dovete premere i pulsanti  "Test host & port" e "Test name resolution" per vedere se la stampante puo andare online e poi premete "Enable Connectivity Check", poi premete Next'),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:a(73494).Z}," ",(0,i.kt)("img",{alt:"Testing Connectivity",src:a(39720).Z,width:"1225",height:"833"})," ")),(0,i.kt)("p",null,'Premete "Enable Plugin Blacklist Processing", per una questione di sicurezza, poi nuovamente Next'),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:a(39446).Z}," ",(0,i.kt)("img",{alt:"Plugins Blacklist",src:a(73526).Z,width:"1232",height:"829"})," ")),(0,i.kt)("p",null,"Nella schermata successiva, se avete le misure della stampante inseritele, oppure andate avanti, si potranno inserire pi\xf9 in la'"),(0,i.kt)("p",null,"Ora premete Next e Finish ( una letta veloce a cosa dice l'ultima pagina non sarebbe male) e la configurazione \xe8 completa!!! \ud83e\udd29\ud83e\udd29\ud83e\udd29"),(0,i.kt)("p",null,"Benvenuti su Octoprint"),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:a(491).Z}," ",(0,i.kt)("img",{alt:"Octoprint",src:a(9752).Z,width:"1845",height:"954"})," ")),(0,i.kt)("p",null,"Bene ora fai parte della famiglia di utenti Octoprint, nelle prossime sezioni tratteremo la configurazione della tua stampante, come connetterla, di tutte le funzionalit\xe0 di octoprint e come installare e utilizzare i plug in migliori ( secondo il mio modesto parere), e di tutto quello che vi verr\xe0 in mente e ce lo farete sapere"))}u.isMDXComponent=!0},19270:function(e,t,a){t.Z=a.p+"assets/files/raspberry1-b8867ea1eb3ad49bc3a282a244005a1f.JPG"},61537:function(e,t,a){t.Z=a.p+"assets/files/raspberry10-2b60aab4e995b2531e810c4f988e33d7.JPG"},30251:function(e,t,a){t.Z=a.p+"assets/files/raspberry11-6604cff5eab88a6e5b70cd652c36e98c.JPG"},76740:function(e,t,a){t.Z=a.p+"assets/files/raspberry12-60d6f421515a31bcdaf831e481f25ea4.JPG"},60464:function(e,t,a){t.Z=a.p+"assets/files/raspberry13-545e6dce87a4b098a34613d82546b2ce.JPG"},73494:function(e,t,a){t.Z=a.p+"assets/files/raspberry14-c758be92c24d2a46f1a9fdb62edb170f.JPG"},39446:function(e,t,a){t.Z=a.p+"assets/files/raspberry15-d0f59b81d22707070227da3c42bf9cbd.JPG"},491:function(e,t,a){t.Z=a.p+"assets/files/raspberry16-61137c3757241bb7e422fd08039a65b4.JPG"},64383:function(e,t,a){t.Z=a.p+"assets/files/raspberry2-8825399d1681b92e50ce803527eb2e57.JPG"},11470:function(e,t,a){t.Z=a.p+"assets/files/raspberry3-392813842889dd1e8a2a3257c5798c59.JPG"},96418:function(e,t,a){t.Z=a.p+"assets/files/raspberry4-eee99783b54feae4d28471edbaa9c9fc.JPG"},95435:function(e,t,a){t.Z=a.p+"assets/files/raspberry5-8a0b25036f6d7fdf036ee0d8b55d1692.JPG"},90467:function(e,t,a){t.Z=a.p+"assets/files/raspberry6-8b5dfda3a7b28cd2ec0d283f2966c90f.JPG"},74019:function(e,t,a){t.Z=a.p+"assets/files/raspberry7-0ac0afd17e71c7b40c73ce37533b4df4.JPG"},62834:function(e,t,a){t.Z=a.p+"assets/files/raspberry8-3f01f673bde521eea31eb8928df039ed.JPG"},21326:function(e,t,a){t.Z=a.p+"assets/files/raspberry9-1eb69cac78201c89781088a3ca0f97bd.JPG"},47599:function(e,t,a){t.Z=a.p+"assets/images/raspberry1-b8867ea1eb3ad49bc3a282a244005a1f.JPG"},78385:function(e,t,a){t.Z=a.p+"assets/images/raspberry10-2b60aab4e995b2531e810c4f988e33d7.JPG"},68811:function(e,t,a){t.Z=a.p+"assets/images/raspberry11-6604cff5eab88a6e5b70cd652c36e98c.JPG"},95930:function(e,t,a){t.Z=a.p+"assets/images/raspberry12-60d6f421515a31bcdaf831e481f25ea4.JPG"},36418:function(e,t,a){t.Z=a.p+"assets/images/raspberry13-545e6dce87a4b098a34613d82546b2ce.JPG"},39720:function(e,t,a){t.Z=a.p+"assets/images/raspberry14-c758be92c24d2a46f1a9fdb62edb170f.JPG"},73526:function(e,t,a){t.Z=a.p+"assets/images/raspberry15-d0f59b81d22707070227da3c42bf9cbd.JPG"},9752:function(e,t,a){t.Z=a.p+"assets/images/raspberry16-61137c3757241bb7e422fd08039a65b4.JPG"},34759:function(e,t,a){t.Z=a.p+"assets/images/raspberry2-8825399d1681b92e50ce803527eb2e57.JPG"},68693:function(e,t,a){t.Z=a.p+"assets/images/raspberry3-392813842889dd1e8a2a3257c5798c59.JPG"},97372:function(e,t,a){t.Z=a.p+"assets/images/raspberry4-eee99783b54feae4d28471edbaa9c9fc.JPG"},70945:function(e,t,a){t.Z=a.p+"assets/images/raspberry5-8a0b25036f6d7fdf036ee0d8b55d1692.JPG"},83417:function(e,t,a){t.Z=a.p+"assets/images/raspberry6-8b5dfda3a7b28cd2ec0d283f2966c90f.JPG"},99371:function(e,t,a){t.Z=a.p+"assets/images/raspberry7-0ac0afd17e71c7b40c73ce37533b4df4.JPG"},61981:function(e,t,a){t.Z=a.p+"assets/images/raspberry8-3f01f673bde521eea31eb8928df039ed.JPG"},94615:function(e,t,a){t.Z=a.p+"assets/images/raspberry9-1eb69cac78201c89781088a3ca0f97bd.JPG"}}]);