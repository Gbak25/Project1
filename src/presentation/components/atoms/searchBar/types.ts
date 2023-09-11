export type SearchBarProps = {
  value?: string;
  placeholder?: string;
  onTextChange?: (value: string) => void;
  onSubmit?: (value: string) => void;
};
