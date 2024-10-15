import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  buttonStyle?: string;
  buttonSize?: string;
  to? : string;
}

const STYLES = ['btn--primary', 'btn--outline']
const SIZES = ['btn--medium', 'btn--large']

export const Button: React.FC<ButtonProps> = ({
  children,
  type,
  onClick,
  buttonStyle = STYLES[0],
  buttonSize = SIZES[0],
  to = '#', // Default to '#' if no `to` prop is passed
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

  return (
    <Link to={to} className='btn-mobile'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};

