import { memo } from 'react';
import isEqual from 'react-fast-compare';
import styles from './style.module.scss';

function Navbar(): JSX.Element {
  return (
    <nav className="navbar bg-gray-2">
      <div className="container d-flex flex-row justify-content-between py-3">
        <p className="font-size-18 w-15">Emergency</p>
        <ul className={`d-flex flex-row ${styles.categoryList}`}>
          <li>Test</li>
          <li>Test</li>
          <li>Test</li>
          <li>Test</li>
          <li>Test</li>
          <li>Test</li>
          <li>Test</li>
        </ul>
        <p className="w-15">asdad</p>
      </div>
    </nav>
  );
}

export default memo(Navbar, isEqual);
