'use client';

import { useState } from 'react';
import { Eye, EyeClosed } from 'lucide-react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

interface PasswordInputProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  error?: string;
  touched?: boolean;
  placeholder?: string;
  required?: boolean;
}

export default function PasswordInput({
  id,
  label,
  value,
  onChange,
  onBlur,
  error,
  touched,
  placeholder,
  required
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const hasError = touched && error;

  return (
    <div className={montserrat.className}>
      <label htmlFor={id} className="block text-sm font-medium mb-2 text-gray-300">
        {label}
      </label>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          className={`w-full px-4 py-3 pr-12 bg-gray-900 border rounded-md focus:outline-none transition-colors text-white ${
            hasError
              ? 'border-red-500 focus:border-red-500'
              : 'border-gray-800 focus:border-primary'
          }`}
          placeholder={placeholder}
          required={required}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 transition-opacity hover:opacity-80"
          style={{ color: 'var(--primary-color)' }}
        >
          {showPassword ? (
            <EyeClosed className="w-5 h-5" />
          ) : (
            <Eye className="w-5 h-5" />
          )}
        </button>
      </div>
      {hasError && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}
