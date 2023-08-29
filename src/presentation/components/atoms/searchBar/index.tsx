import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { TextField } from '@radix-ui/themes';
import type { ChangeEvent } from 'react';
import { useCallback } from 'react';
import type { SearchBarProps } from './types';

export function SearchBar(props: SearchBarProps): JSX.Element {
  const { placeholder, value, onTextChange } = props;

  const onInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      if (onTextChange) {
        onTextChange(e.target.value);
      }
    },
    [],
  );

  return (
    <TextField.Root radius="full">
      <TextField.Input
        placeholder={placeholder}
        value={value}
        onChange={onInputChange}
      />
      <TextField.Slot>
        <MagnifyingGlassIcon height="16" width="16" />
      </TextField.Slot>
    </TextField.Root>
  );
}
