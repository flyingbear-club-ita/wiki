---
title: How to restore bootloader using ST-LINK Utility
slug: /firmware/ripristino_bootloader_alternativo
description: Alternative guide to restore the bootloader when flashing the wrong firmware for Flyingbear Ghost 5

---

import DisplayAd from '../../../../../src/components/displayAd'

If you have a very old OS, or you've had some trouble restoring the bootloader using STM32 Cube Programmer, you can try to use an alternative software, called STM32 ST-Link Utility

## Download {#download}

STM32 ST-Link Utility can be downloaded from [this link](https://www.st.com/en/development-tools/stsw-link004.html#get-software)


<DisplayAd/>

## Procedure {#procedure}

After downloading the software above, open STM32 ST-LINK Utility and follow the next steps:

1. Click on **File** and, next, on **Open File…**, then select the **Robin_nano35_v13_f4_boot_210615.hex** file previously downloaded
[ ![STM32 ST-Link Open File](/img/bootloader/07.png) ](/img/bootloader/07.png)

2. Click on **ST-LINK**, then select **printf via SWO viewer** and finally click on **Start**
[ ![STM32 ST-Link Start Procedure](/img/bootloader/08.png) ](/img/bootloader/08.png)

3. Close the window that just opened by clicking on the X, **without pressing stop neither moving it**

4. Click on **Target**, then on **Erase Chip** and confirm. Wait for the end of the process before moving on to the next step
[ ![STM32 ST-Link Erase chip](/img/bootloader/09.png) ](/img/bootloader/09.png)

5. Click on **Target**, then on **Program…**, then on **Start** and wait for procedure to complete
[ ![STM32 ST-Link Program](/img/bootloader/10.png) ](/img/bootloader/10.png)

6. Once the step above is completed, you can disconnect the ST-LINK from the USB port and the cables from the motherboard. Motherboard and screen should turn off

:::info
To complete the firmware installation, go back to the [previous page](/en/docs/firmware/ripristino_bootloader) and follow the instructions in the [**Final Steps**](/en/docs/firmware/ripristino_bootloader#final-steps) section
:::

<DisplayAd/>