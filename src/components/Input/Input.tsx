import { FC, InputHTMLAttributes } from 'react';
import './Input.scss';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
  value?: string;
  onChange: (value: string) => void;
  label?: string;
}

export const Input: FC<InputProps> = ({ onChange, value, label, ...props }) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };
  return (
    <div className="input">
      {label && <label>{label}</label>}
      <input value={value} onChange={handleOnChange} {...props} />
    </div>
  );
};
