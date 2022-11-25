import Navbar from '@presentation/components/navbar';
import { memo } from 'react';
import isEqual from 'react-fast-compare';

type BaseLayoutProps = {
  children: JSX.Element | JSX.Element[];
};

function BaseLayout(props: BaseLayoutProps): JSX.Element {
  const { children } = props;

  return (
    <>
      <Navbar />
      <div className="container">{children}</div>
    </>
  );
}

export default memo(BaseLayout, isEqual);
