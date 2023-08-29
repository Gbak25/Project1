import { palette } from '@application/styles/colors';
import { Button } from '@radix-ui/themes';
import { useMemo } from 'react';
import type { MButtonTypes } from './types';

export function MButton(props: MButtonTypes): JSX.Element {
  const { backgroundColor, label, leftIcon, rightIcon, onClick } = props;

  const bgColor = useMemo((): string => {
    return backgroundColor || palette.neutral._9;
  }, [backgroundColor]);

  return (
    <Button
      style={{ cursor: 'pointer', backgroundColor: bgColor }}
      onClick={onClick}>
      {leftIcon}
      {label}
      {rightIcon}
    </Button>
  );
}
