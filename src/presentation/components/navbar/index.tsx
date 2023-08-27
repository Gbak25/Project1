import { HamburgerMenuIcon, MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { Button, Container, Flex, TextField } from '@radix-ui/themes';
import { useRouter } from 'next/router';

export function NavBar(): JSX.Element {
  const router = useRouter();

  return (
    <Container>
      <Flex justify="between" align="center">
        <Flex
          gap="3"
          justify="between"
          align="center"
          onClick={(): void => {
            router.push('/');
          }}>
          <img src="/logo.svg" width="16px" height="16px" />
          MediShare
        </Flex>
        <TextField.Root radius="full">
          <TextField.Input placeholder="Search the docs…" />
          <TextField.Slot>
            <MagnifyingGlassIcon height="16" width="16" />
          </TextField.Slot>
        </TextField.Root>
        <Button>
          Categories
          <HamburgerMenuIcon width="16" height="16" />
        </Button>
      </Flex>
    </Container>
  );
}
