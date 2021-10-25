---
title: Compilare dal sorgente
slug: /marlin/compilazione/compilare_il_sorgente
---


Visto che fidarsi e' bene, ma non fidarsi e meglio, e chi fa da se' fa per tre, compilarsi da soli il firmware non e' solo una esperienza gratificante, ma e' il miglior modo per avere sotto controllo tutte le impostazioni ed aggiungerne di nuove a seconda dei propri bisogni

Un esempio perfetto e' la configurazione del BL touch: alcuni utenti preferiscono fare la calibrazione su 9 punti, altri si accontentano di 5, c'e' anche chi si fa delle griglie 4x4 per calibrare... 

Questa configurazione puo' essere impostata solo dal firmware, non e' possibile decidere tramite UI, quindi avere dimestichezza col sorgente potrebbe essere importante per ottenere settaggi custom il piu' vicino possible alle nostre esigenze

Prima di cominciare, chiariamo un paio di concetti

Il firmware che gira sulle nostre stampanti e' ottimizzato per massimizzare le prestazioni della macchina ed e' scritto in binario (sequenze di 1 e 0), perche' la macchina e' "stupida" e questo e' l'unico linguaggio che riesce ad interpretare

Il problema e' che le sequenze binarie sono difficili da interpretare per gli essere umani

I linguaggi di programmazione sono stati creati proprio per permettere di scrivere istruzioni comprensibili per gli esseri umani, che poi vengono tradotte nel linguaggio comprensibile dalla macchina

Questo processo di traduzione si chiama **compilazione**

Dopo questo pistolotto, cominciamo col vedere cosa ci serve per compilare

## Setup {#setup}

Iniziamo scaricando Visual Studio Code (VS Code), un IDE (**Integrated development environment**, ambiente di sviluppo integrato) nel quale andremo ad editare il nostro sorgente

Andate sulla [pagina di download](https://code.visualstudio.com/download) e scaricate la versione per il vostro sistema operativo

Ovviamente non vi stiamo a spiegare come installare VS Code, ma, se avete problemi, chiedete nella community

Una volta installato, andiamo ad aprirlo

(qui spiegare un po' come e' fatto vs code)

(spiegare come installare platform io e spiegare a cosa serve il platform.ini)

(link al repo di mks + scaricare)

(istruzioni per le relative schede prese dal sito della mks + bottone per compilare)

