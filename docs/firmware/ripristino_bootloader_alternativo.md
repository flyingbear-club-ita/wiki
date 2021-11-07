---
title: Ripristino bootloader con ST-LINK Utility
slug: /firmware/ripristino_bootloader_alternativo
---

import DisplayAd from '../../src/components/displayAd'

<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>

Se avete un sistema operativo molto vecchio, oppure avete avuto problemi con STM32 Cube Programmer, potete provare ad utilizzare un software alternativo, chiamato STM32 ST-Link Utility


## Download {#download}

Il software STM32 ST-Link Utility puo' essere scaricato da [questo link](https://www.st.com/en/development-tools/stsw-link004.html#get-software)


<DisplayAd/>

## Procedura {#procedura}

Dopo aver scaricato il software, aprite STM32 ST-LINK utility e seguite questi passaggi

1. Cliccate su **File** e, successivamente, sulla voce **Open File…** e selezionate il file *Robin_nano35_v13_f4_boot_210615.hex* salvato precedentemente
[ ![STM32 ST-Link Open File](/img/bootloader/07.png) ](/img/bootloader/07.png)

2. Cliccate sulla voce **ST-LINK** e selezionate la voce **printf via SWO viewer**, poi cliccate su **Start**
[ ![STM32 ST-Link Start Procedure](/img/bootloader/08.png) ](/img/bootloader/08.png)

3. Chiudete tramite la *X* la finestra che si è aperta, **senza premere su Stop e senza spostarla**

4. Cliccate sulla voce **Target**, successivamente su **Erase Chip** e date conferma. Attendete la fine del processo prima di procedere con il punto seguente
[ ![STM32 ST-Link Erase chip](/img/bootloader/09.png) ](/img/bootloader/09.png)

5. Cliccate sulla voce **Target**, successivamente su **Program…**, poi su Start ed attendete nuovamente il termine del processo
[ ![STM32 ST-Link Program](/img/bootloader/10.png) ](/img/bootloader/10.png)

6. Terminato il processo, sarà possibile scollegare l’ST-LINK dalla porta USB ed il cavo dalla scheda madre della stampante; così facendo, la scheda e lo schermo della stampante dovrebbero spegnersi

:::info
Per completare la procedura, tornate alla [pagina precedente](/docs/firmware/ripristino_bootloader) e seguite le istruzioni nella sezione **Procedura Finale**
:::

<DisplayAd/>