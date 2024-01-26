import React, { ReactElement } from 'react';
import Head                    from 'next/head';

import { GrowthProgress } from '../src/modules/growthProgress/GrowthProgress';
import { Header }         from '../src/components/header/Header';

const GrowthProgressage = () => (
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

GrowthProgressage.getLayout = (page: ReactElement) => (
  <>
    {page}
  </>
);

export default GrowthProgressage;
