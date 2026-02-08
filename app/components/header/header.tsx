import Link from 'next/link';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function Header() {
  return (
    <header className={`${montserrat.className} bg-[#121418] text-white`}>
      <div className="container mx-auto px-6 py-4">
        <div className="bg-[#0d0d0f] border border-gray-800 rounded-full shadow-lg shadow-gray-900/50 px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="shrink-0 flex-1">
              <Link href="/" className="text-2xl font-extrabold tracking-tight text-primary">
                Razor
              </Link>
            </div>

            {/* Navigation Links - Centered */}
            <nav className="hidden md:flex items-center space-x-8 flex-1 justify-center">
              <Link 
                href="/products" 
                className="text-gray-150 hover:text-white transition-colors duration-200"
              >
                Products
              </Link>
              <Link 
                href="/blog" 
                className="text-gray-150 hover:text-white transition-colors duration-200"
              >
                Blog
              </Link>
              <Link 
                href="/pricing" 
                className="text-gray-150 hover:text-white transition-colors duration-200"
              >
                Pricing
              </Link>
            </nav>

            {/* Login/Signup Button */}
            <div className="shrink-0 flex-1 flex justify-end">
              <Link 
                href="/login"
                className="px-6 py-2 rounded-full font-medium transition-all duration-200"
                style={{ background: 'var(--gradient-45)', color: 'black' }}
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}