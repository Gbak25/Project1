import { palette } from '@application/styles/colors';
import { Button } from '@radix-ui/themes';
import type { CSSProperties } from 'react';
import { useMemo } from 'react';
import type { ChipProps } from './types';

export function Chip(props: ChipProps): JSX.Element {
  const { absolute, backgroundColor, color, label } = props;

  const background = useMemo((): string | undefined => {
    if (color) {
      return 'transparent';
    }

    return backgroundColor || palette.primary._6;
  }, [backgroundColor, color]);

  const style = useMemo((): CSSProperties => {
    return {
      position: absolute ? 'absolute' : undefined,
      backgroundColor: background,
      color: color || '#fff',
      border: `1px solid ${color}`,
      top: absolute?.top,
      right: absolute?.right,
      bottom: absolute?.bottom,
      left: absolute?.left,
    };
  }, [absolute, backgroundColor, color]);

  return <Button style={style}>{label}</Button>;
}
