import '@radix-ui/themes/styles.css';
import '@application/global.scss';
import config from '@application/configs/seo.json';
import { BaseLayout } from '@presentation/layouts/base';
import { Theme } from '@radix-ui/themes';
import type { AppProps } from 'next/app';
import NextHead from 'next/head';
import { DefaultSeo } from 'next-seo';
import { RecoilRoot } from 'recoil';

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
          <BaseLayout>
            <Component {...pageProps} />
          </BaseLayout>
        </Theme>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
