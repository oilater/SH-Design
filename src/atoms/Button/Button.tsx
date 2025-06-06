import React from 'react';
import classNames from 'classnames';
import './Button.scss';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  width?: string | number;
  height?: string | number;
  color?: string;
  backgroundColor?: string;
  loading?: boolean;
  'aria-label'?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  type = 'button',
  onClick,
  variant = 'primary',
  size = 'medium',
  width,
  height,
  loading = false,
  disabled = false,
  'aria-label': ariaLabel,
  color,
  backgroundColor,
  ...props
}) => {
  const classes = classNames(
    'button',
    `button--${variant}`,
    `button--${size}`,
    {
      'button--loading': loading
    },
    className,
  );

  const style = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
    color: color,
    backgroundColor: backgroundColor,
    ...props.style
  };

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
      aria-label={ariaLabel}
      style={style}
      {...props}
    >
      <div>
        {loading && <span className="button__loader" aria-hidden="true" />}
        <span className={loading ? 'button__content' : undefined}>{children}</span>
      </div>
    </button>
  );
}; 