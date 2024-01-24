import React, { ReactElement } from 'react';
import Head from 'next/head';

import { Header } from '../src/components/header/Header';

import { GrowthPlan } from '../src/modules/growthPlan/GrowthPlan';

const GrowthPlanPage = () => {
  return (
    <>
      <Head>
        <title>DOUMO | Growth Plan</title>
        <meta content="Marketing Funnel Implementation" name="description" />
      </Head>
      <main>
        <Header />
        <GrowthPlan />
      </main>
    </>
  );
}

GrowthPlanPage.getLayout = (page: ReactElement) => (
  <div>
    {page}
  </div>
);

export default GrowthPlanPage;
