import React from 'react';
import Layout from '@theme/Layout';
import Upgrades from '../components/Upgrades'
import { upgradesData } from '../data/ricambiData';


export default function UpgradesPage() {
  return (
    <Layout>
      <Upgrades data={upgradesData}/>
    </Layout>
  );
}
