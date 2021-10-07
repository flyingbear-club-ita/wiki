---
title: Come ripristinare il bootloader
slug: /firmware/ripristino_bootloader
description: Guida per il ripristino del bootloader dopo aver flashato il firmware sbagliato
---

**Autori**: OrkoMastro e matteoberg

:::danger

La procedura qui descritta e' stata testata da piu' utenti, ma non ci assumiamo nessuna responsabilita' per eventuali danni a software o hardware della stampante

:::

Se, dopo aver tentato l’aggiornamento ad un nuovo firmware, il processo di installazione si ferma sulla schermata "Font Table Updating 100% ed al riavvio della stampante, a schermo compare fisso la scritta “Booting...”, e' necessario ricaricare il bootloader sulla scheda madre

Non preoccupatevi: si può sistemare, basta armarsi di un po’ di pazienza

Se capite l’inglese e volete affidarvi alla discussione sul problema, potete trovarla al [seguente link](https://github.com/makerbase-mks/MKS-Robin-Nano-S-Firmware/issues/3)


## Materiale occorrente

- [Youmile Youmile ST-LINK V2 programmer](https://www.amazon.it/Youmile-Emulator-Downloader-programmatore-programmazione/dp/B07QBLNDPM/ref=sr_1_4?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=ST-LINK+V2&qid=1633304784&s=electronics&sr=1-4) **da acquistare su amazon, o dove vi pare**
- [STM32 Cube Programmer](https://www.st.com/en/development-tools/stm32cubeprog.html), compatible con Windows 32bit, Windows 64 bit, Mac OSx e Linux
- [File per il Bootloader](https://github.com/makerbase-mks/MKS-Robin-Nano-V1.X/archive/refs/heads/master.zip)

:::tip
STM32 Cube Programmer potrebbe non funzionare su sistemi operativi Windows molto vecchi
In questo caso, proseguite alla [pagina successiva](/docs/firmware/ripristino_bootloader_alternativo), dove c'e' una guida per un software alternativo
:::

## Preparare bootloader e firmware

Una volta scaricato l’archivio del bootloader, estrarre il file *Robin_nano35_v13_f4_boot_210615.hex* contenuto nel percorso */MKS-Robin_Nano-V1.X-master/Bootloader/* e salvarlo sul Desktop per facilitare i passaggi

Successivamente, estrarre l’archivio *Mks_Nano35_V2.0.3.6 Release file.rar* contenuto nel percorso */MKS-Robin-Nano-V1.X-master/Nano firmware v2.x.x/* ed estrarne la cartella *English* contenuta nel percorso */Mks_Nano35_V2.0.3.6 Release file*, salvandola sempre sul Desktop per facilitare i passaggi. Questa cartella contiene il firmware MKS, che servira' da base per installare il firmware della Flyingbear

:::caution
Prima di procedere, assicurarsi che la testa di stampa sia nella posizione di home e che il piatto sia a qualche centimetro dalla testa di stampa!!!
:::


## Collegamenti

Prima di collegare l’ST-LINK (il programmatore USB precedentemente acquistato) al PC, dovremo prima spegnere la stampante tramite l'interruttore luminoso sul retro, **assicurandoci pero' che il cavo di alimentazione sia collegato alla presa di corrente**

Successivamente potremo procedere a rimuovere il pannello inferiore, girando la stampante facendola poggiare sul lato sinistro, in modo che il pannello inferiore sia accessibile, svitando le 6 viti a brugola presenti sul pannello

:::tip
Per praticità di accesso, potete anche svitare le 2 viti a brugola che trattengono in posizione la ventola di raffreddamento per poterla rimuovere ed avere maggior spazio di manovra per le prossime operazioni
:::

Per i collegamenti tra la scheda madre e l’ST-LINK, basatevi sulle scritte presenti sul fronte del
programmatore USB stesso 

[ ![Programmatore ST-Link](/img/bootloader/01.jpg) ](/img/bootloader/01.jpg)

Sulla scheda madre i Pin da collegare sono quelli evidenziati nell’immagine seguente

[ ![Pin della Scheda da collegare](/img/bootloader/03.jpg) ](/img/bootloader/03.jpg)

Per semplicità, di seguito sono riportati i collegamenti da effettuare

Pin ST_LINK | Pin Scheda Madre
:---------: | :-------:
SWCLK       |    3
SWDIO       |    1
GND         |    6
3.3v        |    2



[ ![Dettaglio Pin Scheda](/img/bootloader/04.jpg) ](/img/bootloader/04.jpg)     [ ![Dettaglio Pin Programmatore](/img/bootloader/02.jpg) ](/img/bootloader/02.jpg)

Assicuratevi che i cavetti siano saldamente collegati ai Pin della scheda madre e che corrispondano allo schema indicato precedentemente

Collegare l’ST-LINK ad una porta USB del PC, se i collegamenti sono esatti la scheda e lo schermo della stampante dovrebbero accendersi


## Come flashare il bootloader con STM32 Cube Programmer

Aprite il software STM32CubeProgrammer che avete scaricato precedentemente e seguite i
prossimi passaggi

1. Cliccate sul pulsante **Connect**
[ ![STM32 Connect](/img/bootloader/05.png) ](/img/bootloader/05.png)
2. Cliccate sul pulsante **Full chip erase**
3. Cliccate su **Browse** e selezionate il file *Robin_nano35_v13_f4_boot_210615.hex* salvato precedentemente
4. Cliccate sul pulsante **Start Programming** e attendete che termini il processo
[ ![STM32 Start Programming](/img/bootloader/06.png) ](/img/bootloader/06.png)
5. Terminato il processo sarà possibile scollegare l’ ST-LINK dalla porta USB ed il cavo dalla scheda madre della stampante; così facendo, la scheda e lo schermo della stampante dovrebbero spegnersi

## Procedura finale
Prima di proseguire, potete rimontare la ventola di raffreddamento, richiudere il pannello inferiore della stampante e riposizionarla in posizione verticale

Per poter caricare il nuovo firmware, collegate una Micro SDcard al PC e formattatela in formato
**FAT32**

Una volta formattata, copiate l’intero contenuto della cartella *English* salvata precedentemente sul Desktop

Per chiarezza, dovrete copiare i seguenti elementi:
- Cartella mks_font
- Cartella mks_pic
- File MksWifi.bin
- File robin_nano35_cfg.txt
- File Robin_nano35.bin

Una volta copiati i file sulla Micro SDcard, scollegatela dal PC ed inseritela nell’apposito slot sulla stampante ed accendetela tramite l’interruttore presente sul retro della stessa

Appena accesa la stampante, il processo di caricamento del nuovo firmware dovrebbe iniziare automaticamente

:::caution
Nel caso in cui il processo apparisse bloccato sul messaggio a schermo “Updating 100%”, attendete circa 10 minuti, dopodiché spegnete la stampante tramite l’interruttore sul retro, estraete la Micro SDcard ed accendetela nuovamente
:::

Se il processo è andato a buon fine, dovrebbe apparire a schermo il logo Makerbase ed avrete installato il Custom Firmware che probabilmente tanto agognavate!

(probabilmente qui ci metterei che, a questo punto, e' possibile installare il firmware stock della ghost)

:::info
Per qualsiasi domanda in merito a questa guida, non esitate a contattarci via Discord:
matteoberg#3262 e OrkoMastro#0507
:::