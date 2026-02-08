import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

interface RadioOption {
  value: string;
  label: string;
}

interface RadioGroupProps {
  label: string;
  name: string;
  options: RadioOption[];
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  error?: string;
  touched?: boolean;
  required?: boolean;
}

export default function RadioGroup({
  label,
  name,
  options,
  value,
  onChange,
  onBlur,
  error,
  touched,
  required
}: RadioGroupProps) {
  const hasError = touched && error;

  return (
    <div className={montserrat.className}>
      <label className="block text-sm font-medium mb-2 text-gray-300">
        {label}
      </label>
      <div className="flex flex-wrap gap-4">
        {options.map((option) => (
          <label key={option.value} className="flex items-center cursor-pointer">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={(e) => onChange(e.target.value)}
              onBlur={onBlur}
              className="mr-2 accent-primary"
              required={required && value === ''}
            />
            <span className="text-gray-300">{option.label}</span>
          </label>
        ))}
      </div>
      {hasError && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}
