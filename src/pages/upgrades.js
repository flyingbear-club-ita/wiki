import React from 'react';
import Layout from '@theme/Layout';
import Upgrades from '../components/Upgrades'
import { upgradesData } from '../data/upgradesData';


export default function UpgradesPage() {
  return (
    <Layout>
      <Upgrades data={upgradesData}/>
    </Layout>
  );
}
