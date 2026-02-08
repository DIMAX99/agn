import { Montserrat } from 'next/font/google';
import { ReactNode } from 'react';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

interface GradientButtonProps {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  className?: string;
}

export default function GradientButton({ children, type = 'button', onClick, className = '' }: GradientButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${montserrat.className} w-full py-4 rounded-sm font-semibold transition-all duration-200 hover:opacity-90 hover:cursor-pointer ${className}`}
      style={{ background: 'var(--gradient)', color: 'black' }}
    >
      {children}
    </button>
  );
}
