import React, { ReactElement } from 'react';
import Head from 'next/head';

import { Header } from '../src/components/header/Header';

import { PersonalisedGrowthForm } from '../src/modules/personalisedGrowthForm/PersonalisedGrowthForm';

const PersonalisedFormPage = () => {
  return (
    <>
      <Head>
        <title>DOUMO | Form</title>
        <meta content="Marketing Funnel Implementation" name="description" />
      </Head>
      <main>
        <Header />
        <PersonalisedGrowthForm />
      </main>
    </>
  );
}

PersonalisedFormPage.getLayout = (page: ReactElement) => (
  <div>
    {page}
  </div>
);

export default PersonalisedFormPage;
