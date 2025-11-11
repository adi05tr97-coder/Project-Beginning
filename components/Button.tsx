
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  as?: 'button' | 'span';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  disabled,
  as = 'button',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800 transition-all duration-150 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed';

  const variantStyles = {
    primary: 'text-white bg-indigo-600 hover:bg-indigo-700',
    secondary: 'text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600',
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;
  
  if (as === 'span') {
    return <span className={combinedClassName}>{children}</span>;
  }

  return (
    <button
      className={combinedClassName}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
