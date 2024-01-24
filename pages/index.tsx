import Head from 'next/head';
import React, { ReactElement } from 'react';

const HelloPage = () => {
  return (
    <>
      <Head>
        <title>DOUMO | Marketing Funnel</title>
        <meta content="Marketing Funnel Implementation" name="description" />
      </Head>
      <main>
        <div>
          Let's start!
        </div>
      </main>
    </>
  );
}

HelloPage.getLayout = (page: ReactElement) => (
  <div>
    {page}
  </div>
);

export default HelloPage;
