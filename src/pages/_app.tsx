import '@radix-ui/themes/styles.css';
import config from '@application/configs/seo.json';
import { globalStyles } from '@application/styles/global';
import createCache from '@emotion/cache';
import { CacheProvider, Global, ThemeProvider } from '@emotion/react';
import { BaseLayout } from '@presentation/layouts/base';
import { Theme } from '@radix-ui/themes';
import type { AppProps } from 'next/app';
import NextHead from 'next/head';
import { DefaultSeo } from 'next-seo';
import { RecoilRoot } from 'recoil';

const cache = createCache({ key: 'jw' });

function MyApp(props: AppProps): JSX.Element {
  const { Component, pageProps } = props;

  return (
    <>
      <DefaultSeo {...config} />
      <NextHead>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </NextHead>
      <RecoilRoot>
        <Theme>
          <CacheProvider value={cache}>
            <ThemeProvider theme={{}}>
              <Global styles={globalStyles} />
              <BaseLayout>
                <Component {...pageProps} />
              </BaseLayout>
            </ThemeProvider>
          </CacheProvider>
        </Theme>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
