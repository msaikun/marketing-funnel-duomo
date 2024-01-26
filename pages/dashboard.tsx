import React, { ReactElement } from 'react';
import Head                    from 'next/head';

import { Dashboard } from '../src/modules/dashboard/Dashboard';
import { Header }    from '../src/components/header/Header';

const DashboardPage = () => {
  return (
    <>
      <Head>
        <title>DOUMO | Dashboard</title>
        <meta content="Marketing Funnel Implementation" name="description" />
      </Head>
      <main>
        <Header />
        <Dashboard/>
      </main>
    </>
  );
}

DashboardPage.getLayout = (page: ReactElement) => (
  <>
    {page}
  </>
);

export default DashboardPage;
