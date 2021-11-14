import React from 'react';
import Layout from '@theme/Layout';
import Upgrades from '../components/Upgrades'
import { ricambiData } from '../data/ricambiData';
import DisplayAd from '../components/displayAd';

export default function UpgradesPage() {
  return (
    <Layout>
      <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      <div >
        <h1 className='pageTitle'>Ricambi Flyingbear Ghost 5 e 4S</h1>
      </div>
      <div  className='pageDescription'>
        <p>In questa pagina troverai l'elenco dei ricambi per migliorare
        ancora di più la tua stampante 3d Flyingbear Ghost 5 e 4S</p>
      </div>
      <DisplayAd/>  
      <Upgrades data={ricambiData}/>
      <script async src="https://cse.google.com/cse.js?cx=5a2f7c225eb6b460f"></script>
      <div class="gcse-search"></div>
    </Layout>
  );
}
