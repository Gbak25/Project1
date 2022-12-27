import { useCheckDevice } from '@application/hooks/use_check_device';
import {
  activeNavMenuAtom,
  navMenuAtom,
} from '@application/recoils/navMenu/atoms';
import { searchKeywordAtom } from '@application/recoils/search/atoms';
import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import isEqual from 'react-fast-compare';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import styles from './style.module.scss';

function Navbar(): JSX.Element {
  const isMobile = useCheckDevice();
  const menu = useRecoilValue(navMenuAtom);
  const [activeMenu, setActiveMenu] = useRecoilState(activeNavMenuAtom);
  const setSearchKeyword = useSetRecoilState(searchKeywordAtom);
  const [searchValue, setSearchValue] = useState<string>('');

  useEffect(() => {
    if (isMobile) {
      setActiveMenu("What's new");
    } else {
      setActiveMenu(undefined);
    }
  }, [isMobile]);

  const navMenu = useMemo((): string[] => {
    if (isMobile) {
      return ["What's new", 'Most viewed', ...menu];
    }

    return menu;
  }, [isMobile]);

  const onMenuClick = useCallback((selectedMenu: string): void => {
    setActiveMenu(selectedMenu);
  }, []);

  const onSearchClick = useCallback((): void => {
    setSearchKeyword(searchValue);
  }, [searchValue]);

  return (
    <nav className="navbar bg-gray-2">
      <div className="container d-flex flex-row justify-content-between py-3">
        {!isMobile && (
          <p className="font-size-18 w-15 text-red fw-bold">Emergency</p>
        )}
        <ul className={`d-flex flex-row ${styles.categoryList}`}>
          {navMenu.map((m) => {
            return (
              <li
                key={m}
                role="presentation"
                onClick={(): void => onMenuClick(m)}
                className={`${
                  activeMenu === m ? styles.activeMenu : undefined
                }`}>
                {m}
              </li>
            );
          })}
        </ul>
        {!isMobile && (
          <div
            className={`w-15 d-flex justify-content-end ${styles.searchWrppaer}`}>
            <input
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <a
              role="presentation"
              className={styles.searchContainer}
              onClick={onSearchClick}
              onKeyDown={onSearchClick}>
              <img className={styles.search} src="/ic_search.svg" />
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default memo(Navbar, isEqual);
