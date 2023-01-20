import { Noto_Sans_KR } from '@next/font/google';
import Navbar from '@presentation/components/navbar';
import { memo } from 'react';
import isEqual from 'react-fast-compare';
import styles from './styles.module.scss';

type BaseLayoutProps = {
  children: JSX.Element | JSX.Element[];
};

const notoSansKR = Noto_Sans_KR({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
});

function BaseLayout(props: BaseLayoutProps): JSX.Element {
  const { children } = props;

  return (
    <main className={`${notoSansKR.className} ${styles.wrapper}`}>
      <Navbar />
      <div className="container">{children}</div>
    </main>
  );
}

export default memo(BaseLayout, isEqual);
