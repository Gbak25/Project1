import localFont from '@next/font/local';
import { Container } from '@radix-ui/themes';
import { NavBar } from '../../components/molecules/navbar';

type BaseLayoutProps = {
  children: JSX.Element | JSX.Element[];
};

const myFont = localFont({
  src: [
    {
      path: '../../../../public/fonts/Pretendard-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../../public/fonts/Pretendard-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../../../public/fonts/Pretendard-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../../../public/fonts/Pretendard-ExtraBold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
});

export function BaseLayout(props: BaseLayoutProps): JSX.Element {
  const { children } = props;

  return (
    <main className={`${myFont.className}`}>
      <NavBar />
      <Container>{children}</Container>
    </main>
  );
}
