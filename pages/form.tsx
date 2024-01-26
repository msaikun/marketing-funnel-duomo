import React, { ReactElement } from 'react';
import Head                    from 'next/head';

import { PersonalisedGrowthForm } from '../src/modules/personalisedGrowthForm/PersonalisedGrowthForm';
import { Header }                 from '../src/components/header/Header';

const PersonalisedFormPage = () => (
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

PersonalisedFormPage.getLayout = (page: ReactElement) => (
  <>
    {page}
  </>
);

export default PersonalisedFormPage;
