import Head                    from 'next/head';
import React, { ReactElement } from 'react';
import { StartPage }           from '../src/modules/startPage/StartPage';

const HelloPage = () => (
  <>
    <Head>
      <title>DOUMO | Marketing Funnel</title>
      <meta content="Marketing Funnel Implementation" name="description" />
    </Head>
    <main>
      <StartPage />
    </main>
  </>
);

HelloPage.getLayout = (page: ReactElement) => (
  <>
    {page}
  </>
);

export default HelloPage;
