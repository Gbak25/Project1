import type { CSSProperties } from 'react';
import { useMemo } from 'react';
import type { LogoTypes } from './types';

export function Logo(props: LogoTypes = { width: 16 }): JSX.Element {
  const { height, width } = props;

  const style = useMemo((): CSSProperties => {
    return {
      width: width || 16,
      height: height || 16,
    };
  }, [height, width]);

  return <img alt="logo" src="/logo.svg" style={style} />;
}
