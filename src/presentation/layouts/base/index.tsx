import { Noto_Sans_KR } from '@next/font/google';
import { Container } from '@radix-ui/themes';
import { NavBar } from '../../components/navbar';

type BaseLayoutProps = {
  children: JSX.Element | JSX.Element[];
};

const notoSansKR = Noto_Sans_KR({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
});

export function BaseLayout(props: BaseLayoutProps): JSX.Element {
  const { children } = props;

  return (
    <main className={`${notoSansKR.className}`}>
      <NavBar />
      <Container>{children}</Container>
    </main>
  );
}
