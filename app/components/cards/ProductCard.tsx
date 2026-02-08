'use client';
import Link from 'next/link';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

interface ProductCardProps {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  level: string;
  image?: string;
}

export default function ProductCard({ 
  id, 
  title, 
  description, 
  price, 
  duration, 
  level 
}: ProductCardProps) {
  return (
    <div className={`${montserrat.className} bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-primary transition-all duration-300 group`}>
      {/* Image Placeholder */}
      <div className="w-full h-48 bg-gray-800 flex items-center justify-center">
        <span className="text-gray-600 text-4xl">📚</span>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs px-3 py-1 rounded-full bg-gray-800 text-gray-300">
            {level}
          </span>
          <span className="text-xs px-3 py-1 rounded-full bg-gray-800 text-gray-300">
            {duration}
          </span>
        </div>
        
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">
            {price}
          </span>
          
          <Link 
            href={`/products/${id}`}
            className="px-4 py-2 rounded-md font-medium transition-all duration-200 bg-primary text-black"
            style={{ background: 'var(--primary-color)' }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'var(--primary-hover)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'var(--primary-color)'}
          >
            Enroll Now
          </Link>
        </div>
      </div>
    </div>
  );
}
