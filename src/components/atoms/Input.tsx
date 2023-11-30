import { ChangeEventHandler, KeyboardEventHandler } from 'react';

type InputProps = {
  value: string;
  onChange: ChangeEventHandler;
  onKeyDown: KeyboardEventHandler;
  className?: string;
  autoFocus?: boolean;
  type?: 'text' | 'file' | 'email';
  placeholder: string;
};

const Input = ({
  value,
  onChange,
  onKeyDown,
  type,
  placeholder,
  className,
  autoFocus
}: InputProps) => {
  return (
    <input
      autoFocus={autoFocus || true}
      type={type || 'text'}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onKeyDown={onKeyDown}
      className={className || 'w-full border-0 drop-shadow-md p-2 rounded'}
    />
  );
};

export default Input;
