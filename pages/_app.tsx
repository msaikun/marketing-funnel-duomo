import React, {
  ReactElement,
  ReactNode,
}                        from 'react';
import type { AppProps } from 'next/app';
import type { NextPage } from 'next';

import { plusJakartaSans } from '../styles/fonts';
import '../styles/global.scss';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      {getLayout(<Component {...pageProps} className={plusJakartaSans.className} />)}
    </>
  );
};

export default MyApp;
