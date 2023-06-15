import { ButtonHTMLAttributes, FC, ReactElement } from 'react';
import './Button.scss';

export enum ButtonVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactElement | string;
  variant?: ButtonVariant;
}

export const Button: FC<ButtonProps> = ({ children, variant = ButtonVariant.PRIMARY }) => {
  return <button className={`${'button'} ${variant}`}>{children}</button>;
};
