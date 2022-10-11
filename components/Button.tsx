import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className="px-4 py-2 rounded bg-blue-600 font-semibold hover:bg-blue-700 active:bg-blue-800 disabled:bg-neutral-600 disabled:cursor-not-allowed transition ease-in-out"
      {...props}
    >
      {children}
    </button>
  );
}
