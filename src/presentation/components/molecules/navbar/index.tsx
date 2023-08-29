import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { Container, Flex } from '@radix-ui/themes';
import { useRouter } from 'next/router';
import { Logo } from '../../atoms/logo';
import { MButton } from '../../atoms/mButton';
import { SearchBar } from '../../atoms/searchBar';

export function NavBar(): JSX.Element {
  const router = useRouter();

  return (
    <Container>
      <Flex justify="between" align="center">
        <Flex
          gap="3"
          justify="between"
          style={{ cursor: 'pointer' }}
          align="center"
          onClick={(): void => {
            router.push('/');
          }}>
          <Logo />
          <p className="typo-title-m">MediShare</p>
        </Flex>
        <SearchBar placeholder="검색해라" />
        <MButton
          label="Categories"
          rightIcon={<HamburgerMenuIcon width="16" height="16" />}
        />
      </Flex>
    </Container>
  );
}
