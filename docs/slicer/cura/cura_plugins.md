---
title: I migliori plugin per Cura
slug: /slicer/cura/plugins
---

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

<PluginInfo title="Z Offset">
Questo plugin e' molto utile per il PETG

Visto che il PETG si espande piu' del PLA, e' consigliato allontanare il piatto di 0.1/0.2mm per lasciare piu' spazio al materiale

Di conseguenza, ogni volta che si cambia dal PLA a PETG e viceversa, sarebbe necessario ricalibrare il piatto

Invece di cambiare la distanza dell'ugello dal piatto, possiamo cambiarla via software, utilizzando questo plugin

</PluginInfo>


<PluginInfo title="Calibration shapes">

Perche' andare a cercare temp tower o cubi quando li avete disponili e pronti ad essere stampati?

</PluginInfo>

<PluginInfo title="Custom support">

Ogni buona stampa hai dei buoni supporti, se pensate che farete solo stampe senza supporti, andate a pettinare le bambole

</PluginInfo>

<PluginInfo title="Simpler Slicing: Auto-Orientation">

Aiuta a posizionare l'oggetto per usare meno supporti possibili, non infallibile, ma di certo un buon aiuto

</PluginInfo>

<PluginInfo title="Crystal Clear: Cura Settings Guide">

Spiegazioni molto dettagliate su tutte le impostazioni di Cura, io ho imparato ad usarla con questo plug in, ma attenti: è in inglese!!!

</PluginInfo>

<PluginInfo title="Octoprint">

se non avete octoprint, correte a comprarvi un raspberry!!!

</PluginInfo>

<PluginInfo title="MKS Wifi">

Per controllare la stampante da remoto, maggiori informazioni nella <a href="mkswifi" style={{color:"#ff0000"}}>sezione apposita</a>

</PluginInfo>

  