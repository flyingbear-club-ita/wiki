import React from 'react';
import Layout from '@theme/Layout';
import Upgrades from '../components/Upgrades'
import { upgradesData } from '../data/upgradesData';
import DisplayAd from '../components/displayAd';

export default function UpgradesPage() {
  return (
    <Layout>
		<div>
			<h1 className='pageTitle'>Upgrades FlyingBear Ghost</h1>
		</div>
		<div  className='pageDescription'>
			<p>In questa pagina troverai i migliori upgrade selezionati per migliorare
			ancora di più la tua stampante 3d Flying Bear Ghost</p>
			<p>Di seguito trovi la legenda per aiutarti a capire quale sia il livello di difficoltà di ogni upgrade</p>
		</div>
		<div className='legendaUpgrades'>
			<div><div className='legendaUpgrades-color high'></div><div><p>Alto</p></div></div>
			<div><div className='legendaUpgrades-color medium'></div><div><p>Medio</p></div></div>
			<div><div className='legendaUpgrades-color low'></div><div><p>Basso</p></div></div>
		</div>
	  <DisplayAd/>
      <Upgrades data={upgradesData}/>
	  <DisplayAd/>
    </Layout>
  );
}
