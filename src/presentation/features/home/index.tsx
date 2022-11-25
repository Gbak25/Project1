import { memo } from 'react';
import isEqual from 'react-fast-compare';

function Home(): JSX.Element {
  return (
    <div>
      <p>Adsasd</p>
    </div>
  );
}

export default memo(Home, isEqual);
