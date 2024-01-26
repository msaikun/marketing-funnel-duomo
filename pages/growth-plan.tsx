import React, { ReactElement } from 'react';
import Head                    from 'next/head';

import { GrowthPlan } from '../src/modules/growthPlan/GrowthPlan';
import { Header }     from '../src/components/header/Header';

const GrowthPlanPage = () => (
  <>
    <Head>
      <title>DOUMO | Growth Plan</title>
      <meta content="Marketing Funnel Implementation" name="description" />
    </Head>
    <>
      <Header />
      <GrowthPlan />
    </>
  </>
);

GrowthPlanPage.getLayout = (page: ReactElement) => (
  <>
    {page}
  </>
);

export default GrowthPlanPage;
