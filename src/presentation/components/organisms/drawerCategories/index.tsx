import 'react-modern-drawer/dist/index.css';
import { useCheckDevice } from '@application/hooks/use_check_device';
import { useGetCategories } from '@application/hooks/use_get_data';
import { drawerCategoriesAtom } from '@application/recoils/drawer/drawer_atoms';
import { searchKeywordAtom } from '@application/recoils/navMenu/atoms';
import { palette } from '@application/styles/colors';
import { useRouter } from 'next/router';
import Drawer from 'react-modern-drawer';
import { useRecoilState, useSetRecoilState } from 'recoil';

export function DrawerCategories(): JSX.Element {
  const [isOpen, setOpen] = useRecoilState(drawerCategoriesAtom);
  const setSearchKeyword = useSetRecoilState(searchKeywordAtom);
  const { data } = useGetCategories();
  const router = useRouter();
  const isMobile = useCheckDevice();

  return (
    <Drawer
      open={isOpen.isOpen}
      onClose={(): void => setOpen({ isOpen: false })}
      direction="right"
      style={{
        backgroundColor: palette.neutral._9,
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '40px 0',
        gap: 24,
      }}>
      {data.map((d) => {
        return (
          <button
            type="button"
            key={d}
            className="typo-label-l"
            style={{
              backgroundColor: palette.neutral._9,
              cursor: 'pointer',
              color: '#fff',
              border: 'none',
            }}
            onClick={(): void => {
              setSearchKeyword(d);
              setOpen({ isOpen: false });
              router.push('/');
            }}>
            {d}
          </button>
        );
      })}
    </Drawer>
  );
}
