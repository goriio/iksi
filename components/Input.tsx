import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ ...props }: InputProps) {
  return (
    <input className="px-4 py-2 rounded bg-neutral-700 w-full" {...props} />
  );
}
