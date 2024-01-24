import React, { ReactElement } from 'react';
import Head from 'next/head';

import { Header } from '../src/components/header/Header';
import { GrowthProgress } from '../src/modules/growthProgress/GrowthProgress';

const GrowthProgressage = () => {
  return (
    <>
      <Head>
        <title>DOUMO | Growth Progress</title>
        <meta content="Marketing Funnel Implementation" name="description" />
      </Head>
      <main>
        <Header />
        <GrowthProgress />
      </main>
    </>
  );
}

GrowthProgressage.getLayout = (page: ReactElement) => (
  <div>
    {page}
  </div>
);

export default GrowthProgressage;
