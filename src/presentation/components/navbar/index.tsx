import { useCheckDevice } from '@application/hooks/use_check_device';
import { navMenuAtom } from '@application/recoils/navMenu';
import { memo, useMemo } from 'react';
import isEqual from 'react-fast-compare';
import { useRecoilValue } from 'recoil';
import styles from './style.module.scss';

function Navbar(): JSX.Element {
  const isMobile = useCheckDevice();
  const menu = useRecoilValue(navMenuAtom);

  const navMenu = useMemo((): string[] => {
    if (isMobile) {
      return ["What's new", 'Most viewed', ...menu];
    }

    return menu;
  }, [isMobile]);

  return (
    <nav className="navbar bg-gray-2">
      <div className="container d-flex flex-row justify-content-between py-3">
        {!isMobile && (
          <p className="font-size-18 w-15 text-red fw-bold">Emergency</p>
        )}
        <ul className={`d-flex flex-row ${styles.categoryList}`}>
          {navMenu.map((m) => {
            return <li key={m}>{m}</li>;
          })}
        </ul>
        {!isMobile && (
          <a className="d-flex w-15 justify-content-end">
            <img className={styles.search} src="/ic_search.svg" />
          </a>
        )}
      </div>
    </nav>
  );
}

export default memo(Navbar, isEqual);
