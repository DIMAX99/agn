import { Montserrat } from 'next/font/google';
import { ReactNode } from 'react';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

interface SocialLoginButtonProps {
  icon: ReactNode;
  children: ReactNode;
  onClick?: () => void;
}

export default function SocialLoginButton({ icon, children, onClick }: SocialLoginButtonProps) {
  return (
    <button 
      onClick={onClick}
      className={`${montserrat.className} w-full flex items-center justify-center gap-3 px-6 py-5 hover:scale-[1.01]
active:scale-[0.98] bg-black text-white rounded-sm font-medium transition-all duration-200 hover:cursor-pointer `}
      style={{ border: '2px solid', borderImage: 'var(--gradient) 1' }}
    >
      {icon}
      {children}
    </button>
  );
}
