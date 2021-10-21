import React from 'react';
import Layout from '@theme/Layout';
import Upgrades from '../components/Upgrades'
import { upgradesData } from '../data/ricambiData';
import DisplayAd from '../components/displayAd';

export default function UpgradesPage() {
  return (
    <Layout>
      <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      <div >
        <h1 className='pageTitle'>Ricambi Flying-Bear Ghost</h1>
      </div>
      <div  className='pageDescription'>
        <p>In questa pagina troverai l'elenco dei ricambi per migliorare
        ancora di più la tua stampante 3d Flying Bear Ghost</p>
      </div>
      <DisplayAd/>  
      <Upgrades data={upgradesData}/>
    </Layout>
  );
}
