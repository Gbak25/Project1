import { drawerCategoriesAtom } from '@application/recoils/drawer/drawer_atoms';
import { searchKeywordAtom } from '@application/recoils/search/atoms';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { Container, Flex } from '@radix-ui/themes';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { useCheckDevice } from '../../../../application/hooks/use_check_device';
import { Logo } from '../../atoms/logo';
import { MButton } from '../../atoms/mButton';
import { SearchBar } from '../../atoms/searchBar';

export function NavBar(): JSX.Element {
  const router = useRouter();
  const setSearchKeyword = useSetRecoilState(searchKeywordAtom);
  const setOpen = useSetRecoilState(drawerCategoriesAtom);
  const [search, setSearch] = useState<string>('');
  const isMoile = useCheckDevice();

  return (
    <Container px="4">
      <Flex style={{ minHeight: 60 }} justify="between" align="center">
        <Flex
          gap="3"
          justify="between"
          style={{ cursor: 'pointer' }}
          align="center"
          onClick={(): void => {
            router.push('/');
            setSearchKeyword('');
          }}>
          <Logo />
          <p className="typo-title-m">MediShare</p>
        </Flex>
        {!isMoile && (
          <SearchBar
            value={search}
            onTextChange={setSearch}
            onSubmit={(value): void => {
              setSearchKeyword(value);
              setSearch('');
              router.push('/');
            }}
            placeholder="Search with your keyword"
          />
        )}
        <MButton
          label="Categories"
          rightIcon={<HamburgerMenuIcon width="16" height="16" />}
          onClick={(): void => setOpen({ isOpen: true })}
        />
      </Flex>
    </Container>
  );
}
