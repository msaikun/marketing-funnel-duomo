import React, { ReactElement } from 'react';
import Head from 'next/head';

import { ChooseYourPlan } from '../src/modules/dashboard/choosePlan/ChooseYourPlan';
import { WhatYouGet } from '../src/modules/dashboard/whatYouGet/WhatYouGet';
import { PeoplesResult } from '../src/modules/dashboard/peoplesResult/PeoplesResult';
import { UsersReviews } from '../src/modules/dashboard/usersReviews/UsersReviews';
import { Header } from '../src/components/header/Header';

const DashboardPage = () => {
  return (
    <>
      <Head>
        <title>DOUMO | Dashboard</title>
        <meta content="Marketing Funnel Implementation" name="description" />
      </Head>
      <main>
        <Header />
        <>
          <ChooseYourPlan />
          <WhatYouGet />
          <PeoplesResult />
          <UsersReviews />
          <ChooseYourPlan />
        </>
      </main>
    </>
  );
}

DashboardPage.getLayout = (page: ReactElement) => (
  <div>
    {page}
  </div>
);

export default DashboardPage;
