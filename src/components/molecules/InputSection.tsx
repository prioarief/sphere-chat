import React from 'react';
import Input from '../atoms/Input';

type InputSectionProps = {
  message: string;
  setMessage(val: string): void;
  sendMessage(): void;
};

const InputSection = ({
  message,
  setMessage,
  sendMessage,
}: InputSectionProps) => {
  return (
    <div className="w-full shadow-lg fixed bottom-0">
      <Input
        placeholder="Type a message"
        value={message}
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
          setMessage(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && message && message !== '') {
            sendMessage();
          }
        }}
      />
    </div>
  );
};

export default InputSection;
