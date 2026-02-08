import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

interface TextInputProps {
  id: string;
  label: string;
  type?: 'text' | 'email' | 'date';
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  error?: string;
  touched?: boolean;
  placeholder?: string;
  required?: boolean;
  accentColor?: string;
}

export default function TextInput({
  id,
  label,
  type = 'text',
  value,
  onChange,
  onBlur,
  error,
  touched,
  placeholder,
  required,
  accentColor
}: TextInputProps) {
  const hasError = touched && error;

  return (
    <div className={montserrat.className}>
      <label htmlFor={id} className="block text-sm font-medium mb-2 text-gray-300">
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        className={`w-full px-4 py-3 bg-gray-900 border rounded-md focus:outline-none transition-colors text-white ${
          hasError
            ? 'border-red-500 focus:border-red-500'
            : 'border-gray-800 focus:border-primary'
        }`}
        placeholder={placeholder}
        required={required}
        style={accentColor ? { colorScheme: 'dark', accentColor } : { colorScheme: 'dark' }}
      />
      {hasError && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}
