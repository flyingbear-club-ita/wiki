---
title: Firmware Stock
slug: /firmware/firmware_stock
keywords: ["stampa 3d", 3d printing", "flying bear", "flyingbear", "flying bear ghost", "flyingbear ghost", "flyingbear ghost 5", "flying bear ghost 5", "flyingbear ghost firmware"]
description: Instructions to install firmware for Flyingbear Ghost and links to download the most up to date AND tested firmwares
---

import DisplayAd from '../../src/components/displayAd'
import FacebookLink from '../../src/components/facebookLink'

<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>

In this page, you can find the links to a github repository where we store **tested** firmwares for the Flyingbear Ghost 5 and 4S and the procedures to update your 3d printer

## How to check currently installed version {#how-to-check-currently-installed-version}
1. From the main menu, click on the **Tool** icon
2. Click on the **About** icon
3. Next to **Mainboard Version**, you should find the current installed version

## Update procedure {#update-procedure}
1. Download the zipped file that contains the firmware
2. Extract the file you've just downloaded to a folder you can easily locate
3. Insert the printer microSD card to your computer
4. **Backup all the files stored in the microSD**
5. Format the microSD card in FAT32
6. Copy the whole content of the folder where you extracted the firmware to the microSD (both files and folders)
7. *Optional: If you've amended the **robin_nano35_cfg.txt** config file in the past, insert all the values you've amended in the new config file in the firmware folder
8. Switch the printer off (if on)
9. Insert the microSD card in the printer
10. Switch the printer on
11. Wait for new firmware to be uploaded
12. When update is complete, you should be able to see the Flyingbear logo first, then the startup menu

:::danger
**DO NOT** switch off the printer during the update procedure!!!
:::

<DisplayAd/>

## Increase printing speed {#increase-printing-speed}
The stock firmware limits the printer speed: it can reach much higher speed and acceleration

This limitation is the main reason for discrepancies between estimated print time from the slicer and the actual printing time

To increase the printer speed limits, replace the following values in the **robin_nano_cgf.txt** and update the firmware as described in the [First Steps](/docs/) section of this wiki


```
 >DEFAULT_X_MAX_FEEDRATE        300
 >DEFAULT_Y_MAX_FEEDRATE        300
 >DEFAULT_Z_MAX_FEEDRATE        5
 >DEFAULT_E0_MAX_FEEDRATE    100
 >DEFAULT_E1_MAX_FEEDRATE    70
 >DEFAULT_X_MAX_ACCELERATION    1000
 >DEFAULT_Y_MAX_ACCELERATION    1000
 >DEFAULT_Z_MAX_ACCELERATION    200
 >DEFAULT_E0_MAX_ACCELERATION    80000
 >DEFAULT_E1_MAX_ACCELERATION    1000
 >DEFAULT_ACCELERATION        1000
 >DEFAULT_RETRACT_ACCELERATION    3000
 >DEFAULT_TRAVEL_ACCELERATION    1000
 >DEFAULT_MINIMUMFEEDRATE    0.0
 >DEFAULT_MINSEGMENTTIME        20000 
 >DEFAULT_MINTRAVELFEEDRATE    0.0
```

<DisplayAd/>

## Available firmwares {#available-firmwares}

::tip
We store only firmwares we've tested

These firmwares might be behind the ones released by Flyingbear, which you can find [here](https://drive.google.com/drive/folders/1ZUuk_V8Bdn0Vt0OC19J2wQ0Nd3v5MbL4)

However, we cannot guarantee these firmwares won't brick your motherboard, while we can guarantee you the ones we are hosting won't
:::

:::danger
Lately, Flyingbear delivered printers with different motherboard chipsets and drivers

Before you download and install a new firmware, you should double check which configuration you have

Unfortunately, the only way to do this is to open the printer base

We stronlgy advise you not to attempt to install firmware blindly: installing the wrong firmware might brick your printer (lucky for you, there is already a procedure to restore the bootloader, which is described in the next page)

Compare your configuration with the pictures in the table below, then choose a firmware to install

If you can't see very well the images below, just click on them: a new zoomed in image will open in another window, so you can see better
:::


Printer  | Image  |  Chipset   | Driver    | Version  | Link
:---------:| :-------: | :------:   | :------:  |   :--:    | :--:
4S         |   NA      |    NA      | STOCK     | **3.5.1** | [Firmware Stock](https://github.com/flyingbear-club-ita/firmware_stock_4s)
5          | [ ![Reborn TMC2209](/img/comboMoboDrivers/RebornV3_TMC2209.webp) ](/img/comboMoboDrivers/RebornV3_TMC2209.webp) | STM32F103 | TMC2208/9  |**5.83-T25**| [Firmware Stock](https://github.com/flyingbear-club-ita/firmware_stock_5)
5          | [ ![Reborn TMC2209 A4889](/img/comboMoboDrivers/RebornV3_A4889_TMC2209.webp) ](/img/comboMoboDrivers/RebornV3_A4889_TMC2209.webp) | STM32F103 |  STOCK     | **5.8.7** | [Firmware Stock](https://github.com/flyingbear-club-ita/firmware_stock_5)
5          | [ ![Robin Nano TMC2225](/img/comboMoboDrivers/RobinNano1_3_TMC2225.webp) ](/img/comboMoboDrivers/RobinNano1_3_TMC2225.webp) | STM32F407 |  TMC2225   | **5.96-T25**| [Firmware Stock](https://github.com/flyingbear-club-ita/firmware_stock_5)
5          | [ ![Robin Nano TMC2209 A4889](/img/comboMoboDrivers/RobinNano1_3_TMC2209_A4889.webp) ](/img/comboMoboDrivers/RobinNano1_3_TMC2209_A4889.webp) | STM32F407 |  STOCK     | **v6.4**  | [Firmware Stock](https://github.com/flyingbear-club-ita/firmware_stock_5)
5          | [ ![Reborn TMC2225](/img/comboMoboDrivers/RebornV3_TMC2225.webp) ](/img/comboMoboDrivers/RebornV3_TMC2225.webp) | STM32F407 |  TMC2225     | **v71**  | **NON TESTATO!!!**

<DisplayAd/>

## Useful Links {#useful-links}
[Video-guide "Ghost 4S Firmware Upload Flying Bear" on YouTube](https://youtu.be/YxKrXQ3jQcA) 
    

<FacebookLink link="https://www.facebook.com/hashtag/firmware?__gid__=600126627631693"/>
