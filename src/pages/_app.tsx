import 'bootstrap/dist/css/bootstrap.min.css';
import '@application/styles/vendors/bootstrap/style.scss';
import '@application/styles/globals.scss';
import '@application/styles/measurements.scss';
import '@application/styles/colors.scss';
import '@application/styles/router.scss';
import '@application/styles/utils.scss';
import config from '@application/configs/seo.json';
import BaseLayout from '@presentation/layouts/base';
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
        <BaseLayout>
          <Component {...pageProps} />
        </BaseLayout>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
