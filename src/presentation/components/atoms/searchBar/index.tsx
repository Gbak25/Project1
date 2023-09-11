import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { TextField } from '@radix-ui/themes';
import type { ChangeEvent } from 'react';
import { useCallback } from 'react';
import type { SearchBarProps } from './types';

export function SearchBar(props: SearchBarProps): JSX.Element {
  const { placeholder, value, onSubmit, onTextChange } = props;

  const onInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      if (onTextChange) {
        onTextChange(e.target.value);
      }
    },
    [],
  );

  const onIconClick = (): void => {
    if (onSubmit && value) {
      onSubmit(value);
    }
  };

  const handleKeyDown = (e: any): void => {
    if (e.key === 'Enter' && onSubmit && value) {
      onSubmit(value);
    }
  };

  return (
    <TextField.Root radius="full" style={{ minWidth: 300 }}>
      <TextField.Input
        placeholder={placeholder}
        value={value}
        onChange={onInputChange}
        onKeyDown={handleKeyDown}
      />
      <TextField.Slot>
        <MagnifyingGlassIcon height="16" width="16" onClick={onIconClick} />
      </TextField.Slot>
    </TextField.Root>
  );
}
